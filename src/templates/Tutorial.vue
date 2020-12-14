<template>
  <Layout>
    <h1 v-text="$page.tutorial.title" />
    <article v-html="$page.tutorial.content" />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  tutorial(id: $id) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.tutorial.title,
    };
  },
};
</script>
