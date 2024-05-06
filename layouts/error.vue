<template>
  <section class="section-404">
    <main class="section-404__content">
      <article class="section-404__content-body">
        <b-img src="@/assets/images/404/man.svg" fluid loading="lazy"></b-img>
        <h2>404! Page not found</h2>
        <p>We’re sorry the page you’re looking for seems lost in the space</p>
        <b-button @click="$router.push('/')">Back to home</b-button>
      </article>
    </main>
  </section>
</template>

<script>
export default {
  layout: "empty",
  components: {},
  data() {
    return {};
  },
};
</script>