<template>
  <section class="why-people">
    <b-container>
      <header class="headline-title">
        <h2>Why Choose Us for Offshore Web and Software Development Company</h2>
        <p>
          There are many reason for choose us by our client’s. Here are some
          features to choose us.
        </p>
      </header>
      <b-row class="align-items-center">
        <b-col lg="6">
          <figure class="why-people__prefix">
            <b-img
              class="why-people__prefix-photo"
              src="~/assets/images/offshore-team/people-choose.jpg"
              alt="offshore banner 1"
              fluid
            ></b-img>
            <b-img
              class="why-people__prefix-photo--1"
              src="~/assets/images/offshore-team/process-dot.svg"
              alt="process dot"
            ></b-img>
            <div class="why-people__prefix-photo--2"></div>
            <div class="why-people__prefix-photo--3"></div>
          </figure>
        </b-col>
        <b-col lg="6" class="mt-5 mt-lg-0 pt-5 pt-lg-0">
          <article
            class="why-people__suffix"
            v-for="(management, i) in managements"
            :key="i"
          >
            <figure class="why-people__suffix-icon">
              <b-img :src="management.img" :alt="management.altTag" fluid> </b-img>
            </figure>
            <footer class="why-people__suffix-title">
              <h4>{{ management.title }}</h4>
              <p>{{ management.article }}</p>
            </footer>
          </article>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import Footer from "../Footer.vue";
export default {
  components: { Footer },
  data() {
    return {
      managements: [
        {
          img: require("~/assets/images/offshore-team/people-icon1.png"),
          altTag: "offshore icon 1",
          title: "Skilled Teams Dedicated to your Projects",
          article:
            "ReformedTech’s Workspace gives you even more visibility into your remote developer’s work with automatic time tracking & virtual daily stand-ups.",
        },
        {
          img: require("~/assets/images/offshore-team/people-icon2.png"),
          altTag: "offshore icon 2",
          title: "Save Cost for Digital Infrastructure",
          article:
            "Our developers match your time zone and overlap a minimum of 4 hours with your workday.",
        },
        {
          img: require("~/assets/images/offshore-team/people-icon3.png"),
          altTag: "offshore icon 3",
          title: "Manage Source Code ",
          article:
            "High visibility makes ReformedTech developers easy to manage and ensures that they constantly work on what’s most valuable to you.",
        },
        // {
        //   img: require("~/assets/images/offshore-team/people-icon3.png"),
        //   title: "Centralized Backup and Secured Network ",
        //   article:
        //     "High visibility makes ReformedTech developers easy to manage and ensures that they constantly work on what’s most valuable to you.",
        // },
        // {
        //   img: require("~/assets/images/offshore-team/people-icon3.png"),
        //   title: "Data Security Assurance",
        //   article:
        //     "High visibility makes ReformedTech developers easy to manage and ensures that they constantly work on what’s most valuable to you.",
        // },
        // {
        //   img: require("~/assets/images/offshore-team/people-icon3.png"),
        //   title: "All Digital Solutions Under One Roof",
        //   article:
        //     "High visibility makes ReformedTech developers easy to manage and ensures that they constantly work on what’s most valuable to you.",
        // },
      ],
    };
  },
};
</script>