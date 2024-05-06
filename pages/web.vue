<template>
  <section>
    <HeaderPrimary :title="title" :subTitle="subTitle" />
    <DigitalIdeas />
    <!-- <CaseStudy/> -->
    <CallToAction
      :header="header"
      :subHeader="subHeader"
      :buttonName="buttonName"
    />
  </section>
</template>

<script>
import HeaderPrimary from "~/components/HeaderPrimary";
import DigitalIdeas from "~/components/WebDev/DigitalIdeas";
// import CaseStudy from "~/components/CaseStudy";
import CallToAction from "~/components/CallToAction";

export default {
  components: {
    HeaderPrimary, 
    DigitalIdeas,
    CallToAction,
    // CaseStudy
  },
  data() {
    return {
      title: `Web Development <br> Services`,
      subTitle:
        "Use ReformedTech's creative community to get your perfect <br> web site at a price that fits your budget",
        header: "Looking for a Custom Web Design / Development?",
      subHeader: "We will turn your ideas to viable product",
      buttonName: "Get a quote now",
    };
  },
  head({ $seo }) {
    return $seo({
      title: "Web Design & Development | ReformedTech",
      description: "ReformedTech is a software development company with a creative team of designers and developers that are here to make your website exceptional."
    });
  }
};
</script>