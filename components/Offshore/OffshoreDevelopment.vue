<template>
  <section class="offshore-development">
    <b-container>
      <header class="headline-title">
        <h2>Our Top Offshore Software Development Services</h2>
        <p>
          At Reformed Tech, you get excellent outsourcing software development
          services. You don’t have to compromise for anything.
        </p>
      </header>
      <b-row>
        <b-col
          lg="6"
          class="margin-bottom-col"
          v-for="(data, index) in devData"
          :key="index"
        >
          <nuxt-link :to="data.link" class="nuxt-link">
            <article class="offshore-development__content">
            <div>
              <b-img :src="data.icon" :alt="data.altTag" loading="lazy" fluid></b-img>
              <h4>{{ data.title }}</h4>
              <p>{{ data.decription }}</p>
            </div>
          </article>
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script >
export default {
  data() {
    return {
      devData: [
        {
          link: "/offshore/",
          icon: require("~/assets/images/offshore-team/icon.png"),
          altTag: "offshore frontend",
          title: "Offshore Front-End Development",
          decription:
            "Our skilled developers excel in top front-end technologies and frameworks, boasting robust experience crafting interactive, intuitive, and intelligent interfaces across various platforms and technologies.",
        },
        {
          link: "/web/",
          icon: require("~/assets/images/offshore-team/icon1.png"),
          altTag: "offshore web development",
          title: "Offshore Web Development",
          decription:
            "Our leading offshore web development services in Bangladesh encompass a diverse array of projects, spanning sales platforms, mobile apps, marketing solutions, enterprise applications, and virtually every other digital endeavor imaginable!",
        },
        {
          link: "/mobileapp/",
          icon: require("~/assets/images/offshore-team/icon2.png"),
          altTag: "offshore mobile app",
          title: "Offshore Mobile App Development",
          decription:
            "Our top-tier iPhone, Android, and Windows app developers specialize in crafting highly functional and feature-rich apps tailored to your specific needs and preferences, delivering end-to-end projects that resonate with both you and your target audience.",
        },
        {
          link: "/devops/",
          icon: require("~/assets/images/offshore-team/icon3.png"),
          altTag: "offshore support",
          title: "Offshore Support and Maintenance",
          decription:
            "Select from our flexible offshore support and maintenance packages, designed to cater to your unique needs. We offer timely patches and upgrades as required, ensuring your software remains up-to-date and secure. Additionally, our team provides configuration support to adapt to changing client requirements, keeping your business ahead of the curve.",
        },
      ],
    };
  },
};
</script>
<style>
.nuxt-link{
  color: #212529;
  text-decoration: none !important
}
</style>