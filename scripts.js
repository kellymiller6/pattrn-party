$(document).ready(function () {

    $('#tab-nav').children('.tab-list-item').first().children('.acc-link').addClass('active')
        .next().addClass('is-open').show();

    $('#tab-nav').on('click', '.acc-link', function() {

      if (!$(this).hasClass('active')) {

        $('#tab-nav .is-open').removeClass('is-open').hide();
        $(this).next().toggleClass('is-open').toggle();

        $('#tab-nav').find('.active').removeClass('active');
        $(this).addClass('active');
      } else {
        $('#tab-nav .is-open').removeClass('is-open').hide();
        $(this).removeClass('active');
      }
   });
});

$('div.menu').on('click', () => {
  $('div.hidden').toggleClass('active')
})
