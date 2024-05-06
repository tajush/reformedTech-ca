<template>
  <section v-if="!$apollo.queries.service.loading">
    <HeaderPrimary :title="service.Heading" />
    <FeatureService />
    <OurClients />
    <!-- <ClientSays /> -->
    <CallToAction
      :header="service.callToAction.heading"
      :buttonName="service.callToAction.buttonText"
    />
  </section>
</template>

<script>
import HeaderPrimary from "~/components/HeaderPrimary";
import FeatureService from "~/components/Services/FeatureService";
import OurClients from "~/components/OurClients";
import ClientSays from "~/components/Services/ClientSays";
import CallToAction from "~/components/CallToAction";
import gql from "graphql-tag";
import { baseUrl } from "../utils/base_url";

const SERVICE_HEADING = gql`
  query getHeadingofServicePage {
    service {
      Heading
      callToAction {
        heading
        buttonText
      }
    }
  }
`;

export default {
  apollo: {
    service: {
      query: SERVICE_HEADING,
      prefetch: true,
    },
  },
  components: {
    HeaderPrimary,
    FeatureService,
    OurClients,
    ClientSays,
    CallToAction,
  },

  data() {
    return {
      baseUrl,
    };
  },
  head({ $seo }) {
    return $seo({
      title: "Our Services | Offshore Web And Software Development Company",
      description: "ReformedTech provides services for Web Design, Software and E-commerce development, DevOps, Mobile apps and UX/UI designs for startups."
    });
  }
};
</script>