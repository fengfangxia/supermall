//bdtj
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?48a79bcf6049ad894ef98cbc17afec96";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
//�ٶ�ԭ������
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2eb5b6330bf22c4baec8e9c974a0c3ff";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


/*�������
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





//��ȡ����
var date = new Date();
var y = date.getFullYear(); //��
var m = date.getMonth()+1;  //��
var d = date.getDate();     //��
var w = date.getDay();      //����
var h = date.getHours();    //ʱ
var min = date.getMinutes();//��
var s = date.getSeconds();  //��
var mytime = date.toLocaleTimeString();//��ȡ��ǰʱ�� ��������8:50:35
var mytime2 = date.toLocaleString();//��ȡ������ʱ�� ����2021/2/20����8:50:35
var season = '';
if(m<4){season = '����'}
else if (m<7){season = '�ļ�'}
else if (m<10){season = '�＾'}
else {season = '����'}



let topGG = document.createElement("center");
topGG.innerHTML = "<a href='javascript:void(0)' class='zxUrl' target='_blank'><img src='/images/index-img/top_30zn.jpg' style='display:block; width:100%;'></a>";
document.documentElement.appendChild(topGG);




//�׹�
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
    //��������Ҫ����SDk���滻���еĵ�ַΪ������Ŀ¼����·���������·����ֱ��д�ɾ��Ե�ַҲ��
    c.src = 'http://www.xdfpr.cn/public/js/yiguan/AnalysysAgent_JS_SDK.min.js' + '?v=' + time; //JS SDK��ŵ�ַ
    n.parentNode.insertBefore(c, n);


})({
  appkey: "ac7f0255710f2746", //APPKEY
  uploadURL: 'https://ubaxhjycloud.analysysdata.com',
  visitorConfigURL: 'https://ubaxhjycloud.analysysdata.com',
    //����Debugģʽ������ʱ������0��ɾ������
  debugMode: 0,
  //��ͼ
  autoHeatmap:true,
 //�����
    autoWebstay: true,	
})


var yiguan_host = window.location.host //��ȡ����
var yiguan_url = window.location.href //��ȡ��ϸurl
var yiguan_title = document.title //��ȡҳ��title
var yiguan_http = window.location.protocol //��ȡЭ��

//��ť���
function yiguan_btn_click(btn_name, desc) {
    //�¼����
    AnalysysAgent.track("btn_click", {
        '$title': yiguan_title,
        '$url': yiguan_http + "//" + yiguan_host,
        '$url_domain': yiguan_url,
        'btn_name': btn_name, //��ť����
        'desc': desc, //��ť����
    });
    console.log("btn_click �¼��ϴ��ɹ�");
}

//��Ӫλ���
function yiguan_resource_click(resource_url, resource_name, resource_display_type, major_id, resource_location, major_name, resource_module, rank, resource_id) {
    AnalysysAgent.track("resource_click", {
        '$title': yiguan_title,
        '$url': yiguan_http + "//" + yiguan_host,
        'resource_display_type': resource_display_type, //��Ӫλչ������
        'major_id': major_id, //רҵID
        'resource_location': resource_location, //��Ӫλλ��
        'major_name': major_name, //רҵ����
        'resource_module': resource_module, //��Ӫλģ��
        'rank': rank, //λ������
        'resource_id': resource_id, //��ӪλID
        'resource_url': resource_url, //��ת����
        'resource_name': resource_name, //��Ӫλ����
    });
    console.log("resource_click �¼��ϴ��ɹ�");
}

//��������绰
function yiguan_tel_click_top() {
    AnalysysAgent.track("tel_click_top");
    console.log("tel_click_top �¼��ϴ��ɹ�");
}

//��ҳרҵ���
function yiguan_zy_click_homepage() {
    AnalysysAgent.track("zy_click_homepage");
    console.log("zy_click_homepage �¼��ϴ��ɹ�");
}

//��ѯ�¼�
function yiguan_syxdf_zixun() {
    AnalysysAgent.track("syxdf_zixun");
    console.log("syxdf_zixun �¼��ϴ��ɹ�");
}

//ҳ��ر�
function yiguan_page_close(pagestaytime) {
    if (typeof pagestaytime === 'number' && !isNaN(pagestaytime)) {
        AnalysysAgent.track("page_close", {
            '$title': yiguan_title,
            '$url': yiguan_http + "//" + yiguan_host,
            '$url_domain': yiguan_url,
            'pagestaytime': pagestaytime //ҳ��ͣ��ʱ��
        });
        console.log("page_close �¼��ϴ��ɹ�");
    } else {
        console.log("page_close �¼�pagestaytime����Ϊ����");
    }
}

//�����ʦ����ҳ
function yiguan_view_teacher_detail(teacher_id, teacher_name, position) {
    AnalysysAgent.track("view_teacher_detail", {
        'teacher_id': teacher_id, //��ʦID
        'teacher_name': teacher_name, //��ʦ����
        'position': position, //ְ��
    });
    console.log("view_teacher_detail �¼��ϴ��ɹ�");
}

//���רҵ����ҳ
function yiguan_view_major_detail(major_id, major_name, major_first_category, major_second_category) {
    AnalysysAgent.track("view_major_detail", {
        'major_id': major_id, //רҵID
        'major_name': major_name, //רҵ����
        'major_first_category': major_first_category, //רҵһ������
        'major_second_category': major_second_category, //רҵ��������
    });
    console.log("view_major_detail �¼��ϴ��ɹ�");
}

//��ѯ
function yiguan_contact(btn_name, type) {
    //�¼����
    AnalysysAgent.track("contact", {
        '$title': yiguan_title,
        '$url': yiguan_http + "//" + yiguan_host,
        '$url_domain': yiguan_url,
        'btn_name': btn_name, //������ѯ�İ�ť����
        'type': type, //��ѯ����
    });
    console.log("contact �¼��ϴ��ɹ�");
}

//���ύ
function yiguan_submit_form(phone, reason, major_id, major_name, name, is_success) {
    //�¼����
    AnalysysAgent.track("submit_form", {
        'phone': phone, //�绰
        'reason': reason, //ʧ��ԭ��
        'major_id': major_id, //רҵID
        'major_name': major_name, //רҵ����
        'name': name, //����
        'is_success': is_success, //�ύ�����Ƿ�ɹ�
    });
    console.log("submit_form �¼��ϴ��ɹ�");
}