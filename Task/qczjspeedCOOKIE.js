
//独立COOKIE文件     ck在``里面填写，多账号换行
let GetUserInfoheaderVal= `{"Cookie":"app_cityid=440100; app_provinceid=440000; app_deviceid=6eb12b346027a523bec8601aba185c14c350ec18; app_devicename=iPhone; app_key=autospeed_ios; app_platform=iPhone; app_sign=E44DE33CA6030846E7265D860D07178A; app_sysver=14.0.1; app_userid=208651519; app_ver=1.7.1; device_standard=iPhone12,1; pcpopclub=635819e68d66401b9a719e94dda634d40c6fc4ff; sessionlogin=5c8a0ec86f5947a2b0705370829af6d10c6fc4ff; area=440106; ref=0%7C0%7C0%7C0%7C2021-03-09+23%3A44%3A12.316%7C2021-01-07+20%3A21%3A26.146; __ah_uuid_ng=u_208651519; autoid=8f1b3b869f2e5de2ae3849b7b03a91d2; fvlid=1615304649292ydKnJRu1Fv; sessionip=61.140.231.167; v_no=1; visit_info_ad=5B841007-A4EC-4CE7-91C1-AB1DEFFED424||C442AE72-543E-409C-A05A-7DBA078C4C3A||-1||-1||1; sessionid=5B841007-A4EC-4CE7-91C1-AB1DEFFED424%7C%7C2021-01-07+20%3A21%3A26.146%7C%7C0","apisign":"1|6eb12b346027a523bec8601aba185c14c350ec18|autohomebrush|1615734919|B3B550BE7B816220157856937C6757E0","reqid":"6eb12b346027a523bec8601aba185c14c350ec18/1615734920969/804","Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Host":"mobile.app.autohome.com.cn","User-Agent":"iPhone\t14.0.1\tautohome\t1.7.1\tiPhone","Connection":"keep-alive","Accept-Language":"zh-Hans;q=1"}`
let taskbodyVal= `_sign=15398CFDDD4B18C9A52A1F7B5CD99DBC&a=18&auth=635819e68d66401b9a719e94dda634d40c6fc4ff&autohomeua=iPhone%0914.0.1%09autohome%091.7.1%09iPhone&deviceid=6eb12b346027a523bec8601aba185c14c350ec18&model=1&pm=1&timestamp=1615735069&v=1.7.1`
let activitybodyVal= `_sign=AC566EF6C690C8F291ADB59F6B2D4059&a=18&abtest=a&auth=635819e68d66401b9a719e94dda634d40c6fc4ff&autohomeua=iPhone%0914.0.1%09autohome%091.7.1%09iPhone&deviceid=6eb12b346027a523bec8601aba185c14c350ec18&pm=1&svs=1&timestamp=1615735069&v=1.7.1`
let addCoinbodyVal= `_sign=EF9D72782AD84D42DA474ADFCDFD20B9&_timestamp=1615735135&a=18&autohomeua=iPhone%0914.0.1%09autohome%091.7.1%09iPhone&deviceid=6eb12b346027a523bec8601aba185c14c350ec18&moreflag=0&pm=1&source_channel_id=3503&user_id=208651519&v=1.7.1`
let addCoin2bodyVal= `_sign=99D0AFDE2C897EE5D2C32E9014B4278A&_timestamp=1615735254&a=18&autohomeua=iPhone%0914.0.1%09autohome%091.7.1%09iPhone&deviceid=6eb12b346027a523bec8601aba185c14c350ec18&moreflag=1&pm=1&source_channel_id=3503&user_id=208651519&v=1.7.1`


let qczjcookie = {
  GetUserInfoheaderVal: GetUserInfoheaderVal,  
  taskbodyVal: taskbodyVal,
  activitybodyVal: activitybodyVal,
  addCoinbodyVal: addCoinbodyVal,
  addCoin2bodyVal: addCoin2bodyVal,    

}

module.exports =  qczjcookie
  
