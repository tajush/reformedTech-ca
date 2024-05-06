<template>
  <section>
    <HeaderPrimary :title="title" :subTitle="subTitle" />
    <ProjectsBody />
    <CallToAction
      :header="header"
      :subHeader="subHeader"
      :buttonName="buttonName"
    />
  </section>
</template>

<script>
import HeaderPrimary from "~/components/HeaderPrimary";
import ProjectsBody from "~/components/Projects/ProjectsBody";
import CallToAction from "~/components/CallToAction";

export default {
  components: {
    HeaderPrimary,
    ProjectsBody,
    CallToAction,
  },
  data() {
    return {
      title: "Featured Projects",
      subTitle:
        "We don't just design websites; we craft them with such uniqueness that you'll be compelled to return to us for every project.",
      header: "Custom Web Design / Development",
      subHeader: "We will turn your ideas to viable product",
      buttonName: "Get a quote",
    };
  },
  head({ $seo }) {
    return $seo({
      title: "Projects on Web Design & Development | ReformedTech",
      description: "ReformedTech’s talented designers and developers have completed outstanding projects for clients. Take a look at some of the projects completed by our team."
    });
  }
};
</script>