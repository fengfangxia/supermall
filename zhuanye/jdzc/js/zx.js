//��ȡ���ύ��ַ
/*$(function () {
  if($('input[name=laiyuan]').val() !== ''){
    $('input[name=laiyuan]').val(window.location.href);
  }
});*/
$(function () {
  for(var i=0; i<$('input[name=laiyuan]').length;i++){
    var value = $('input[name=laiyuan]').eq(i).val();
    if (value == '') {
      $('input[name=laiyuan]').eq(i).val(window.location.href);
    }else {
      $('input[name=laiyuan]').eq(i).val(window.location.href+"?"+value);
    }
}
});

/***
  ɽ���¶������ѧԺ����AI  pc
***/
$(function () {
  window.ydtopenchat=function(param1, param2)
  {
    try{
      //openJesongChatByGroup( 13154, 25408,0,param1&&param1.input_wd);
      openJesongChatByGroup( 13154, 25408);
    }catch(err)
    {
      window.location.href= "http://live.easyliao.com/live/chat.do?c=13154&g=25408";
    }
  };

  $('.telzx').click(function () {
    window.open('http://www.xdfpr.cn/dianhua.html');
    return false;
  });
  //����ͨ����
  $('.zxUrl').click(function () {
    ydtopenchat();
    //var url = window.location.href;
    //window.open('http://live.easyliao.com/live/chat.do?c=13154&g=25408&config=37668&ref='+url,'_blank');
    return false;
  });

  $('.qqUrl').click(function () {
    ydtopenchat();
    //var url = window.location.href;
    //window.open('http://live.easyliao.com/live/chat.do?c=13154&g=25408&config=37668&ref='+url,'_blank');
    return false;
  });
  function zwt(){
    ydtopenchat();
    //var url = window.location.href;
    //window.open('http://live.easyliao.com/live/chat.do?c=13154&g=25408&config=37668&ref='+url,'_blank');
    return false;
  }
});
//����js����
document.writeln("<script type='text/javascript' charset='UTF-8' src='//scripts.easyliao.com/js/easyliao.js'></script>");
//����Ĵ��� ��Ҫ�������Լ���˾�����̨���ɵĴ���
document.writeln("<script type='text/javascript' charset='UTF-8' src='//scripts.easyliao.com/13154/37668.js'></script>");


//�ж��Ƿ�ҹ��   ҹ�䷵��true    ���췵��false
/*function isDaylight(){

  var currdate = new Date();
  var starthours = 7;//��ʼСʱ
  var startmintes = 50;//��ʼ����
  var endhours = 22;//����Сʱ
  var endminutes = 30;//��������

  if( ((currdate.getHours() > starthours)&&(currdate.getHours()< endhours ))
    || ((currdate.getHours()==starthours)&&(currdate.getMinutes()>= startmintes))
    || ((currdate.getHours()==endhours)&&(currdate.getMinutes()< endminutes))
  )
  {
    return false;
  }
  return true;
}

if(!isDaylight()){
  //����ͨjs����
  $(function () {
    //swt
    $('.zxUrl').click(function () {
      LR_HideInvite();
      _hmt.push(['_trackPageview','/swt.html']);
      openZoosUrl('chatwin');
      return false;
    });
    $('.telzx').click(function () {
      LR_HideInvite();
      _hmt.push(['_trackPageview','/swt.html']);
      openZoosUrl('chatwin');
      return false;
    });
    //qq
    $('.qqUrl').click(function () {
      LR_HideInvite();
      _hmt.push(['_trackPageview','/swt.html']);
      openZoosUrl('chatwin');
      return false;
    });
    /!***��ѯ****!/
    function zwt(){
      openZoosUrl('chatwin');
      return false;
    }
  });

  var LrinviteTimeout=99999999;
  var LR_next_invite_seconds=9999999;
  document.writeln("<script type='text/javascript' src='https://pft.zoosnet.net/JS/LsJS.aspx?siteid=PFT70064221&lng=cn'></script>");
}else{
  window.ydtopenchat=function(param1, param2)
  {
    try{
      //openJesongChatByGroup( 13154, 25408,0,param1&&param1.input_wd);
      openJesongChatByGroup( 13154, 25408);
    }catch(err)
    {
      window.location.href= "http://live.easyliao.com/live/chat.do?c=13154&g=25408";
    }
  };
  $(function () {
    $('.telzx').click(function () {
      window.open('http://www.xdfpr.cn/dianhua.html');
      return false;
    });
    //����ͨ����
    $('.zxUrl').click(function () {
      ydtopenchat();
      return false;
    });
    
    $('.qqUrl').click(function () {
      ydtopenchat();
      return false;
    });
    function zwt(){
      ydtopenchat();
      return false;
    }
  });
//����js����
  document.writeln("<script type='text/javascript' charset='UTF-8' src='//scripts.easyliao.com/js/easyliao.js'></script>");
//����Ĵ��� ��Ҫ�������Լ���˾�����̨���ɵĴ���
  document.writeln("<script type='text/javascript' charset='UTF-8' src='//scripts.easyliao.com/13154/37668.js'></script>");
//document.writeln("<script type='text/javascript' charset='UTF-8' src='//scripts.easyliao.com/13154/37668/lazy.js'></script>");
}*/

/***
 ɽ���¶������ѧԺ����AI  pc ����
 ***/



/*��������
document.write("<script src=\"http://e.tk163.com/tkjs.jspx?code=70222949cc0db89ab32c9969754d4758&s=\" type=\"text/javascript\" charset=\"utf-8\"><\/script>");*/
/*�������� ����*/

/*��������� ����ͨ*/
document.writeln("<style>");
document.writeln("  .left-kst{position:fixed;left:0;top:30%;z-index:9999;}.left-kst-con{background:url(\'/images/left-kst.png\') no-repeat center;width:142px;height:122px;padding-top:122px;}.left-kst-tit{font-size:24px;color:#fff;text-align:center;}.left-kst-input{display:block;width:138px;height:30px;line-height:30px;text-align:center;margin:10px auto;border: none;background: #fff;}.left-kst-submit{display:block;width:130px;height:30px;line-height:30px;margin:10px auto;background:#fcff12;color:#737002;cursor:pointer;outline:none;border: none;}.left-kst-close{width:30px;height:30px;border-radius:50%;position:absolute;right:-15px;top:-15px;cursor:pointer;}.left-kst-btn{width:20px;padding:10px 5px;background:#f00;color:#fff;border-radius:5px;cursor:pointer;display:none;}");
document.writeln("</style>");
document.writeln("<div class=\'left-kst\'>");
document.writeln("  <div class=\'left-kst-con\'>");
document.writeln("  <div class=\'left-kst-tit\'>�������</div>");
document.writeln("  <form name=\'f\' id=\'f\' method=\'post\' action=\'http://tel.kuaishang.cn/calld.php\' target=\'aa\'>");
document.writeln("    <input type=\'hidden\' name=\'fromurl\' id=\'call_fromurl\' value=\'\'>");
document.writeln("    <input type=\'hidden\' name=\'sid\' value=\'2016231028\'>");
document.writeln("    <input type=\'hidden\' name=\'did\' value=\'1011775\'>");
document.writeln("    <input name=\'tel\' type=\'text\' id=\'tel\' value=\'\' placeholder=\'���������ĵ绰����\' onfocus=\'javascript:gShopTip(this);if(this.placeholder == \'���������ĵ绰����\')this.placeholder=\'\';\' onblur=\'javascript:ghideShowTip();if(this.placeholder == \'\')this.placeholder=\'���������ĵ绰����\';\' class=\'left-kst-input\'>");
document.writeln("    <input type=\'submit\' name=\'Submit\' value=\'����ͨ��\' class=\'left-kst-submit\'>");
document.writeln("  </form>");
document.writeln("  <iframe name=\'aa\' id=\'aa\' width=\'0\' height=\'0\' frameborder=\'0\'></iframe>");
document.writeln("  <img src=\'http://m.xdfpr.cn/newsimages/close.png\' class=\'left-kst-close\' alt=\'\'>");
document.writeln("  </div>");
document.writeln("  <div class=\'left-kst-btn\'>������ͨ��</div>");
document.writeln("</div>");
$(function () {
  //��������� ����ͨ
  $('.left-kst-btn').on('click',function () {
    $(this).hide(300);
    $(this).prevAll().show(300);
  });
  $('.left-kst-close').on('click',function () {
    $(this).parent().hide(300);
    $('.left-kst-btn').show(300);
  });
  /*�����JS*/
  $(".telinner").mouseenter(function(){
    $(".telinner").stop().animate({"left":"-236px"},100);
  });
  $(".telinner").mouseleave(function(){
    $(".telinner").stop().animate({"left":"0"},100);
  });
  $('.backtopbtn').click(function(){
    $("html,body").stop().animate({scrollTop:"0"});
  });
});

/*����ͨ��
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  //console.log(scrollTop);
  if(scrollTop > 0){
    $('.dingbutupian img').css({'position':'fixed','left':0,'top':0,'z-index':99});
  }
  else {
    $('.dingbutupian img').css({'position':'relative'});
  }
});
*/

//  PC����
document.writeln("<style>");
document.writeln(".popup{width:410px;height:440px;padding:30px 340px 30px 30px;background: #fff url(\"/images/kefu/popup.jpg\") no-repeat center right;border-radius:10px;position:fixed;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);box-shadow: 0 0 10px #000;z-index:999999;display:none;}.popup_close{width:22px;height:22px;line-height:18px;text-align:center;font-size:24px;background:rgba(255,255,255,.8);border-radius:100%;transform:rotate(-45deg);transition:all .35s;cursor:pointer;overflow:hidden;position:absolute;top:5px;right:5px;}.popup_close:hover{transform:rotate(315deg);}.popup > strong{display:block;font-size:24px;margin-bottom:15px;}.popup > p{font-size:18px;margin-bottom:15px;}.popup .popup_radio{font-size:0;}.popup .popup_radio li{display:inline-block;width:110px;line-height:28px;border-radius:5px;background:#eee;border:1px solid #eee;text-align:center;font-size:16px;margin-right:15px;margin-bottom:15px;cursor:pointer;transition:1s;vertical-align:top;}.popup .popup_radio li.on{background:linear-gradient(to right bottom,#f63737 40%,#ff7327);border-radius:5px;border:solid 1px #ee5400;color:#fff;position:relative;overflow:hidden;}.popup .popup_radio li.on::before{content:'';width:15px;height:15px;background:url('/images/kefu/g.png') no-repeat center/100%;position:absolute;bottom:0;right:0;}.popup span,.cred{color:#f63f32;}.popup font{color:#f63c34;}.popup .popup_input{width:150px;height:28px;border-radius:5px;background:#eee;text-indent:10px;margin:15px 15px 15px 0;}.popup_submit{width:160px;height:40px;border-radius:50px;background:linear-gradient(120deg,#f74431 30%,#ffa500);color:#fff;font-size:16px;margin-right:15px;margin-top:15px;cursor:pointer;}.popup_btn{width:160px;height:40px;border-radius:50px;background:#2bb3fa;color:#fff;font-size:16px;margin-top:15px;cursor:pointer;}");
document.writeln("</style>");
document.write("<div class=\"popup\">\n" +
  "  <div class=\"popup_close\">+</div>\n" +
  "  <strong>ɽ���¶��������߼����˲�<br>\n" +
  "  ��ѧ�ࡢ�����ҵ����ȱ�����</strong>\n" +
  "  <p>��ѧ�࣬�Ļ�����+ְҵ���ܣ�</p>\n" +
  "  <ul class=\"popup_radio\">\n" +
  "    <li>ְ�̸߿���</li>\n" +
  "    <li>������ѧ��</li>\n" +
  "  </ul>\n" +
  "  <p>У����ࣺ</p>\n" +
  "  <ul class=\"popup_radio\">\n" +
  "    <li>�в�רҵ</li>\n" +
  "    <li>����רҵ</li>\n" +
  "    <li>����רҵ</li>\n" +
  "    <li>�Ƶ����רҵ</li>\n" +
  "    <li class=\"cred\">����רҵ+</li>\n" +
  "  </ul>\n" +
  "  <form name=\"from\" accept-charset=\"utf-8\" class=\"bm1 wrap\" action=\"/plus/diy_register.php\" method=\"post\" enctype=\"multipart/form-data\">\n" +
  "    <input name=\"laiyuan\" type=\"hidden\" value=\"pctanchuang\">\n" +
  "    ��д�ֻ��ţ�����<span>����ѧ����Ϣ��</span><br>\n" +
  "    <input type=\"text\" name=\"name\" placeholder=\"����\" onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='����'\" class=\"popup_input\">\n" +
  "    <input type=\"text\" name=\"dianhua\" placeholder=\"�绰\" onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='�绰'\" class=\"popup_input\"><br>\n" +
  "    ��������ԤԼ������<font>�߶���ѧ��+��ѧ�����</font><br>\n" +
  "    <input type=\"submit\" name=\"submit\" value=\"������ѧ�����\" class=\"popup_submit\">\n" +
  "    <button class=\"zxUrl popup_btn\">��ѯרҵѧ��</button>\n" +
  "  </form>\n" +
  "</div>");
$(function () {
  $('.popup_radio li').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
  });
  setTimeout(function () {
    $('.popup').fadeIn();
  },8000);
  $('.popup_close').click(function () {
    $('.popup').fadeOut();
    setTimeout(function () {
      $('.popup').fadeIn();
    },15000);
  });
});



