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
import childhood from "~/assets/images/projects/childhood-complete-full.png";

export default {
    components: {
        HeaderPrimary,
        CaseDetails,
    },
    data() {
        return {
            title: "Childhood Complete",
            subTitle: "",
            caseImg: childhood,
            caseAlt: "Childhood Complete",
            caseName: "Childhood Complete",
            caseDuration: "2020 - 2021",
            caseDescription: "Childhood Complete is for the site to become the singular destination for identifying parts and accessories for ALL of your vintage toy and action figures lines.Do you have a similar project in mind? <a href='/contact/'>Contact us</a> today!"
            }
    },
    head({ $seo }) {
    return $seo({
      title: "Childhood Complete | ReformedTech",
      description: "Start your own business with the help of an offshore developer! We have a wide selection of talented professionals waiting to help you out."
    });
  }             
}

</script>