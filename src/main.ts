// Composables
import { createApp } from "vue";
import "./style.css";

// Components
import App from "./App.vue";

// Plugins
import { registerPlugins } from "./plugins";

const app = createApp(App);
registerPlugins(app);
app.mount("#app");
