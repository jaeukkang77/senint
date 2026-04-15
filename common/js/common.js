jQuery(document).ready(function(e) {

  // header 상단고정
  $(window).scroll(function() {
    if ($(window).scrollTop() < 100) {
      $("header").removeClass('h-show');
    } else {
      $("header").addClass('h-show');
    }
  });

  // header 마우스오버시 submenu
  $("header").on('mouseenter focusin', function() {
    $(".gnb-bg").addClass("on");
    $(".gnb-bg.on").stop().slideDown('fast');
    $(".submenu").stop().slideDown('fast');
  });
  $("#header").on('mouseleave', function() {
    $(".gnb-bg").removeClass("on");
    $(".gnb-bg").stop().slideUp('fast');
    $(".submenu").stop().slideUp('fast');
  });
  //   $("header").on('mouseenter focusin', function() {
  //   $(".gnb-bg").slideDown(300);
  //   $(".submenu").slideDown(300);
  // });
  // $("#header").on('mouseleave', function() {
  //   $(".gnb-bg").slideUp(300);
  //   $(".submenu").slideUp(300);
  // });

  // main 제품솔루션 slide
  $('.tabset-section').hide();
  $('.tabset-section').first().show();
  $(".nav-item").click(function() {
    var val = $(this).attr('data-tab-target');
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
    $(".tabset-section").each(function() {
      if ($(this).hasClass(val)) {
        $(this).fadeIn(800);
      } else {
        $(this).hide();
      }
    });
  });

  // sub tab
  $(".sub .tab-cont").hide();
  $(".sub .tab-cont:first").show();

  $("ul.tabs li").click(function() {
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab-cont").hide()
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn()
  });

});

$(function() {
  topScroll();
});

//상단으로 이동
function topScroll() {
  var goTop = $('.top-scroll');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
      goTop.show();
    } else {
      goTop.hide();
    }
  });
  goTop.on('click', function() {
    $('html,body').animate({
      'scrollTop': '0px'
      // }, 500, 'easeOutCubic');
    },400);
  });
}
