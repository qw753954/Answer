$(function () {
  // $("p").text("The DOM is now loaded and can be manipulated.");

  $("#reply").click(function () {
    $(".reply").addClass('active');
  });

  $('#replyCancel').click(function () {
    $(".reply").removeClass('active');
  })

  $('.fontEdit').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('active');
  })

  $('#expand').click(function (event) {
    event.preventDefault();
    $(this).find('i').toggleClass('active');
    $('.expand').slideToggle();
  })

});