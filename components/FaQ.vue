<template>
  <section
    class="global-faq"
    itemscope
    itemprop="mainEntity"
    itemtype="https://schema.org/Question"
  >
    <b-row>
      <b-col>
        <div class="d-flex">
          <!-- <h5 class="pr-1 mb-0">Q{{ faqNumber }}.</h5> -->
          <h5 itemprop="name">{{ faq.question }}</h5>
        </div>
      </b-col>
      <b-col style="flex: 0 0 10px">
        <span
          class="global-faq__icon"
          @click="showFAQ = !showFAQ"
        ><i :class="!showFAQ ? 'fa fa-plus' : 'fa fa-minus'"></i></span>
      </b-col>

      <transition name="fade">
        <b-col
          cols="12"
          v-show="showFAQ"
        >
          <div
            class="global-faq__ansItem"
            itemscope
            itemprop="acceptedAnswer"
            itemtype="https://schema.org/Answer"
          >
            <span class="pageLink" itemprop="text" v-html="faq.answer"></span>
          </div>
        </b-col>
      </transition>
    </b-row>
  </section>
</template>  

<script type="text/javascript">
export default {
  created() {
    if (this.faqNumber === 1) {
      this.showFAQ = true;
    }
  },
  props: {
    faq: {
      type: Object,
    },
    faqNumber: {
      type: Number,
    },
  },
  data: () => ({
    showFAQ: false,
  }),
};
</script>
<style scoped>
.fade-enter-active {
  transition: 0.3s linear;
  height: 100px;
  overflow: hidden;
}
.fade-leave-active {
  transition: 0.3s linear;
  opacity: 0;
  height: 100px;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  height: 0;
}
</style>