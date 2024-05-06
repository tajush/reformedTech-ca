<template>
  <section v-if="!$apollo.queries.aboutPage.loading" class="about-header" :style="{ 'background-image': 'url(' + baseUrl + aboutPage.HeroSection.coverImage[0].url + ')',}">
    <b-container>
      <header class="primary-header__title">
        <h1>
          {{ aboutPage.HeroSection.title}} <br />{{
            aboutPage.HeroSection.subtitle
          }}
        </h1>
      </header>
    </b-container>
  </section>
</template>

<script>
import gql from "graphql-tag";
import {baseUrl} from "../../utils/base_url";

const HERO_SECTION_CONTENT = gql`
  query getAboutpageHeroSection {
    aboutPage {
      HeroSection {
        title
        subtitle
        coverImage {
          url
        }
      }
    }
  }
`;

console.log('base url', baseUrl);

export default {
  apollo: {
    aboutPage: {
      query: HERO_SECTION_CONTENT,
      prefetch: true,
    },
  },
  data() {
    return {
      baseUrl
    };
  }
};

</script>




