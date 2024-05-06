<template>
    <section
        class="common-services"
        itemscope
        itemtype="https://schema.org/WebContent"
    >
        <b-container>
            <b-row>
                <b-col
                    lg="4"
                    cols="12"
                >
                <header class="common-services__header">
                    <h2 itemprop="author">{{ ServicesHeadline }}</h2>
                    <p itemprop="description" v-html="ServicesDescription"></p>                    
                </header>
                </b-col>
                <b-col
                    lg="8"
                    cols="12"
                >
                    <b-row>
                        <b-col
                            lg="6"
                            cols="12"
                            class="mb-4"
                            v-for="(services, i) in service" :key="i"
                        >
                            <div class="common-services__block h-100" :class="services.noMargin">
                                <img :src="services.icon" class="common-services__icon" alt="Rectangle"/>
                                <h3>{{ services.title }}</h3>
                                <p>{{ services.description }}</p>
                            </div>
                        </b-col>                                           
                    </b-row>    
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
    ServicesHeadline: {
      type: String,
    },
    ServicesDescription: {
        type: String
    },
    service: {
        type: Array
    }
  },
};
</script>