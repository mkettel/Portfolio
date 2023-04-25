import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="blob"
export default class extends Controller {
  connect() {
    const blob = document.getElementById("blob");
    window.onpointermove = event => {
      const { clientX, clientY } = event;

      blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 3000, fill: "forwards" });
    }
  }
}
