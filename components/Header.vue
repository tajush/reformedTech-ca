<template>
  <section
    ref="scroll"
    class="header-main"
    itemscope
    itemtype="https://schema.org/SiteNavigationElement"
  >
    <nav class="menu" :class="sticky ? 'stickyColor' : ''">
      <b-container>
        <main class="main-menu">
          <figure class="main-menu__logo" @click="$router.push('/')">
            <b-img
              src="~/assets/images/logo/logo.png"
              alt="logo"
              fluid
              itemprop="image"
              width="138"
              height="60"
            ></b-img>
          </figure>

          <div class="main-menu__item">
            <MenuLinks :sticky="sticky" />
          </div>
          <transition name="slide-fade">
            <div class="main-menu__mobile" v-show="iconShow">
              <MenuLinks />
            </div>
          </transition>
          <div
            @click="iconShow = !iconShow"
            class="main-menu__icon"
            :class="sticky ? 'stickyIcon' : ''"
          >
            <div :class="iconShow ? 'line1' : ''"></div>
            <div :class="iconShow ? 'line2' : ''"></div>
            <div :class="iconShow ? 'line3' : ''"></div>
          </div>
          <div class="main-menu__btn">
            <nuxt-link to="/contact/" itemprop="archivedAt"
              >Get In Touch</nuxt-link
            >
          </div>
        </main>
      </b-container>
    </nav>
  </section>
</template>

<style scoped>
  .header-main .menu .main-menu__btn a {
      text-decoration: none;
      background-color: #ffa755;
      color: #fff;
      border: none;
      border-radius: 3px;
      height: 54px;
      width: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      line-height: 27px;
      font-weight: 600;
      font-style: normal;
      transition: all .2s linear;
  }
  .header-main .menu .main-menu__btn a:hover {
      background-color: #fff;
      color: #171717;
      transition: all .2s linear;
  }
  </style>

<script>
import MenuLinks from "~/components/MenuLinks";
export default {
  components: {
    MenuLinks,
  },
  data() {
    return {
      iconShow: false,
      sticky: false,
    };
  },
  mounted() {
    this.scrollTrigger();
  },
  watch: {
    $route: {
      handler() {
        this.iconShow = false;
      },
      deep: true,
    },
  },

  methods: {
    scrollTrigger() {
      var intersectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (entries[0].intersectionRatio > 0) {
            this.sticky = false;
          }
        } else {
          this.sticky = true;
        }
      });
      intersectionObserver.observe(this.$refs.scroll);
    },
    route(path) {
      this.iconShow = false;
      this.$router.push(path);
    },
  },
};
</script>

