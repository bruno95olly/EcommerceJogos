const imgContainer = document.querySelectorAll('.img-produto');
const heading = document.querySelectorAll('.heading');
const para = document.querySelectorAll('.para')

setTimeout(()=>{
  imgContainer.forEach((ic)=> ic.classList.remove("loading") )
}, 2000);

