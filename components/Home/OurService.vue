<template>
  <section class="our-service" itemscope itemtype="https://schema.org/Service">
    <b-container>
      <header class="headline-title">
        <span itemprop="name">Our Services</span>
        <h2 itemprop="serviceType">Our Technology & Software Services</h2>
        <h3 itemprop="description">
          We offer comprehensive assistance in Software development, covering a wide spectrum of services including Web Applications, Mobile apps, e-Commerce development, DevOps implementation, and Digital Marketing solutions.
        </h3>
      </header>

      <b-row>
        <b-col lg="7">
          <section class="our-service__image">
            <figure class="our-service__image-dot1"></figure>
            <figure class="our-service__image-dot2"></figure>
            <figure class="our-service__image-dot3"></figure>
            <picture
              class="our-service__image-photo our-service__image-photo--p1"
            >
              <source
                srcset="~/assets/images/service/image1.jpg"
                type="image/jpg"
              />
              <source
                srcset="~/assets/images/service/image1.webp"
                type="image/webp"
              />
              <img
                src="~/assets/images/service/image1.jpg"
                alt="service-image"
                loading="lazy"
                itemprop="image"
              />
            </picture>
            <picture
              class="our-service__image-photo our-service__image-photo--p2"
            >
              <source
                srcset="~/assets/images/service/image2.jpg"
                type="image/jpg"
              />
              <source
                srcset="~/assets/images/service/image2.webp"
                type="image/webp"
              />
              <img
                src="~/assets/images/service/image2.jpg"
                alt="service-image"
                loading="lazy"
                itemprop="image"
              />
            </picture>
            <picture
              class="our-service__image-photo our-service__image-photo--p3"
            >
              <source
                srcset="~/assets/images/service/image3.jpg"
                type="image/jpg"
              />
              <source
                srcset="~/assets/images/service/image3.webp"
                type="image/webp"
              />
              <img
                src="~/assets/images/service/image3.jpg"
                alt="service-image"
                loading="lazy"
                itemprop="image"
              />
            </picture>
          </section>
        </b-col>
        <b-col lg="5">
          <article
            class="our-service__content"
            v-for="(service, i) in services"
            :key="i"
          >
            <a :href="service.link">
              <img
              :width="service.width"
              :height="service.height"
              :src="service.icon"
              :alt="service.altTag"
              loading="lazy"
              itemprop="image"
            />              
            </a>
            <a :href="service.link"><h4 itemprop="name">{{ service.title }}</h4></a>
            <p itemprop="description">{{ service.description }}</p>
          </article>
        </b-col>
        <b-col lg="5">
          <article
            class="our-service__content"
            v-for="(service, i) in services2"
            :key="i"
          >
            <a :href="service.link">
              <img
              :width="service.width"
              :height="service.height"              
              :src="service.icon"
              :alt="service.altTag"
              loading="lazy"
              itemprop="image"
            />              
            </a>
            <a :href="service.link"><h4 itemprop="name">{{ service.title }}</h4></a>
            <p itemprop="description">{{ service.description }}</p>
          </article>
        </b-col>
        <b-col lg="7">
          <section class="our-service__image1">
            <figure class="our-service__image1-dot1"></figure>
            <figure class="our-service__image1-dot2"></figure>
            <figure class="our-service__image1-dot3"></figure>
            <picture
              class="our-service__image1-photo our-service__image1-photo--p1"
            >
              <source
                srcset="~/assets/images/service/image4.png"
                type="image/png"
              />
              <source
                srcset="~/assets/images/service/image4.webp"
                type="image/webp"
              />
              <img
                src="~/assets/images/service/image4.png"
                loading="lazy"
                alt="service-image"
                itemprop="image"
              />
            </picture>
            <picture
              class="our-service__image1-photo our-service__image1-photo--p2"
            >
              <source
                srcset="~/assets/images/service/image5.jpg"
                type="image/jpg"
              />
              <source
                srcset="~/assets/images/service/image5.webp"
                type="image/webp"
              />
              <img
                src="~/assets/images/service/image5.jpg"
                loading="lazy"
                alt="service-image"
                itemprop="image"
              />
            </picture>
            <picture
              class="our-service__image1-photo our-service__image1-photo--p3"
            >
              <source
                srcset="~/assets/images/service/image6.png"
                type="image/png"
              />
              <source
                srcset="~/assets/images/service/image6.webp"
                type="image/webp"
              />
              <img
                src="~/assets/images/service/image6.png"
                loading="lazy"
                alt="service-image"
                itemprop="image"
              />
            </picture>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          icon: require("@/assets/images/icon/ui-ux.png"),
          altTag: "ui/ux",
          width: 62,
          height: 63,
          link: "offshore",
          title: "Offshore Development Services",
          description:
            "We serve as a global provider of developers, facilitating the establishment of cross-border IT and engineering teams for companies across Europe and America, fostering collaboration and growth for affiliate organizations.",
        },
        {
          icon: require("@/assets/images/icon/web-app.png"),
          altTag: "web app",
          width: 80,
          height: 63,          
          link: "web",
          title: "Web Application Development ",
          description:
            "We specialize in crafting powerful, streamlined, and user-friendly corporate and client-oriented web applications, portals, as well as SaaS/XaaS offerings, ensuring impactful digital solutions across various domains.",
        },
        {
          icon: require("@/assets/images/icon/mobile-app.png"),
          altTag: "mobile app",
          width: 59,
          height: 63,          
          link: "mobileapp",
          title: "Cross-Platform Mobile App Development",
          description:
            "We offer peerless expertise in developing cross-platform mobile apps including all aspects of transformation, from ideation to development and delivery.",
        },
      ],
      services2: [
        {
          icon: require("@/assets/images/icon/e-commerce.png"),
          altTag: "e commerce",
          width: 63,
          height: 63,          
          link: "ecommerce",
          title: "E-Commerce Development",
          description:
            "As a dynamic digital agency, we specialize in crafting bespoke e-commerce platforms through custom web design and development, alongside expert mobile app development and seamless API integration.",
        },
        {
          icon: require("@/assets/images/icon/dev-ops.png"),
          altTag: "dev ops",
          width: 42,
          height: 63,          
          link: "devops",
          title: "DevOps",
          description:
            "We are a major offshore DevOps service provider situated in the United States that offers unique services to increase DevOps adoption and execution along with an experienced DevOps team.",
        },
        {
          icon: require("@/assets/images/icon/digital-marketing.svg"),
          altTag: "digital marketing",
          width: 61,
          height: 63,          
          link: "digitalmarketing",
          title: "Digital Marketing",
          description:
            "Our digital marketing services are intended to increase brand awareness and attract new customers to your company. ReformedTech's digital marketing professionals will devise the best approach for increasing your online presence using organic search, social media, paid ads, and other web-based mediums.",
        },
      ],
    };
  },
};
</script>
