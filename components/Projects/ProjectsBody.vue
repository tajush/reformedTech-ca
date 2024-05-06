<template>
  <section class="featured-project">
    <b-container>
      <header class="headline-title">
        <h2>Make Digital Ideas</h2>
        <p>We're deeply invested in design, technology, storytelling, and the creation of captivating brands. Are you prepared to team up with the foremost IT professionals in the industry and have access to an elite <nuxt-link to="/offshore/" class="projectLink">software development team?</nuxt-link></p>
      </header>
      <!-- <nav class="featured-project__nav">
        <ul class="featured-project__nav-item">
          <li @click="tab = 1" :class="tab === 1 ? 'hover' : ''">All</li>
          <li @click="tab = 2" :class="tab === 2 ? 'hover' : ''">Web design</li>
          <li @click="tab = 3" :class="tab === 3 ? 'hover' : ''">
            Web Development
          </li>
          <li @click="tab = 4" :class="tab === 4 ? 'hover' : ''">E-commerce</li>
          <li @click="tab = 5" :class="tab === 5 ? 'hover' : ''">UI/UX</li>
        </ul>
      </nav> -->

      <b-row>
        <b-col
          class="mb-4"
          lg="4"
          v-for="(feature, index) in features"
          :key="index"
        >
          <article class="featured-project__content">
            <a :href="feature.link">
              <b-img :src="feature.image" :alt="feature.altTag" fluid loading="lazy"></b-img>
            </a>  
            <header class="featured-project__content-caption">
              <a :href="feature.link">
                <h4 class="text-uppercase">{{ feature.title }}</h4>
              </a>  
              <a :href="feature.link">Read more &nbsp;&mdash;</a>
            </header>
          </article>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      tab: 1,
      features: [
      {
          image: require("@/assets/images/projects/dokane.png"),
          altTag: "dokanepos",
          title: "DOKANE POS",
          link: "/dokanepos/"
        },
        {
          image: require("@/assets/images/projects/smart-property.jpg"),
          altTag: "smart property",
          title: "SMART PROPERTY",
          link: "/smartproperty/"
        },
        {
          image: require("@/assets/images/projects/threefold.jpg"),
          altTag: "threefold",
          title: "THR3EFOLD",
          link: "/threefold/"
        },
        {
          image: require("@/assets/images/projects/cabiy-nyc.jpg"),
          altTag: "cabby",
          title: "CABIY, NYC",
          link: "/cabiy-nyc/"
        },
        {
          image: require("@/assets/images/projects/childhood-complete.jpg"),
          altTag: "childhood",
          title: "CHILDHOOD COMPLETE",
          link: "/childhood-complete/"          
        },
        {
          image: require("@/assets/images/projects/within.jpg"),
          altTag: "within",
          title: "WITHIN",
          link: "/within/"          
        },
        {
          image: require("@/assets/images/projects/legacy.png"),
          altTag: "leagacy lock",
          title: "Legacy Lock",
          link: "/legacy-lock/"          
        }, 
        {
          image: require("@/assets/images/projects/skipper.jpg"),
          altTag: "skipper",
          title: "SKIPPER",
          link: "/skipper/"          
        }, 
        {
          image: require("@/assets/images/projects/pactfi.jpg"),
          altTag: "pactfi",
          title: "PactFi",
          link: "/pactfi/"          
        }, 
        {
          image: require("@/assets/images/projects/agent-banking.jpg"),
          altTag: "agent banking",
          title: "Agent Banking",
          link: "/agent-banking/"          
        }                                                  
      ],
    };
  },
};
</script>
<style scoped>
.hover {
  background-color: #ffa755;
  color: white !important;
  border-radius: 6px;
}
.projectLink{
  color: #4F4F4F;
  text-decoration: none !important;
}
</style>