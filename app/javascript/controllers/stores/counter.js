import { createStore } from "stimulus-store";

export const counterStore = createStore({name: 'counterStore', initialValue: 0, type: Number});
