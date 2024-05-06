<template>
  <section>
    <HeaderCareerDetails />
    <DetailsBody />
  </section>
</template>

<script>
import HeaderCareerDetails from "~/components/careerDetails/HeaderCareerDetails";
import DetailsBody from "~/components/careerDetails/DetailsBody";

export default {
  name: "CareerDetailsPage",

  components: {
    HeaderCareerDetails,
    DetailsBody,
  },

  data() {
    return {};
  },
};
</script>
