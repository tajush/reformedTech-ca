<template>
  <section class="hire-team">
    <b-container>
      <header class="headline-title">
        <h2>
          Hire Dedicated <br />
          Development Team
        </h2>
      </header>
      <b-img
        src="~/assets/images/offshore-team/banner.png"
        alt="offshore banner"
        loading="lazy"
        fluid
      ></b-img>
      <b-row>
        <b-col
          lg="4"
          class="margin-bottom"
          v-for="(team, index) in hireTeam"
          :key="index"
        >
          <article class="hire-team__title">
            <h4>{{ team.title }}</h4>
          </article>
        </b-col>
      </b-row>
      <footer class="hire-team__btn">
        <nuxt-link to="/projects/">Hire Developers</nuxt-link>
      </footer>
    </b-container>
  </section>
</template>

<script >
export default {
  data() {
    return {
      hireTeam: [
        {
          title: "Full Time Hiring",
        },
        {
          title: "Part Time Hiring",
        },
        {
          title: "Hourly Hiring",
        },
      ],
    };
  },
};
</script>