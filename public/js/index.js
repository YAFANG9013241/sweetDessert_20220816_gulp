$(function () {

  function windowSize() {
    let art = $('.index').find('article');
    //console.log(art);
    let txt = $(art).find('.article-txt');
    //console.log(p);
    if ($(window).width() < 767.98) {
      console.log('sm');
      $(art).addClass('bg-white').removeClass('bg-sweet-green-light');
      $(txt).addClass('bg-sweet-green-light');
    } else {
      console.log('md');
      $(art).addClass('bg-sweet-green-light').removeClass('bg-white');
    }
  };

  // $(window).on('resize', windowSize);
  $(window).on({
    resize: windowSize,
    load: windowSize
  });


});

