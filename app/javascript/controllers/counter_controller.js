import { Controller } from "@hotwired/stimulus"
import { useStore } from "stimulus-store"
import { counterStore } from "./stores/counter"


export default class extends Controller {
  static stores = [counterStore]

  async connect() {
    useStore(this)
  }

  async increment() {
    await this.setCounterStoreValue(this.counterStoreValue + 1)
    console.log(this.counterStoreValue)
  }
}
