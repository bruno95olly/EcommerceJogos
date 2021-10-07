
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  var revealsLeft = document.querySelectorAll('.revealLeft');

  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
  for(var i = 0; i < revealsLeft.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = revealsLeft[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      revealsLeft[i].classList.add('active');
    }
    else{
      revealsLeft[i].classList.remove('active');
    }
  }
}
