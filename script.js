const login=document.getElementById("login");
const signin=document.getElementById("signin");

function login1(){
   login.style.display='block';
   signin.style.display='none';
}
function closelogin(){
  login.style.display='none';
  signin.style.display='none';
}
function signin1(){
   signin.style.display='block';
   login.style.display='none';
}

function bckcng(){
   var bckdiv=document.getElementById("bdy");
   var images = ['images/nature.jpg', 'images/food1.jpg', 'images/personal.jpg','images/tech.jpg','images/tag1.jpg'];
    var indx=0;
   function changeimg(){
     bckdiv.style.backgroundImage='url('+images[indx]+')';
     indx=(indx+1)%images.length;
   }
   setInterval(changeimg,5000);
   changeimg();
}
window.onload= bckcng;

