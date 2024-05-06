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
import legacy from "~/assets/images/projects/legacy-full.png";

export default {
    components: {
        HeaderPrimary,
        CaseDetails,
    },
    data() {
        return {
            title: "Legacy Lock",
            subTitle: "",
            caseImg: legacy,
            caseAlt: "Legacy Lock",
            caseName: "Legacy Lock",
            caseDuration: "2022 - Continue",            
            caseDescription: "For a client named Legacy Lock, we worked on the Legacy Lock project in April of 2022. For this client, we made a mobile application. This program aids in the production and security of video tales for generations and families, giving you access to a living time vault. Two MVPs have been made available. The process of mending and modification is currently underway. Although several of the features (notification, invite, and security setting) are only partially complete, some new features have been introduced. This app will soon have features like video recording, comments, video timeline, contact search, invite contacts, follow/unfollow user, notification work in progress, user profile, member profile, and followers video timeline. For this project, we used the following technologies: For Mobile - Flutter and for Backend - Aws, Lambda, Cognito, Api gateway, Dynamodb, Sqs, S3, Cloudfront, Mux.Do you have a similar project in mind? <a href='/contact/'>Contact us</a> today!"
            }
    },
    head({ $seo }) {
    return $seo({
      title: "Legacy Lock Project | ReformedTech",
      description: "We are using the latest in mobile application technologies and techniques, custom made to your specifications, which are configured to work like a native app."
    });
  }       
}

</script>