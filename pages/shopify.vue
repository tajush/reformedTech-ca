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

import serviceIcon01 from "~/assets/images/shopify/1.svg";
import serviceIcon02 from "~/assets/images/shopify/2.svg";
import serviceIcon03 from "~/assets/images/shopify/3.svg";
import serviceIcon04 from "~/assets/images/shopify/4.svg";
import serviceIcon05 from "~/assets/images/shopify/5.svg";
import serviceIcon06 from "~/assets/images/shopify/6.svg";

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
      title: "Shopify Development Services",
      subTitle:
        "An affordable agency of expert Shopify Developers that provides high-quality, trusted services for eCommerce websites.",
      header: "Looking for a Custom Web Design / Development?",
      subHeader: "We will turn your ideas to viable product",
      buttonName: "Get a quote now", 

      ServicesHeadline: "Our Shopify Services",
      ServicesDescription: "We are your trusted partners in harnessing the full potential of Shopify to elevate your e-commerce journey. Our comprehensive range of Shopify services is designed to empower your business, whether you're a budding startup or an established enterprise.",      

      headline: "Superior developer journey",   
      paragraph01: "Craft, personalize, and expand each element of the commerce stack—ranging from the front-end storefront to the checkout process and backend integrations. This empowers you to design distinctive encounters for your brand or cater to numerous merchants across the world.",      

      service: [
        {
          icon: serviceIcon01,
          title: "Build Shopify store",
          description: "Let us lay the foundation for your success. We set up your Shopify store with precision, incorporating all the essential elements to kick-start your online presence."
        },
        {
          icon: serviceIcon02,
          title: "Customize Shopify store",
          description: "Slow load times can deter potential customers. Our experts fine-tune your store for optimal performance, keeping visitors engaged and conversions soaring."
        },
        {
          icon: serviceIcon03,
          title: "Develop Shopify App",
          description: "Leave the technical intricacies to us. We handle the complexities of integrations, payment gateways, and performance optimization, guaranteeing a smooth and efficient online shopping experience."
        },
        {
          icon: serviceIcon04,
          title: "Customize Shopify App",
          description: "Enhance functionality with seamless third-party app integrations. We help you select and integrate the right apps to elevate your store's capabilities."
        },
        {
          icon: serviceIcon05,
          title: "Design Shopify Theme",
          description: "A captivating and user-friendly design is crucial for online success. Our design wizards create visually stunning and intuitive Shopify stores that leave a lasting impression on your customers.",
          noMargin: "mb-lg-0"
        },
        {
          icon: serviceIcon06,
          title: "Customize Shopify Theme",
          description: "Stand out in the digital realm with a tailor-made Shopify theme that reflects your brand's essence while captivating your audience.",
          noMargin: "mb-lg-0"
        }                                               
      ]               
    };
  },
  head({ $seo }) {
    return $seo({
      title: "Expert Shopify Development Service | Custom eCommerce Solution",
      description: "Unlock your e-commerce potential with our top-notch Shopify development services. Explore our comprehensive range of Shopify development services today."
    });
  }   
};
</script>
<style>
.hyperLink{
  color: #212529
}
</style>