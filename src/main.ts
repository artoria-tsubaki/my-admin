import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons-vue";

// i18n
import I18n from "@/languages/index";

const app = createApp(App);

for (const [key, component] of Object.entries(Icons)) {
  app.component(key, component);
}

app.use(ElementPlus).use(I18n).mount("#app");
