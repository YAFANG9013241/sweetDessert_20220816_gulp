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

  // --我的最愛--
  $('.tab-sweet-hart').on('click', function (e) {
    //console.log(e); //('.tab-sweet-hart') 
    //console.log(e.delegateTarget); //('.tab-sweet-hart')
    let target = e.delegateTarget;
    $(target).toggleClass('tab-sweet-hart-fav');
  });

  // $('.tab-sweet-hart').on('click', function () {
  //   console.log($(this)); //object
  //   $(this).toggleClass('tab-sweet-hart-fav');
  // });
});