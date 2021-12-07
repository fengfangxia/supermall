/**********20200520  HS 修改统计代码结束*********************/

// HS 20200818  修改引入

$('.x-zxtc-backtop').click(function() {

    $("html,body").stop().animate({

        scrollTop: "0"

    });

});

// ------------------------------------------------------------易聊AI机器人代码引入

//深圳市坪山区新东方烹饪职业培训学校-拆分 pc

// 接入易聊工具，全天  HS 20201031

function swtClick(ms)

    {
        if(!ms){ms='官网-PC站点-在线咨询'}
        var eventInfo = { "btn_name":"在线咨询","type":ms,'$title':document.title,'$url':window.location.href}
		AnalysysAgent.track("contact",eventInfo,callback); 
        openJesongChatByGroup(13119, 25205);
       // console.log(window.location.href+'bbb');
        return false;  /*因为部分事件使用的是  onclick="return swtClick()" 所以返回一个值*/
    }
    
var callback = function() {console.log('数据发送完毕')}    

/**/

document.writeln("<script language=\'javascript\' src=\'//scripts.easyliao.com/js/easyliao.js\'><\/script>");//易聊通用JS

document.writeln("<script type=\'text/javascript\' charset=\'UTF-8\' src=\'//scripts.easyliao.com/13119/37717.js\'><\/script>");//易聊对应ID JS



//易聊接入结束

// ------------------------------------------------------------易聊AI机器人代码引入结束

// 以下代码与咨询工具无关






