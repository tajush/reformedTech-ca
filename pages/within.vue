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
import within from "~/assets/images/projects/within-full.png";

export default {
    components: {
        HeaderPrimary,
        CaseDetails,
    },
    data() {
        return {
            title: "WITHIN’s project",
            subTitle: "",
            caseImg: within,
            caseAlt: "WITHIN’s project",
            caseName: "WITHIN’s project",
            caseDuration: "February, 2022 - May, 2022",               
            caseDescription: "Working with WITHIN, we completed the Ad Pacer project. They have a wide range of clients and are a multinational digital company. In February 2022, work on the project began, and it was completed in May 2022. In the course of the project, we ran into a number of challenges, including the authentication of particular email domains and user kinds, calendar synchronization with the Google Ads API, and budget scheduling of Google Ads from our system. These issues were fixed by using Oauth v2.0 with Google Console for authentication, Customer Calendar View in accordance with the specifications for calendar synchronization, and Cronjob for budget scheduling. Node.js, Typescript, and PostGreSQL were utilized for the backend of this project, and Next.js and Tailwind CSS were used for the front end.Do you have a similar project in mind? <a href='/contact/'>Contact us</a> today!"
            }
    },
    head({ $seo }) {
    return $seo({
      title: "Within Project | ReformedTech",
      description: "This is a budget scheduler app for google ads. The google ads api is used to update the budget, time and collect history in this real-time application."
    });
  }      
}

</script>