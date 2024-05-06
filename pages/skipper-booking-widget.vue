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
import bookingWidget from "~/assets/images/projects/booking-widget-full.png";

export default {
    components: {
        HeaderPrimary,
        CaseDetails,
    },
    data() {
        return {
            title: "Skipper Booking Widget",
            subTitle: "",
            caseImg: bookingWidget,
            caseAlt: "Skipper Booking Widget",
            caseName: "Skipper Booking Widget",
            caseDuration: "2021 - Continue",               
            caseDescription: "On 1’st April of 2022 we started working on a project to build a Booking widget for Skipper Hospitality. The service we provided them included software development, front-end development, back-end development, web development, DevOps, QA, web design, web application development and UX/UI design. We ended up creating a “Booking Engine” for them using 'Protractor' as automation tools.Do you have a similar project in mind? <a href='/contact/'>Contact us</a> today!"
            }
    },
    head({ $seo }) {
    return $seo({
      title: "Skipper Booking Widget | ReformedTech",
      description: "The service we provided them included software development, web development, DevOps, QA, web design, web application development and UX/UI design."
    });
  }         
}

</script>