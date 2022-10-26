import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ "inbetweenText", "briefText", "lifestoryText" ]

  initialize() {
    this.currentSelected = this.briefTextTarget;
  }


  displayBetween() {

    this.hideUnselected()
    this.currentSelected = this.inbetweenTextTarget;
    this.showSelected()


  }
  displayBrief(){
    this.hideUnselected()
    this.currentSelected = this.briefTextTarget;
    this.showSelected()
  }
  displayLife(){
    this.hideUnselected()
    this.currentSelected = this.lifestoryTextTarget;
    this.showSelected()
  }

  hideUnselected() {
    this.currentSelected.classList.add("hidden")

  }
  showSelected(){
    this.currentSelected.classList.remove("hidden")
  }
}
