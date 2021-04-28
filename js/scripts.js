$(document).ready(function(){
    $('.mail-choice').change(function() {
        if($(this).is(":checked")) {
            $(this).parents().addClass('selected-bg');
      } else {
        $(this).parents().removeClass('selected-bg');
      }
    });
});
