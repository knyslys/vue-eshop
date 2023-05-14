import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";
import App from "./App.vue";
import router from "./router";
import VueKinesis from "vue-kinesis";
import Navigation from "./components/Navigation.vue";

const app = createApp(App);

app.component("navigation", Navigation);
app.use(createPinia());
app.use(router);
app.use(VueKinesis);
app.mount("#app");
