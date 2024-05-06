<template>
  <section>
    <HeaderPrimary :title="title" :subTitle="subTitle" />
    <PrivacyPolicy />
  </section>
</template> 

<script>
import HeaderPrimary from "~/components/HeaderPrimary";
import PrivacyPolicy from "~/components/PrivacyPolicy";

export default {
  components: {
    HeaderPrimary,
    PrivacyPolicy,
  },
  data() {
    return {
      title: "Privacy Policy",
      subTitle:
        "ReformedTech's Privacy Policy",
    };
  },
  head({ $seo }) {
    return $seo({
      title: "Privacy Policy | ReformedTech",
      description: "We are a team of software engineers, designers, and marketers who are passionate about building sustainable products for your business."
    });
  }
};
</script>