<template>
    <section>
      <HeaderPrimary :title="title" :subTitle="subTitle" />
      <CommonPartner 
        :headline="headline"
        :paragraph01="paragraph01"
      />
      <CommonServices
        :ServicesHeadline="ServicesHeadline"
        :ServicesDescription="ServicesDescription"
        :service="service"
      />   
      <CallToAction
        :header="header"
        :subHeader="subHeader"
        :buttonName="buttonName"
      />
    </section>
  </template> 
  
  <script>
  
  import serviceIcon01 from "~/assets/images/wordpress/1.svg";
  import serviceIcon02 from "~/assets/images/wordpress/2.svg";
  import serviceIcon03 from "~/assets/images/wordpress/3.svg";
  import serviceIcon04 from "~/assets/images/wordpress/4.svg";
  import serviceIcon05 from "~/assets/images/wordpress/5.svg";
  import serviceIcon06 from "~/assets/images/wordpress/6.svg";
  
  import HeaderPrimary from "~/components/HeaderPrimary";
  import CommonPartner from "~/components/CommonPartner";
  import CommonServices from "~/components/CommonServices";
  import CallToAction from "~/components/CallToAction";
  
  export default {
    components: {
      HeaderPrimary,
      CommonPartner,
      CommonServices,
      CallToAction
  },
    data() {
      return {
        title: "WordPress WooCommerce Development",
        subTitle:
          "Elevate your existing WordPress website into a personalized eCommerce emporium through the expertise of the world's premier WooCommerce development company.",
        header: "Looking for a Custom Web Design / Development?",
        subHeader: "We will turn your ideas to viable product",
        buttonName: "Get a quote now", 
  
        ServicesHeadline: "Our WordPress Services",
        ServicesDescription: "We take pride in being your dedicated partner for all things WordPress. Our comprehensive range of WordPress services is tailored to meet the diverse needs of businesses, bloggers, entrepreneurs, and organizations seeking to establish a robust online presence.",      
  
        headline: "Empower your WooCommerce shop",   
        paragraph01: "At ReformedTech, we specialize in web development services tailored for WooCommerce, the globally acclaimed eCommerce platform. Our expertise extends to crafting personalized plugins, themes, and seamless software integrations, all designed to optimize your store for success. Our primary objective is clear: to boost your revenue. Navigating high traffic, guiding buyers through their shopping experience, and simplifying site management are second nature to us. By adopting a strategic approach to your WooCommerce store, you'll not only save valuable time but also witness remarkable sales growth.",      
  
        service: [
          {
            icon: serviceIcon01,
            title: "Build WooCommerce store",
            description: "At Build WooCommerce Store, we specialize in creating powerful and captivating e-commerce experiences that drive your business growth. Our expert team is dedicated to turning your vision into reality, building a WooCommerce store that not only showcases your products but also delivers a seamless and delightful shopping journey for your customers."
          },
          {
            icon: serviceIcon02,
            title: "Build Elementor website",
            description: "Ready to transform your online presence with a captivating Elementor website? Contact Build Elementor Website today and let's embark on a journey to create a digital masterpiece that leaves a lasting impression. Whether you're a business, creative professional, or entrepreneur, we're here to bring your Elementor website dreams to life."
          },
          {
            icon: serviceIcon03,
            title: "Develop WordPress plugin",
            description: "We specialize in turning your innovative ideas into fully functional and dynamic WordPress plugins. Our dedicated team of developers is passionate about creating custom solutions that enhance the functionality and extend the capabilities of your WordPress website, bringing your vision to life."
          },
          {
            icon: serviceIcon04,
            title: "Customize WordPress plugin",
            description: "At Customize WordPress Plugin, we specialize in tailoring and fine-tuning WordPress plugins to perfectly match your unique needs and requirements. Our dedicated team of experts is committed to taking your existing plugin to new heights, unlocking its full potential and ensuring it seamlessly integrates with your website for a truly bespoke experience."
          },
          {
            icon: serviceIcon05,
            title: "Design WordPress Theme",
            description: "Ready to elevate your online presence with a captivating WordPress theme? Contact Design WordPress Theme today and let's embark on a journey to create a visually stunning and user-friendly website that leaves a lasting impact. Whether you're a business, blogger, artist, or entrepreneur, we're here to turn your vision into a design masterpiece that reflects your uniqueness.",
            noMargin: "mb-lg-0"
          },
          {
            icon: serviceIcon06,
            title: "Customize WordPress Theme",
            description: "At Customize WordPress Theme, we specialize in tailoring and refining WordPress themes to perfectly align with your unique vision and requirements. Our dedicated team of designers and developers is committed to transforming off-the-shelf themes into personalized masterpieces that showcase your brand identity and deliver an exceptional user experience.",
            noMargin: "mb-lg-0"
          }                                               
        ]               
      };
    },
    head({ $seo }) {
      return $seo({
        title: "WordPress Development Service | Tailored eCommerce Solution",
        description: "Elevate your online business with our specialized WordPress and WooCommerce development services. We are experts in theme, plugin, elementor development."
      });
    }   
  };
  </script>
  <style>
  .hyperLink{
    color: #212529
  }
  </style>