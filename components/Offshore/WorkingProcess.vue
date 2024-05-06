<template>
  <section class="working-process">
    <b-container>
      <header class="headline-title">
        <h2>Our Working Process</h2>
        <p>
          Pick a template and customize it with our powerful editor by adding or
          removing pages, blocks, and elements.
        </p>
      </header>
      <b-row>
        <b-col lg="5">
          <section>
            <b-form-group
              class="working-process__prefix"
              v-for="(select, i) in selection"
              :key="i"
              :class="checkExist(select) ? 'selected' : ''"
              v-slot="{ ariaDescribedby }"
            >
              <b-form-radio
                size="lg"
                class="working-process__prefix-radioTitle"
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                :value="select.value"
                :class="checkExist(select) ? 'radioSelect' : ''"
                >{{ select.title }}</b-form-radio
              >
            </b-form-group>
          </section>
        </b-col>
        <b-col lg="7">
          <section class="working-process__suffix">
            <figure class="working-process__suffix-image">
              <b-img
                class="working-process__suffix-image--1"
                src="~/assets/images/offshore-team/process-dot.svg"
                alt="process alt"
              ></b-img>
              <div class="working-process__suffix-image--2"></div>
              <div class="working-process__suffix-image--3"></div>
            </figure>
            <section
              class="working-process__suffix-content"
              v-for="(content, i) in contents"
              :key="i"
            >
              <article v-if="checkExist(content)">
                <figure>
                  <b-img :src="content.img" :alt="content.altTag" fluid> </b-img>
                </figure>
                <p>
                  {{ content.description }}
                </p>
              </article>
            </section>

            <!-- <figure class="working-process__rightContent-shapeImage1">
              <b-img
                src="~/assets/images/offshore-team/people-circle1.png"
              ></b-img>
            </figure>
            <figure class="working-process__rightContent-shapeImage2">
              <b-img
                src="~/assets/images/offshore-team/people-circle2.png"
              ></b-img>
            </figure>
            <figure class="working-process__rightContent-shapeImage3">
              <b-img src="~/assets/images/offshore-team/people-dot.png"></b-img>
            </figure> -->
          </section>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      contents: [
        {
          value: "one",
          img: require("~/assets/images/offshore-team/development.jpg"),
          altTag: "development",
          description:
            "  To make a website actually work, design must be turned into the code. Web designers add content to the website pages, testing every page before going further. With no doubt, we submit a prototype for your final approval ensuring that it meets your expectations.",
        },
        {
          value: "two",
          img: require("~/assets/images/offshore-team/ui.jpg"),
          altTag: "ui",
          description:
            "  Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers a spot-on end result? Turn to Intellectsoft’s UI and UX services. ",
        },
        {
          value: "three",
          img: require("~/assets/images/offshore-team/development.jpg"),
          altTag: "development",
          description:
            "  To make a website actually work, design must be turned into the code. Web designers add content to the website pages, testing every page before going further. With no doubt, we submit a prototype for your final approval ensuring that it meets your expectations.",
        },
        {
          value: "four",
          img: require("~/assets/images/offshore-team/ui.jpg"),
          altTag: "ui",
          description:
            "  Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers a spot-on end result? Turn to Intellectsoft’s UI and UX services. ",
        },
        {
          value: "five",
          img: require("~/assets/images/offshore-team/development.jpg"),
          altTag: "development",
          description:
            "  To make a website actually work, design must be turned into the code. Web designers add content to the website pages, testing every page before going further. With no doubt, we submit a prototype for your final approval ensuring that it meets your expectations.",
        },
      ],
      selected: "three",
      selection: [
        {
          title: "DEFINING STRATEGY & GOALS",
          value: "one",
        },
        {
          title: "UX/UI",
          value: "two",
        },
        {
          title: "DEVELOPMENT",
          value: "three",
        },
        {
          title: "Q/A",
          value: "four",
        },
        {
          title: "TEST & LAUNCH",
          value: "five",
        },
      ],
    };
  },
  methods: {
    checkExist(item) {
      return this.selected === item.value;
    },
  },
};
</script>
<style>
.selected {
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(99, 99, 99, 0.25);
  border: none;
  border-radius: 3px;
  transition: all .3s ease-in-out;
}
.radioSelect {
  color: #155263;
  transition: all .3s ease-in-out;
}
</style>