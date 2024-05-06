<template>
  <section class="about-feature">
    <b-container>
      <b-img src="@/assets/images/lines1.png" alt="Two lines" fluid></b-img>
      <header class="about-feature__title" v-if="!$apollo.queries.aboutPage.loading">
        <h2>{{ aboutPage.WhyReformedTechTextBlock.title }}</h2>
        <p>
          {{ aboutPage.WhyReformedTechTextBlock.subtitle }}
        </p>
      </header>
      
      <b-row v-if="!$apollo.queries.aboutPage.loading">

        <b-col class="mb-4" lg="4" md="6" v-for="(card, index) in aboutPage.WhyReformedTechCards"
            :key="index">
          <article :class="card.bgColor">
            <b-media>
              <template #aside>
               <i :class="card.iconClass"></i>
              </template>
              <h4>{{card.title}}</h4>
              <p>
                {{card.subtitle}}
              </p>
            </b-media>
          </article>
        </b-col>

      </b-row>
    </b-container>
  </section>
</template> 

<script>
import gql from "graphql-tag";

const WHY_CHOOSE_REFORMED_TECH_CONTENT = gql`
  query getAboutpageDescriptionSection{
    aboutPage{
      WhyReformedTechTextBlock{
        title,
        subtitle
      }
      WhyReformedTechCards{
        title,
        subtitle,
        iconClass,
        bgColor
      }
    }
  }
`;

export default {
  apollo: {
    aboutPage: {
      query: WHY_CHOOSE_REFORMED_TECH_CONTENT,
      prefetch: true,
    },
  },
};

</script>