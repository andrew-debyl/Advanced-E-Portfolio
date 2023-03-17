let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;

function contact(event) {
  event.preventDefault(); //prevents the page from refreshing

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  loading.classList += " modal__overlay--visible";

  emailjs.sendForm(
    "service_95l02nc",
    "template_r8d5py8",
    event.target,
    "eG8Yfl0tAexQRzzN_"
  ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
  }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert("The email service is temporarily unavaliable. Please contact me directly on: andrewdebyl@hotmail.com")
  })
}


function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }

    isModalOpen = true
    
    document.body.classList += " modal--open"
}


function toggleContrast(){
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList +=  " dark-theme"   // adding/removing this class in the html code on click, thats why you need a space, because it have to be a space after the class already there
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}


function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")  //get all the 'shapes' tags in an array
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (i=0; i<shapes.length; i++){
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1;

        shapes[i].style.transform = `translate(${x * boolInt}px , ${y * boolInt}px)` //not apastropies
    }
}