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
import cabiy from "~/assets/images/projects/cabiy-nyc-full.png";


export default {
    components: {
        HeaderPrimary,
        CaseDetails,
    },
    data() {
        return {
            title: "Cabiy Nyc",
            subTitle: "",
            caseImg: cabiy,
            caseAlt: "Cabiy Nyc",
            caseName: "Cabiy Nyc",
            caseDuration: "2018 - 2019",            
            caseDescription: "Cabiy is where you can connect with up to date listings for renting a car or finding a car to drive. Search through owners and drivers from multiple services like Yellow or Green cab, Uber, Lyft, Limos and much more in your location of choice.Do you have a similar project in mind? <a href='/contact/'>Contact us</a> today!"
            }
    },
    head({ $seo }) {
    return $seo({
      title: "Cabiy Nyc | ReformedTech",
      description: "It\'s a cab management app based on USA. All the information about cab, uber and other rental vehicle will be found in one place."
    });
  }               
}

</script>