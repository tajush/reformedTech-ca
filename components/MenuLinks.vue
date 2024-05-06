<template>
  <div class="navbar-ul" itemscope itemtype="https://schema.org/ItemPage">
    <li>
      <nuxt-link class="nav-link" to="/">Home</nuxt-link>
    </li>
    <li class="dropdown">
      <nuxt-link to="/services/" class="dropBtn"
        >Services
        <i class="fa fa-angle-down"></i>
      </nuxt-link>
      <div class="drop-content nav-items">
        <nuxt-link
          class="dropdown-item"
          v-for="(dropdown, i) in dropdowns"
          :key="i"
          :to="dropdown.link"
          >{{ dropdown.item }}</nuxt-link
        >
      </div>
    </li>
    <li class="tabs-content">
      <nuxt-link
        v-for="(tab, i) in tabs"
        :key="i"
        :class="tab === i ? 'activeClass' : ''"
        @click="tab = i"
        :to="tab.link"
        class="nav-link"
        >{{ tab.item }}</nuxt-link
      >
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      tabs: [
        {
          item: "Projects",
          link: "/projects/",
        },
        {
          item: "About",
          link: "/about/",
        },
        {
          item: "Career",
          link: "/career/",
        },
        {
          item: "Contact",
          link: "/contact/",
        },
      ],
      dropdowns: [
        {
          item: "Offshore Development",
          link: "/offshore/",
        },
        {
          item: "Web Application",
          link: "/web/",
        },
        {
          item: "Mobile Application",
          link: "/mobileapp/",
        },
        {
          item: "eCommerce Development",
          link: "/ecommerce/",
        },
        {
          item: "DevOps",
          link: "/devops/",
        },
        {
          item: "Digital Marketing",
          link: "/digitalmarketing/",
        },
        {
          item: "Shopify Development",
          link: "/shopify/",
        },
        {
          item: "WordPress Development",
          link: "/wordpress/",
        }
      ],
    };
  },  
  props: {
    sticky: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style  scoped>
.nuxt-link-exact-active {
  color: #ffa755 !important;
  font-weight: 600 !important;
}
</style>

 
