<template>
  <section>
    <HeaderPrimary :title="title">
      <template v-slot:blogSearch>
        <b-input-group class="primary-header__title-form">
          <template #append>
            <b-input-group-text
              ><i class="fa fa-search"></i
            ></b-input-group-text>
          </template>
          <b-form-input placeholder="Search for topic..."></b-form-input>
        </b-input-group>
        <section class="d-none d-md-block">
          <span>Popular Tags : </span>
          <b-button size="sm">Business</b-button>
          <b-button size="sm">Financial</b-button>
          <b-button size="sm">Case Study</b-button>
        </section>
      </template>
    </HeaderPrimary>
    <Blog />
  </section>
</template>
<script>
import HeaderPrimary from "~/components/HeaderPrimary";
import Blog from "~/components/Blog";
export default {
  components: {
    HeaderPrimary,
    Blog,
  },

  data() {
    return {
      title: `Blog`,
    };
  },
};
</script>