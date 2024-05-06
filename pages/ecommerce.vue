<template>
  <section>
    <HeaderPrimary :title="title" :subTitle="subTitle" />
    <CommonPartner 
      :headline="headline"
      :paragraph01="paragraph01"
      :paragraph02="paragraph02"
    />
    <CommonServices
      :ServicesHeadline="ServicesHeadline"
      :ServicesDescription="ServicesDescription"
      :service="service"
    />   
    <CommonProcess
      :process="process"
      :processHeadline="processHeadline"
      :processDescription="processDescription"
    /> 
    <CallToAction2
      :header="header"
      :subHeader="subHeader"
      :buttonName="buttonName"
    />
  </section>
</template> 

<script>

import processIcon01 from "~/assets/images/process01.svg";
import processIcon02 from "~/assets/images/process02.svg";
import processIcon03 from "~/assets/images/process03.svg";
import processIcon04 from "~/assets/images/process04.svg";
import processIcon05 from "~/assets/images/process05.svg";
import processIcon06 from "~/assets/images/process06.svg";

import processArrow from "~/assets/images/arrow.svg";

import serviceIcon01 from "~/assets/images/ecommerce/01.svg";
import serviceIcon02 from "~/assets/images/ecommerce/02.svg";
import serviceIcon03 from "~/assets/images/ecommerce/03.svg";
import serviceIcon04 from "~/assets/images/ecommerce/04.svg";
import serviceIcon05 from "~/assets/images/ecommerce/05.svg";
import serviceIcon06 from "~/assets/images/ecommerce/06.svg";

import HeaderPrimary from "~/components/HeaderPrimary";
import CommonPartner from "~/components/CommonPartner";
import CommonServices from "~/components/CommonServices";
import CommonProcess from "~/components/CommonProcess";
import CallToAction2 from "~/components/CallToAction2";

export default {
  components: {
    HeaderPrimary,
    CommonPartner,
    CommonServices,
    CommonProcess,
    CallToAction2,
    CommonProcess,
},
  data() {
    return {
      title: "Ecommerce Services",
      subTitle:
        "With the aid of our Ecommerce solution, you can provide a seamless experience for your consumers across all platforms.",
      header: "Looking for a Shopify / WordPress Developer?",
      subHeader: "We will turn your ideas to viable product",
      buttonName: "Contact us", 

      ServicesHeadline: "ECommerce Development Services",
      ServicesDescription: "With the help of a team of devoted professionals working in the market with strong technical competency in creating fantastic e-commerce sites we deliver the following services:",      

      headline: "We are your digital partner in growth",   
      paragraph01: "Over the past decade, we've honed our skills in crafting websites that innovate, engage, and drive results. Through a fusion of human-centric design and development ingenuity, we've mastered the art of delivering digital solutions that exceed expectations. Hire our top web developers to transform your vision into reality. Plus, avail yourself of our top-notch ecommerce <a class='hyperLink text-decoration-none' href='/web/'>web development services.</a> for unparalleled online success. ",    
      paragraph02: "ReformedTech has been a significant player in the market for more than ten years as an internationally recognized supplier of e-commerce development services with a presence in the USA. The first step in our clear e-commerce development process is UX/UI design, followed by the development phase, concurrent content production, security and performance analysis, and lastly technical support.",

      process: [
        {
          icon: processIcon01,
          arrow: processArrow,
          title: "Requirement & Planning"
        },
        {
          icon: processIcon02,
          arrow: processArrow,
          title: "Wireframe Design"
        },
        {
          icon: processIcon03,
          arrow: processArrow,
          title: "Product Management"
        },
        {
          icon: processIcon04,
          arrow: processArrow,
          title: "Shopping Cart"
        },
        {
          icon: processIcon05,
          arrow: processArrow,
          title: "Multiple Payment Method"
        },
        {
          icon: processIcon06,
          arrow: processArrow,
          title: "QA & Deployment",
          noLastArrow: "d-none"          
        }
      ], 

      processHeadline: "How Our ECommerce Service Works",
      processDescription: "We want to make the entire ECommerce development process simple. Furthermore, we do not want our connection with our clients to cease after deployment, therefore we are always accessible to assist even afterwards.",      
      
      service: [
        {
          icon: serviceIcon01,
          title: "Responsive Design Themes",
          description: "The layout of a responsive WordPress theme fluidly changes depending on the resolution and size of the screen."
        },
        {
          icon: serviceIcon02,
          title: "Flexible Content Management",
          description: "With a flexible CMS, websites can be structured so that users can create, update, and publish information without any coding knowledge."
        },
        {
          icon: serviceIcon03,
          title: "Store Management Features",
          description: "We aim to enhance your website's user experience (UX) and organise basic tasks to carry out efficient client-to-business exchanges."
        },
        {
          icon: serviceIcon04,
          title: "Multiple payment options",
          description: "We offer multiple payment options with debit or credit card from customers via a e-payment gateway."
        },
        {
          icon: serviceIcon05,
          title: "Inbuilt Security System",
          description: "We offer built-in antivirus, firewall, encryption, and other data protection and everything you need to protect your ecommerce site from threats.",
          noMargin: "mb-lg-0"
        },
        {
          icon: serviceIcon06,
          title: "SEO friendly code and layout",
          description: "This is most likely the most crucial element in web design. It includes a number of features that make it simpler to search web contents and provide speedy service despite the heavy internet traffic.",
          noMargin: "mb-lg-0"
        }                                               
      ]      
    };
  },
  head({ $seo }) {
    return $seo({
      title: "Ecommerce | ReformedTech",
      description: "ReformedTech, as a prominent e-commerce development company, enables businesses of all kinds to build visually stunning and conversion-focused e-stores."
    });
  }
};
</script>