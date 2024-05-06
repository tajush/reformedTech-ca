<template>
  <section
    class="featured-faq"
    v-if="!$apollo.queries.faqBlock.loading"
    itemscope
    itemtype="https://schema.org/FAQPage"
  >
    <b-container>
      <header class="headline-title">
        <span>{{ faqBlock.title }}</span>
        <h2 itemprop="description">{{ faqBlock.subtitle }}</h2>
      </header>
      <b-row class="justify-content-center">
        <b-col
          class="margin-lg-bottom"
          cols="12"
          lg="10"
          v-for="(faq, i) in faqBlock.QnA"
          :key="i"
        >
          <div class="featured-faq__style">
            <FaQ
              :faq="faq"
              :faqNumber="i + 1"
            />
          </div>
        </b-col>
      </b-row>
      <article class="featured-faq__button">
        <h2 itemprop="text">{{ faqBlock.bottomTitle }}</h2>
        <nuxt-link
          to="/contact/"
          itemprop="archivedAt"
        >{{
          faqBlock.buttonText
        }}</nuxt-link>
      </article>
    </b-container>
  </section>
</template>

<script>
import FaQ from "~/components/FaQ";
import gql from "graphql-tag";
import { baseUrl } from "../../utils/base_url";

const FAQ_CONTENT = gql`
  query getFaqBlock {
    faqBlock {
      title
      subtitle
      bottomTitle
      buttonText
      QnA {
        question
        answer
      }
    }
  }
`;

export default {
  components: {
    FaQ,
  },
  apollo: {
    faqBlock: {
      query: FAQ_CONTENT,
      prefetch: true,
    },
  },
  data: () => ({
    faqItems: [],
    baseUrl,
  }),
};
</script>