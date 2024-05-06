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
import threefold from "~/assets/images/projects/thr3efold-full.png";

export default {
    components: {
        HeaderPrimary,
        CaseDetails,
    },
    data() {
        return {
            title: "Thr3efold",
            subTitle: "",
            caseImg: threefold,
            caseAlt: "Thr3efold",
            caseName: "Thr3efold",
            caseDuration: "2018 - Continue",
            caseDescription: "THR3EFOLD is a digital platform for ethical manufacturing. They provide a platform where manufacturers find the ethical certified factories to produce their products. We have built their web application from scratch and still give them continuous service to remove any bugs or update any operations. We are acting as their tech team.Do you have a similar project in mind? <a href='/contact/>Contact us</a> today!"
            }
    },
    head({ $seo }) {
    return $seo({
      title: "Thr3efold | ReformedTech",
      description: "THR3EFOLD is a market place where ethical manufacturing certified garments sell their products to the brands."
    });
  }         
}

</script>