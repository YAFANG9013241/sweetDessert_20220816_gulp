$(function () {


  // let id = $('.tab-sweet-title').data("title");
  // console.log(id);

  // $(document).on("click", 'span', function (e) {
  //   //console.log($(this)); //span object
  //   //console.log(e.target); //span
  //   let title = e.target;
  //   console.log($(title).data('title')); //span data('title')
  //   // console.log(e.delegateTarget); //document
  // });

  // --我的最愛-- 桌機 手機失效
  // $('.tab-sweet-hart').on('click', function (e) {
  //   //console.log(e); //('.tab-sweet-hart') 
  //   //console.log(e.delegateTarget); //('.tab-sweet-hart')
  //   let target = e.delegateTarget;
  //   console.log(target);
  //   $(target).toggleClass('tab-sweet-hart-fav');
  // });

  // --我的最愛--icon 支援手機桌機
  $('.tab-sweet-hart').on({
    touchend: function (e) {
      let target = e.delegateTarget;
      e.preventDefault()
      $(target).toggleClass('tab-sweet-hart-fav')
    },
    click: function (e) {
      let target = e.delegateTarget;
      e.preventDefault()
      $(target).toggleClass('tab-sweet-hart-fav')
    }
  });

  // $('.tab-sweet-hart').click(function () {
  //   console.log($(this).eq(0));
  //   $(this).toggleClass('tab-sweet-hart-fav');
  // });


  // $('.tab-sweet-hart').on('click', function () {
  //   console.log($(this)); //object
  //   $(this).toggleClass('tab-sweet-hart-fav');
  // });

  //select value color
  $('select.custom-select-sweet').on('change', function () {
    let selectOption = $(this).find('option');
    if ($(this).val() != 0) {
      $(this).css('color', '#3f5d45');
      $(selectOption).css('color', '#8da291');
    } else {
      $(this).css('color', '#8da291');
      $(selectOption).css('color', '#8da291').prop('selected', true);
    }
  })

  // $(document).on('change', 'select.custom-select-sweet', function () {
  //   console.log('select');
  //   select_placeholder();
  // });
  // select_placeholder();

  // function select_placeholder() {
  //   $('select.custom-select-sweet  option:selected').each(function () {
  //     $(this).css('color', 'red');
  //     if (select_val) {
  //       $(this).removeClass('select-color');
  //     } else {
  //       $(this).addClass('select-placeholder');
  //     }
  //   });
  // }


});