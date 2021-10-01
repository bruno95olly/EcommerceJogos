let eventClick = false;

function fun(){
  var menuBurguer = document.getElementById('menuBurguer');
  var btn1 = document.getElementById('block1');
  var btn2 = document.getElementById('block2');
  var btn3 = document.getElementById('block3');
  var genero = document.getElementById('generos');

  if (eventClick) {
    eventClick=!eventClick;


    btn1.style.transform = "rotate(0deg)";
    btn2.style.transform = "rotate(0deg)";
    btn3.style.transform = "rotate(0deg)";
    btn3.style.marginLeft = "20px";

    contentMenu.style.width = "0px";
    contentMenu.style.height = "0px";

    contentMenu.style.animation = "menuAnimationI 2s"

    genero.style.opacity = "0";

  }
  else{
    eventClick=!eventClick;


    btn1.style.transform = "rotate(40deg)";
    btn2.style.transform = "rotate(-40deg)";
    btn3.style.transform = "rotate(40deg)";
    btn3.style.marginLeft = "25px";

    contentMenu.style.width = "300px";
    contentMenu.style.height = "240px";

    contentMenu.style.animation = "menuAnimationF 2s"
    genero.style.opacity = "1"



  }
}
