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
import caseImg01 from "~/assets/images/projects/agent-banking-full.png";

export default {
    components: {
        HeaderPrimary,
        CaseDetails,
    },
    data() {
        return {
            title: "Agent Banking",
            subTitle: "",
            caseImg: caseImg01,
            caseAlt: "Agent Banking",
            caseName: "Agent Banking",
            caseDuration: "2017 - Continue",            
            caseDescription: "We have developed an “Agent Banking System” for the in-House, a software development company based in New York. We started working on the project on 16’th December 2020 and ended the project on 21’st October 2021.  We faced some challenges while working on the project with understanding & implementing the banking system, different types of banking calculations, integrating banking staff management and providing different types of user roles.  With cooperation of the entire team, we have dealt with the client requirements and identified each issue separately and brought the required outcome by solving all these issues. We have used Html, CSS, Vuetify(VueJS based CSS framework), NuxtJS(Javascript framework) on the frontend and Laravel, MySQL on the backhand to develop the solutions.Do you have a similar project in mind? <a href='/contact/'>Contact us</a> today!"
            }
    },
    head({ $seo }) {
    return $seo({
      title: "Agent Banking | ReformedTech",
      description: "We provide custom software development services to companies of any size. We offer a range of software development technologies & frameworks."
    });
  }      
}

</script>