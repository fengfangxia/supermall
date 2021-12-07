//百度统计
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?cd1416e0b737620b9a39bd3dc6cbba38";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();


function formValidation(name, iphone) {
    var tcname = $(name).val().replace(/\*/g, " ").replace(/&/g, " ").replace(/`/g, " ").replace(/#/g, " ").replace(/'/g, " ").replace(/~/g, " ").replace(/;/g, " ").replace(/,/g, " ").replace(/\?/g, " ").replace(/</g, " ").replace(/>/g, " ").replace(/\(/g, " ").replace(/\)/g, " ").replace(/@/g, " ").replace(/=/g, " ").replace(/;/g, " ").replace(/\+/g, " ").replace(/%/g, " ").replace(/$/g, " ").replace(/^/g, " ").replace(/!/g, " ").replace(/\//g, " ").replace(/\、/g, " ").replace(/\"/g, " ").replace(/\:/g, " ").replace(/\|/g, " ").replace(/\{/g, " ").replace(/\}/g, " ").replace(/\[/g, " ").replace(/\]/g, " ").replace(/\\/g, " ").trim();
    if (tcname == "") {
        alert("姓名不能为空！");
        $(name).focus();
        return false;
    }
    if (tcname.length > 5) {
        alert("输入姓名长度不能过长！");
        $(name).focus();
        return false;
    }

    if ($(iphone).val() == "") {
        alert("手机号不能为空！");
        $(iphone).focus();
        return false;
    }
    var reg_Mobile = /^(13|14|15|18|17)[0-9]\d{8}$/;
    if ($(iphone).val().length != 11) {
        alert("手机号必须11位！");
        $(iphone).focus();
        return false;
    }
    if (!reg_Mobile.test($(iphone).val())) {
        alert("手机号格式不正确！");
        $(iphone).focus();
        return false;
    }
    if (isNaN($(iphone).val())) {
        alert("手机号必须是数字！");
        $(iphone).focus();
        return false;
    }
    return true;
}

//表单验证
function check() {
    return formValidation("#uname", "#mycall");
}

//底部表单
function dcheck() {
    return formValidation("#username", "#phone");
}


function checktc() {
    return formValidation("#tcname", "#tcmycall");
}

//导航选项卡
;
(function() {
    var lis = document.querySelectorAll('.select .left li');
    lis.forEach(function(v, k) {
        v.addEventListener('mouseover', function() {
            // 对本身class进行处理
            var lis = document.querySelectorAll('.select .left li');
            for (var i = 0; i < lis.length; i++) {
                console.dir(lis[i]);
                lis[i].classList.remove('cur')
            }
            v.classList.add('cur');

            // 对应的内容进行处理
            var clis = document.querySelectorAll('.select .right li')
            for (var i = 0; i < clis.length; i++) {
                clis[i].classList.remove('cur')
            }
            // 根据当前的元素的下标去获取对应的元素对象
            clis[k].classList.add('cur');
            // console.log(clis[k]);

        })
    })
}())


// document.writeln("    <script type=\"text/javascript\" src=\"/style/sdk/index.js\"></script>");
// document.writeln("    <script type=\"text/javascript\" src=\"/style/sdk/console.js\"></script>");
// // 易观sdk
// (function(c) {
//     window.AnalysysAgent = window.AnalysysAgent || {}
//     var a = window.AnalysysAgent || {}
//     var ans = ['identify', 'alias', 'reset', 'track', 'profileSet', 'profileSetOnce', 'profileIncrement', 'profileAppend', 'profileUnset', 'profileDelete', 'registerSuperProperty', 'registerSuperProperties', 'unRegisterSuperProperty', 'clearSuperProperties', 'getSuperProperty', 'getSuperProperties', 'pageView', 'getDistinctId']
//     a['config'] = c
//     a['param'] = []

//     function factory(b) {
//         return function() {
//             a['param'].push([b, arguments])
//             return window.AnalysysAgent
//         }
//     }
//     for (var i = 0; i < ans.length; i++) {
//         a[ans[i]] = factory(ans[i])
//     }
//     if (c.name) {
//         window[c.name] = a
//     }
// })({
//     appkey: "ac7f0255710f2746", //APPKEY
//     debugMode: 0,
//     uploadURL: 'https://ubaxhjycloud.analysysdata.com',
//     visitorConfigURL: 'https://ubaxhjycloud.analysysdata.com',
//     /**如无自定义配置，则与uploadURL相同**/
//     autoHeatmap: true
// })
// document.writeln("    <script type=\"text/javascript\" src=\"/style/sdk/AnalysysAgent_PageViewStayTime.min.js\"></script>");
// document.writeln("    <script type=\"text/javascript\" src=\"/style/sdk/AnalysysAgent_JS_SDK.min.js\"></script>");