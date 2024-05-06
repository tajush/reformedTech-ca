<template>
    <section class="case-details">
        <b-container>
            <b-row>
                <b-col 
                    lg="12"
                    cols="12"
                >
                    <img :src="caseImg" class="mb-5 img-fluid d-block mx-auto" :alt="caseAlt">
                </b-col>
            </b-row>
            <b-row>
                <b-col lg="12" cols="12">
                    <h2 class="mb-3">{{ caseName }}</h2>
                    <h5 class="mb-3">{{ caseDuration}}</h5>
                    <p v-html="caseDescription"></p>
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
    caseImg: {
        type: String
    },
    caseName: {
        type: String
    },
    caseDuration: {
        type: String
    },
    caseDescription: {
        type: String
    },
    caseAlt: {
        type: String
    }
  },
};

</script>