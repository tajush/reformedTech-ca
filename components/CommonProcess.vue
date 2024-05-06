<template>
    <section
        class="common-process"
        itemscope
        itemtype="https://schema.org/WebContent"
    >
        <b-container>
            <b-row>
                <b-col
                    lg="12"
                    cols="12"
                >
                    <header class="common-process__header">
                        <h2 itemprop="author">{{ processHeadline }}</h2>
                        <p class="d-block mx-auto" itemprop="description">{{ processDescription }}</p>                    
                    </header>
                </b-col>
            </b-row>
            <b-row>
                <b-col
                    lg="2"
                    sm="4"
                    cols="6"
                    v-for="(processes, i) in process" :key="i"
                >
                    <div class="process-block">
                        <img :src="processes.icon" alt="Process">
                        <div class="process-block__arrow d-none d-lg-block">
                            <img :src="processes.arrow" :class="processes.noLastArrow" alt="Arrow">
                        </div>
                        <h4>{{ processes.title }}</h4>
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
    process: {
        type: Array,
    },
    processHeadline: {
        type: String
    },
    processDescription: {
        type: String
    }
  },
};
</script>