"use strict";function ajax(e){if(window.XMLHttpRequest)var t=new XMLHttpRequest;else t=new ActiveXObject("Microsoft.XMLHTTP");if("get"==e.type||"GET"==e.type)t.open(e.type,e.url+"?"+e.data+"&_="+(new Date).getTime(),!0),t.send(null);else{if("post"!=e.type&&"POST"!=e.type)return void alert("目前只支持get和post请求方式");t.open(e.type,e.url,!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.send(e.data)}t.onreadystatechange=function(){4==t.readyState&&(200==t.status?e.success(t.responseText):e.error(t.status))}}