<template>
  <section>
    <HeaderPrimary :title="title" :subTitle="subTitle" />
    <HireTeam />
    <OffshoreDevelopment />
    <WorkingProcess />
    <WhyPeopleChoose />
    <!-- <CaseStudy/> -->
    <HireDevelopers />
  </section>
</template> 

<script>
import HeaderPrimary from "~/components/HeaderPrimary";
import HireTeam from "~/components/Offshore/HireTeam";
import OffshoreDevelopment from "~/components/Offshore/OffshoreDevelopment";
import WorkingProcess from "~/components/Offshore/WorkingProcess";
import WhyPeopleChoose from "~/components/Offshore/WhyPeopleChoose";
import HireDevelopers from "~/components/Offshore/HireDevelopers";
// import CaseStudy from "~/components/CaseStudy";

export default {
  components: {
    HeaderPrimary,
    HireTeam,
    OffshoreDevelopment,
    WorkingProcess,
    WhyPeopleChoose,
    HireDevelopers,
    // CaseStudy,
  },
  data() {
    return {
      title: "Offshore Development Company",
      subTitle:
        "We offer comprehensive offshore software development services through our managed dedicated teams. Furthermore, our emphasis is on crafting intricate and customized enterprise applications to meet your needs.",
    };
  },
  head({ $seo }) {
    return $seo({
      title: "Offshore Development Service | ReformedTech",
      description: "ReformedTech\'s vision is to scaling your business through modern technology. Our goal is to provide quality services to our clients at affordable prices."
    });
  }
};
</script>