<template>
    <section class="casestudy">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <h3>Case Studies</h3>
                </b-col>
            </b-row>   
        </b-container>
        <b-container class="px-0">
            <VueSlickCarousel v-bind="slickOptions">
                <div v-for="(cases, i) in caseStudy" :key="i" class="casestudy__slider">
                    <a :href="cases.caseLink">
                        <b-img :src="cases.img" class="img-fluid" :alt="cases.caseAlt"></b-img>
                    </a>    
                    <div class="casestudy__info text-left">
                        <h4>
                            <a :href="cases.caseLink">{{ cases.caseName }}</a>
                        </h4>
                        <p>{{ cases.caseDesc }}</p>
                        <div class="casestudy__link">
                            <a :href="cases.caseLink">Read more &nbsp;&mdash;</a>
                        </div>
                    </div>
                </div>
            </VueSlickCarousel>             
        </b-container>
    </section>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel';
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import dokanepos from "~/assets/images/projects/dokane.png";
import smartproperty from "~/assets/images/projects/smart-property.jpg";
import pactfi from "~/assets/images/projects/pactfi.jpg";
import threefold from "~/assets/images/projects/threefold.jpg";
import skipper from "~/assets/images/projects/skipper.jpg";
import videotc from "~/assets/images/projects/videotc.jpg";
import childhoodcomplete from "~/assets/images/projects/childhood-complete.jpg";
import cabiy from "~/assets/images/projects/cabiy-nyc.jpg";
import within from "~/assets/images/projects/within.jpg";
import bookingwidget from "~/assets/images/projects/booking-widget.jpg";
import bookingengine from "~/assets/images/projects/booking-engine.jpg";
import agentbanking from "~/assets/images/projects/agent-banking.jpg";

export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
        slickOptions: {
        slidesToShow: 3,
        arrows: false,
        dots: true,
        draggable: false,   
        responsive: [           
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              },
            }                                      
        ]                
    },         
        caseStudy:[
            {
                img: dokanepos,
                caseName: "Dokane Pos",
                caseAlt: "Dokane Pos",
                caseDesc: "DokanE is point-of-sale software crafted for your restaurant, retail store, cafe ...",
                caseLink: "/dokanepos/"
            }, 
            {
                img: smartproperty,
                caseName: "Smart Property",
                caseAlt: "Smart Property",
                caseDesc: "SmartProperty is a collaborative, paperless, and social property management ...",
                caseLink: "/smartproperty/"
            },             
            {
                img: threefold,
                caseName: "Thr3efold",
                caseAlt: "Thr3efold",
                caseDesc: "THR3EFOLD is a digital platform for ethical manufacturing. They provide a ...",
                caseLink: "/threefold/"
            },             
            {
                img: cabiy,
                caseName: "Cabiy, NYC",
                caseAlt: "Cabiy, NYC",
                caseDesc: "Cabiy is where you can connect with up to date listings for renting a car or ...",
                caseLink: "/cabiy-nyc/"
            },              
            {
                img: childhoodcomplete,
                caseName: "Childhood Complete",
                caseAlt: "Childhood Complete",
                caseDesc: "Childhood Complete is for the site to become the singular destination for ...",
                caseLink: "/childhood-complete/"
            },            
            {
                img: within,
                caseName: "WITHIN’s project",
                caseAlt: "WITHIN’s project",
                caseDesc: "Working with WITHIN, we completed the Ad Pacer project. They have a wide range ...",
                caseLink: "/within/"
            },
            {
                img: videotc,
                caseName: "Nicholas Pothitakis’s Project",
                caseAlt: "Nicholas Pothitakis’s Project",
                caseDesc: "For a client named Nicholas Pothitakis, we worked on the VideoTC project in April ...",
                caseLink: "/nicholas-pothitakis/"
            },
            {
                img: skipper,
                caseName: "Skipper’s Projects",
                caseAlt: "Skipper’s Projects",
                caseDesc: "For Skipper, we contributed to a number of projects including Marram, Ameswell ...",
                caseLink: "/skipper/"
            },
            {
                img: pactfi,
                caseName: "Alexa Halcomb’s Project",
                caseAlt: "Alexa Halcomb’s Project",
                caseDesc: "In August 2021, Alexa Halcomb's PactFi began. For the business, we created the ...",
                caseLink: "/alexa-halcomb/"
            },
            {
                img: agentbanking,
                caseName: "In-house’s Project",
                caseAlt: "Agent Banking",
                caseDesc: "We have developed an “Agent Banking System” for the in-House, a software development ...",
                caseLink: "/in-house/"
            },
            {
                img: bookingwidget,
                caseName: "Skipper Booking Widget",
                caseAlt: "Skipper Booking Widget",
                caseDesc: "On 1’st April of 2022 we started working on a project to build a Booking widget for ...",
                caseLink: "/skipper-booking-widget/"
            },
            {
                img: bookingengine,
                caseName: "Skipper Booking Engine",
                caseAlt: "Skipper Booking Engine",
                caseDesc: "We have started developing a “Booking Engine” for Skipper Hospitality from 17’th ...",
                caseLink: "/skipper-booking-engine/"
            }                         
        ]
    }
  }
}

</script>