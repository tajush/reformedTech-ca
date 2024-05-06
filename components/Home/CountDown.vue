<template>
  <section
    class="count-down"
    itemscope
    itemtype="https://schema.org/Rating"
  >
    <div ref="countdown"></div>
    <b-container>
      <header class="count-down__header">
        <h2 itemprop="author">Some Count That Matters</h2>
        <p itemprop="description">
          Our achievement in the journey depicted in numbers
        </p>
      </header>
      <article class="count-down__content">
        <b-row class="justify-content-center">
          <b-col
            lg="3"
            cols="12"
            class="content-border__right margin-lg-top"
          >
            <h2 itemprop="ratingValue">{{ serviceValue }}</h2>
            <p itemprop="ratingExplanation">Expert Developers</p>
          </b-col>
          <b-col
            lg="3"
            cols="12"
            class="content-border__right margin-lg-top"
          >
            <h2 itemprop="ratingValue">{{ clientValue }}</h2>
            <p itemprop="ratingExplanation">Fortune 30+ Clients</p>
          </b-col>
          <!-- <b-col lg="3" cols="6" class="content-border__right margin-lg-top">
            <h2>{{ memberValue }}</h2>
            <p>Dedicated Members</p>
          </b-col> -->
          <b-col
            lg="3"
            cols="12"
            class="content-border__right margin-lg-top"
          >
            <h2 itemprop="ratingValue">{{ yearValue }}</h2>
            <p itemprop="ratingExplanation">Years of Journey</p>
          </b-col>
        </b-row>
      </article>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      serviceValue: 0,
      clientValue: 0,
      memberValue: 0,
      yearValue: 0,
      scrollCount: 0,
      intersectionObserver: null,
    };
  },
  beforeDestroy() {
    this.intersectionObserver && this.intersectionObserver.disconnect();
  },
  mounted() {
    this.scrollTrigger();
  },
  methods: {
    countService() {
      if (this.serviceValue < 25) {
        setTimeout(() => {
          this.serviceValue += 1;
          this.countService();
        }, 100);
      }
    },
    countClients() {
      if (this.clientValue < 30) {
        setTimeout(() => {
          this.clientValue += 1;
          this.countClients();
        }, 100);
      }
    },
    countMembers() {
      if (this.memberValue < 300) {
        setTimeout(() => {
          this.memberValue += 5;
          this.countMembers();
        }, 80);
      }
    },
    countYears() {
      if (this.yearValue < 13) {
        setTimeout(() => {
          this.yearValue += 1;
          this.countYears();
        }, 150);
      }
    },
    scrollTrigger() {
      this.intersectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio > 0 && this.scrollCount) {
          this.countService();
          this.countClients();
          this.countMembers();
          this.countYears();
        }
        this.scrollCount++;
      });
      this.intersectionObserver.observe(this.$refs.countdown);
    },
  },
};
</script>

