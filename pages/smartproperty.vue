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
import smartproperty from "~/assets/images/projects/smart-property-full.png";

export default {
    components: {
        HeaderPrimary,
        CaseDetails,
    },
    data() {
        return {
            title: "Smart Property",
            subTitle: "",
            caseImg: smartproperty,
            caseAlt: "Smart Property",
            caseName: "Smart Property",
            caseDuration: "2018 - 2020",
            caseDescription: "SmartProperty is a collaborative, paperless, and social property management solution. It allows you to manage your residential or commercial property without any physical contact. You can monitor the visitor log, maintenance requests from residence, collecting rents and overall staff management for your property and many more. It’s a SaaS product and we can set you up within 24 hours.Do you have a similar project in mind? <a href='/contact/'>Contact us</a> today!"
            }
    },
    head({ $seo }) {
    return $seo({
      title: "Smart Property | ReformedTech",
      description: "A property management system which will enable you to manage your properties from renting to tracking the premises and much more."
    });
  }        
}

</script>