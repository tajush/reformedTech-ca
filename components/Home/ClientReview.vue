<template>
  <section
    class="client-review"
    itemscope
    itemtype="https://schema.org/WebContent"
  >
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="6">
          <header class="client-review__title">
            <h2 itemprop="headline">Happy customers</h2>
            <p itemprop="description">
              Feedback from these happy customers helps us in reaching the
              heights
            </p>
          </header>
        </b-col>
        <b-col lg="6">
          <section class="client-review__content">
            <article
              class="client-review__content-slider"
              :clients="currentClient"
            >
              <div>
                <div class="text-right">
                  <i class="fa fa-quote-right"></i>
                </div>
                <b-media>
                  <template #aside>
                    <b-img
                      :src="currentClient.img"
                      :alt="currentClient.altTag"
                      loading="lazy"
                      fluid
                      itemprop="image"
                    ></b-img>
                  </template>

                  <h4 itemprop="author">{{ currentClient.name }}</h4>
                  <span itemprop="description">
                    {{ currentClient.designation }}
                  </span>
                </b-media>
                <p itemprop="name">{{ currentClient.title }}</p>
              </div>
            </article>

            <footer class="client-review__content-footer">
              <div class="text-right pt-2">
                <i
                  class="fa fa-angle-left mr-4"
                  @click="prev"
                ></i>
                <i
                  class="fa fa-angle-right"
                  @click="next"
                ></i>
              </div>
            </footer>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import clientImage1 from "@/assets/images/client/reviewer-1.jpg";
import clientImage2 from "@/assets/images/client/reviewer-2.jpg";
import clientImage3 from "@/assets/images/client/reviewer-3.jpg";
export default {
  data() {
    return {
      index: 0,
      autoplay: false,
      timer: null,
      clients: [
        {
          img: clientImage1,
          altTag: "reviewer",
          title:
            "ReformedTech has helped facilitate a great look and presence for our business. Our practice website has a design that is welcoming and informative with high optimization",
          name: "Elizabeth Harris",
          designation: "CEO",
        },

        {
          img: clientImage2,
          altTag: "reviewer",
          title:
            "ReformedTech design did a great job for us. We may have been one of their picky customers but they were always patient with our changes. We highly recommend Red Spot for website design. They are very responsive and quick when it comes to changes.",
          name: "Adam Rodriguez",
          designation: "Chef Executive",
        },

        {
          img: clientImage3,
          altTag: "reviewer",
          title:
            " We love working with ReformedTech! Not only do they create beautiful, interactive, easy-to-update websites, but they are also extremely helpful and amazing to work with!",
          name: "Marisha Heredia",
          designation: "Executive Officer",
        },
      ],
    };
  },
  mounted() {
    if (!this.autoplay) {
      this.startSlide();
    }
  },
  computed: {
    currentClient() {
      return this.clients[Math.abs(this.index) % this.clients.length];
    },
  },
  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 5000);
    },
    next() {
      this.index++;
    },
    prev() {
      if (this.index === 0) {
        this.index = this.clients.length - 1;
      } else {
        this.index--;
      }
    },
  },
};
</script>