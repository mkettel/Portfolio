import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="scroll"
export default class extends Controller {
  connect() {
    const photo = document.getElementById("photo");
    const aboutPhoto = document.getElementById("about-photo");
    console.log("howdy partner")

    document.addEventListener('scroll',()=>{
      var scroll_position = window.scrollY;
      if(scroll_position < 100){
          photo.style.transform = "rotate(6deg)";
          photo.style.transition = ".7s";
      } else {
          photo.style.transform = "rotate(0deg)";
          // photo.style.transform = "rotate(6deg) translateY(-500px) translateY(5px)";
      }
    });
  }
}
