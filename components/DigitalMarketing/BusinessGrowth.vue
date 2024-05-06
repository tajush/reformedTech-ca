<template>
    <section class="business-growth">
        <b-container>
            <b-row>
                <b-col
                    lg="6"
                    cols="12"
                >
                    <h3>How Digital Marketing Services Drive Business Growth</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>   
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.</p>
                </b-col>
                <b-col
                    lg="6"
                    cols="12"
                >
                    <img src="~assets/images/business-growth.png" class="img-fluid mb-4"/>
                </b-col>
            </b-row>
            <b-row>
                <b-col
                    lg="12"
                    cols="12"
                >
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <div
                        v-for="(businessLists, i) in businessList" :key="i"
                        class="web-development__content-list"
                        >
                        <div></div>
                        <span> {{ businessLists.item }}</span>
                    </div>                    
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
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
        businessList: {
            type: Array
        }
    }
}

</script>

