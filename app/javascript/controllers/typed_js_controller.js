import { Controller } from "@hotwired/stimulus"
// Don't forget to import the NPM package
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["I build things for the web.", "I am a full-stack developer.", "I am a rubyist.", "I am a web developer."],
      typeSpeed: 50,
      loop: true,
    });
  }
}
