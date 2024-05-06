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
    <!-- <CaseStudy/>  -->
    <CallToAction
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

import serviceIcon01 from "~/assets/images/mobile/01.svg";
import serviceIcon02 from "~/assets/images/mobile/02.svg";
import serviceIcon03 from "~/assets/images/mobile/03.svg";
import serviceIcon04 from "~/assets/images/mobile/04.svg";
import serviceIcon05 from "~/assets/images/mobile/05.svg";
import serviceIcon06 from "~/assets/images/mobile/06.svg";

import HeaderPrimary from "~/components/HeaderPrimary";
import CommonPartner from "~/components/CommonPartner";
import CommonServices from "~/components/CommonServices";
import CommonProcess from "~/components/CommonProcess";
// import CaseStudy from "~/components/CaseStudy";
import CallToAction from "~/components/CallToAction";

export default {
  components: {
    HeaderPrimary,
    CommonPartner,
    CommonServices,
    CommonProcess,
    CallToAction,
    CommonProcess,
    // CaseStudy
},
  data() {
    return {
      title: "Mobile App Development",
      subTitle:
        "Utilise a mobile application that is compatible with both IOS and Android devices to reach more customers via their smartphones.",
      header: "Looking for a Custom Web Design / Development?",
      subHeader: "We will turn your ideas to viable product",
      buttonName: "Get a quote now", 

      ServicesHeadline: "Mobile App Development Services",
      ServicesDescription: "We provide the following services with the assistance of a team of dedicated specialists operating in the industry with great technical proficiency in producing outstanding Mobile App sites:",      

      headline: "Go Mobile With Your Business",   
      paragraph01: "Investing in mobile application development services for your company can greatly enhance client engagement. Our ReformedTech <a class='hyperLink text-decoration-none' href='/offshore/'>developer team.</a> specializes in creating applications that amplify your enterprise's exposure. ",    
      paragraph02: "With a focus on cutting-edge technology, our solutions are crafted by a programming and development staff with extensive expertise in the field. Whether for iOS or Android devices, our professional mobile team designs feature-rich apps for both the App Store and Google Play. We specialize in creating apps that are user-friendly, visually captivating, and engaging.",

      process: [
        {
          icon: processIcon01,
          arrow: processArrow,
          title: "Inception"
        },
        {
          icon: processIcon02,
          arrow: processArrow,
          title: "Design"
        },
        {
          icon: processIcon03,
          arrow: processArrow,
          title: "Development"
        },
        {
          icon: processIcon04,
          arrow: processArrow,
          title: "Stabilization"
        },
        {
          icon: processIcon05,
          arrow: processArrow,
          title: "Deployment"
        },
        {
          icon: processIcon06,
          arrow: processArrow,
          title: "Maintenance",
          noLastArrow: "d-none"          
        }
      ], 

      processHeadline: "How Our Mobile App Development Process Works",
      processDescription: "We make it simple to develop mobile apps. Instead of months, our tried-and-true process often shortens the time between the initial application development stage and the final result.",
      
      service: [
        {
          icon: serviceIcon01,
          title: "iOS and Android applications development",
          description: "We provide mobile app development services for both the iOS and Android platforms so that you may reach as many clients as possible."
        },
        {
          icon: serviceIcon02,
          title: "Native and cross-platform Application development",
          description: "We want to give our customers as many platform development alternatives as possible so that they may choose what is best for them."
        },
        {
          icon: serviceIcon03,
          title: "Interactive UI/UX design",
          description: "The purpose of interaction designers is to improve the interactive experience when a user interacts with a product."
        },
        {
          icon: serviceIcon04,
          title: "Documentation and  prototyping",
          description: "A mobile app interactive mockup features major user interfaces, displays, and simulated operations but no working code or final design pieces."
        },
        {
          icon: serviceIcon05,
          title: "Automated QA and testing",
          description: "QA automation refers to the use of automated testing tools to perform tests on software in development and report on the results.",
          noMargin: "mb-lg-0"
        },
        {
          icon: serviceIcon06,
          title: "Maintenance and post-warranty support",
          description: "Our service does not just end with product development. We provide after sales support to our customers as well.",
          noMargin: "mb-lg-0"
        }                                               
      ]      
    };
  },
  head({ $seo }) {
    return $seo({
      title: "Mobile App Development | ReformedTech",
      description: "We are a mobile application development agency that builds custom apps for your business. We offer a wide range of services."
    });
  }
};
</script>