<template>
  <section>
    <HeaderPrimary :title="title" :subTitle="subTitle" />
    <TermsOfUse />
  </section>
</template> 

<script>
import HeaderPrimary from "~/components/HeaderPrimary";
import TermsOfUse from "~/components/TermsOfUse";

export default {
  components: {
    HeaderPrimary,
    TermsOfUse,
  },
  data() {
    return {
      title: "Terms of use",
      subTitle:
        "ReformedTech's Terms and Services Agreement",
    };
  },
  head({ $seo }) {
    return $seo({
      title: "Terms of use | ReformedTech",
      description: "Terms of use are the rules, specifications, and requirements for the use of a product or service."
    });
  }
};
</script>