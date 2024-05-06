<template>
  <section>
    <CareerHeader />
    <WorkPlay/>
    <PerksWork/>
    <PopularJobs/>
  </section>
</template>

<script>
import CareerHeader from "~/components/Career/CareerHeader";
import WorkPlay from "~/components/Career/WorkPlay";
import PerksWork from "~/components/Career/PerksWork";
import PopularJobs from "~/components/Career/PopularJobs";

export default {
  components: {
    CareerHeader,
    WorkPlay,
    PerksWork,
    PopularJobs,
  },
  head({ $seo }) {
    return $seo({
      title: "Career opportunities | ReformedTech",
      description: "ReformedTech is always ready to welcome talented individuals. Need a platform to unleash your web skills and development talents? We are here for you."
    });
  }
};
</script>