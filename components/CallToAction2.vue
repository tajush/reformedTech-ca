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
            <b-row>
              <b-col lg="6" md="6" sm="12">
                <div class="ecommerce__block mb-4 mb-lg-0">
                  <div class="ecommerce__block--radial">
                    <nuxt-link
                      to="/shopify/"
                      itemprop="url"                      
                    >
                      <i class="fa fa-arrow-right"></i>
                    </nuxt-link>  
                  </div>  
                  <b-img
                    src="~/assets/images/shopify/shopify.png"
                    alt="Shopify"
                    fluid
                    loading="lazy"
                    itemprop="image"
                  ></b-img>
                </div>
              </b-col>
              <b-col lg="6" md="6" sm="12">
                <div class="ecommerce__block g-4">
                  <div class="ecommerce__block--radial">
                    <nuxt-link
                      to="/wordpress/"
                      itemprop="url"
                    >
                      <i class="fa fa-arrow-right"></i>
                    </nuxt-link>
                  </div>              
                  <b-img  
                    src="~/assets/images/wordpress/wordpress-woocommerce.png"
                    alt="WordPress Woocommerce"
                    fluid
                    loading="lazy"
                    itemprop="image"
                  ></b-img>
                </div>
              </b-col>
            </b-row>
            <h2 class="pt-4 mb-0"
              v-html="header"
              itemprop="headline"
            ></h2>
            <div class="call-action__title--customlink">
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