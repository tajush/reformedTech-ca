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

import serviceIcon01 from "~/assets/images/dev/01.svg";
import serviceIcon02 from "~/assets/images/dev/02.svg";
import serviceIcon03 from "~/assets/images/dev/03.svg";
import serviceIcon04 from "~/assets/images/dev/04.svg";
import serviceIcon05 from "~/assets/images/dev/05.svg";
import serviceIcon06 from "~/assets/images/dev/06.svg";

import HeaderPrimary from "~/components/HeaderPrimary";
import CommonPartner from "~/components/CommonPartner";
import CommonServices from "~/components/CommonServices";
import CommonProcess from "~/components/CommonProcess";
import CaseStudy from "~/components/CaseStudy";
import CallToAction from "~/components/CallToAction";

export default {
  components: {
    HeaderPrimary,
    CommonPartner,
    CommonServices,
    CommonProcess,
    CallToAction,
    // CaseStudy,
    CommonProcess
},
  data() {
    return {
      title: "DevOps Services",
      subTitle:
        "Automate your software development process to complete tasks more quickly and efficiently.",
      header: "Looking for a Custom Web Design / Development?",
      subHeader: "We will turn your ideas to viable product",
      buttonName: "Get a quote now", 

      ServicesHeadline: "Our DevOps Services",
      ServicesDescription: "We deliver <a class='hyperLink text-decoration-none' href='/web/'>beautiful and dynamic websites</a> to our clients using robust computer programming, user-friendly designs, and cutting-edge technology.",

      headline: "Minimum Cost Maximum Output",   
      paragraph01: "In today's fast-paced digital landscape, the ability to continuously enhance software functionalities is paramount. Our DevOps services seamlessly integrate development and operations, fostering transparent collaboration to accelerate software delivery sprints. By streamlining processes and leveraging automation, we empower your team to iterate rapidly and deliver high-quality software with greater efficiency and reliability.",    
      paragraph02: "Our DevOps specialists, who have years of expertise, are ready to help you with challenging procedures, no matter what your software difficulty is, and this is what makes ReformedTech the leading DevOps solutions provider. We can create <a class='hyperLink text-decoration-none' href='/offshore/'>customised software applications</a> and systems that are deployed quickly and kept up to date with modest and frequent upgrades utilising the DevOps technique.",

      process: [
        {
          icon: processIcon01,
          arrow: processArrow,
          title: "Plan"
        },
        {
          icon: processIcon02,
          arrow: processArrow,
          title: "Build"
        },
        {
          icon: processIcon03,
          arrow: processArrow,
          title: "CI/CD"
        },
        {
          icon: processIcon04,
          arrow: processArrow,
          title: "Monitor"
        },
        {
          icon: processIcon05,
          arrow: processArrow,
          title: "Operate"
        },
        {
          icon: processIcon06,
          arrow: processArrow,
          title: "Feedback",
          noLastArrow: "d-none"
        }
      ],

      processHeadline: "Our DevOps Deploy Process",
      processDescription: "We make it simple to bridge the gap between the development and IT operations teams. From product definition through deployment, the entire process is simple and straightforward.",

      service: [
        {
          icon: serviceIcon01,
          title: "Amazon EKS",
          description: "Amazon Elastic Kubernetes Service is an open-source solution for automating the deployment, scaling, and administration of docker."
        },
        {
          icon: serviceIcon02,
          title: "Automate Infrastructure",
          description: "We use technology to control the hardware, software, networking components, operating system (OS), and data storage components."
        },
        {
          icon: serviceIcon03,
          title: "CI/CD",
          description: "CI/CD is a means of delivering apps to clients on a regular basis by incorporating automation into the phases of app development."
        },
        {
          icon: serviceIcon04,
          title: "Amazon Cloud",
          description: "This is an Amazon company that offers on-demand cloud computing platforms including the planning, designing, managing, and supporting."
        },
        {
          icon: serviceIcon05,
          title: "DevOps Consulting",
          description: "We provide qualified DevOps professionals to handle a specific issue or teach staff on how to utilize DevOps technologies, and who operate in accordance with DevOps principles.",
          noMargin: "mb-lg-0"
        },
        {
          icon: serviceIcon06,
          title: "Cloud Migration",
          description: "The process of migrating data, apps, or other business pieces to a cloud computing environment is known as cloud migration.",
          noMargin: "mb-lg-0"
        }                                               
      ]
    };
  },
  head({ $seo }) {
    return $seo({
      title: "DevOps | ReformedTech",
      description: "Choose a reputable American offshore software development services provider if you're seeking a tech partner to boost your team with top talent."
    });
  }   
};
</script>
<style>
.hyperLink{
  color: #212529;
}
</style>