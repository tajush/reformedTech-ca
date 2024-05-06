<template>
  <section class="feature-service" v-if="!$apollo.queries.service.loading">
    <b-container>
      <header class="headline-title">
        <span>{{ service.ourServices.title }}</span>
        <h2>
          {{ service.ourServices.subtitle }}
        </h2>
      </header>

      <b-row
        class="align-items-center row-bottom"
        v-for="(feature, i) in featureServices"
        :key="i"
      >

    
        <b-col  lg="7" v-if="i%2==0">
          <figure class="feature-service__image">
            <b-img
              class="feature-service__image--1"
              :src="feature.image.url"
              :alt="feature.image.alternativeText"
              fluid
              loading="lazy"
            ></b-img>
            <b-img
              class="feature-service__image--2"
              src="~/assets/images/service/shapes-left.svg"
              alt="shapes left"
              fluid
              loading="lazy"
            ></b-img> 
          </figure>
        </b-col>

        <b-col lg="5" v-if="i%2==0">
          <article class="feature-service__content">
            <span class="headlineLink" v-html="feature.title"></span>
            <h2>{{ feature.subtitle }}</h2>
            <p>
              {{ feature.description }}
            </p>
          </article>
        </b-col>

        <b-col lg="5" v-if="i%2!==0">
          <article class="feature-service__content">
            <span class="headlineLink" v-html="feature.title"></span>
            <h2>{{ feature.subtitle }}</h2>
            <p>
              {{ feature.description }}
            </p>
          </article>
        </b-col>

        <b-col  lg="7" v-if="i%2!==0">
          <figure class="feature-service__image">
            <b-img
              class="feature-service__image--3"
              :src="feature.image.url"
              :alt="feature.image.alternativeText"
              fluid
              loading="lazy"
            ></b-img>
            <b-img
              class="feature-service__image--4"
              src="~/assets/images/service/shapes-right.svg"
              alt="shapes right"
              fluid
              loading="lazy"
            ></b-img>
          </figure>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import gql from "graphql-tag";
import { baseUrl } from "../../utils/base_url";

const FEATURE_SERVICE = gql`
  query getServicePageCommonBlock {
    service {
      ourServices {
        title
        subtitle
      }
      featureServices {
        id
        image {
          url,
          alternativeText
        }
        title
        subtitle
        description
      }
    }
  }
`;

export default {
  apollo: {
    service: {
      query: FEATURE_SERVICE,
      prefetch: true,
    },
  },
  data() {
    return {
      baseUrl,
      featureServices: [
        {
          id: 1,
          title: "DEVELOPER SERVICES",
          subtitle: "Offshore Software Development Services",
          image: {
            url: require("@/assets/images/offshore_developer.jpg"),
            alternativeText: "Development Services",
          },
          description: "Get custom-built software, web, and mobile apps while enjoying significant cost savings. Leveraging our knowledge, experience, expertise, and cutting-edge technologies, we deliver reliable offshore development services from Bangladesh. Our dedicated managed team collaborates closely with you, from initial requirement analysis and estimation to ongoing support and further development."
        },
        {
          id: 2,
          title: "WEB APPLICATION",
          subtitle: "Developing web applications from start to finish",
          image: {
            url: require("@/assets/images/web_development.jpg"),
            alternativeText: "test",
          },
          description: "We specialize in crafting meticulously planned, exceptionally scalable, and fortified web applications tailored precisely to your requirements. Our dedicated team comprises adept managers, designers, and architects collaborating seamlessly to deliver an unparalleled user experience. Continuously refining their expertise, our engineers elevate UI and UX implementations, adding an element of astonishment to your web designs."
        },{
          id: 2,
          title: "MOBILE APPLICATION",
          subtitle: "Cross-Platform Mobile App Development",
          image: {
            url: require("@/assets/images/mobile-app.jpg"),
            alternativeText: "test",
          },
          description: "Reformed Tech, a premier mobile app development firm in Bangladesh, offers comprehensive services covering the entire app development process, from conceptualization to deployment and ongoing support. Our expertise includes cross-platform mobile app development, tailored iOS and Android app creation, secondary platform app development, and beyond."
        },{
          id: 2,
          title: "E-COMMERCE DEVELOPMENT",
          subtitle: "Comprehensive ECommerce Development Services",
          image: {
            url: require("@/assets/images/e-commerce.jpg"),
            alternativeText: "test",
          },
          description: "As specialists in custom eCommerce development services in Bangladesh, we harness the power of cutting-edge eCommerce technologies such as WooCommerce, Drupal, Shopify, BigCommerce, and more. Our expertise enables us to craft online stores with stunning designs and robust functionalities. Our eCommerce solutions are scalable, mobile-responsive, and boast superior UI/UX, enhancing user engagement and amplifying brand visibility."
        },{
          id: 2,
          title: "DEVOPS SERVICES",
          subtitle: "Best DevOps Services in Bangladesh",
          image: {
            url: require("@/assets/images/dev-ops.jpg"),
            alternativeText: "test",
          },
          description: "As a premier DevOps company in Bangladesh, we provide exceptional DevOps consulting and implementation services. Our expertise lies in bridging the gap between your development and operations teams, facilitating seamless integration, and improving code quality. By establishing a continuous delivery pipeline across various cloud platforms, we expedite time-to-market while optimizing costs for your company."
        }
      ],
    };
  },
};
</script>
<style>
.headlineLink a{
  color: #171717;
  text-decoration: none !important;
}
.headlineLink a:hover,
.headlineLink a:focus{
  color: #171717;
  text-decoration: none !important;
}
</style>



