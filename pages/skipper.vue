<template>
    <section>
        <HeaderPrimary :title="title" :subTitle="subTitle"/>
        <CaseDetails 
            :caseImg="caseImg"
            :caseAlt="caseAlt" 
            :caseName="caseName" 
            :caseDescription="caseDescription"
            :caseDuration="caseDuration"            
        >
        </CaseDetails>
    </section>
</template>

<script>

import HeaderPrimary from "~/components/HeaderPrimary";
import CaseDetails from "~/components/CaseDetails";
import skipper from "~/assets/images/projects/skipper-full.png";

export default {
    components: {
        HeaderPrimary,
        CaseDetails,
    },
    data() {
        return {
            title: "Skipper’s Projects",
            subTitle: "",
            caseImg: skipper,
            caseAlt: "Skipper’s Projects",
            caseName: "Skipper’s Projects",
            caseDuration: "2021 - Continue",               
            caseDescription: "For Skipper, we contributed to a number of projects including Marram, Ameswell, Journey, Roger, Sundance, Pod, CMS, Cash-widget, and PMS. Software Development, Front-End Development, Back-End Development, Web Development, DevOps, QA, Web Design, Web Application Development, and UX/UI Design were among the service areas offered. Most of the work was completed in the period from February 2021 to July 2022. The primary difficulties we encountered during the project were critical defects, inadequate bug-finding tools, a lack of a QA methodology, and issues with bug life cycles. By using an appropriate QA procedure and face-to-face interaction with the seniors and clients, we were able to resolve all of these concerns. For the project, we utilized Agile Methodology, PM software, JavaScript, and Java technologies.Do you have a similar project in mind? <a href='/contact/'>Contact us</a> today!"
            }
    },
    head({ $seo }) {
    return $seo({
      title: "Skipper Project | ReformedTech",
      description: "Skipper is a USA company who provides technical solutions to the hotels such as CMS, Booking engine etc. SVELTE, python are used to build their applications."
    });
  }         
}

</script>