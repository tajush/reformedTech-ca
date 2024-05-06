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
import bookingEngine from "~/assets/images/projects/booking-engine-full.png";

export default {
    components: {
        HeaderPrimary,
        CaseDetails,
    },
    data() {
        return {
            title: "Skipper Booking Engine",
            subTitle: "",
            caseImg: bookingEngine,
            caseAlt: "Skipper Booking Engine",
            caseName: "Skipper Booking Engine",
            caseDuration: "2021 - Continue",               
            caseDescription: "We have started developing a “Booking Engine” for Skipper Hospitality from 17’th March 2022. Our goal is to build a booking engine widget where we can integrate any of the Hospitality related websites to do hotel reservations through CRSs or PMSs. We also aim to make faster communication between back-end and front-end services, and do the payment of hotel reservations in less development time and with minimal infrastructure setup. The solution we come up with must be PCI compliant. We have built a Booking Engine baked by a couple of gRPC services that are communicating with internal sub services, third-party CRSs or PMSs, and FE booking widgets to make hotel reservations faster. For the payment solution we have used VGS that is fixing our PCI compliant issue.Do you have a similar project in mind? <a href='/contact/'>Contact us</a> today!"
            }
    },
    head({ $seo }) {
    return $seo({
      title: "Skipper Booking Engine | ReformedTech",
      description: "We are a Software Development Company where we provide offshore development services including web applications, mobile apps, devops, etc."
    });
  }          
}

</script>