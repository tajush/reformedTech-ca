<template>
  <section class="our-team">
    <b-container v-if="!$apollo.queries.aboutPage.loading">
      <header class="our-team__title">
        <h2>{{aboutPage.MeetOurTeam.title}}</h2>
        <p>
          {{aboutPage.MeetOurTeam.subtitle}}
        </p>
      </header>
      <b-row class="justify-content-center">
        <b-col
          class="our-team__body mb-4"
          v-for="(profile, i) in aboutPage.ProfileInfo"
          :key="i"
          cols="10"
          md="6" 
          lg="3"
        >
          <article class="our-team__body-content">
            <a :href="profile.linkedInLink" target="_blank" :style="{ textDecoration: 'none'}">
              <b-img :src="getImageUrl(profile)" fluid loading="lazy"></b-img>
              <header class="our-team__body-content-designation">
                <h4>{{ profile.name }}</h4>
                <p>{{ profile.designation }}</p>
              </header>
            </a>
          </article>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>

import gql from "graphql-tag";
import {baseUrl} from "../../utils/base_url";

const PROFILE_SECTION_CONTENT = gql`
  query getAboutpageDescriptionSection{
    aboutPage{
      MeetOurTeam{
        title,
        subtitle
      },
      ProfileInfo{
        name,
        designation,
        linkedInLink,
        profileImage{
          url,
          alternativeText
        }
      }
    }
  }
`;

export default {
  apollo: {
    aboutPage: {
      query: PROFILE_SECTION_CONTENT,
      prefetch: true,
    },
  },
  data() {
    return {
      baseUrl,
      profiels: [
        {
          img: require("~/assets/images/team/sharier.png"),
          name: "Shahriar Mahmood",
          title: "Chief Executive Officer",
        },
        {
          img: require("~/assets/images/team/saikat.png"),
          name: "Atiquzzaman Soikat",
          title: "Chief Technology Officer",
        },
        {
          img: require("~/assets/images/team/zakaria.png"),
          name: "Zakaria Rony",
          title: "Chief Operating Officer",
        },
        {
          img: require("~/assets/images/team/nur.png"),
          name: "Nur Hossain",
          title: "Lead Developer",
        },
        {
          img: require("~/assets/images/team/asfaque.png"),
          name: "Ashfaqur Rahman",
          title: "Lead UI/UX Engineer",
        },
        {
          img: require("~/assets/images/team/sunny.png"),
          name: "Suny Ahmed",
          title: "Sr. Software Engineer",
        },

        {
          img: require("~/assets/images/team/kanak.png"),
          name: "Kaysarul Kanak",
          title: "Software Engineer",
        },
        {
          img: require("~/assets/images/team/ismail.png"),
          name: "Ismail Hossain",
          title: "Software Engineer",
        },
        {
          img: require("~/assets/images/team/mostofa.png"),
          name: "Mostafa Kamal",
          title: "Software Engineer",
        },
        {
          img: require("~/assets/images/team/suvo.png"),
          name: "Asif Suvo",
          title: "Jr. Software Engineer",
        },
        {
          img: require("~/assets/images/team/faisal.png"),
          name: "Faisal Feroze",
          title: "Jr. Software Engineer",
        },
        {
          img: require("~/assets/images/team/rabby.png"),
          name: "Rafiur Rabby ",
          title: "Sr. Full-Stack Developer",
        },
        {
          img: require("~/assets/images/team/sarjis.png"),
          name: "Sarjis Abdullah",
          title: "Full-Stack Developer",
        },

        {
          img: require("~/assets/images/team/tahsin.png"),
          name: "Tahsin Al Sayeed",
          title: "Full-Stack Developer",
        },
        {
          img: require("~/assets/images/team/nazmul.png"),
          name: "Nazmul Alam",
          title: "Sr. Front End Developer",
        },

        {
          img: require("~/assets/images/team/mehedi.png"),
          name: "Mehedi Bappi",
          title: "Front End Designer",
        },
        {
          img: require("~/assets/images/team/jewel.png"),
          name: "Ajgar Hossain",
          title: "Front End Developer",
        },
        {
          img: require("~/assets/images/team/zubayer.png"),
          name: "Malik Zubayer",
          title: "Front End Developer",
        },

        {
          img: require("~/assets/images/team/sojib.png"),
          name: "Tawhid Sajib",
          title: "Front End Developer",
        },

        {
          img: require("~/assets/images/team/meherab.png"),
          name: "Meherab Hossain",
          title: "Front End Developer",
        },
        {
          img: require("~/assets/images/team/niaz.jpg"),
          name: "Niaz Morshed",
          title: "SQA Engineer",
        },
        {
          img: require("~/assets/images/team/arif.png"),
          name: "Ariful Haque",
          title: "Sr. UI/UX Designer",
        },
        {
          img: require("~/assets/images/team/fahim.png"),
          name: "Fahim Montasir",
          title: "Business Development Executive",
        },
      ],
      ismailImg: 'https://dashboard.reformedtech.org/uploads/Rectangle_1563_7d86587496.jpg?58180.59999990463'
    };
  },

  methods: {
    getImageUrl(profile){
      if(profile.name == 'Ismail Hossain'){
        return this.ismailImg;
      }
      return this.baseUrl + profile.profileImage[0].url;
    }
  }
};
</script>