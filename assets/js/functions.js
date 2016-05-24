$(function() {
  smoothScrool(800);
  workBelt();

});

function smoothScrool (duration){
  $('a[href^="#"]').on('click', function(event){
    var target=$($(this).attr('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}

function workBelt() {
  $('.thumb-unit').click(function () {
    $('.work-belt').css('left', '-100%');
    $('.work-container').show();
  });

  $('.work-return, .work-return-bottom').click(function () {
    $('.work-belt').css('left', '0%');
    $('.work-container').hide();
  });
}
