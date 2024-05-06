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
    <!-- <BusinessGrowth 
      :businessList="businessList"
    />   -->
    <!-- <CaseStudy/> -->
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

import serviceIcon01 from "~/assets/images/digitalmarketing/01.svg";
import serviceIcon02 from "~/assets/images/digitalmarketing/02.svg";
import serviceIcon03 from "~/assets/images/digitalmarketing/03.svg";
import serviceIcon04 from "~/assets/images/digitalmarketing/04.svg";
import serviceIcon05 from "~/assets/images/digitalmarketing/05.svg";
import serviceIcon06 from "~/assets/images/digitalmarketing/06.svg";

import HeaderPrimary from "~/components/HeaderPrimary";
import CommonPartner from "~/components/CommonPartner";
import CommonServices from "~/components/CommonServices";
import CommonProcess from "~/components/CommonProcess";
import BusinessGrowth from "~/components/DigitalMarketing/BusinessGrowth";
// import CaseStudy from "~/components/CaseStudy";
import CallToAction from "~/components/CallToAction";

export default {
  components: {
    HeaderPrimary,
    CommonPartner,
    CommonServices,
    CommonProcess,
    // CaseStudy,
    CallToAction,
    CommonProcess,
    BusinessGrowth
},
  data() {
    return {
      title: "Digital Marketing Services",
      subTitle:
        "Make your marketing strategy more impressive, and you'll quickly conquer the world of digital marketing.",
      header: "Looking for a Custom Web Design / Development?",
      subHeader: "We will turn your ideas to viable product",
      buttonName: "Get a quote now", 

      ServicesHeadline: "Our Digital Marketing Services",
      ServicesDescription: "We deliver dynamic digital marketing services to our clients to ensure widespread promotion and an increased client base.",      

      headline: "Rule over the digital world",   
      paragraph01: "Take charge of your company's digital marketing strategy online. We utilise a variety of cutting-edge, conversion-based techniques that provide tangible, measurable business outcomes for our customers, making us far more than your standard local marketing firm.",    
      paragraph02: "Your website, social media, paid advertisements, and other <a class='hyperLink text-decoration-none' href='/web/'>web based platforms</a> will all be used to boost your online exposure thanks to the digital business plan that ReformedTech’s digital marketing solutions specialists will develop for you. In addition to content marketing, copywriting, SEO services, performance optimization, social media, conversion, and ppc management, we will put together a comprehensive digital plan for you.",

      processHeadline: "Our Digital Marketing Process",
      processDescription: "We follow a simple six step procedure to make sure that the best digital marketing services are just one click away from you.",

      process: [
        {
          icon: processIcon01,
          arrow: processArrow,
          title: "Keyword Research"
        },
        {
          icon: processIcon02,
          arrow: processArrow,
          title: "Competitor Analysis"
        },
        {
          icon: processIcon03,
          arrow: processArrow,
          title: "On-Page Optimization"
        },
        {
          icon: processIcon04,
          arrow: processArrow,
          title: "Off-Page Optimization"
        },
        {
          icon: processIcon05,
          arrow: processArrow,
          title: "Social Media Marketing"
        },
        {
          icon: processIcon06,
          arrow: processArrow,
          title: "Reporting",
          noLastArrow: "d-none"          
        }
      ], 
      
      service: [
        {
          icon: serviceIcon01,
          title: "On-Page Optimization",
          description: "On-page SEO lets you  optimise your website's pages to boost rankings and user experience."
        },
        {
          icon: serviceIcon02,
          title: "Off-Page Optimization",
          description: "Optimise items that are not on your website such as, backlinks and social media and more."
        },
        {
          icon: serviceIcon03,
          title: "Search Engine Optimization",
          description: "Increase the number and quality of search engine traffic to a website or web page via search engine optimization."
        },
        {
          icon: serviceIcon04,
          title: "Local Business Optimization",
          description: "Local SEO is a search engine optimization (SEO) method that helps your business appear more prominently in Google's local search results."
        },
        {
          icon: serviceIcon05,
          title: "Social Media Marketing",
          description: "Make use of social media to increase visibility and attract traffic to your websites. Connect and interact with current and  potential consumers.",
          noMargin: "mb-lg-0"
        },
        {
          icon: serviceIcon06,
          title: "Paid Search Advertising",
          description: "We will assist you in paying search engines to position your adverts higher on relevant search engine results pages (SERPs) in order to drive visitors to their site.",
          noMargin: "mb-lg-0"
        }                                               
      ],
      businessList: [
        {
          item: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },        
        {
          item: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",          
        },
        {
          item: "It is a long established fact that a reader will be distracted by the readable content."          
        }
      ],                
    };
  },
  head({ $seo }) {
    return $seo({
      title: "Digital Marketing Services | ReformedTech",
      description: "A digital marketing agency for your business. We design marketing campaigns that help your cause create impact. Friendly team. Proven results."
    });
  }   
};
</script>
<style>
.hyperLink{
  color: #212529
}
</style>