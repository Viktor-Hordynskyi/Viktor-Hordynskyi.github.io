$(document).ready(function() {
  $('.flower__element.large').hover(function() {
    let className = $(this).data('class');
    
    $('.flower__element').addClass('disabled');

    $(this).each(function() {
      let blockText = $(this).text();
      $('.flower__middle h2').html(blockText);

      $(this).removeClass('disabled');
      $(this).addClass('active');
      $('.flower__container').find("[data-class='" + className + "']").addClass('active');
      $('.flower__container').find("[data-class='" + className + "']").removeClass('disabled');
    })
    
  }, function() {
    let centerText = $('.flower__middle h2').data('text');

    $('.flower__element').removeClass('disabled');
    $(this).removeClass('active');
    $('.flower__middle h2').html(centerText);
  })
  
})