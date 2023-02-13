import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="image"
export default class extends Controller {
  connect() {
    console.log("howdy");

  }
}
