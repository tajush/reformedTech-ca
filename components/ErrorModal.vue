<template>
  <section class="error-modal">
    <i class="fa fa-exclamation-triangle"></i>
    <h4>Error</h4>
    <p class="mb-0">{{ msg }}</p>
  </section>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: "Please fill all required fields",
    },
  },
};
</script>
