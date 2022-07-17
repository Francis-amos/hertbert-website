
const navbar  = document.querySelector('.header .navbar');

const menuButton  = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {

navbar.classList.toggle('open');


});


document.onscroll = () => {
    navbar.classList.remove('open');
    menuButton.classList.remove('rotate');
   if(window.scrollY > 0){
       document.querySelector('.header').classList.add('active');
   }else{
    document.querySelector('.header').classList.remove('active');
   }
}

document.onload = () => {
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
     document.querySelector('.header').classList.remove('active');
    }
 }


 
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function showtab(tabname){

    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}
