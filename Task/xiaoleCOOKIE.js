

//独立COOKIE文件     ck在``里面填写，多账号换行
let xiaoleurlVal= `https://minapp.xqrobot.net/user.php?mod=index&client=minapp&version=2.7&site=yyq&user_openid=ofGEO5P6N1mYZjoOi4lK9NDhjNZw&user_lbs=&city=&u=223027
https://minapp.xqrobot.net/user.php?mod=index&client=minapp&version=2.7&site=yyq&user_openid=ofGEO5FJSZREJe7IFmM361xNmqVM&user_lbs=&city=&u=223027
https://minapp.xqrobot.net/user.php?mod=index&client=minapp&version=2.7&site=yyq&user_openid=&user_lbs=&city=&u=223027`
let xiaoleheaderVal= `{"Accept-Encoding":"gzip,compress,br,deflate","Cookie":"PHPSESSID=0fheju9jntnvusgmel9lhrhmc6","Connection":"keep-alive","Referer":"https://servicewechat.com/wx7d27c26991711f37/127/page-frame.html","Content-Type":"application/json","Host":"minapp.xqrobot.net","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.1(0x1800012a) NetType/4G Language/zh_CN"}
{"Cookie":"PHPSESSID=9eq3em3dg3jdopsovagve8c0h0","Accept":"*/*","Connection":"keep-alive","Referer":"https://servicewechat.com/wx7d27c26991711f37/129/page-frame.html","Content-Type":"application/json","Host":"minapp.xqrobot.net","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 12_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.15(0x17000f31) NetType/WIFI Language/zh_CN","Accept-Encoding":"br, gzip, deflate","Accept-Language":"zh-cn"}
{"Cookie":"PHPSESSID=mjdnbhjgkbjk6kqpt1t3pdk1k0","Accept":"*/*","Connection":"keep-alive","Referer":"https://servicewechat.com/wx7d27c26991711f37/129/page-frame.html","Content-Type":"application/json","Host":"minapp.xqrobot.net","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000237) NetType/WIFI Language/zh_CN","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-cn"}`


let xiaolecookie = {
  xiaoleurlVal: xiaoleurlVal,	
  xiaoleheaderVal: xiaoleheaderVal,  

}

module.exports =  xiaolecookie
  


