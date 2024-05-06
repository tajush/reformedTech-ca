<template>
  <section class="our-achievement" itemscope itemtype="https://schema.org/Article">
    <b-container>
      <header class="text-center">
        <h2 itemprop="text">Our Achievements</h2>
      </header>
      <VueSlickCarousel v-bind="settings">
        <div v-for="(achieve, i) in achievements" :key="i">
          <div>
            <a target="_blank" :href="achieve.link"><img itemprop="image" :src="achieve.img" :alt="achieve.altTag" /></a>
          </div>
        </div>
      </VueSlickCarousel>
    </b-container>
  </section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: [
        {
          arrows: false,
          dots: false,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          centerMode: false,
          speed: 3000,
          autoplaySpeed: 3000,
          cssEase: "linear",
          responsive: [
          {
              breakpoint: 992,
              settings: {
                arrows: false,
                dots: false,
                speed: 600,
                centerMode: false,
                slidesToScroll: 3,
                slidesToShow: 3,
              },
            },            
            {
              breakpoint: 767,
              settings: {
                arrows: false,
                dots: false,
                speed: 600,
                centerMode: false,
                slidesToScroll: 1,
                slidesToShow: 1,
              },
            },
          ],
        },
      ],
      achievements: [
        {
          link: "https://basis.org.bd/company-profile/21-02-043",
          img: "https://basis.org.bd/public/img/relatedlink/5e11318d93d0aPr-4.jpg",
          altTag: "top web company bangladesh Badge",
        },

        {
          link: "https://www.goodfirms.co/company/reformedtech",
          img: "https://assets.goodfirms.co/badges/color-badge/app-development.svg",
          altTag: "GoodFirms Badge",
        },

        {
          link: "https://www.topdevelopers.co/profile/reformedtech",
          img: "https://www.topdevelopers.co/assets/badges/app-2022/Mobile-App/Global/Badge-Top-Mobile-App-Development-Companies-2022.png",
          altTag: "Mobile App Development Companies ",
        },

        {
          link: "https://www.goodfirms.co/company/reformedtech",
          img: "https://assets.goodfirms.co/badges/normal-badge/top-software-development-companies.svg",
          altTag: "GoodFirms Badge",
        },

        {
          link: "https://wadline.com/ReformedTech",
          img: "https://wadline.com/badges/june/badge/Badge_Monocolor_Software.svg",
          altTag: "top software company bangladesh Badge",
        },

        {
          link: "https://www.topdevelopers.co/profile/reformedtech",
          img: "https://www.topdevelopers.co/assets/badges/app-2022/Ecommerce/Badge-Top-Ecommerce-Development-Companies-2022.png",
          altTag: "eCommerce Development Companies",
        },

        {
          link: "https://wadline.com/ReformedTech",
          img: "https://wadline.com/badges/june/badge/Badge_Monocolor_Web.svg",
          altTag: "top web company bangladesh Badge",
        },

        {
          link: "https://www.topdevelopers.co/profile/reformedtech",
          img: "https://www.topdevelopers.co/assets/badges/app-2022/Web-Development/Badge-Top-Web-Development-Companies-2022.png",
          altTag: "Web Development Companies",
        },

        {
          link: "https://www.goodfirms.co/company/reformedtech",
          img: "https://assets.goodfirms.co/badges/color-sticker/devops-companies.svg",
          altTag: "GoodFirms Badge",
        },

        {
          link: "https://www.goodfirms.co/company/reformedtech",
          img: "https://assets.goodfirms.co/badges/normal-badge/top-website-development-companies.svg",
          altTag: "GoodFirms Badge",
        },

        {
          link: "https://www.topdevelopers.co/profile/reformedtech",
          img: "https://www.topdevelopers.co/assets/badges/app-2022/UI-UX%20Designing/Badge-Top-UI-UX-Designing-Companies-2022.png",
          altTag: "UI/UX Designing Service Providing Companies",
        },

        {
          link: "https://www.goodfirms.co/company/reformedtech",
          img: "https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg",
          altTag: "GoodFirms Badge",
        },

        {
          link: "https://www.appfutura.com/companies/reformedtech",
          img: "https://www.appfutura.com/img/badges/badge-top-app-company-bangladesh.png",
          altTag: "top app company bangladesh Badge",
        },

        {
          link: "https://www.appfutura.com/companies/reformedtech",
          img: "https://www.appfutura.com/img/badges/badge-top-seo-company-bangladesh-gray.png",
          altTag: "top seo company bangladesh Badge",
        },

        {
          link: "https://www.appfutura.com/companies/reformedtech",
          img: "https://www.appfutura.com/img/badges/badge-top-web-company-bangladesh.png",
          altTag: "top web company bangladesh Badge",
        },

        {
          link: "https://www.appfutura.com/companies/reformedtech",
          img: "https://www.appfutura.com/img/badges/badge-top-software-development-company-bangladesh-gray.png",
          altTag: "top software company bangladesh Badge",
        },

        {
          link: "https://www.appfutura.com/companies/reformedtech",
          img: "https://www.appfutura.com/img/badges/badge-top-social-media-marketing-company.png",
          altTag: "top SMM company bangladesh Badge",
        },

        {
          link: "https://www.topdevelopers.co/profile/reformedtech",
          img: "https://www.topdevelopers.co/assets/badges/app-2022/Software-Development/Badge-Top-Software-Development-Companies-2022.png",
          altTag: "Custom Software Development Companies",
        },

        {
          link: "https://www.sortlist.com/agency/reformedtech",
          img: "https://core.sortlist.com//_/apps/core/images/badges-en/badge-stars-pink-light-xl.svg",
          altTag: "stars",
        },

        {
          link: "https://www.topdevelopers.co/profile/reformedtech",
          img: "https://www.topdevelopers.co/assets/badges/app-2022/Digital-Marketing/Badge-Top-Digital-Marketing-Companies-2022.png",
          altTag: "Digital Marketing Agencies",
        },

        {
          link: "https://wadline.com/ReformedTech",
          img: "https://wadline.com/badges/june/badge/Badge_Colored_Mobile.svg",
          altTag: "top app company bangladesh Badge",
        },

        {
          link: "https://www.appfutura.com/companies/reformedtech",
          img: "https://www.appfutura.com/img/badges/badge-top-php-company-gray.png",
          altTag: "top php company bangladesh Badge",
        },
        {
          link: "https://clutch.co/profile/reformedtech",
          img: require("@/assets/images/achievements/clutch.png"),
          altTag: "top app company bangladesh Badge"
        }
      ],
    };
  },
};
</script>