<template>
  <section class="about-description">
    <b-container>
      <b-row no-gutters v-if="!$apollo.queries.aboutPage.loading">
        <b-row>
          <b-col
            lg="4"
            md="8"
            v-for="(description, index) in aboutPage.AboutDescriptionBlock"
            :key="index"
          >
            <article
              class="about-description__content"
              v-if="description.descriptionLabel"
            >
              <h4>{{ description.descriptionLabel }}</h4>
              <p>
                {{ description.descriptionSubtitle }}
              </p>
            </article>

            <b-img
              v-else
              :src="baseUrl + description.descriptionImage[0].url"
              :alt="description.descriptionImage[0].alternativeText"
              fluid
              loading="lazy"
            ></b-img>
          </b-col>

          <!-- <b-col lg="4" md="8">
            <b-img :src="'http://localhost:1337'+description.descriptionImage.url" fluid loading="lazy"></b-img>
          </b-col>  -->
        </b-row>
      </b-row>

      <!-- <div class="descriptionBlock_content_row">
        <div class="descriptionBlock_content_col">
          <article class="about-description__content">
            <h4>Industries we serve</h4>
            <p>
              We've been helping clients operating in various industries
              worldwide. Our clients include startups, medium-sized businesses,
              and established organizations who rely on us for their digital
              needs. We listen to you and develop tailored to your unique
              business needs.
            </p>
          </article>
        </div>
        
        <div class="descriptionBlock_content_col">
          <b-img src="@/assets/images/about3.png" fluid loading="lazy"></b-img>
        </div>

        <div class="descriptionBlock_content_col">
          <article class="about-description__content">
            <h4>Industries we serve</h4>
            <p>
              We've been helping clients operating in various industries
              worldwide. Our clients include startups, medium-sized businesses,
              and established organizations who rely on us for their digital
              needs. We listen to you and develop tailored to your unique
              business needs.
            </p>
          </article>
        </div>
        
        <div class="descriptionBlock_content_col">
          <b-img src="@/assets/images/about3.png" fluid loading="lazy"></b-img>
        </div>

      </div> -->
    </b-container>
  </section>
</template> 

<script>
import gql from "graphql-tag";
import { baseUrl } from "../../utils/base_url";

const ABOUT_DESCRIPTION_CONTENT = gql`
  query getAboutpageDescriptionSection {
    aboutPage {
      AboutDescriptionBlock {
        descriptionLabel
        descriptionSubtitle
        descriptionImage {
          url,
          alternativeText
        }
      }
    }
  }
`;

export default {
  apollo: {
    aboutPage: {
      query: ABOUT_DESCRIPTION_CONTENT,
      prefetch: true,
    },
  },
  data() {
    return {
      baseUrl,
    };
  },
};
</script>