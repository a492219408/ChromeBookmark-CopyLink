# Chrome书签 - 复制链接到剪切板
## 1. 介绍
这是一个Chrome书签，带有定制URL参数功能，带有半自动迭代功能，用于复制当前页面的链接到剪切板。
可用于去除冗长的参数，例如：
```text
例子1：
原链接为：
https://example.com/?utm_source=example&utm_medium=example&utm_campaign=example&utm_content=example&utm_term=example
链接中没有必要参数，或者链接中使用了路径参数，直接复制的话链接太过冗长，不方便分享。
设置好该脚本后，可一键复制处理好的链接：https://example.com/

例子2：
原链接为：
https://example.com/?utm_source=example&utm_medium=example&utm_campaign=example&utm_content=example&utm_term=example
链接中只有utm_source和utm_campaign参数是必要的，其他参数都不需要。
设置好该脚本后，可一键复制处理好的链接：https://example.com/?utm_source=example&utm_campaign=example
```

## 2. 使用方法
复制项目中的copyLink.bookmark.js中的代码，新建一个书签，将代码粘贴到书签的URL中，点击保存即可。

copyLink.js为带注释的源代码，供查阅和方便修改。
copyLink.min.js为压缩后的代码。
templateB64为base64编码后的模板。
encode.html为生成templateB64.txt的工具，copyLink.min.js转换为base64编码后的模板。
