<template>
  <section class="client-says">
    <b-container>
      <header class="headline-title">
        <h2>Client's about our services</h2>
        <p>
          We are very proud of the service we provide and stand by every
          product we carry. Read our testimonials from our happy customers.
        </p>
      </header>

      <b-row class="justify-content-center align-items-center">
        <b-col lg="3">
          <section class="client-says__title">
            <h2>Hear from <br />our clients</h2>
          </section>
          <section class="client-says__icon">
            <i
              :class="index === 0 ? 'client-says__icon-opacity' : ''"
              class="fa fa-arrow-left mr-2"
              @click="prev"
            ></i>
            <span class="text-center">{{
              `0${this.index + 1} / 0${this.clientReviews.length}`
            }}</span>
            <i
              :class="
                index === this.clientReviews.length - 1 ? 'client-says__icon-opacity' : ''
              "
              class="fa fa-arrow-right ml-2"
              @click="next"
            ></i>
          </section>
        </b-col>

        <b-col lg="9">
          <article class="client-says__content" :clientReviews="currentClient">
            <b-media class="align-items-center">
              <template #aside>
                <b-img :src="currentClient.img" fluid loading="lazy"></b-img>
              </template>

              <p>{{ currentClient.description }}</p>
              <span> {{ currentClient.name }} | </span>
              <span> {{ currentClient.designation }}</span>
            </b-media>
          </article>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import plantImage from "@/assets/images/service/client-says-plant.png";
import clientReviews1 from "@/assets/images/service/client-says-1.png";
export default {
  data() {
    return {
      plantImage: plantImage,
      index: 0,
      clientReviews: [
        {
          img: clientReviews1,
          description:
            "‘’ReformedTech performance gets an upgrade. Faster patch editor, fater viewer, fater everything.’’",
          name: "Shafi Frank",
          designation: "Principal UX Designer, Monna",
        },
        {
          img: clientReviews1,
          description:
            "‘’ReformedTech performance gets an upgrade. Faster patch editor, fater viewer, fater everything.’’",
          name: "Mehedi Bappi",
          designation: "Frontend Developer",
        },
        {
          img: clientReviews1,
          description:
            "‘’Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.’’",
          name: "Tawhid Sajib",
          designation: "Frontend Developer",
        },
        {
          img: clientReviews1,
          description:
            "‘’ReformedTech performance gets an upgrade. Faster patch editor, fater viewer, fater everything.’",
          name: "Kanak",
          designation: "Software Engineer",
        },
      ],
    };
  },
  computed: {
    currentClient() {
      return this.clientReviews[
        Math.abs(this.index) % this.clientReviews.length
      ];
    },
  },
  methods: {
    next() {
      if (this.index !== this.clientReviews.length - 1) {
        this.index++;
      }
    },
    prev() {
      if (this.index !== 0) {
        this.index--;
      }
    },
  },
};
</script>
