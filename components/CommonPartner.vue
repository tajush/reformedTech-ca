<template>
    <section
        class="common-partner"
        itemscope
        itemtype="https://schema.org/Rating"
    >
        <b-container>
            <b-row>
                <b-col
                    lg="6"
                    cols="12"
                >
                <header class="common-partner__header">
                    <h2 itemprop="author">{{ headline }}</h2>
                    <p itemprop="description" v-html="paragraph01"></p>
                    <p itemprop="description" v-html="paragraph02"></p>
                </header>
                </b-col>
                <b-col
                    lg="6"
                    cols="12"
                    class="d-flex mt-5 mt-lg-0 align-items-center justify-content-center justify-content-lg-end"
                >
                    <div class="d-flex align-items-center float-right">
                        <div class="box-design box-design__first">
                            <h3>100+</h3>
                            <h4>Satisfied client</h4>
                        </div>
                        <div>
                            <div class="box-design box-design__second">
                                <h3>14+</h3>
                                <h4>Years of experience</h4>
                            </div>
                            <div class="box-design">
                                <h3>50+</h3>
                                <h4>Coding language expert</h4>
                            </div>                         
                        </div>                         
                    </div>                          
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
    headline: {
      type: String,
    },
    paragraph01: {
        type: String
    },
    paragraph02: {
        type: String
    }
  },
};
</script>