<template>
  <header>
    <h1 v-text="$static.metadata.siteName" />
    <nav>
      <g-link to="/">Home</g-link>
      <details>
        <summary>Tutorials</summary>
        <g-link
          v-for="{ node: tutorial } in $static.tutorials.edges"
          :key="tutorial.id"
          :to="tutorial.path"
        >
          {{ tutorial.title }}
        </g-link>
      </details>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
  tutorials: allTutorial {
    edges {
      node {
        path
        title
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
header {
  nav {
    display: flex;
    flex-direction: column;

    details {
      $detailsOffset: 1rem;
      position: relative;
      left: $detailsOffset;

      summary {
        position: relative;
        right: $detailsOffset;
        cursor: pointer;
      }

      a {
        display: block;
      }
    }
  }
}
</style>
