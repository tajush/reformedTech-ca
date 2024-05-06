<template>
    <section>
        <HeaderPrimary :title="title" :subTitle="subTitle" />
        <CaseDetails :caseImg="caseImg" :caseAlt="caseAlt" :caseName="caseName" :caseDescription="caseDescription"
            :caseDuration="caseDuration">
        </CaseDetails>
    </section>
</template>

<script>

import HeaderPrimary from "~/components/HeaderPrimary";
import CaseDetails from "~/components/CaseDetails";
import dokanepos from "~/assets/images/projects/dokane-full.png";


export default {
    components: {
        HeaderPrimary,
        CaseDetails,
    },
    data() {
        return {
            title: "DokanE Pos",
            subTitle: "",
            caseImg: dokanepos,
            caseAlt: "DokanE Pos",
            caseName: "DokanE Pos",
            caseDuration: "2022 - 2023",
            caseDescription: "DokanE is point-of-sale software crafted for your restaurant, retail store, cafe, bar, bakery, coffee shop, grocery, salon, spa, car wash, food truck, and pizzeria by Intuition Systems. Sell in store and online: complete retail management software for all businesses. DokanE is a POS application that provides all the essential features retailers and restaurant owners need to deal with orders.Do you have a similar project in mind? <a href='/contact/'>Contact us</a> today!"
        }
    },
    head({ $seo }) {
        return $seo({
            title: "DokanE is an all-in-one POS solution | ReformedTech",
            description: "DokanE is a retail point-of-sale system that lets you control your business from one place! Complete retail management software for all businesses."
        });
    }
}

</script>