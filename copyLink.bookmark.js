javascript: (function () {let jsonObj={};const templateB64='bGV0JTIwanNvbk9iaiUzRCU3QiU3RCUzQmNvbnN0JTIwdGVtcGxhdGVCNjQlM0QnJyUzQmxldCUyMHJ1bGVzJTNEbmV3JTIwTWFwKE9iamVjdC5lbnRyaWVzKGpzb25PYmopKSUzQnJ1bGVzLmZvckVhY2goKHZhbHVlJTJDa2V5KSUzRCUzRSU3QnJ1bGVzLnNldChrZXklMkNuZXclMjBNYXAoT2JqZWN0LmVudHJpZXModmFsdWUpKSklN0QpJTNCbWFpbigpJTNCZnVuY3Rpb24lMjBtYWluKCklN0JsZXQlMjBzdGF0dXMlM0RmYWxzZSUzQmlmKHJ1bGVzLnNpemUlM0UwKSU3QmZvcihsZXQlNUJob3N0JTJDcGFyYW1ldGVycyU1RG9mJTIwcnVsZXMpJTdCaWYoaG9zdC5tYXRjaChnZXRDdXJUbGQoKSUyQiUyMiUyNCUyMikpJTdCbGV0JTIwdXJsUGFyYW1ldGVyTWFwJTNEdXJsUGFyYW1ldGVyVG9NYXAod2luZG93LmxvY2F0aW9uLnNlYXJjaCklM0JsZXQlMjBmb3JtYXRVcmwlM0JpZihwYXJhbWV0ZXJzLnNpemUlM0UwJTI2JTI2cGFyYW1ldGVycy5lbnRyaWVzKCkubmV4dCgpLnZhbHVlJTVCMCU1RCElM0QlM0QlMjIlMjIpJTdCcGFyYW1ldGVycy5mb3JFYWNoKCh2YWx1ZSUyQ2tleSklM0QlM0UlN0JwYXJhbWV0ZXJzLnNldChrZXklMkN1cmxQYXJhbWV0ZXJNYXAuZ2V0KGtleSkpJTdEKSUzQmZvcm1hdFVybCUzRHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4lMkJ3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUlMkIlMjIlM0YlMjIlMkJtYXBUb1VybFBhcmFtZXRlcihwYXJhbWV0ZXJzKSU3RGVsc2UlN0Jmb3JtYXRVcmwlM0R3aW5kb3cubG9jYXRpb24ub3JpZ2luJTJCd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lJTdEbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkVGV4dCgpLnRoZW4oKHYpJTNEJTNFJTdCaWYodiUzRCUzRCUzRGZvcm1hdFVybCklN0JpZihjb25maXJtKCUyMiVFNiU5OCVBRiVFNSU5MCVBNiVFNSU4OCVBMCVFOSU5OSVBNCVFOCVBRiVBNSVFNyVCRCU5MSVFNyVBQiU5OSVFNyU5QSU4NCVFNSVBNCU4RCVFNSU4OCVCNiVFOCVBNyU4NCVFNSU4OCU5OSVFRiVCQyU5RiUyMikpJTdCcmVtb3ZlQ3VycmVudFJ1bGUoKSU3RCU3RCU3RCkuY2F0Y2goKCklM0QlM0UlN0IlN0QpJTNCc3RhdHVzJTNEdHJ1ZSUzQmZuQ29weShmb3JtYXRVcmwpJTNCYnJlYWslN0RlbHNlJTdCc3RhdHVzJTNEZmFsc2UlN0QlN0QlN0RpZighc3RhdHVzKSU3QmFkZFJ1bGUoKSU3RCU3RGZ1bmN0aW9uJTIwYWRkUnVsZSgpJTdCbGV0JTIwcGFyYW1ldGVyTWFwJTNEbmV3JTIwTWFwKCklM0JsZXQlMjBpJTNEMSUzQmxldCUyMHVybFBhcmFtZXRlcnMlM0JsZXQlMjBtc2dTdHIlM0JpZih3aW5kb3cubG9jYXRpb24uc2VhcmNoJTNEJTNEJTNEJTIyJTIyKSU3QmlmKGNvbmZpcm0oJTIyJUU1JUJEJTkzJUU1JTg5JThEJUU5JTkzJUJFJUU2JThFJUE1JUU2JUIyJUExJUU2JTlDJTg5JUU1JThGJTgyJUU2JTk1JUIwJUVGJUJDJThDJUU2JTk4JUFGJUU1JTkwJUE2JUU0JUJEJUJGJUU3JTk0JUE4JUU4JUI3JUFGJUU1JUJFJTg0JUU1JThGJTgyJUU2JTk1JUIwJUVGJUJDJTlGJTIyKSklN0JwYXJhbWV0ZXJNYXAuc2V0KCUyMiUyMiUyQyUyMiUyMiklM0JzYXZlUnVsZXMocGFyYW1ldGVyTWFwKSUzQnJldHVybiU3RCU3RGVsc2UlN0J1cmxQYXJhbWV0ZXJzJTNEbWFwVG9NdWx0aWxpbmVUZXh0KHVybFBhcmFtZXRlclRvTWFwKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpKSUzQm1zZ1N0ciUzRCUyMiVFOCVBRiVCNyVFOCVCRSU5MyVFNSU4NSVBNSVFNyVBQyVBQyUyMiUyQmklMkIlMjIlRTQlQjglQUElRTUlOEYlODIlRTYlOTUlQjAlNUNuJUU4JThCJUE1JUU4JUJFJTkzJUU1JTg1JUE1JUU3JUE5JUJBJUU3JTlBJTg0JUU1JThGJTgyJUU2JTk1JUIwJUU1JUIwJTg2JUU0JUJEJUJGJUU3JTk0JUE4JUU4JUI3JUFGJUU1JUJFJTg0JUU1JThGJTgyJUU2JTk1JUIwJTVDbiVFNSVCRCU5MyVFNSU4OSU4RCVFOSU5MyVCRSVFNiU4RSVBNSVFNyU5QSU4NCVFNSU4RiU4MiVFNiU5NSVCMCVFNSU4OCU5NyVFOCVBMSVBOCVFRiVCQyU5QSU1Q24lMjIlMkJ1cmxQYXJhbWV0ZXJzJTdEbGV0JTIwcGFyYW1ldGVyJTNEcHJvbXB0KG1zZ1N0ciklM0JpZihwYXJhbWV0ZXIlM0QlM0QlM0QlMjIlMjIpJTdCcGFyYW1ldGVyTWFwLnNldCglMjIlMjIlMkMlMjIlMjIpJTdEZWxzZSUyMGlmKHBhcmFtZXRlciklN0JwYXJhbWV0ZXJNYXAuc2V0KHBhcmFtZXRlciUyQyUyMiUyMiklM0J3aGlsZShwYXJhbWV0ZXIpJTdCbGV0JTIwZGlzcGxheSUzRHVybFBhcmFtZXRlclRvTWFwKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpJTNCcGFyYW1ldGVyTWFwLmZvckVhY2goKHZhbHVlJTJDa2V5KSUzRCUzRSU3QmRpc3BsYXkuZGVsZXRlKGtleSklN0QpJTNCaWYoZGlzcGxheS5zaXplJTNEJTNEJTNEMCklN0JzYXZlUnVsZXMocGFyYW1ldGVyTWFwKSUzQnJldHVybiU3RG1zZ1N0ciUzRCUyMiVFOCVBRiVCNyVFOCVCRSU5MyVFNSU4NSVBNSVFNyVBQyVBQyUyMiUyQiUyMCUyQiUyQmklMkIlMjIlRTQlQjglQUElRTUlOEYlODIlRTYlOTUlQjAlNUNuJUU1JUJEJTkzJUU1JTg5JThEJUU5JTkzJUJFJUU2JThFJUE1JUU3JTlBJTg0JUU1JThGJTgyJUU2JTk1JUIwJUU1JTg4JTk3JUU4JUExJUE4JUVGJUJDJTg4JUU1JUI3JUIyJUU5JTlBJTkwJUU4JTk3JThGJUU2JUI3JUJCJUU1JThBJUEwJUU4JUJGJTg3JUU3JTlBJTg0JUU1JThGJTgyJUU2JTk1JUIwJUVGJUJDJTg5JUVGJUJDJTlBJTVDbiUyMiUyQm1hcFRvTXVsdGlsaW5lVGV4dChkaXNwbGF5KSUzQnBhcmFtZXRlciUzRHByb21wdChtc2dTdHIpJTNCaWYocGFyYW1ldGVyJTNEJTNEJTNEJTIyJTIyKSU3QmJyZWFrJTdEZWxzZSUyMGlmKHBhcmFtZXRlciUzRCUzRCUzRG51bGwpJTdCcmV0dXJuJTdEcGFyYW1ldGVyTWFwLnNldChwYXJhbWV0ZXIlMkMlMjIlMjIpJTdEJTdEZWxzZSU3QnJldHVybiU3RHNhdmVSdWxlcyhwYXJhbWV0ZXJNYXApJTdEZnVuY3Rpb24lMjBzYXZlUnVsZXMocGFyYW1ldGVyTWFwKSU3QnJ1bGVzLnNldCh3aW5kb3cubG9jYXRpb24uaG9zdCUyQ3BhcmFtZXRlck1hcCklM0Jjb2RlR2VuZXJhdG9yKCklN0RmdW5jdGlvbiUyMHJlbW92ZUN1cnJlbnRSdWxlKCklN0JydWxlcy5kZWxldGUod2luZG93LmxvY2F0aW9uLmhvc3QpJTNCY29kZUdlbmVyYXRvcigpJTdEZnVuY3Rpb24lMjBnZXRDdXJUbGQoKSU3QmxldCUyMGN1cnJlbnRVUkwlM0R3aW5kb3cubG9jYXRpb24uaG9zdCUzQmxldCUyMGhvc3RBcnIlM0RjdXJyZW50VVJMLnNwbGl0KCUyMi4lMjIpJTNCcmV0dXJuJTIwaG9zdEFyciU1Qmhvc3RBcnIubGVuZ3RoLTIlNUQlMkIlMjIuJTIyJTJCaG9zdEFyciU1Qmhvc3RBcnIubGVuZ3RoLTElNUQlN0RmdW5jdGlvbiUyMG1hcFRvTXVsdGlsaW5lVGV4dChtYXApJTdCbGV0JTIwdGV4dCUzRCUyMiUyMiUzQm1hcC5mb3JFYWNoKCh2YWx1ZSUyQ2tleSklM0QlM0UlN0J2YWx1ZSUzRHR5cGVvZih2YWx1ZSklM0QlM0QlMjJ1bmRlZmluZWQlMjIlM0YlMjIlMjIlM0F2YWx1ZSUzQnRleHQlMkIlM0RrZXklMkIlMjIlM0ElMjAlMjIlMkJ2YWx1ZSUyQiUyMiU1Q24lMjIlN0QpJTNCcmV0dXJuJTIwdGV4dCU3RGZ1bmN0aW9uJTIwdXJsUGFyYW1ldGVyVG9NYXAodXJsUGFyYW1ldGVyKSU3QmlmKHVybFBhcmFtZXRlci5tYXRjaCglMjIlNUUlNUMlNUMlM0YlMjIpKSU3QnVybFBhcmFtZXRlciUzRHVybFBhcmFtZXRlci5zdWJzdHJpbmcoMSklN0RsZXQlMjBwYXJhbWV0ZXJBcnIlM0R1cmxQYXJhbWV0ZXIuc3BsaXQoJTIyJTI2JTIyKSUzQmxldCUyMHVybFBhcmFtZXRlck1hcCUzRG5ldyUyME1hcCgpJTNCcGFyYW1ldGVyQXJyLmZvckVhY2goKHZhbHVlKSUzRCUzRSU3QmxldCUyMHBhcmFtZXRlciUzRHZhbHVlLnNwbGl0KCUyMiUzRCUyMiklM0J1cmxQYXJhbWV0ZXJNYXAuc2V0KHBhcmFtZXRlciU1QjAlNUQlMkNwYXJhbWV0ZXIlNUIxJTVEKSU3RCklM0JyZXR1cm4lMjB1cmxQYXJhbWV0ZXJNYXAlN0RmdW5jdGlvbiUyMG1hcFRvVXJsUGFyYW1ldGVyKHBhcmFtZXRlck1hcCklN0JsZXQlMjB1cmxQYXJhbWV0ZXIlM0QlMjIlMjIlM0JwYXJhbWV0ZXJNYXAuZm9yRWFjaCgodmFsdWUlMkNrZXkpJTNEJTNFJTdCdXJsUGFyYW1ldGVyJTJCJTNEa2V5JTJCJTIyJTNEJTIyJTJCdmFsdWUlMkIlMjIlMjYlMjIlN0QpJTNCcmV0dXJuJTIwdXJsUGFyYW1ldGVyLnN1YnN0cmluZygwJTJDdXJsUGFyYW1ldGVyLmxlbmd0aC0xKSU3RGZ1bmN0aW9uJTIwZm5Db3B5KGNvcHlUZXh0KSU3QmNvbnNvbGUubG9nKGNvcHlUZXh0KSUzQm5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcHlUZXh0KS50aGVuKCgpJTNEJTNFJTdCJTdEKS5jYXRjaCgoKSUzRCUzRSU3QmNvbnN0JTIwaW5wdXQlM0Rkb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMmlucHV0JTIyKSUzQmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpJTNCaW5wdXQuc2V0QXR0cmlidXRlKCUyMnZhbHVlJTIyJTJDY29weVRleHQpJTNCaW5wdXQuc2VsZWN0KCklM0JpZihkb2N1bWVudC5leGVjQ29tbWFuZCglMjJjb3B5JTIyJTJDdHJ1ZSkpJTdCZG9jdW1lbnQuZXhlY0NvbW1hbmQoJTIyY29weSUyMiUyQ3RydWUpJTdEZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpbnB1dCklN0QpJTdEZnVuY3Rpb24lMjBjb2RlR2VuZXJhdG9yKCklN0JydWxlcy5mb3JFYWNoKCh2YWx1ZSUyQ2tleSklM0QlM0UlN0JydWxlcy5zZXQoa2V5JTJDT2JqZWN0LmZyb21FbnRyaWVzKHZhbHVlKSklN0QpJTNCanNvbk9iaiUzRE9iamVjdC5mcm9tRW50cmllcyhydWxlcyklM0JsZXQlMjBqc29uU3RyJTNESlNPTi5zdHJpbmdpZnkoanNvbk9iaiklM0JsZXQlMjBleEI2NCUzRCU1QiUyMmFtRjJZWE5qY21sd2RDVXpRU1V5TUNobWRXNWpkR2x2YmlVeU1DZ3BKVEl3SlRkQyUyMiUyQyUyMkpUZEVLU2dwSlROQyUyMiU1RCUzQmxldCUyMGV4JTNEJTVCZGVjb2RlVVJJQ29tcG9uZW50KGF0b2IoZXhCNjQlNUIwJTVEKSklMkNkZWNvZGVVUklDb21wb25lbnQoYXRvYihleEI2NCU1QjElNUQpKSU1RCUzQmxldCUyMHRlbXBsYXRlJTNEZGVjb2RlVVJJQ29tcG9uZW50KGF0b2IodGVtcGxhdGVCNjQpKSUzQmxldCUyMGNvZGVPdXQlM0RleCU1QjAlNUQlMkJ0ZW1wbGF0ZS5yZXBsYWNlKCUyRiguKiUzRmxldCU1Q3Nqc29uT2JqJTNEKS4qJTNGKCUzQi4qJTNGY29uc3QlNUNzdGVtcGxhdGVCNjQlM0QnKS4qJTNGKCcuKiklMkZncyUyQyUyMiUyNDElMjIlMkJqc29uU3RyJTJCJTIyJTI0MiUyMiUyQnRlbXBsYXRlQjY0JTJCJTIyJTI0MyUyMiklMkJleCU1QjElNUQlM0JmbkNvcHkoY29kZU91dCklM0JhbGVydCglMjIlRTYlOTYlQjAlRTclOUElODQlRTQlQkIlQTMlRTclQTAlODElRTUlQjclQjIlRTUlODYlOTklRTUlODUlQTUlRTUlODglQjAlRTUlODklQUElRTglQjQlQjQlRTYlOUQlQkYlNUNuJUU4JUFGJUI3JUU1JUIwJTg2JUU1JTg1JUI2JUU2JTlCJUJGJUU2JThEJUEyJUU1JTg4JUIwJUU1JThFJTlGJUU2JTlDJTg5JUU0JUJCJUEzJUU3JUEwJTgxJUU0JUI4JUFEJTVDbiVFNiU5NiVCMCVFNyU5QSU4NCVFOCVBNyU4NCVFNSU4OCU5OSVFNSVCMCU4NiVFNSU5QyVBOCVFNCVCOCU4QiVFNiVBQyVBMSVFNCVCRCVCRiVFNyU5NCVBOCVFNiU5NyVCNiVFNyU5NCU5RiVFNiU5NSU4OCU1Q24lRTYlQjMlQTglRTYlODQlOEYlRUYlQkMlOUElRTUlOEYlQUYlRTglODMlQkQlRTQlQkMlOUElRTYlOTclQTAlRTYlQjMlOTUlRTUlODYlOTklRTUlODUlQTUlRTUlODklQUElRTUlODglODclRTYlOUQlQkYlRUYlQkMlOEMlRTUlOEYlQUYlRTUlOUMlQTglRTYlQjUlOEYlRTglQTclODglRTUlOTklQTglRTYlOEUlQTclRTUlODglQjYlRTUlOEYlQjAlRTQlQjglQUQlRTYlOUYlQTUlRTclOUMlOEIlRTYlODklOTMlRTUlOEQlQjAlRTclOUElODQlRTQlQkIlQTMlRTclQTAlODElMjIpJTdE';let rules=new Map(Object.entries(jsonObj));rules.forEach((value,key)=>{rules.set(key,new Map(Object.entries(value)))});main();function main(){let status=false;if(rules.size>0){for(let[host,parameters]of rules){if(host.match(getCurTld()+"$")){let urlParameterMap=urlParameterToMap(window.location.search);let formatUrl;if(parameters.size>0&&parameters.entries().next().value[0]!==""){parameters.forEach((value,key)=>{parameters.set(key,urlParameterMap.get(key))});formatUrl=window.location.origin+window.location.pathname+"?"+mapToUrlParameter(parameters)}else{formatUrl=window.location.origin+window.location.pathname}navigator.clipboard.readText().then((v)=>{if(v===formatUrl){if(confirm("是否删除该网站的复制规则？")){removeCurrentRule()}}}).catch(()=>{});status=true;fnCopy(formatUrl);break}else{status=false}}}if(!status){addRule()}}function addRule(){let parameterMap=new Map();let i=1;let urlParameters;let msgStr;if(window.location.search===""){if(confirm("当前链接没有参数，是否使用路径参数？")){parameterMap.set("","");saveRules(parameterMap);return}}else{urlParameters=mapToMultilineText(urlParameterToMap(window.location.search));msgStr="请输入第"+i+"个参数\n若输入空的参数将使用路径参数\n当前链接的参数列表：\n"+urlParameters}let parameter=prompt(msgStr);if(parameter===""){parameterMap.set("","")}else if(parameter){parameterMap.set(parameter,"");while(parameter){let display=urlParameterToMap(window.location.search);parameterMap.forEach((value,key)=>{display.delete(key)});if(display.size===0){saveRules(parameterMap);return}msgStr="请输入第"+ ++i+"个参数\n当前链接的参数列表（已隐藏添加过的参数）：\n"+mapToMultilineText(display);parameter=prompt(msgStr);if(parameter===""){break}else if(parameter===null){return}parameterMap.set(parameter,"")}}else{return}saveRules(parameterMap)}function saveRules(parameterMap){rules.set(window.location.host,parameterMap);codeGenerator()}function removeCurrentRule(){rules.delete(window.location.host);codeGenerator()}function getCurTld(){let currentURL=window.location.host;let hostArr=currentURL.split(".");return hostArr[hostArr.length-2]+"."+hostArr[hostArr.length-1]}function mapToMultilineText(map){let text="";map.forEach((value,key)=>{value=typeof(value)=="undefined"?"":value;text+=key+": "+value+"\n"});return text}function urlParameterToMap(urlParameter){if(urlParameter.match("^\\?")){urlParameter=urlParameter.substring(1)}let parameterArr=urlParameter.split("&");let urlParameterMap=new Map();parameterArr.forEach((value)=>{let parameter=value.split("=");urlParameterMap.set(parameter[0],parameter[1])});return urlParameterMap}function mapToUrlParameter(parameterMap){let urlParameter="";parameterMap.forEach((value,key)=>{urlParameter+=key+"="+value+"&"});return urlParameter.substring(0,urlParameter.length-1)}function fnCopy(copyText){console.log(copyText);navigator.clipboard.writeText(copyText).then(()=>{}).catch(()=>{const input=document.createElement("input");document.body.appendChild(input);input.setAttribute("value",copyText);input.select();if(document.execCommand("copy",true)){document.execCommand("copy",true)}document.body.removeChild(input)})}function codeGenerator(){rules.forEach((value,key)=>{rules.set(key,Object.fromEntries(value))});jsonObj=Object.fromEntries(rules);let jsonStr=JSON.stringify(jsonObj);let exB64=["amF2YXNjcmlwdCUzQSUyMChmdW5jdGlvbiUyMCgpJTIwJTdC","JTdEKSgpJTNC"];let ex=[decodeURIComponent(atob(exB64[0])),decodeURIComponent(atob(exB64[1]))];let template=decodeURIComponent(atob(templateB64));let codeOut=ex[0]+template.replace(/(.*?let\sjsonObj=).*?(;.*?const\stemplateB64=').*?('.*)/gs,"$1"+jsonStr+"$2"+templateB64+"$3")+ex[1];fnCopy(codeOut);alert("新的代码已写入到剪贴板\n请将其替换到原有代码中\n新的规则将在下次使用时生效\n注意：可能会无法写入剪切板，可在浏览器控制台中查看打印的代码")}})();