$(document).ready(function(){
$(".tick").click(function() {
    $(this).siblings().addClass("default-background-color");
    $(this).class(".task").addClass("default-background-color");
})
});
