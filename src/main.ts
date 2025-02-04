import { createApp } from "vue";
import { createPinia } from "pinia";
import posthogPlugin from "./plugins/posthog.js"; //import the plugin.

import App from "./App.vue";
import router from "./router";
import "./index.css";

const app = createApp(App);

app.use(createPinia());
app.use(posthogPlugin);
app.use(router);

app.mount("#app");
