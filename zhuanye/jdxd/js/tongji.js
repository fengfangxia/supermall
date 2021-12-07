//bdtj
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?48a79bcf6049ad894ef98cbc17afec96";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
//百度原生代码
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2eb5b6330bf22c4baec8e9c974a0c3ff";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


/*铂金分析
window._pt_lt = new Date().getTime();
window._pt_sp_2 = [];
_pt_sp_2.push('setAccount,70239d41');
var _protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
(function() {
  var atag = document.createElement('script'); atag.type = 'text/javascript'; atag.async = true;
  atag.src = _protocol + 'js.ptengine.cn/70239d41.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(atag, s);
})();*/



//360
(function(b,a,e,h,f,c,g,s){b[h]=b[h]||function(){(b[h].c=b[h].c||[]).push(arguments)};
b[h].s=!!c;g=a.getElementsByTagName(e)[0];s=a.createElement(e);
s.src="//s.union.360.cn/"+f+".js";s.defer=!0;s.async=!0;g.parentNode.insertBefore(s,g)
})(window,document,"script","_qha",67283,false);





//获取日期
var date = new Date();
var y = date.getFullYear(); //年
var m = date.getMonth()+1;  //月
var d = date.getDate();     //日
var w = date.getDay();      //星期
var h = date.getHours();    //时
var min = date.getMinutes();//分
var s = date.getSeconds();  //秒
var mytime = date.toLocaleTimeString();//获取当前时间 例：上午8:50:35
var mytime2 = date.toLocaleString();//获取日期与时间 例：2021/2/20上午8:50:35
var season = '';
if(m<4){season = '春季'}
else if (m<7){season = '夏季'}
else if (m<10){season = '秋季'}
else {season = '冬季'}



let topGG = document.createElement("center");
topGG.innerHTML = "<a href='javascript:void(0)' class='zxUrl' target='_blank'><img src='/images/index-img/top_30zn.jpg' style='display:block; width:100%;'></a>";
document.documentElement.appendChild(topGG);




//易观
(function (c) {
  window.AnalysysAgent = window.AnalysysAgent || {}
  var a = window.AnalysysAgent || {}
  var ans = ['identify', 'alias', 'reset', 'track', 'profileSet', 'profileSetOnce', 'profileIncrement', 'profileAppend', 'profileUnset', 'profileDelete', 'registerSuperProperty', 'registerSuperProperties', 'unRegisterSuperProperty', 'clearSuperProperties', 'getSuperProperty', 'getSuperProperties', 'pageView', 'getDistinctId']
  a['config'] = c
  a['param'] = []
  function factory (b) {
      return function () {
          a['param'].push([b, arguments])
          return window.AnalysysAgent
      }
  }
  for (var i = 0; i < ans.length; i++) {
      a[ans[i]] = factory(ans[i])
  }

  AnalysysAgent.registerSuperProperty("$url", window.location.href);
	
  if (c.name) {
      window[c.name] = a
  }
   var date = new Date();
    var time = new String(date.getFullYear()) + new String(date.getMonth() + 1) + new String(date.getDate());

    var d = document,
        c = d.createElement('script'),
        n = d.getElementsByTagName('script')[0];
    c.type = 'text/javascript';
    c.async = true;
    c.id = 'ARK_SDK';
    //首先您需要下载SDk，替换其中的地址为您本地目录绝对路径或者相对路径，直接写成绝对地址也行
    c.src = 'http://www.xdfpr.cn/public/js/yiguan/AnalysysAgent_JS_SDK.min.js' + '?v=' + time; //JS SDK存放地址
    n.parentNode.insertBefore(c, n);


})({
  appkey: "ac7f0255710f2746", //APPKEY
  uploadURL: 'https://ubaxhjycloud.analysysdata.com',
  visitorConfigURL: 'https://ubaxhjycloud.analysysdata.com',
    //开启Debug模式，上线时请设置0或删除代码
  debugMode: 0,
  //热图
  autoHeatmap:true,
 //深度线
    autoWebstay: true,	
})


var yiguan_host = window.location.host //获取域名
var yiguan_url = window.location.href //获取详细url
var yiguan_title = document.title //获取页面title
var yiguan_http = window.location.protocol //获取协议

//按钮点击
function yiguan_btn_click(btn_name, desc) {
    //事件埋点
    AnalysysAgent.track("btn_click", {
        '$title': yiguan_title,
        '$url': yiguan_http + "//" + yiguan_host,
        '$url_domain': yiguan_url,
        'btn_name': btn_name, //按钮名称
        'desc': desc, //按钮描述
    });
    console.log("btn_click 事件上传成功");
}

//运营位点击
function yiguan_resource_click(resource_url, resource_name, resource_display_type, major_id, resource_location, major_name, resource_module, rank, resource_id) {
    AnalysysAgent.track("resource_click", {
        '$title': yiguan_title,
        '$url': yiguan_http + "//" + yiguan_host,
        'resource_display_type': resource_display_type, //运营位展现类型
        'major_id': major_id, //专业ID
        'resource_location': resource_location, //运营位位置
        'major_name': major_name, //专业名称
        'resource_module': resource_module, //运营位模块
        'rank': rank, //位置排序
        'resource_id': resource_id, //运营位ID
        'resource_url': resource_url, //跳转链接
        'resource_name': resource_name, //运营位名称
    });
    console.log("resource_click 事件上传成功");
}

//顶部拨打电话
function yiguan_tel_click_top() {
    AnalysysAgent.track("tel_click_top");
    console.log("tel_click_top 事件上传成功");
}

//首页专业点击
function yiguan_zy_click_homepage() {
    AnalysysAgent.track("zy_click_homepage");
    console.log("zy_click_homepage 事件上传成功");
}

//咨询事件
function yiguan_syxdf_zixun() {
    AnalysysAgent.track("syxdf_zixun");
    console.log("syxdf_zixun 事件上传成功");
}

//页面关闭
function yiguan_page_close(pagestaytime) {
    if (typeof pagestaytime === 'number' && !isNaN(pagestaytime)) {
        AnalysysAgent.track("page_close", {
            '$title': yiguan_title,
            '$url': yiguan_http + "//" + yiguan_host,
            '$url_domain': yiguan_url,
            'pagestaytime': pagestaytime //页面停留时间
        });
        console.log("page_close 事件上传成功");
    } else {
        console.log("page_close 事件pagestaytime必须为数字");
    }
}

//浏览教师详情页
function yiguan_view_teacher_detail(teacher_id, teacher_name, position) {
    AnalysysAgent.track("view_teacher_detail", {
        'teacher_id': teacher_id, //教师ID
        'teacher_name': teacher_name, //教师姓名
        'position': position, //职称
    });
    console.log("view_teacher_detail 事件上传成功");
}

//浏览专业详情页
function yiguan_view_major_detail(major_id, major_name, major_first_category, major_second_category) {
    AnalysysAgent.track("view_major_detail", {
        'major_id': major_id, //专业ID
        'major_name': major_name, //专业名称
        'major_first_category': major_first_category, //专业一级分类
        'major_second_category': major_second_category, //专业二级分类
    });
    console.log("view_major_detail 事件上传成功");
}

//咨询
function yiguan_contact(btn_name, type) {
    //事件埋点
    AnalysysAgent.track("contact", {
        '$title': yiguan_title,
        '$url': yiguan_http + "//" + yiguan_host,
        '$url_domain': yiguan_url,
        'btn_name': btn_name, //发起咨询的按钮名称
        'type': type, //咨询类型
    });
    console.log("contact 事件上传成功");
}

//表单提交
function yiguan_submit_form(phone, reason, major_id, major_name, name, is_success) {
    //事件埋点
    AnalysysAgent.track("submit_form", {
        'phone': phone, //电话
        'reason': reason, //失败原因
        'major_id': major_id, //专业ID
        'major_name': major_name, //专业名称
        'name': name, //姓名
        'is_success': is_success, //提交请求是否成功
    });
    console.log("submit_form 事件上传成功");
}