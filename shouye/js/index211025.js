$(function () {
  //����רҵ�б�
  $('.nav-zy').stop().hover(function () {
    $(this).stop().animate({'height':'560px'});
  },function () {
    $(this).stop().animate({'height':'60px'});
  })
  // �ֲ�
  jQuery(".fullSlide").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    autoPage: true,
    effect: "fold",
    autoPlay: true,
    trigger: "click",
    //mouseOverStop: false,
    interTime: 4000,
    startFun: function () {
      var timer = jQuery(".fullSlide .timer");
      timer.stop(true, true).animate({"width": "0%"}, 0).animate({"width": "100%"}, 4000);
    }
  });

  // ���ȱ���
  jQuery(".zyright").slide({mainCell: ".bd ul", autoPlay: true, effect: "topMarquee", vis: 17, interTime: 50});
  //tabs��ǩ�л�����
  //����л�
  function tabsC(tabTit, on, tabCon) {
    $(tabTit).children(':first').addClass(on);
    $(tabCon).children(':first').show().siblings().hide();
    $(tabTit).children().click(function () {
      $(this).addClass(on).siblings().removeClass(on);
      var index = $(tabTit).children().index(this);
      $(tabCon).children().eq(index).stop().show().siblings().hide();
    });
  }
  //��ʦ
  tabsC('.ms-title', 'on', '.ms-con');
  //רҵ ��ѧ��/��ҵ��
  tabsC('.zytabt', 'on', '.zytabc');

  //�����л�
  function tabs(tabTit, on, tabCon) {
    $(tabTit).children(':first').addClass(on);
    $(tabCon).children(':first').show().siblings().hide();
    $(tabTit).children().hover(function () {
      $(this).addClass(on).siblings().removeClass(on);
      var index = $(tabTit).children().index(this);
      $(tabCon).children().eq(index).stop().show().siblings().hide();
    });
  }
  //������Ŀ
  tabs('.news-title', 'on', '.news-con');
  //������Ŀ
  tabs('.xyhd-title', 'on', '.xyhd-con');
  //�����б�
  tabs('.xyhd-right', 'on', '.xyhd-middle');
  //��Ʒ��Ŀ
  tabs('.zp-title', 'on', '.zp-con')
//רҵ ��ѧ��/��ҵ��
  //tabs('.zytabt', 'on', '.zytabc');
  //������λ������

//���ͼƬ�ֲ�
  var imgH = $('.pictop img').height();
  $('.pictop').height(imgH);
  // jQuery(".pictop").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"top",autoPlay:true});
  var pictop = new Swiper('.pictop', {
    direction: 'vertical',
    slidesPerView : 1,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
  });

  var banji = new Swiper('.banji', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
  });

  var zsjh = new Swiper('.zsjh', {
    direction: 'vertical',
    slidesPerView : 5,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
  });

  var imgH = $('.picscroll img').height();
  $('.picscroll').height(imgH);
  var picscroll = new Swiper('.picscroll', {
    direction: 'vertical',
    slidesPerView : 1,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
  });

/*  var mySwiper = new Swiper('.rqhj_lunbo', {
    autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    slidesPerView : 4,
    slidesPerGroup : 1,   
    spaceBetween : 10,
    loop:true
  });*/

  //���ֲ�
  jQuery(".picScroll-top").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    autoPage: true,
    effect: "topLoop",
    autoPlay: true,
    vis: 3,
    trigger: "click",
    //loop: true
  });

  //��ʦ�ַ���
  /*$('.mas_list').hide().eq(0).show();
  $('.mas_list').find('li:first').width('750').find('img').css({'margin-left': '0'});
  $('.mas_list > li').hover(
    function () {
      $(this).stop().animate({'width': '750'}, 500).siblings().stop().animate({'width': '150'}, 500);
      $(this).find('img:first').stop().animate({'margin-left': '0'});
      $(this).siblings().find('img:first').stop().animate({'margin-left': '-80'});
    }
  );*/
//������λ
  jQuery(".picMarquee-left").slide({
    mainCell: ".bd",
    autoPlay: true,
    effect: "leftMarquee",
    vis: 10,
    interTime: 30,
    trigger: "click"
  });

  //�����
  /*for (var i = 0; i < $('.zs-num').length; i++) {
    var num = parseInt(Math.random() * 10) + 60;
    $('.zs-num').eq(i).html(num);
  }

  var nowDate = new Date();
  var y = nowDate.getFullYear();
  var m = nowDate.getMonth()+1;
  var d = nowDate.getDate();
  console.log(d);
  if(d-1>0) {
    for(i=0; i<$('.zs-num').length; i++){
      var num1 = $('.zs-num').eq(i).html();
      var num = num1 - ((d-1)*3);
      if (num<=0) {
        $('.zs-num').eq(i).html(num+8);
      } else {
        $('.zs-num').eq(i).html(num);
      }
    }
  }*/

  //ҳ���Ƽ�ר��
  $(".footer-tj-li-con .bd ul").append(
    "<li style='background:url(/images/index/tj-hot1.jpg) no-repeat center;'><a target='_blank' href='javascript:void(0);' class='zxUrl' title='2020���������ƻ�'></a></li>" +
    "<li style='background:url(/images/index/tj-hot2.jpg) no-repeat center;'><a target='_blank' href='/zt/dqcy/' title='���ڴ�ҵ'></a></li>" +
    "<li style='background:url(/images/index/tj-hot3.jpg) no-repeat center;'><a target='_blank' href='/zt/jt_czs/' title='������'></a></li>"
  );
  jQuery(".footer-tj-li-con").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    autoPage: true,
    effect: "fold",
    autoPlay: true,
    trigger: "click",
    interTime: 4000,
  });

  $('.ybmleft_bar .close_btn').click(function () {
    $('.ybmleft_bar').toggleClass('ybmleft_bar_small');
  });

  $('.right_bar .close_btn').click(function () {
    $('.right_bar').toggleClass('right_bar_small');
  });


  //ѧ����Ƶ
/*  $('.pl_btn').click(function () {
    $(this).parent().next('.video').fadeIn();
    $('video',this).trigger('play');
  });*/
  $('.xzsp li article').click(function () {
    $('video').trigger('pause');
    $(this).next('.video').fadeIn();
    $(this).next('.video').find('video').trigger('play');
  });
  $('.video').click(function(){
    $('video',this).trigger('pause');
    $(this).fadeOut();
  });
  $('.xzsp_close').click(function(){
    $(this).nextAll('video').trigger('pause');
    $(this).parents('.video').fadeOut();

  });
  $('.videobox').click(function(event){
    event.stopPropagation();
  });

    /*  //����ul.list����
      var listHtml = $('.list_move').html();
      $('.list_move').html(listHtml + listHtml);
      //��ȡli�Ŀ��
      var liHeight = $('.list_move li').outerHeight();
      //��ȡli�ĸ���
      var liLen = $('.list_move li').length;
      //ul.list�Ŀ��Ϊli�Ŀ��*����
      $('.list_move').outerHeight(liHeight * liLen);
      //��ul.list�Ŀ�ȸ�ֵ��listWidth
      var liHeight = $('.list_move').outerHeight();
      var speed = 30;
      //���������ƶ��ĺ���
      function moveLfet() {
          if ($('.list_move').position().top > -(liHeight / 2)) {
              $('.list_move').animate({ "top": $('.list_move').position().top - 1 }, 10);
          }
          else {
              $('.list_move').css('top', '0');
          }
      }

      //��ʱִ��
      timer = setInterval(moveLfet, speed);
      //���������ͣ�ƶ����Ƴ�����
      $('.list_content').hover(function () {
          clearInterval(timer);
      }, function () {
          timer = setInterval(moveLfet, speed);
      });
*/

  //   // JavaScript Document  ѩ��
  // $(function(){
  // 	(function (window, document, undefined) {
  //     // �洢���е�ѩ��
  //     var snows = [];
  //     // ����ļ��ٶ�
  //     var G = 0.01;
  //     var fps = 60;
  //     // �ٶ����ޣ������ٶȹ���
  //     var SPEED_LIMIT_X = 1;
  //     var SPEED_LIMIT_Y = 1;
  //     var W = window.innerWidth;
  //     var H = window.innerHeight;
  //     var tickCount = 150;
  //     var ticker = 0;
  //     var lastTime = Date.now();
  //     var deltaTime = 0;
  //     var canvas = null;
  //     var ctx = null;
  //     var snowImage = null;
  //     window.requestAnimationFrame = (function () {
  //         return window.requestAnimationFrame ||
  //             window.webkitRequestAnimationFrame ||
  //             window.mozRequestAnimationFrame ||
  //             window.oRequestAnimationFrame ||
  //             window.msRequestAnimationFrame ||
  //             function (callback) {
  //                 setTimeout(callback, 1000 / fps);
  //             }
  //     })();
  //     init();
  //     function init() {
  //         createCanvas();
  //         canvas.width = W;
  //         canvas.height = H;
  //         canvas.style.cssText = 'position: fixed; top: 0; left: 0; pointer-events: none;z-index:1001';
  //         document.body.appendChild(canvas);
  //         // С��Ļʱ�ӳ����ѩ��ʱ�䣬������Ļ�ϳ���̫���ѩ��
  //         if (W < 768) {
  //             tickCount = 350;
  //         }
  //         snowImage = new Image();
  //         snowImage.src ='http://www.jsxdf.com/images/x.png';
  //         loop();
  //     }
  //     function loop() {
  //         requestAnimationFrame(loop);
  //         ctx.clearRect(0, 0, W, H);
  //         var now = Date.now();
  //         deltaTime = now - lastTime;
  //         lastTime = now;
  //         ticker += deltaTime;
  //         if (ticker > tickCount) {
  //             snows.push(
  //                 new Snow(Math.random() * W, 0, Math.random() * 4 + 4)
  //             );
  //             ticker %= tickCount;
  //         }
  //         var length = snows.length;
  //         snows.map(function (s, i) {
  //             s.update();
  //             s.draw();
  //             if (s.y >= H) {
  //                 snows.splice(i, 1);
  //             }
  //         });
  //     }
  //     function Snow(x, y, radius) {
  //         this.x = x;
  //         this.y = y;
  //         this.sx = 0;
  //         this.sy = 0;
  //         this.deg = 0;
  //         this.radius = radius;
  //         this.ax = Math.random() < 0.5 ? 0.005 : -0.005;
  //     }
  //     Snow.prototype.update = function () {
  //         var deltaDeg = Math.random() * 0.6 + 0.2;

  //         this.sx += this.ax;
  //         if (this.sx >= SPEED_LIMIT_X || this.sx <= -SPEED_LIMIT_X) {
  //             this.ax *= -1;
  //         }
  //         if (this.sy < SPEED_LIMIT_Y) {
  //             this.sy += G;
  //         }
  //         this.deg += deltaDeg;
  //         this.x += this.sx;
  //         this.y += this.sy;
  //     };
  //     Snow.prototype.draw = function () {
  //         var radius = this.radius;
  //         ctx.save();
  //         ctx.translate(this.x, this.y);
  //         ctx.rotate(this.deg * Math.PI / 180 / 1.1);
  //         ctx.drawImage(snowImage, -radius, -radius, radius * 2, radius * 2);
  //         ctx.restore();
  //     };
  //     function createCanvas() {
  //         canvas = document.createElement('canvas');
  //         ctx = canvas.getContext('2d');
  //     }
  // })(window, document);
  // })


});
$(function (){
  //���������Ƴ�
  $(".youlian-title").mouseover(function (){
    $(".youlian-con").show();
  }).mouseout(function (){
    $(".youlian-con").hide();
  });
  
});