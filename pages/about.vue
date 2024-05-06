<template>
  <section>
    <AboutHeader />
    <AboutDescription />
    <AboutFeature />
    <BusinessAdvisory />
    <SkilledPeople />
    <OurEvents />
    <AboutTeam v-if="showTeamPage"/>
  </section>
</template>

<script>
import AboutHeader from "~/components/About/AboutHeader";
import AboutDescription from "~/components/About/AboutDescription";
import AboutFeature from "~/components/About/AboutFeature";
import BusinessAdvisory from "~/components/About/BusinessAdvisory";
import SkilledPeople from "~/components/About/SkilledPeople";
import OurEvents from "~/components/About/OurEvents";
import AboutTeam from "~/components/About/AboutTeam";
import axios from "axios";

export default{
  components: {
    AboutHeader,
    AboutDescription,
    AboutFeature,
    BusinessAdvisory,
    SkilledPeople,
    OurEvents,
    AboutTeam,
  },

  data() {
    return {
      showTeamPage: false
    };
  },
  created() {
    this.shouldShowTeamPage();
  },
  methods: {
    shouldShowTeamPage() {
      return axios
        .get("https://ms-contact.buildo.xyz/ipinfo")
        .then((response) => {
          this.showTeamPage = ['BD'].includes(response.data.data.country);
        })
        .catch((error) => {
          this.showTeamPage = false; 
        });
    },
  },
  head({ $seo }) {
    return $seo({
      title: "About ReformedTech | Software And Web Development Manager",
      description: "We are Technology & Software based company with a very dedicated offshore team that loves website designing & developing."
    });
  }
};
</script>
