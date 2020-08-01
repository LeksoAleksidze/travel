
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

