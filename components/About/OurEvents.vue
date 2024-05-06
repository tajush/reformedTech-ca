<template>
  <section class="our-event">
    <b-container>
      <header class="our-event__title">
        <h2>Our Events</h2>
        <p>
          Business advisory service advises current and future businesses
          prospects of a client, with the aim of advancing their business or
          company.
        </p>
      </header>
      <b-row class="justify-content-center">
        <b-col
          lg="6"
          v-for="(event, i) in events"
          :key="i"
          class="our-event__content"
        >
          <viewer :options="options">
            <b-row>
              <b-col lg="6">
                <b-img
                  class="our-event__content-mainImage"
                  :src="event.thumbnailMainImage"
                  :data-src="event.sourceMainImage"
                  :alt="event.alt"
                  fluid
                ></b-img>
              </b-col>
              <b-col lg="6">
                <b-row>
                  <b-col lg="6" v-for="(annual, i) in event.images" :key="i">
                    <b-img
                      class="our-event__content-annualImage"
                      :src="annual.thumbnail"
                      :data-src="annual.source"
                      :alt="annual.alt"
                      fluid
                    ></b-img>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </viewer>

          <p class="our-event__eventTitle">{{ event.title }}</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
import Vue from "vue";
Vue.use(Viewer);

export default {
  data() {
    return {
      options: {
        url: "data-src",
      },
      events: [
        {
          thumbnailMainImage: require("@/assets/images/about/annual-main.png"),
          sourceMainImage: require("@/assets/images/about/annual-main1.1.jpg"),
          alt: "Anniversery cake cutting ceremony of reformedtech",
          title: "4th Annual anniversary 2021",
          images: [
            {
              thumbnail: require("@/assets/images/about/annual1.png"),
              source: require("@/assets/images/about/annual1.1.jpg"),
              alt: "Three people eating",
            },
            {
              thumbnail: require("@/assets/images/about/annual2.png"),
              source: require("@/assets/images/about/annual2.1.jpg"),
              alt: "ReformedTech anniversary decoration and balloons",
            },
            {
              thumbnail: require("@/assets/images/about/annual3.png"),
              source: require("@/assets/images/about/annual3.1.jpg"),
              alt:
                "Two people standing infront of Reformedtech anniversary decoration",
            },

            {
              thumbnail: require("@/assets/images/about/annual4.png"),
              source: require("@/assets/images/about/annual4.1.jpg"),
              alt: "ReformedTech anniversary dinner",
            },
          ],
        },
        {
          thumbnailMainImage: require("@/assets/images/about/annual-main2.png"),
          sourceMainImage: require("@/assets/images/about/annual-main2.2.jpg"),
          alt: "Office annual program 1",
          title: "Skipper CMS launch program",
          images: [
            {
              thumbnail: require("@/assets/images/about/annual5.png"),
              source: require("@/assets/images/about/annual5.1.jpg"),
              alt: "Office annual program 2",
            },
            {
              thumbnail: require("@/assets/images/about/annual6.png"),
              source: require("@/assets/images/about/annual6.1.jpg"),
              alt: "Office annual program 3",
            },
            {
              thumbnail: require("@/assets/images/about/annual7.png"),
              source: require("@/assets/images/about/annual7.1.jpg"),
              alt: "Table full of food",
            },

            {
              thumbnail: require("@/assets/images/about/annual8.png"),
              source: require("@/assets/images/about/annual8.1.jpg"),
              alt: "Office annual program 4",
            },
          ],
        },
        {
          thumbnailMainImage: require("@/assets/images/about/annual-main3.png"),
          sourceMainImage: require("@/assets/images/about/annual-main3.1.jpg"),
          alt: "Office annual program 5",
          title: "3rd Annual tour 2020",
          images: [
            {
              thumbnail: require("@/assets/images/about/annual9.png"),
              source: require("@/assets/images/about/annual9.1.jpg"),
              alt: "Office annual program 6",
            },
            {
              thumbnail: require("@/assets/images/about/annual10.png"),
              source: require("@/assets/images/about/annual10.1.jpg"),
              alt: "Office annual program 7",
            },
            {
              thumbnail: require("@/assets/images/about/annual11.png"),
              source: require("@/assets/images/about/annual11.1.jpg"),
              alt: "Office annual program 8",
            },

            {
              thumbnail: require("@/assets/images/about/annual12.png"),
              source: require("@/assets/images/about/annual12.1.jpg"),
              alt: "Office annual program 9",
            },
          ],
        },
        {
          thumbnailMainImage: require("@/assets/images/about/annual-main4.png"),
          sourceMainImage: require("@/assets/images/about/annual-main4.1.jpg"),
          alt: "Office annual program 10",
          title: "Sports & recreation",
          images: [
            {
              thumbnail: require("@/assets/images/about/annual13.png"),
              source: require("@/assets/images/about/annual13.1.jpg"),
              alt: "Office annual program 11",
            },
            {
              thumbnail: require("@/assets/images/about/annual14.png"),
              source: require("@/assets/images/about/annual14.1.jpg"),
              alt: "Office annual program 12",
            },
            {
              thumbnail: require("@/assets/images/about/annual15.png"),
              source: require("@/assets/images/about/annual15.1.jpg"),
              alt: "Office annual program 13",
            },

            {
              thumbnail: require("@/assets/images/about/annual16.png"),
              source: require("@/assets/images/about/annual16.1.jpg"),
              alt: "Office annual program 14",
            },
          ],
        },
        {
          thumbnailMainImage: require("@/assets/images/about/annual-main5.png"),
          sourceMainImage: require("@/assets/images/about/annual-main5.1.png"),
          alt: "Office annual program 15",
          title: "Trip to Saint Martin",
          images: [
            {
              thumbnail: require("@/assets/images/about/annual17.png"),
              source: require("@/assets/images/about/annual17.1.png"),
              alt: "Office annual program 16",
            },
            {
              thumbnail: require("@/assets/images/about/annual18.png"),
              source: require("@/assets/images/about/annual18.1.png"),
              alt: "Office annual program 17",
            },
            {
              thumbnail: require("@/assets/images/about/annual19.png"),
              source: require("@/assets/images/about/annual19.1.png"),
              alt: "Office annual program 18",
            },

            {
              thumbnail: require("@/assets/images/about/annual20.png"),
              source: require("@/assets/images/about/annual20.1.png"),
              alt: "Office annual program 19",
            },
          ],
        },
      ],
    };
  },
};
</script>
