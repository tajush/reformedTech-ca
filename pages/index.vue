<template>
  <section>
    <HeroSection />
    <OurClients />
    <OurService />
    <CountDown />
    <ClientReview />
    <OurAchievement />
    <CallToAction
      :header="header"
      :subHeader="subHeader"
      :buttonName="buttonName"
    />
  </section>
</template>

<script>
import HeroSection from "~/components/Home/HeroSection";
import OurClients from "~/components/OurClients";
import OurService from "~/components/Home/OurService";
import CountDown from "~/components/Home/CountDown";
import ClientReview from "~/components/Home/ClientReview";
import CallToAction from "~/components/CallToAction";
import OurAchievement from "~/components/Home/OurAchievement";

export default {
  components: {
    HeroSection,
    OurClients,
    OurService,
    CountDown,
    ClientReview,
    CallToAction,
    OurAchievement,
  },
  layout: "default",
  data() {
    return {
      header: "Have An Idea ?",
      subHeader: "We will turn your ideas to viable product",
      buttonName: "Contact Us",
    };
  },
  head({ $seo }) {
    return $seo({
      title: "ReformedTech | Offshore Web And Software Development Company",
      description: "ReformedTech provides startups with the chance to hire an amazing team of designers & developers for offshore software and mobile app development services."
    });
  },
};
</script>


