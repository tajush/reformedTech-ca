<template>
  <section
    class="our-clients"
    v-if="!$apollo.queries.ourClientBlock.loading"
    itemscope
    itemtype="https://schema.org/WebContent"
  >
    <b-container>
      <b-row>
        <b-col
          lg="4"
          cols="12"
        >
          <header class="our-clients__left">
            <span itemprop="headline">{{ourClientBlock.clientBlock.title}}</span>
            <h2 itemprop="interactionStatistic">{{ourClientBlock.clientBlock.subtitle}}</h2>
            <h3 itemprop="description">We collaborate with startups, corporations, and nonprofits, engaging with diverse service providers to achieve our mission: delivering results promptly and within budgetary confines. This commitment is why numerous clients entrust us with their projects.</h3>
          </header>
        </b-col>

        <b-col
          lg="8"
          cols="12"
        >
          <section class="our-clients__right">
            <b-row class="justify-content-center align-items-center">
              <b-col
                class="margin-md-top"
                lg="3"
                cols="4"
                v-for="(client, index) in ourClientBlock.clientBlock.clientImage"
                :key="index"
              >
                <a :href="client.webSiteLink" target="_blank">
                  <b-img
                  :src="baseUrl + client.image[0].url"
                  :alt="client.image[0].alternativeText"
                  loading="lazy"
                  fluid
                  itemprop="image"
                ></b-img>
                </a>
              </b-col>
            </b-row>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import Header from "./Header.vue";
import gql from "graphql-tag";
import { baseUrl } from "../utils/base_url";

const OUR_CLIENT_BLOCK = gql`
  query getOurClientBlockContent {
    ourClientBlock {
      clientBlock {
        title
        subtitle
        description
        clientImage {
          webSiteLink
          image {
            url
            alternativeText
          }
        }
      }
    }
  }
`;

export default {
  apollo: {
    ourClientBlock: {
      query: OUR_CLIENT_BLOCK,
      prefetch: true,
    },
  },
  components: { Header },
  data() {
    return {
      baseUrl,
      clientImage: [
        { image: require("@/assets/images/client/threefold.png") },
        { image: require("@/assets/images/client/skipper.png") },
        { image: require("@/assets/images/client/childhood.png") },
        { image: require("@/assets/images/client/linkit.png") },
        { image: require("@/assets/images/client/smile.png") },
        { image: require("@/assets/images/client/smartproperty.png") },
      ],
    };
  },
};
</script>