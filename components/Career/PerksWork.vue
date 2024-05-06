<template>
  <section class="perks-work">
    <b-container>
      <header class="perks-work__title">
        <h2>The perks of working with us</h2>
      </header>

      <b-row>
        <b-col
          class="perks-work__content"
          cols="6"
          lg="3"
          v-for="(works, i) in worksData"
          :key="i"
          :class="
            i === 3
              ? 'br'
              : i === 7
              ? 'cr'
              : i === worksData.length - 1
              ? 'dr'
              : i === 4
              ? 'er'
              : i === 5
              ? 'fr'
              : i === 6
              ? 'gr'
              : ''
          "
        >
          <article class="perks-work__content-item">
            <b-img :src="works.icon" loading="lazy" :alt="works.alt" fluid></b-img>
            <p>{{ works.title }}</p>
          </article>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      worksData: [
        {
          icon: require("~/assets/images/career/icon1.png"),
          title: "Yearly 2 festive bonus(50% of basic salary)",
          alt: "Giftbox icon"
        },
        {
          icon: require("~/assets/images/career/icon2.png"),
          title: "Weekly 2 holidays (Saturday & Sunday)",
          alt: "Lawn chair icon"
        },
        {
          icon: require("~/assets/images/career/icon3.png"),
          title: "Free snacks, lunch, and coffee",
          alt: "Pizza icon"
        },
        {
          icon: require("~/assets/images/career/icon4.png"),
          title: "Annual tour",
          alt: "Beach icon"
        },
        {
          icon: require("~/assets/images/career/icon5.png"),
          title: "Easy, breezy, open-work environment",
          alt: "Office desk icon"
        },
        {
          icon: require("~/assets/images/career/icon6.png"),
          title: "Team learning Program",
          alt: "Puzzle icon"
        },
        {
          icon: require("~/assets/images/career/icon7.png"),
          title: "Prayer facilities",
          alt: "Masjid icon"
        },
        {
          icon: require("~/assets/images/career/icon8.png"),
          title: "Free books for professional development",
          alt: "Boy reading icon"
        },
      ],
    };
  },
};
</script>
<style>
.br {
  border-right: none;
}
.cr {
  border-right: none;
  border-bottom: none;
}
.dr {
  border-right: none;
}
.er {
  border-bottom: none;
}
.fr {
  border-bottom: none;
}
.gr {
  border-bottom: none;
}
</style>