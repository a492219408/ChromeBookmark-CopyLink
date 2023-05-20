// javascript: (function () {
// 测试参数
// let jsonObj = {"item.taobao.com": {"id": ""}, "www.bilibili.com": {}};
let jsonObj = {};
const templateB64 = '';

// 初始化规则数据，将两层JSON对象转为Map
let rules = new Map(Object.entries(jsonObj));
rules.forEach((value, key) => {
    rules.set(key, new Map(Object.entries(value)));
});
main();// 启动

function main() {
    // 此变量用于收集匹配状态，false为未匹配，true为匹配
    let status = false;
    // rules存在规则才继续
    if (rules.size > 0) {
        // 遍历rules
        for (let [host, parameters] of rules) {
            // 正则匹配"/顶级域名$/"
            if (host.match(getCurTld() + "$")) {
                // URL参数转Map
                let urlParameterMap = urlParameterToMap(window.location.search);
                // 从URL Map中取出参数，存进parameterMap
                let formatUrl;
                if (parameters.size > 0 && parameters.entries().next().value[0] !== "") {
                    parameters.forEach((value, key) => {
                        parameters.set(key, urlParameterMap.get(key));
                    });
                    formatUrl = window.location.origin + window.location.pathname + "?" + mapToUrlParameter(parameters);
                } else {
                    formatUrl = window.location.origin + window.location.pathname;
                }
                // 如果和剪切板的内容相同，提示是否删除规则
                navigator.clipboard.readText().then((v) => {
                    if (v === formatUrl) {
                        if (confirm("是否删除该网站的复制规则？")) {
                            removeCurrentRule();
                        }
                    }
                }).catch(() => {
                });

                status = true;
                // 复制到剪贴板
                fnCopy(formatUrl);
                break;
            } else {
                status = false;
            }
        }
    }
    // 如果rules中没有匹配的域名，将从用户输入中获取参数名
    if (!status) {
        addRule();
    }
}

// 函数 - 添加匹配规则
function addRule() {
    let parameterMap = new Map();
    let i = 1;
    let urlParameters;
    let msgStr;
    // 判断链接是否有参数，没有则提示是否使用路径参数
    if (window.location.search === "") {
        if (confirm("当前链接没有参数，是否使用路径参数？")) {
            parameterMap.set("", "");
            saveRules(parameterMap);
            return;
        }
    } else {
        urlParameters = mapToMultilineText(urlParameterToMap(window.location.search));
        msgStr = "请输入第" + i + "个参数\n若输入空的参数将使用路径参数\n当前链接的参数列表：\n" + urlParameters;
    }
    // 获取用户输入的参数名，并判断是否输入
    let parameter = prompt(msgStr);
    if (parameter === "") {
        // 用户没有输入参数名，使用路径参数
        parameterMap.set("", "");
    } else if (parameter) {
        // 用户输入了参数名
        parameterMap.set(parameter, "");
        while (parameter) {
            // 生成下一个提示信息，并且去除已经输入过的参数
            let display = urlParameterToMap(window.location.search);
            parameterMap.forEach((value, key) => {
                display.delete(key);
            });
            if (display.size === 0) {
                saveRules(parameterMap);
                return;
            }
            msgStr = "请输入第" + ++i + "个参数\n当前链接的参数列表（已隐藏添加过的参数）：\n" + mapToMultilineText(display);
            parameter = prompt(msgStr);

            if (parameter === "") {
                break;
            } else if (parameter === null) {
                // 用户取消
                return;
            }
            parameterMap.set(parameter, "");
        }
    } else {
        // 用户取消
        return;
    }
    saveRules(parameterMap);
}

// 函数 - 保存匹配规则并生成新的代码
function saveRules(parameterMap) {
    rules.set(window.location.host, parameterMap);
    codeGenerator();
}

// 函数 - 删除当前链接匹配规则
function removeCurrentRule() {
    rules.delete(window.location.host);
    codeGenerator();
}

// 函数 - 获取当前顶级域名
function getCurTld() {
    // 获取当前URL
    let currentURL = window.location.host;
    // 获取当前URL的顶级域名
    let hostArr = currentURL.split(".");
    return hostArr[hostArr.length - 2] + "." + hostArr[hostArr.length - 1];
}

// 函数 - Map转多行文本
function mapToMultilineText(map) {
    let text = "";
    map.forEach((value, key) => {
        value = typeof(value) == "undefined" ? "" : value;
        text += key + ": " + value + "\n";
    });
    return text;
}

// 函数 - URL参数转Map
function urlParameterToMap(urlParameter) {
    if (urlParameter.match("^\\?")) {
        urlParameter = urlParameter.substring(1);
    }
    // "&"分割
    let parameterArr = urlParameter.split("&");
    let urlParameterMap = new Map();
    // "a=b"转Map
    parameterArr.forEach((value) => {
        let parameter = value.split("=");
        urlParameterMap.set(parameter[0], parameter[1]);
    });
    return urlParameterMap;
}

// 函数 - Map转URL参数
function mapToUrlParameter(parameterMap) {
    let urlParameter = "";
    parameterMap.forEach((value, key) => {
        urlParameter += key + "=" + value + "&";
    });
    return urlParameter.substring(0, urlParameter.length - 1);
}

// 函数 - 复制到剪贴板
function fnCopy(copyText) {
    // 打印需要复制的内容
    console.log(copyText);
    navigator.clipboard.writeText(copyText).then(() => {
    }).catch(() => {
        const input = document.createElement("input");
        document.body.appendChild(input);
        input.setAttribute("value", copyText);
        input.select();
        if (document.execCommand("copy", true)) {
            document.execCommand("copy", true);
        }
        document.body.removeChild(input);
    });
}

// 函数 - 代码生成器
function codeGenerator() {
    // 将Map转换为JSON - 需要先将第二层的Map转换为Object
    rules.forEach((value, key) => {
        rules.set(key, Object.fromEntries(value));
    });
    // 将Map转换为JSON
    jsonObj = Object.fromEntries(rules);
    // 将JSON转换为字符串
    let jsonStr = JSON.stringify(jsonObj);

    // 书签JS代码头部和尾部
    let exB64 = ["amF2YXNjcmlwdCUzQSUyMChmdW5jdGlvbiUyMCgpJTIwJTdC", "JTdEKSgpJTNC"];
    let ex = [decodeURIComponent(atob(exB64[0])), decodeURIComponent(atob(exB64[1]))];

    // 解码模板代码
    let template = decodeURIComponent(atob(templateB64));

    // 拼接代码
    let codeOut = ex[0] + template.replace(/(.*?let\sjsonObj=).*?(;.*?const\stemplateB64=').*?('.*)/gs, "$1" + jsonStr + "$2" + templateB64 + "$3") + ex[1];
    fnCopy(codeOut);
    alert("新的代码已写入到剪贴板\n请将其替换到原有代码中\n新的规则将在下次使用时生效\n注意：可能会无法写入剪切板，可在浏览器控制台中查看打印的代码");
}

// })();