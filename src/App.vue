<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { useI18n } from "vue-i18n";
const i18n = useI18n();

const title = import.meta.env.VITE_APP_TITLE;
const env = import.meta.env.VITE_USER_NODE_ENV;

const switchLanguage = () => {
  i18n.locale.value = i18n.locale.value === "zh" ? "en" : "zh";
};
</script>

<template>
  <h2 class="title">{{ title }} --- {{ env }}</h2>
  <h3>{{ $t("home.welcome") }}</h3>
  <el-button type="primary" @click="switchLanguage"
    ><el-icon><Search /></el-icon>Switch</el-button
  >
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style lang="scss" scoped>
.title {
  font-size: $primary-text-size;
}
.logo {
  height: 6em;
  padding: 1.5em;
  transition: filter 300ms;
  will-change: filter;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  &.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}
</style>
