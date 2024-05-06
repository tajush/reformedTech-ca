<template>
  <section>
    <article class="career-detail__content-form">
      <h4>Apply for this position</h4>
      <form class="career-detail__content-form-input">
        <p>First Name <span>*</span></p>
        <b-form-group>
          <b-form-input v-model="firstName" required></b-form-input>
        </b-form-group>
        <p>Last Name <span>*</span></p>
        <b-form-group>
          <b-form-input v-model="lastName" required></b-form-input>
        </b-form-group>
        <p>Email <span>*</span></p>
        <b-form-group>
          <b-form-input v-model="email" required></b-form-input>
        </b-form-group>
        <p>Phone</p>
        <b-form-group>
          <b-form-input v-model="phone" required></b-form-input>
        </b-form-group>
        <p>LinkedIn Profile URL</p>
        <b-form-group>
          <b-form-input v-model="linkedinUrl"></b-form-input>
        </b-form-group>
        <p>Portfolio link (01)</p>
        <b-form-group>
          <b-form-input v-model="portfolio1"></b-form-input>
        </b-form-group>
        <p>Portfolio link (02)</p>
        <b-form-group>
          <b-form-input v-model="portfolio2"></b-form-input>
        </b-form-group>
        <p>Resume <span>*</span></p>
        <b-form-group>
          <input
            @change="handleFileUpload()"
            ref="file"
            type="file"
            id="file"
            placeholder="Attach Resume"
            drop-placeholder="Drop file here..."
          />
        </b-form-group>
        <p>Personal Note <span>*</span></p>
        <b-form-textarea
          v-model="message"
          id="textarea-default"
        ></b-form-textarea>
      </form>

      <b-button @click="submit" :disabled="!isValid"
        >SUBMIT APPLICATION</b-button
      >
    </article>
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
import axios from "axios";
import SuccessModal from "@/components/SuccessModal";
import ErrorModal from "@/components/ErrorModal";

export default {
  components: {
    SuccessModal,
    ErrorModal,
  },
  data() {
    return {
      file: null,
      fileUrl: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      linkedinUrl: "",
      portfolio1: "",
      portfolio2: "",
      message: "",
      showSuccessModal: false,
      showErrorModal: false,
      errorMsg: "",
      domain: "www.reformedtech.org",
    };
  },

  computed: {
    formData() {
      return {
        name:
          this.firstName &&
          this.lastName &&
          this.firstName.concat(this.lastName),
        email: this.email,
        phone: this.phone,
        message: this.formatMessage,
      };
    },
    formatMessage() {
      let data = {};
      if (this.domain) {
        data.domain = this.domain;
      }
      if (this.fileUrl) {
        data.CV_Downloadable_Link = this.fileUrl;
      }
      if (this.linkedinUrl) {
        data.Linkedin_Url = this.linkedinUrl;
      }
      if (this.portfolio1) {
        data.Portfolio_1 = this.portfolio1;
      }
      if (this.portfolio2) {
        data.Portfolio_2 = this.portfolio2;
      }
      if (this.message) {
        data.Personal_Note = this.message;
      }

      return Object.keys(data).length ? JSON.stringify(data) : "";
    },
    isValid() {
      if (
        this.firstName &&
        this.lastName &&
        this.email &&
        this.message &&
        this.file
      ) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    // Form Submission
    submit() {
      if (this.isValid) {
        axios
          .post("https://ms-contact.buildo.xyz", this.formData)
          .then((response) => {
            if (200 <= response.status < 300) {
              this.showSuccessModal = true;
              this.reset();
              this.errors = [];
              setTimeout(() => {
                this.showSuccessModal = false;
              }, 2000);
            } else {
              this.setErrorMsg("Something went wrong");
            }
          })
          .catch((error) => {
            this.setErrorMsg("Something went wrong");
          });
      } else {
        this.setErrorMsg();
      }
    },

    // Attachments Upload
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      let fileData = new FormData();
      fileData.append("fileSource", this.file);
      fileData.append("type", "generic");
      axios
        .post("https://api.buildo.xyz/api/v1/attachment", fileData)
        .then((response) => {
          this.fileUrl =
            response.data && response.data.data && response.data.data.fileUrl;
        })
        .catch((error) => {});
    },

    // Set error meaasge
    setErrorMsg(msg) {
      this.errorMsg = msg;
      this.showErrorModal = true;
      setTimeout(() => {
        this.showErrorModal = false;
      }, 2000);
    },

    // Reset form
    reset() {
      this.$refs.file.value = null;
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.phone = "";
      this.linkedinUrl = "";
      this.portfolio1 = "";
      this.portfolio2 = "";
      this.message = "";
    },
  },
};
</script>