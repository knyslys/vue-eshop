import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";
import App from "./App.vue";
import router from "./router";
import VueKinesis from "vue-kinesis";
import Navigation from "./components/Navigation.vue";
import TheFooter from "./components/TheFooter.vue";
const app = createApp(App);

app.component("navigation", Navigation);
app.component("the-footer", TheFooter);
app.use(createPinia());
app.use(router);
app.use(VueKinesis);
app.mount("#app");
