//Alert Message when you open Home page
 //setTimeout (wakeUpUser, 5000);
        //function wakeUpUser(){
            alert("Welcome to the best Free Movie Website");
//}

//Code for homepage movie sliders

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

//code for login form flip card

    function openRegister(){
      card.style.transform = "rotateY(-180deg)";
    }
  
    function openLogin(){
      card.style.transform = "rotateY(0deg)";
    }
  
  
  