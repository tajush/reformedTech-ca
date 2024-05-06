<template>
  <div class="brand-carousel">
    <b-container>
      <b-row class="justify-content-center">
        <b-col col lg="12" cols="12">
          <carousel
            :autoplayTimeout="3000"
            :loop="true"
            :autoplay="true"
            autoplaydirection="backward"
            v-bind="options"
            :perPageCustom="[
              [320, 1],
              [600, 2],
              [960, 3],
              [1264, 4],
            ]"
          >
            <slide v-for="(client, i) in clients" :key="i">
              <div class="text-center">
                <b-img :src="client.img" fluid></b-img>
              </div>
            </slide>
          </carousel>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      options: {
        // loop: true,
        perPage: 4,
        paginationEnabled: false,
        indicators: true,
        controls: true,
      },
      clients: [
        {
          img: "@/assets/images/brand/brand1.png",
        },
        {
          img: "@/assets/images/brand/brand2.png",
        },
        {
          img: "@/assets/images/brand/brand3.png",
        },
        {
          img: "@/assets/images/brand/brand4.png",
        },
        {
          img: "@/assets/images/brand/brand5.png",
        },
      ],
    };
  },
};
</script>