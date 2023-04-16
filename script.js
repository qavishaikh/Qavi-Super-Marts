let searchForm = document.querySelector('.search-form');


document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}




let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

window.onscroll = function() {
    if(document.documentElement.scrollTop > 10) {
        nav.classList. add("sticky");
        scrollBtn.style.display = "block";
    } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}


function check(){
    alert("Thank You For Shopping");
}

function cart1(){
    alert("Add In Cart");
}
function fav(){
    alert("Add In Favourite");
}
function eyeb(){
    alert("Sorry!" +"\n"+ "First Login Then You Can See More...");
}
function star1(){
    alert("Thank You!   For Given One (1) Star On Our Product... ");
}
function star2(){
    alert("Thank You!   For Given Two (2) Star On Our Product... ");
}
function star3(){
    alert("Thank You!   For Given Three (3) Star On Our Product... ");
}
function star4(){
    alert("Thank You!   For Given Four (4) Star On Our Product... ");
}
function star5(){
    alert("Thank You!   For Given Five (5) Star On Our Product... ");
}
function shar(){
    alert("Sorry!" +"\n"+ "First Login Then You Can Share This Image ...");
}
function blo(){
    alert("Ummmy! " + "\n" + "Must Try At Your Home.. ");
}
function ad(){
    alert("This Blog Is Posted By  "+"\n"+"'Qavi Shaikh'  Admin & Owner Of Qavi Super Mart.")
}
function msg(){
    alert("Message Sent SuccessFully!")
}
function num(){
    alert("Feel Free To Contact Our Numbers...")
}
function em(){
    alert("Feel Free To Chat Our Gmails...")
}
function adr(){
    alert("Feel Free To Visit Our Mart...")
}
function rdm(){
    alert("Sorry!" +"\n"+ "First Login Then You Can Read More ...");
}
function av(){
    alert("Home Delivery Only Available In Hyderabad...")
}
function wth(){
    alert("Contact Us On Whatsapp..." +"\n"+"0313-3825456" )
}
function pay(){
    alert("Online Payment Available..." +"\n"+ "Easy Paisa = 0313-3825456" +"\n"+ "Jazz Cash  =  0303-2881435")
}
function getname(){
    var uname = document.getElementsByName("u_name")[0].value;
     document.getElementsByName("u_name")[0].value = "";

}
