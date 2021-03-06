
`
🤖 本脚本转换自：https://greasyfork.org/scripts/420763-b站番剧解锁/code/B站番剧解锁.user.js。
😎 转换器 by Peng-YM。TG频道: https://t.me/cool_scripts

🔘 [功能]
哔哩哔哩番剧解锁港澳台大会员

🛠 [配置]
请根据下方描述设置MITM域名和重写。❗️由于脚本是自动生成，可能需要手动调整设置。


[MITM]
hostname=www\.bilibili\.com/bangumi/play/.*, 

🔘 Quantumult X
[rewrite_local]
www\.bilibili\.com/bangumi/play/.* url script-response-body B站番剧解锁.user.js


🔘 Loon
[Script]
http-response www\.bilibili\.com/bangumi/play/.* script-path=B站番剧解锁.user.js, requires-body=true, tag=B站番剧解锁.user.js


🔘 Surge
[Script]
B站番剧解锁.user.js=type=http-response, pattern=www\.bilibili\.com/bangumi/play/.*, script-path=B站番剧解锁.user.js, requires-body=true, max-size=1310720


`
try {
    let body = $response.body;
    if (/<\/html>|<\/body>/.test(body)) {
        body = body.replace('</body>', `<script>
 const result=function(){
function GM_deleteValue(e){return new Promise((t,n)=>{chrome.runtime.sendMessage({key:e,name:"ApiDeleteValue",uuid:_uuid},e=>e?t():n())})}function GM_getValue(e,t){return new Promise(n=>{chrome.runtime.sendMessage({key:e,name:"ApiGetValue",uuid:_uuid},e=>{n(void 0!==e?e:t)})})}function GM_listValues(){return new Promise(e=>{chrome.runtime.sendMessage({name:"ApiListValues",uuid:_uuid},t=>e(t))})}function GM_setValue(e,t){return new Promise((n,r)=>{chrome.runtime.sendMessage({key:e,name:"ApiSetValue",uuid:_uuid,value:t},e=>{void 0!==e?n(e):(console.warn("set value failed:",chrome.runtime.lastError),r())})})}function GM_getResourceUrl(e){return new Promise((t,n)=>{chrome.runtime.sendMessage({name:"ApiGetResourceBlob",resourceName:e,uuid:_uuid},r=>{r?t(URL.createObjectURL(r.blob)):n("No resource named "+e)})})}function GM_notification(e,t,n,r){let o;if("object"==typeof e?(o=e,"function"==typeof t&&(o.ondone=t)):o={title:t,text:e,image:n,onclick:r},"string"!=typeof o.text)throw new Error(_("gm_notif_text_must_be_string"));"string"!=typeof o.title&&(o.title=_("extName")),"string"!=typeof o.image&&(o.image="skin/icon.svg");let i=chrome.runtime.connect({name:"UserScriptNotification"});i.onMessage.addListener(e=>{const t=e.type;"function"==typeof o[t]&&o[t]()}),i.postMessage({details:{title:o.title,text:o.text,image:o.image},name:"create",uuid:_uuid})}function GM_openInTab(e,t){let n;try{n=new URL(e,location.href)}catch(t){throw new Error(_("gm_opentab_bad_URL",e))}chrome.runtime.sendMessage({active:!1===t,name:"ApiOpenInTab",url:n.href,uuid:_uuid})}function GM_setClipboard(e){document.addEventListener("copy",function t(n){document.removeEventListener("copy",t,!0),n.stopImmediatePropagation(),n.preventDefault(),n.clipboardData.setData("text/plain",e)},!0),document.execCommand("copy")}function GM_xmlHttpRequest(e){if(!e)throw new Error(_("xhr_no_details"));if(!e.url)throw new Error(_("xhr_no_url"));let t;try{t=new URL(e.url,location.href)}catch(t){throw new Error(_("xhr_bad_url",e.url,t))}if("http:"!=t.protocol&&"https:"!=t.protocol&&"ftp:"!=t.protocol)throw new Error(_("xhr_bad_url_scheme",e.url));let n=chrome.runtime.connect({name:"UserScriptXhr"});n.onMessage.addListener(function(t){if(t.responseState.responseXML)try{t.responseState.responseXML=(new DOMParser).parseFromString(t.responseState.responseText,"application/xml")}catch(e){console.warn("GM_xhr could not parse XML:",e),t.responseState.responseXML=null}let n=("up"==t.src?e.upload:e)["on"+t.type];n&&n(t.responseState)});let r={};Object.keys(e).forEach(t=>{let n=e[t];r[t]=n,"function"==typeof n&&(r[t]=!0)}),r.upload={},e.upload&&Object.keys(e=>r.upload[e]=!0),r.url=t.href,n.postMessage({details:r,name:"open",uuid:_uuid})}
// ==UserScript==
// @namespace greasyfork
// @name B站番剧解锁
// @version 0.0.6
// @description 哔哩哔哩番剧解锁港澳台大会员
// @include https://www.bilibili.com/bangumi/play/*
// @connect bilibili.com
// @connect hd2a.tk
// @connect 127.0.0.1
// @connect localhost
// @connect self
// @grant GM_cookie
// @grant GM_deleteValue
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_xmlhttpRequest
// @grant unsafeWindow
// @run-at document-start
// ==/UserScript==
!function() {
  const ipod = {}, u = {
    aria2clear() {
      let pod = {
        id: u.uid(),
        method: "aria2.purgeDownloadResult"
      };
      GM_xmlhttpRequest({
        url: ipod.aria2.jsonrpc,
        method: "POST",
        responseType: "json",
        data: JSON.stringify(pod)
      });
    },
    aria2config() {
      let pod = {
        id: u.uid(),
        method: "aria2.changeGlobalOption",
        params: [{
          "allow-overwrite": "false",
          "auto-file-renaming": "false",
          "max-concurrent-downloads": "1"
        }]
      };
      GM_xmlhttpRequest({
        url: ipod.aria2.jsonrpc,
        method: "POST",
        responseType: "json",
        data: JSON.stringify(pod)
      });
    },
    aria2(list) {
      let arr = [], pod = {
        id: u.uid(),
        method: "system.multicall",
        params: []
      };
      list.forEach(t => {
        let p = {}, o = {
          methodName: "aria2.addUri",
          params: []
        };
        Object.keys(t).forEach(k => {
          p[k] = t[k];
        });
        p.split || (p.split = "" + t.url.length);
        t.extype && (p.out = pod.id + t.extype);
        ipod.aria2 && ipod.aria2.token && o.params.push("token:" + ipod.aria2.token);
        o.params.push(t.url);
        o.params.push(p);
        arr.push(o);
      });
      pod.params.push(arr);
      GM_xmlhttpRequest({
        url: ipod.aria2.jsonrpc,
        method: "POST",
        responseType: "json",
        data: JSON.stringify(pod),
        onerror() {
          alert("Aria2\u8fde\u63a5\u5931\u8d25 \u8bf7\u68c0\u6d4bAria2\u662f\u5426\u8fd0\u884c\u548c\u586b\u5199\u7684jsonrpc\u662f\u5426\u6b63\u786e");
        }
      });
    },
    zdom(origin) {
      let e = window.event;
      e.preventDefault();
      e.stopPropagation();
      return origin ? e.target : e.currentTarget;
    },
    zform(str, obj) {
      document.querySelectorAll(str).forEach(t => {
        let s = t.getAttribute("name");
        if (obj.hasOwnProperty(s)) switch (t.getAttribute("type")) {
         case "radio":
          obj[s] == t.value && (t.checked = true);
          break;
         case "checkbox":
          obj[s] && (t.checked = true);
          break;
         default:
          t.value = obj[s];
        }
      });
    },
    load(str, val) {
      let s, host = (str ? str + "." : "") + u.zhost();
      return (s = GM_getValue(host)) ? JSON.parse(s) : val;
    },
    save(str, data) {
      let host = (str ? str + "." : "") + u.zhost();
      GM_setValue(host, JSON.stringify(data));
    },
    serialize(data, k) {
      let arr = [];
      switch (Object.prototype.toString.call(data)) {
       case "[object Array]":
       case "[object Object]":
        Object.keys(data).forEach(t => {
          arr.push(u.serialize(data[t], k ? k + "[" + t + "]" : t));
        });
        return 0 == arr.length ? "" : arr.join("&");
       default:
        return k + "=" + encodeURIComponent("" + data);
      }
    },
    strcut(str, x, y) {
      let a, b, s = "";
      if (str && str.includes(x)) {
        a = str.indexOf(x) + x.length;
        -1 == (b = str.indexOf(y, a)) && (b = str.length);
        s = str.substring(a, b);
      }
      return s;
    },
    str2obj(str) {
      let o = null;
      "[object String]" == Object.prototype.toString.call(str) && str.length && (o = str.includes('"') ? JSON.parse(str) : JSON.parse(str.replace(/'/g, '"')));
      return o;
    },
    sprintf(str) {
      let i, regx, s = "string" == typeof str ? str : "";
      if (s.length) for (i = arguments.length - 1; i > 0; i--) {
        regx = RegExp("%" + i, "ig");
        s = s.replace(regx, arguments[i]);
      }
      return s;
    },
    download(str) {
      if (str) {
        let o = str.startsWith("magnet:") ? {
          url: []
        } : {
          url: [],
          "use-header": "true",
          "min-split-size": "1M",
          split: "8"
        };
        Object.assign(o, ipod.aria2);
        str = str.startsWith("magnet:") ? u.magnet(str) : str.startsWith("http") ? str : str.startsWith("//") ? location.protocol + str : str.startsWith("/") ? location.origin + str : location.origin + "/" + str;
        o.url.push(str);
        u.aria2([o]);
      }
    },
    magnet(str) {
      let i = str.indexOf("&");
      return -1 == i ? str : str.substring(0, i);
    },
    history(str) {
      const origin = history[str];
      return function() {
        let e = new Event(str);
        e.arguments = arguments;
        window.dispatchEvent(e);
        return origin.apply(this, arguments);
      };
    },
    namefix(str) {
      let i, arr = ['"', "*", "//", "\\", ":", "<", ">", "?", "|"];
      for (i = 0; arr.length > i; i++) str = str.replace(arr[i], "");
      return str;
    },
    tpl(str, data) {
      let arr = str.replace(/\s+/g, " ").replace(/\[/g, "\tjstpl").replace(/\]/g, "\t").split("\t");
      return (Array.isArray(data) ? data : [data]).map((t1, idx) => {
        t1.idx = idx + 1;
        return arr.map(t2 => {
          if (t2.startsWith("jstpl")) {
            let s = t2.substring(5);
            t2 = t1.hasOwnProperty(s) ? t1[s] : "[" + s + "]";
          }
          return t2;
        }).join("");
      }).join("");
    },
    jsload(url, name) {
      let dom = document.createElement("script");
      dom.src = u.urlfix(url);
      name && dom.setAttribute("name", name);
      document.head.appendChild(dom);
    },
    usp(str) {
      let o = {}, arr = new URLSearchParams(str.startsWith("?") ? str.substring(1) : str);
      for ([k, v] of arr.entries()) o[k] = v;
      return o;
    },
    zhost() {
      let arr = location.host.split(".");
      while (arr.length > 2) arr.shift();
      return arr.join(".");
    },
    now: () => Math.ceil(Date.now() / 1e3),
    uid: () => Date.now().toString(36).toUpperCase(),
    ajax: obj => new Promise((resolve, reject) => {
      if ("POST" == (obj = Object.assign(obj, {
        responseType: "josn",
        onerror(e) {
          reject(e);
        },
        onload(r) {
          resolve(r);
        }
      })).method) {
        u.vobj(obj.data) && (obj.data = u.serialize(obj.data));
        obj.headers = Object.assign(obj.headers, {
          "content-type": "application/x-www-form-urlencoded; charset=utf-8"
        });
      }
      GM_xmlhttpRequest(obj);
    }),
    rand: max => Math.floor(Math.random() * max),
    urlfix: str => str.startsWith("http") ? str : str.startsWith("//") ? location.protocol + str : str.startsWith("/") ? location.origin + str : location.origin + "/" + str,
    vobj: data => "[object Object]" == Object.prototype.toString.call(data),
    vstr: str => "[object String]" == Object.prototype.toString.call(str)
  };
  function bvinit() {
    let bvi = unsafeWindow.__INITIAL_STATE__;
    if (bvi && bvi.epInfo && bvi.epList) {
      bvi.epInfo.epStatus = 2;
      bvi.epInfo.rights.area_limit = 0;
      bvi.epList.forEach(t => {
        t.badge = "";
        t.epStatus = 2;
        t.rights.area_limit = 0;
      });
    } else !function(name, opts) {
      let value;
      Object.defineProperty(unsafeWindow, name, {
        configurable: true,
        enumerable: true,
        get: () => value,
        set(val) {
          value = opts.zwrite(val);
        }
      });
    }("__INITIAL_STATE__", {
      zwrite(value) {
        if (value && value.epInfo && value.epList) {
          value.epInfo.epStatus = 2;
          value.epInfo.rights.area_limit = 0;
          value.epList.forEach(t => {
            t.badge = "";
            t.epStatus = 2;
            t.rights.area_limit = 0;
          });
          bvi = value;
        }
        return value;
      }
    });
  }
  ipod.host = "https://www.hd2a.tk";
  ipod.now = u.now();
  ipod.zone = u.load("zone", "\u4e2d\u56fd");
  ipod.latest = u.load("latest", 0);
  ipod.buinfo = u.load("buinfo", null);
  ipod.uid = document.cookie.includes("DedeUserID") ? u.strcut(document.cookie, "DedeUserID=", ";") : 0;
  if (ipod.uid && (ipod.now > ipod.latest || ipod.uid != ipod.buinfo.uid)) {
    fetch("https://api.bilibili.com/x/player/v2?cid=215462618&aid=328997408").then(r => r.json()).then(d => {
      if (0 == d.code) {
        ipod.zone = d.data.ip_info.country;
        u.save("zone", ipod.zone);
      }
    });
    GM_cookie.list({}, r => {
      let arr = ["DedeUserID", "DedeUserID__ckMd5", "SESSDATA", "bili_jct", "sid"];
      (arr = r.reduce((d, t) => {
        arr.includes(t.name) && d.push(t.name + "=" + decodeURIComponent(t.value));
        return d;
      }, [])).sort();
      ipod.buinfo = {
        uid: ipod.uid,
        csrf: u.strcut(document.cookie, "bili_jct=", ";"),
        cookie: arr.join(";")
      };
      u.save("buinfo", ipod.buinfo);
      ipod.latest = ipod.now + 3600;
      u.save("latest", ipod.latest);
    });
  }
  unsafeWindow.addEventListener("popstate", bvinit);
  history.pushState = u.history("pushState");
  unsafeWindow.addEventListener("pushState", bvinit);
  history.replaceState = u.history("replaceState");
  unsafeWindow.addEventListener("replaceState", bvinit);
  ipod.task = setInterval(() => {
    let dom = document.querySelector("#app");
    if (dom && !dom.hasAttribute("data-server-rendered")) {
      clearInterval(ipod.task);
      ipod.task = 0;
      document.querySelector("#bvchk") || setTimeout(() => {
        document.querySelector("#toolbar_module").insertAdjacentHTML("afterbegin", '<div style="float:right;margin-right:1em"><i id="bvchk" class="iconfont icon-bili" style="font-size:2em"></i></div>');
        document.querySelector("#bvchk").addEventListener("click", () => {
          let cid = unsafeWindow.__INITIAL_STATE__.epInfo.cid;
          cid && GM_xmlhttpRequest({
            url: "https://www.hd2a.tk/ajax.php?act=bvfix&cid=" + cid,
            method: "GET",
            onload() {
              location.reload();
            }
          });
        });
      }, 3e3);
    }
  }, 3e3);
  bvinit();
  !function() {
    let orixhr = unsafeWindow.XMLHttpRequest, ajax2 = (url, cookie) => {
      let xhr = new orixhr();
      xhr.open("GET", url, false);
      xhr.withCredentials = !!cookie;
      xhr.send();
      return xhr.responseText;
    };
    unsafeWindow.XMLHttpRequest = new Proxy(unsafeWindow.XMLHttpRequest, {
      construct(target) {
        let pod = {};
        return new Proxy(new target(), {
          get(target, prop) {
            if (pod.hasOwnProperty(prop)) return pod[prop];
            let value = target[prop];
            if ("function" == typeof value) {
              let bc = value;
              value = function() {
                if ("open" == prop) {
                  pod.method = arguments[0];
                  pod.url = arguments[1];
                } else if ("send" == prop) if (pod.url.includes("/pgc/player/web/playurl?")) {
                  let d, url = pod.url.startsWith("//") ? location.protocol + pod.url : pod.url;
                  if (0 != (d = JSON.parse(ajax2(url, 1))).code || "MP4" == d.result.type) {
                    url = ipod.host + "/bvlink.php" + url.substring(url.indexOf("?")) + "&anime=1&area=" + (d.message.includes("\u5730\u533a") ? "1" : "0") + "&zone=" + ipod.zone + "&sign=" + btoa(ipod.buinfo.cookie);
                    d = ajax2(url);
                    if (0 == JSON.parse(d).code) {
                      pod.responseText = d;
                      pod.response = JSON.parse(d);
                    }
                  }
                } else if (pod.url.includes("/pgc/view/web/season?")) {
                  let d, url = pod.url.startsWith("//") ? location.protocol + pod.url : pod.url;
                  if (0 != (d = JSON.parse(ajax2(url, 1))).code) {
                    url = ipod.host + "/curl.php?url=" + btoa(url);
                    d = ajax2(url);
                    if (0 == JSON.parse(d).code) {
                      pod.responseText = d;
                      pod.response = JSON.parse(d);
                    }
                  }
                }
                return bc.apply(target, arguments);
              };
            }
            return value;
          },
          set(target, prop, value) {
            target[prop] = value;
            return true;
          }
        });
      }
    });
  }();
}();
}()
</script></body>`);
        console.log("[油猴脚本] B站番剧解锁.user.js 注入成功!");
    }
    $done({body});
} catch (err) {
    console.log("[油猴脚本] B站番剧解锁.user.js 执行失败!\n" + err);
    $done({});
}
