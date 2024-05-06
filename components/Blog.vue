<template>
  <section class="blog-content">
    <b-container>
      <section class="blog-content__listGridButton">
        <b-button-group class="mb-2">
          <b-button
            :variant="show ? 'primary' : 'outline-primary'"
            @click="show = true"
            ><i class="fa fa-list"></i
          ></b-button>
          <b-button
            :variant="!show ? 'primary' : 'outline-primary'"
            @click="show = false"
            ><i class="fa fa-th-large"></i
          ></b-button>
        </b-button-group>
      </section>
      <b-row>
        <b-col lg="8">
          <section class="blog-content__workshop">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/Xrq9T9-zKrA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <article class="blog-content__workshop-content">
              <h4>ReformedTech Team Learning Session by Nazmul Alam</h4>
              <p>
                The initiative of team learning sessions has been started in
                ReformedTech. We value the sharing of ideas, knowledge, and
                creativity.
              </p>
            </article>
          </section>
          <section
            v-for="(blog, index) in blogContent"
            :key="index"
            v-show="show"
          >
            <section class="blog-content__content">
              <b-img :src="blog.img" fluid loading="lazy"></b-img>
              <article class="blog-content__content-caption">
                <span class="pr-4" v-for="(time, index) in timer" :key="index">
                  <i :class="time.icon" class="pr-1"></i>
                  {{ time.bookmark }}</span
                >
                <h4>{{ blog.header }}</h4>
                <p>{{ blog.description }}</p>
                <footer class="blog-content__content-caption-continue">
                  <span>
                    Continue Reading
                    <i class="fa fa-long-arrow-alt-right ml-2"></i>
                  </span>

                  <figure>
                    <b-img
                      src="@/assets/images/zakaria.png"
                      fluid
                      loading="lazy"
                    ></b-img>
                    <span>Zakaria Rony</span>
                  </figure>
                </footer>
              </article>
            </section>
            <figure v-if="index === 1" class="blog-content__issues">
              <b-img
                src="@/assets/images/security-issues.png"
                fluid
                loading="lazy"
              ></b-img>
            </figure>
          </section>

          <section v-show="!show">
            <b-row>
              <b-col lg="6" v-for="(blog, index) in blogContent2" :key="index">
                <section class="blog-content__grid">
                  <b-img :src="blog.img" fluid loading="lazy"></b-img>
                  <article class="blog-content__grid-title">
                    <span
                      class="blog-content__grid-title-type"
                      :style="blog.bg"
                      >{{ blog.type }}</span
                    >
                    <h4>{{ blog.header }}</h4>
                    <p>{{ blog.description }}</p>
                    <footer class="blog-content__grid-title-comment">
                      <span>
                        <i class="far fa-user-circle pr-2"></i>Zain
                        Siphron</span
                      >
                      <span
                        ><i class="fa fa-calendar pr-2"></i>March
                        18,2021</span
                      >
                    </footer>
                  </article>
                </section>
              </b-col>
            </b-row>
          </section>

          <div class="blog-content__pagination">
            <b-pagination
              hide-goto-end-buttons
              v-model="currentPage"
              :total-rows="rows"
              :prev-class="currentPage > 1 ? '' : 'd-none'"
              :per-page="perPage"
              :next-class="inLastPage ? 'd-none' : ''"
            >
              <template #page="{ page }">
                {{ page }}
              </template>
            </b-pagination>
          </div>
        </b-col>

        <b-col lg="4">
          <article class="blog-content__input">
            <h4>Subscribe to our blog</h4>
            <p>Get the latest posts in your email</p>
            <b-form-group>
              <b-form-input
                placeholder="Enter your email"
                required
              ></b-form-input>
            </b-form-group>
            <b-button>Subscribe</b-button>
          </article>
          <b-row class="blog-content__media">
            <b-col cols="4" v-for="(media, index) in socialMedia" :key="index">
              <section class="blog-content__media-socialMedia">
                <b-img :src="media.image" fluid loading="lazy"></b-img>
                <h6>{{ media.count }}K</h6>
                <p>{{ media.member }}</p>
              </section>
            </b-col>
          </b-row>

          <article class="blog-content__category">
            <h4>Categories</h4>
            <ul>
              <li v-for="(category, index) in categories" :key="index">
                {{ category.title }}
                ({{
                  category.quantity > 9
                    ? category.quantity
                    : `0${category.quantity}`
                }})
              </li>
            </ul>
          </article>

          <article class="blog-content__news">
            <h4>Recent News</h4>
            <b-media
              v-for="(news, index) in recentNews"
              :key="index"
              class="blog-content__news-content"
            >
              <template #aside>
                <figure>
                  <b-img :src="news.image" fluid loading="lazy"></b-img>
                </figure>
              </template>

              <h4>{{ news.heading }}</h4>
              <span>
                <i class="fa fa-calendar pr-1"></i>
                {{ `${news.month} 18,2021` }}
              </span>
            </b-media>
          </article>

          <article class="blog-content__tags">
            <h4>Tags</h4>
            <b-button v-for="(tag, index) in tags" :key="index">
              {{ tag }}
            </b-button>
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
      show: true,
      rows: 8,
      currentPage: 1,
      perPage: 3,
      timer: [
        {
          icon: "fa fa-calendar",
          bookmark: "March 18,2021",
        },
        {
          icon: "far fa-clock",
          bookmark: "3 minutes read",
        },
        {
          icon: "far fa-bookmark",
          bookmark: "Buiseness",
        },
      ],
      blogContent: [
        {
          img: require("@/assets/images/blog-content1.png"),
          header: "Decode Your Future with Digital Marketing",
          description:
            "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge fanny around butty, Richard spiffing a load of old tosh porkies hunky-dory ruddy dropped a clanger.",
        },
        {
          img: require("@/assets/images/blog-content2.png"),
          header:
            "Is UX still viable? The unintended consequences of user-centered design",
          description:
            "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge fanny around butty, Richard spiffing a load of old tosh porkies hunky-dory ruddy dropped a clanger.",
        },
        {
          img: require("@/assets/images/blog-content3.png"),
          header: "Eclipse launches group to shepherd popular Java IDE",
          description:
            "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge fanny around butty, Richard spiffing a load of old tosh porkies hunky-dory ruddy dropped a clanger.",
        },
      ],
      blogContent2: [
        {
          img: require("@/assets/images/blog-content4.png"),
          type: "Buiseness",
          bg: "background-color: #155263",
          header: "Decode Your Future with an Online Computer",
          description:
            "Cup of char brilliant horse play bro bread sloshed lavatory only...",
        },
        {
          img: require("@/assets/images/blog-content5.png"),
          type: "Tech",
          bg: "background-color: #F8931F",
          header: "Microsoft's Open-Source Pivot",
          description:
            "Cup of char brilliant horse play bro bread sloshed lavatory only...",
        },

        {
          img: require("@/assets/images/blog-content6.png"),
          type: "Security",
          bg: "background-color: #00C643",
          header: "Apple Needs This New Hire to Be Heroic",
          description:
            "Cup of char brilliant horse play bro bread sloshed lavatory only...",
        },
        {
          img: require("@/assets/images/blog-content7.png"),
          type: "Privacy",
          bg: "background-color: #1C96CB",
          header: "Dell Apex Sets High Bar for As-A-Service ",
          description:
            "Cup of char brilliant horse play bro bread sloshed lavatory only...",
        },
        {
          img: require("@/assets/images/blog-content8.png"),
          type: "Gadget",
          bg: "background-color: #8030E6",
          header: "How do ReformedTech works?",
          description:
            "Cup of char brilliant horse play bro bread sloshed lavatory only...",
        },
        {
          img: require("@/assets/images/blog-content9.png"),
          type: "Buiseness",
          bg: "background-color: #155263",
          header: "A Linux Safari to Classify the Genus of This ",
          description:
            "Cup of char brilliant horse play bro bread sloshed lavatory only...",
        },
        {
          img: require("@/assets/images/blog-content10.png"),
          type: "Buiseness",
          bg: "background-color: #F8931F",
          header: "A Cure for What Ails Social Media",
          description:
            "Cup of char brilliant horse play bro bread sloshed lavatory only...",
        },
        {
          img: require("@/assets/images/blog-content11.png"),
          type: "Tech",
          bg: "background-color: #00C643",
          header: "Intel CEO Gives Unwarlike 'Going to War' ",
          description:
            "Cup of char brilliant horse play bro bread sloshed lavatory only...",
        },
        {
          img: require("@/assets/images/blog-content12.png"),
          type: "Security",
          bg: "background-color:  #1C96CB",
          header: "The 'Unix Way' Has a Right Way That's Almost ",
          description:
            "Cup of char brilliant horse play bro bread sloshed lavatory only...",
        },
        {
          img: require("@/assets/images/blog-content13.png"),
          type: "Privacy",
          bg: "background-color: #8030E6",
          header: "It's Time to Consider 3D Printed Homes ",
          description:
            "Cup of char brilliant horse play bro bread sloshed lavatory only...",
        },
      ],
      socialMedia: [
        {
          image: require("@/assets/images/facebook-logo.png"),
          count: 815.5,
          member: "Fans",
        },
        {
          image: require("@/assets/images/twitter-logo.png"),
          count: 107.2,
          member: "Followers",
        },
        {
          image: require("@/assets/images/youtube-logo.png"),
          count: 90.6,
          member: "Subscribers",
        },
      ],

      categories: [
        { title: "Buisness", quantity: 10 },
        { title: "Loan", quantity: 9 },
        { title: "Financial", quantity: 12 },
        { title: "Bank Transfer", quantity: 7 },
        { title: "Technology", quantity: 6 },
        { title: "Security", quantity: 11 },
        { title: "Privacy", quantity: 5 },
      ],
      recentNews: [
        {
          image: require("@/assets/images/news1.png"),
          heading: "Is It Worth Buying A Premium Form Builder.",
          month: "March",
        },
        {
          image: require("@/assets/images/news2.png"),
          heading: "10 Classic Summer Vacations",
          month: "March",
        },
        {
          image: require("@/assets/images/news3.png"),
          heading: "How To Easily Add weForms Widget Using Elementor",
          month: "March",
        },
        {
          image: require("@/assets/images/news4.png"),
          heading: "How to Create GDPR Consent Form In WordPress",
          month: "March",
        },
      ],
      tags: [
        "Banking",
        "web design",
        "ui/ux",
        "saas",
        "software",
        "tech",
        "gadget",
        "development",
        "design",
        "security",
        "agency",
      ],
    };
  },
  computed: {
    lastPage() {
      let lastPage = this.rows / this.perPage;
      return lastPage && Math.ceil(lastPage);
    },
    inLastPage() {
      return this.currentPage == this.lastPage ? true : false;
    },
  },
};
</script>
