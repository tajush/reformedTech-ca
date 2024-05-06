<template>
  <div>
    <HeaderPrimary :title="title" />
    <ClientQueries />
  </div>
</template>

<script>
import HeaderPrimary from "~/components/HeaderPrimary"
import ClientQueries from "~/components/Home/ClientQueries";

export default {
  components: {
    HeaderPrimary,
    ClientQueries,
  },

  data() {
    return {
      title: `How can we help you?`,
    };
  },
  head({ $seo }) {
    return $seo({
      title: "Got a Question for Us? | ReformedTech",
      description: "ReformedTech is a software development company with a talented web development team that is ready to give you the best experience for your website."
    });
  }
};
</script>