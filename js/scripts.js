$(document).ready(function(){
    $('.mail-choice').change(function() {
        if($(this).is(":checked")) {
            $(this).parents().addClass('selected-bg');
      } else {
        $(this).parents().removeClass('selected-bg');
      }
    });
});



//teams. a team has a meber, team name 

function Team(name){
  this.name = name;
  this.members = [];
  this.task = []
}

function Member(){
  memberName
  memberProfPic
  
}

function Task(){
  title 
  description 
  teanName
  memberName 
  this.comment = [];
}

function Comment(){

}



// function Profile(){

// }