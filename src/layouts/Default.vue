<template>
  <div id="layout">
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
export default {
  components: { Header },
};
</script>

<style lang="scss">
html {
  font-family: "Roboto Mono";
}

html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  padding: 2rem 3rem;
  width: auto;

  main {
    padding: 1rem 0;
  }
}
</style>
