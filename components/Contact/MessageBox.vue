<template>
  <section class="message-box">
    <b-container>
      <header class="headline-title">
        <span>GET IN TOUCH</span>
        <h2>Contact Us Here </h2>
        <h3>
          We’re here to help and answer any question you might have. We look
          forward to hearing from you.
        </h3>
      </header>
      <b-row class="justify-content-center">
        <b-col lg="8">
          <section class="message-box__content">
            <b-img
              src="@/assets/images/messageIcon.svg"
              alt="message icon"
              fluid
              loading="lazy"
            ></b-img>
            <h4>General Contact</h4>
            <p>
              Have some feedback or a general question? Get in touch with us
              below
            </p>

            <article class="message-box__content-text">
              <p>Name*</p>
              <b-form-input
                size="lg"
                :class="nameState || nameState === null ? 'mb-3' : ''"
                v-model="name"
                :state="nameState"
                @keyup="nameEnter"
              ></b-form-input>
              <b-form-invalid-feedback
                class="mb-3 error"
                v-if="nameCount || errors.name"
              >
                {{
                  errors && errors.name ? errors.name[0] : "Please enter name"
                }}
              </b-form-invalid-feedback>

              <p>Email*</p>
              <b-form-input
                size="lg"
                v-model="email"
                :class="emailState || emailState === null ? 'mb-3' : ''"
                :state="emailState"
                @keyup="emailEnter"
              ></b-form-input>
              <b-form-invalid-feedback
                class="mb-3 errorMsg"
                v-if="emailCount || (errors && errors.email)"
              >
                {{
                  (errors && errors.email && errors.email[0]) ||
                  "Please enter valid email"
                }}
              </b-form-invalid-feedback>

              <p>Message*</p>
              <b-form-textarea
                size="lg"
                rows="4"
                v-model="message"
                :state="commentState"
                @keyup="commentEnter"
                :class="commentState || commentState === null ? 'mb-3' : ''"
              ></b-form-textarea>
              <b-form-invalid-feedback
                class="mb-3 errorMsg"
                v-if="commentCount || errors.message"
              >
                {{
                  errors && errors.message
                    ? errors.message[0]
                    : "Please write something"
                }}
              </b-form-invalid-feedback>
            </article> 
            <p class="float-left mw-100 pb-2">*By continuing, I agree with your <nuxt-link to="/terms/" class="nuxt-link">Terms of Service</nuxt-link> and <nuxt-link to="/policy/" class="nuxt-link">Privacy Policy</nuxt-link>.</p>
            <a class="message-box__content-sendButton" @click="postData" ><b-spinner v-if="loading"></b-spinner
              >{{ loading ? "" : "SEND MESSAGE" }}</a>

          </section>
        </b-col>
      </b-row>
    </b-container>
    <b-modal
      hide-header
      hide-footer
      v-model="showSuccessModal"
      size="sm"
      centered
      lazy
    >
      <SuccessModal />
    </b-modal>
    <b-modal
      hide-header
      hide-footer
      v-model="showErrorModal"
      size="sm"
      centered
      lazy
    >
      <ErrorModal :msg="errorMsg" />
    </b-modal>
  </section>
</template> 

<script>
import Validation from "@/mixins/validationMixins";
import SuccessModal from "@/components/SuccessModal";
import ErrorModal from "@/components/ErrorModal";
export default {
  mixins: [Validation],
  components: {
    SuccessModal,
    ErrorModal,
  },
  data() {
    return {};
  },
};
</script>