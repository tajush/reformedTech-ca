<template>
  <section class="skilled-people">
    <b-container v-if="!$apollo.queries.aboutPage.loading">

      <b-row class="align-items-center">
        <b-col lg="6">
          <figure class="skilled-people__image" v-for="(img, i) in aboutPage.SkilledBlock.SkilledBlockImagesBlock"
                :key="i">
            <div class="skilled-people__image-p1">
              <b-img
                :src="baseUrl+img.image1[0].url"
                :alt="img.image1[0].alternativeText"
                fluid
                loading="lazy"
              ></b-img>
            </div>
            <div class="skilled-people__image-p2">
              <b-img
                :src="baseUrl+img.image2[0].url"
                :alt="img.image2[0].alternativeText"
                fluid
                loading="lazy"
              ></b-img>
            </div>
          </figure>
        </b-col>
        <b-col lg="6">
          <header class="skilled-people__title">
            <h2>{{aboutPage.SkilledBlock.commonTextBlock.title}}</h2>
            <p class="pageLink" v-html="aboutPage.SkilledBlock.commonTextBlock.subtitle">
            </p>
            <!-- <span
              >Our ventures in New York and Bangladesh work collectively to
              secure the interest of our clients. Communication is the key to
              our successful projects. We value the culture, skill, and honesty
              to protect our customers.</span
            > -->
          </header>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import gql from "graphql-tag";
import {baseUrl} from "../../utils/base_url";

const SKILLED_SECTION_CONTENT = gql`
  query getAboutpageDescriptionSection{
	  aboutPage{
      SkilledBlock{
        SkilledBlockImagesBlock{
          image1{
            url,
            alternativeText
          }
          image2{
            url,
            alternativeText
          }
        }
        commonTextBlock{
          title,
          subtitle
        }
      }
    }
  }
`;

export default {
  apollo: {
    aboutPage: {
      query: SKILLED_SECTION_CONTENT,
      prefetch: true,
    },
  },
  data() {
    return {
      baseUrl,
    };
  }
};
</script>