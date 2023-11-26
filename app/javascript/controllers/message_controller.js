import { Controller } from "@hotwired/stimulus"
import { useStore } from "stimulus-store"
import { counterStore } from "./stores/counter"


export default class extends Controller {
  static stores = [counterStore]
  static targets = ["counter"]

  async connect() {
    useStore(this)
  }

  onCounterStoreUpdate() {
    this.counterTarget.textContent = this.counterStoreValue
  }
}
