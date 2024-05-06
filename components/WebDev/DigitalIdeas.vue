<template>
  <section class="web-development">
    <b-container>
      <header class="headline-title">
        <h2>Make Digital Ideas</h2>
        <p>We love design, technology, story & design beautiful brands</p>
      </header>

      <section
        class="web-development__content"
        v-for="(service, i) in services"
        :key="i"
      >
        <b-row class="justify-content-center align-items-center">
          <b-col lg="6" :class="service.articleOrder">
            <header class="web-development__content-title">
              <span>{{ service.caption }}</span>
              <h4 v-html="service.title"></h4>
              <p v-html="service.article"></p>
            </header>
            <article
              v-for="data in service.list"
              :key="data.item"
              class="web-development__content-list"
            >
              <div></div>
              <span> {{ data.item }}</span>
            </article>
          </b-col>
          <b-col lg="6" :class="service.imageOrder">
            <b-img :src="service.image" :alt="service.altTag" fluid loading="lazy"></b-img>
          </b-col>
        </b-row>
      </section>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          imageOrder: "order-2",
          articleOrder: "order-1",
          image: require("~/assets/images/work/web-design.jpg"),
          altTag: "web design",
          caption: "CUSTOM WEB DESIGN",
          title: `High-Quality, Interactive Aesthetics`,
          article:
            "Our professional ReformedTech web design and programming team has 7+ years of combined experience building custom web-based software applications. This refers to systems and web solutions built from scratch, specifically to meet your exact business and technology challenges.",
          list: [
            {
              item: "We Used Frontend Development Languages like Javascript, AngularJS, HTML5, CSS3",
            },
            {
              item: "We also used Backend Development Frameworks Like Apache, PHP, Symfony 2, NodeJS, Javascript, EmberJs",
            },
          ],
        },
        {
          imageOrder: "order-md-2 order-lg-1",
          articleOrder: "order-md-1 order-lg-2",
          image: require("~/assets/images/work/responsive-design.jpg"),
          altTag: "responsive program",
          caption: "RESPONSIVE DESIGN",
          title: `Device Friendly Web Design`,
          article:
            "The combination of flexible grids, flexible images, and media queries. We help take the complexity out of responsive design with details on Design, Development and Strategy.",
          list: [
            {
              item: "Responsive design allows your website to adapt to the device your users are viewing it on.",
            },
            {
              item: "Responsive web design is made up of 3 basic ingredients, Flexible Grid-based layout, Flexible Media, Media Queries.",
            },
          ],
        },
        {
          imageOrder: "order-2",
          articleOrder: "order-1",
          image: require("~/assets/images/work/e-commerce.jpg"),
          altTag: "e commerce",
          caption: "E-COMMERCE",
          title: `Modern E-Commerce Development`,
          article:
            "A successful <a class='webLinks' href='/ecommerce/'>e-commerce website</a> primarily relies on SEO and UX techniques to encourage <a class='webLinks' href='/digitalmarketing/'>website traffic</a> and online purchases. With decades of experience, we know all of the tricks. Let us help you build a profitable, multi-device shopping experience.",
          list: [
            {
              item: "Top-quality shopping cart software & CMS",
            },
            {
              item: "Professional design with the latest web features",
            },
            {
              item: "Fully integrated turn-key solution to sell products online",
            },
          ],
        },
        {
          imageOrder: "order-md-2 order-lg-1",
          articleOrder: "order-md-1 order-lg-2",
          image: require("~/assets/images/work/ui-ux.jpg"),
          altTag: "ui ux",
          caption: "PERSUASION ARCHITECTURE",
          title: `Brilliant design with trendy UX & UI `,
          article:
            "At ReformedTech, we concentrate on developing websites that look modern, professional and visually appealing, but we also create sites that provide amazing user experiences that build trust in the brands. It takes consumers less than 10 seconds to decide if they like a website - don’t risk losing them.",
          list: [
            {
              item: "User-experience (UX) & User-Interface (UI) Like Design & Planning, Usability testing, Wireframes / Sitemaps, Responsive Design",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style>
.webLinks{
  color: #4F4F4F;
  text-decoration: none !important
}
</style>