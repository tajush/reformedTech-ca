<template>
  <section
    class="call-action"
    itemscope
    itemtype="https://schema.org/WebContent"
  >
    <b-container>
      <figure class="call-action__left">
        <b-img
          src="~/assets/images/idea-left.png"
          alt="background 16"
          fluid
          loading="lazy"
          itemprop="image"
        ></b-img>
      </figure>
      <figure class="call-action__right">
        <b-img
          src="~/assets/images/idea-right.png"
          alt="background 17"
          fluid
          loading="lazy"
          itemprop="image"
        ></b-img>
      </figure>
      <b-row>
        <b-col>
          <section class="call-action__title">
            <h1
              v-html="header"
              itemprop="headline"
            ></h1>
            <p
              v-html="subHeader"
              itemprop="description"
            ></p>
            <div>
              <nuxt-link
                to="/contact/"
                itemprop="url"
              >{{
                buttonName
              }}</nuxt-link>
            </div>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    header: {
      type: String,
    },
    subHeader: {
      type: String,
    },
    buttonName: {
      type: String,
    },
  },
};
</script>