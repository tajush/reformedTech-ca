<template>
  <section>
    <HeaderPrimary :title="title" :subTitle="subTitle" />
    <CaseDetails
      :caseImg="caseImg"
      :caseAlt="caseAlt"
      :caseName="caseName"
      :caseDescription="caseDescription"
      :caseDuration="caseDuration"
    >
    </CaseDetails>
  </section>
</template>

<script>
import HeaderPrimary from "~/components/HeaderPrimary";
import CaseDetails from "~/components/CaseDetails";
import pactfi from "~/assets/images/projects/pactfi-full.png";

export default {
  components: {
    HeaderPrimary,
    CaseDetails,
  },
  data() {
    return {
      title: "PactFi",
      subTitle: "",
      caseImg: pactfi,
      caseAlt: "PactFi",
      caseName: "PactFi",
      caseDuration: "2021 - Continue",
      caseDescription:
        "In August 2021, Alexa Halcomb's PactFi began. For the business, we created the website pactfi.com. Understanding the needs of the client and the solutions they anticipated posed the biggest challenge for us. Creating the application, coordinating with a US remote team, and effectively delivering the features were additional challenges. Through communication with one another and video explanations, we were able to resolve the problems. We have also dealt with client requirements through a software management platform called JIRA. We enhanced the website with features like deal creation, working groups, deal facilities, allocating facilitated funds to working groups, sub-allocating facilitated funds, KYC features, dynamic forms, data rooms, etc. HTML was the programming language, software, and sort of technology that we utilised.Do you have a similar project in mind? <a href='/contact/'>Contact us</a> today!",
    };
  },
  head({ $seo }) {
    return $seo({
      title: "PactFi | ReformedTech",
      description:
        "The pactfi is a fintech solution for the investors who will manage their funds and distribute those funds among start-ups.",
    });
  },
};
</script>