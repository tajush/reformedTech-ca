<template>
  <div>
    <HeaderPrimary :title="title" />
    <MessageBox />
    <AddressSection />
    <FollowSection />
  </div>
</template>

<script>
import HeaderPrimary from "~/components/HeaderPrimary";
import MessageBox from "~/components/Contact/MessageBox";
import AddressSection from "~/components/Contact/AddressSection";
import FollowSection from "~/components/Contact/FollowSection";

export default {
  components: {
    HeaderPrimary,
    MessageBox,
    AddressSection,
    FollowSection,
  },

  data() {
    return {
      title: "Require assistance with your website?",
    };
  },
  head({ $seo }) {
    return $seo({
      title: "Contact for Web Design & Development | ReformedTech",
      description: "Do you need help with your website? We’ll help you hire offshore developers to help you to design and develop your website and mobile app."
    });
  }
};
</script>