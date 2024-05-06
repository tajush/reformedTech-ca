<template>
  <section class="primary-header">
    <b-container>
      <b-row>
        <b-col>
          <div class="primary-header__shape">
            <div class="primary-header__shape--1">
              <b-img
                src="~/assets/images/Lines.svg"
                alt="lines"
                fluid
                loading="lazy"
              ></b-img>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="primary-header__shape">
            <div class="primary-header__shape--2">
              <b-img 
                src="~/assets/images/Lines.svg"
                alt="lines"
                fluid
                loading="lazy"
              ></b-img>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="primary-header__shape">
            <div class="primary-header__shape--3">
              <b-img
                src="~/assets/images/Lines.svg"
                alt="lines"
                fluid
                loading="lazy" 
              ></b-img>
            </div>
          </div>
        </b-col>
      </b-row>
      <header class="primary-header__title">
        <h1 v-html="title"></h1> 
        <span v-html="subTitle"></span>
        <slot name="blogSearch"></slot>
      </header>
      <div class="primary-header__shape-image">
        <b-img src="~/assets/images/shape.svg" alt="shape" fluid loading="lazy"></b-img>
      </div>

      <div class="primary-header__round-image">
        <b-img
          src="~/assets/images/round-shape.png"
          alt="round shape"
          fluid
          loading="lazy"
        ></b-img>
      </div>
      <div class="primary-header__dotshape-image">
        <b-img src="~/assets/images/dots.svg" alt="dots" fluid loading="lazy"></b-img>
      </div>
    </b-container>
  </section>
</template> 

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: { type: String, required: true },
    subTitle: { type: String },
  },
};
</script>