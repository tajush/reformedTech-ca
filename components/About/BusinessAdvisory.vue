<template>
  <section class="business-advisory" v-if="!$apollo.queries.aboutPage.loading">
    <b-container>
      <header class="business-advisory__title">
        <h2>{{ aboutPage.OurPhilosophy.title }}</h2>

        <p>
           {{ aboutPage.OurPhilosophy.subtitle }}
        </p>
      </header>
      <b-row class="align-items-center">
        <b-col lg="7">
          <figure class="business-advisory__image">
            <b-img
              :src="baseUrl+aboutPage.OurPhilosophyContentBLock.philosophyImage[0].url"
              :alt="aboutPage.OurPhilosophyContentBLock.philosophyImage[0].alternativeText"
              fluid
              loading="lazy"
            ></b-img>
          </figure>
        </b-col>
        <b-col lg="5">
          <article
            v-for="(content, i) in aboutPage.OurPhilosophyContentBLock.philosophyContents"
            :key="i"
            class="business-advisory__content"
          >
            <div></div>
            <p>
              {{ content.contentTitle }}
            </p>
          </article>
          <section class="business-advisory__countdown">
            <b-row>
              <b-col
                cols="6"
                lg="3"
                v-for="(countDown, i) in aboutPage.OurPhilosophyContentBLock.philosophyCountdown"
                :key="i"
              >
                <figure>
                  <b-img :src="baseUrl+countDown.countdownImg[0].url" :alt="countDown.countdownImg[0].alternativeText" fluid loading="lazy"></b-img>
                </figure>
                <figcaption>
                  <h4>{{ countDown.countdownTitle }}</h4>
                  <p>{{ countDown.countdownSubtitle }}</p>
                </figcaption>
              </b-col>
            </b-row>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>

import gql from "graphql-tag";
import {baseUrl} from "../../utils/base_url";

const ABOUT_PHILOSOPHY_CONTENT = gql`
  query getAboutpageDescriptionSection{
    aboutPage{
      OurPhilosophy{
        title,
        subtitle
      },
    OurPhilosophyContentBLock{
      philosophyImage{
        url,
        alternativeText
      }
      philosophyContents{
        contentTitle
      }
      philosophyCountdown{
        countdownTitle,
        countdownSubtitle,
        countdownImg{
          url,
          alternativeText
        }
      }
    }
  }
}
`;

export default {
  data() {
    return {
      baseUrl,
      contents: [
        {
          title: "Multi-page sites and one-page sites",
        },
        {
          title: "Built with Bootstrap 5",
        },
        {
          title: "Free updates and support",
        },
      ],

      countDowns: [
        {
          icon: require("@/assets/images/icon/featureIcon1.svg"),
          title: "30+",
          description: "Happy Clients",
        },
        {
          icon: require("@/assets/images/icon/featureIcon2.svg"),
          title: "140+",
          description: "Projects Completed",
        },
        {
          icon: require("@/assets/images/icon/featureIcon3.svg"),
          title: "70",
          description: "Dedicated Members",
        },
        {
          icon: require("@/assets/images/icon/featureIcon4.svg"),
          title: "11+",
          description: "Awards Won",
        },
      ],
    };
  },

  apollo: {
    aboutPage: {
      query: ABOUT_PHILOSOPHY_CONTENT,
      prefetch: true,
    },
  },

};
</script>