
const header = document.getElementById('scroll-top');
const back = document.querySelector('.back-top');

window.onscroll = function(){
	let scroll = window.scrollY;

     if(scroll >= 300){
     	header.classList.add('active')
     	back.classList.add('active')

     }else{
     	header.classList.remove('active')
     	back.classList.remove('active')

     }
};


const menuhum = document.querySelector('.hum');
const nav = document.querySelector('.mobileNavigation');
const fullContent = document.querySelector('.fullContent');
const noscroll = document.querySelector('.scroll');
menuhum.addEventListener("click", ()=>{
	nav.classList.toggle('change');
	fullContent.classList.toggle('fullhide');
	noscroll.classList.toggle('noscroll');
});


  // let main_menu = $("navbar-menu ul.menu li a ");
  // main_menu.on('click', function() {
  //   main_menu.removeClass("active");
  //   $(this).addClass("active");
  // });


// let x = document.getElementById('login');
// let y = document.getElementById('register');
// let z = document.getElementById('btn');

// function register(){
//   x.style.left = " -400px";
//   y.style.left = " 50px";
//   z.style.left = "130px"
// };
// function login(){
//   x.style.left = " 50px";
//   y.style.left = " 450px";
//   z.style.left = "0px"
// };



// const open = document.getElementById("loginForm");
// function auth(){

// open.style.opacity = "1";
//   x.style.left = " 50px";
//   y.style.left = " 450px";
//   z.style.left = "0px"

// };

// function reg(){

//   x.style.left = " -400px";
//   y.style.left = " 50px";
//   z.style.left = "130px"
// open.style.opacity = "1";
// };


// function closeLogin(){

//   open.style.opacity = "0";
// }


let loginbtn = document.getElementById('login');
let registerbtn = document.getElementById('register');
let btn = document.getElementById('btn');

function register(){
  loginbtn.style.left = " -400px";
  registerbtn.style.left = " 50px";
  btn.style.left = "130px"
};

function login(){
  loginbtn.style.left = " 50px";
  registerbtn.style.left = " 450px";
  btn.style.left = "0px"
};



const open = document.getElementById("loginForm");

function auth(){

  open.style.opacity = "1";
  loginbtn.style.left = " 50px";
  registerbtn.style.left = " 450px";
  btn.style.left = "0px"

};

function reg(){

  loginbtn.style.left = " -400px";
  registerbtn.style.left = " 50px";
  btn.style.left = "130px"
  open.style.opacity = "1";
};


function closeLogin(){

  open.style.opacity = "0";
}