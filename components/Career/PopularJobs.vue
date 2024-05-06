<template>
  <section class="popular-jobs">
    <b-container>
      <header class="popular-jobs__title">
        <h2>Most Popular Jobs</h2>
      </header>

      <b-row class="justify-content-center">
        <b-col
          class="popular-jobs__content"
          lg="6"
          v-for="(career, i) in careers"
          :key="i"
          v-show="career.showPost"
        >
          <article
            @click="gotoCareerDetails(career)"
            class="popular-jobs__content-item"
          >
            <h4>{{ career.jobTitle }}</h4>
            <b-row>
              <b-col>
                <span><i class="fa fa-list-ul"></i>{{ career.tag }}</span>
                <span
                  ><i class="fa fa-envelope"></i
                  >{{ career.vacancyPosition }} open positions</span
                >
                <span
                  ><i class="fa fa-calendar"></i> Deadline:
                  {{ career.deadLine }}</span
                >
              </b-col>
              <b-col style="flex: 0 0 10px">
                <h6>&#8594;</h6>
              </b-col>
            </b-row>
            <div class="popular-jobs__content-item--btn">
              <b-button>{{ career.jobType }}</b-button>
            </div>
          </article>
        </b-col>
      </b-row>
      <article class="popular-jobs__description">
        <h3>Can’t find what you’re looking for?</h3>
        <p>
          We are continuously looking for hiring talent from various fields. If
          you have expertise in any of these fields feel free to send your
          resume to us.
        </p>
        <p>
          Python, PHP/Laravel/Symfony, Javascript, Java, NodeJS, VueJS/ReactJS,
          React Native, Software Quality Assurance
        </p>
        <!-- <a href="mailto:contact@reformedtech.org">Send us your CV &#8594;</a> -->
      </article>
      <article class="popular-jobs__cvform">
        <span v-b-modal.cv-form href="">Send us your CV &#8594;</span>
        <b-modal ref="cv-form" id="cv-form" hide-footer hide-header>
          <form class="popular-jobs__cvform-input">
            <h3>Drop your CV</h3>
            <hr />
            <p>Full Name <span>*</span></p>
            <b-form-group>
              <b-form-input v-model="fullName" required></b-form-input>
            </b-form-group>
            <p>Email <span>*</span></p>
            <b-form-group>
              <b-form-input v-model="email" required></b-form-input>
            </b-form-group>
            <p>Phone</p>
            <b-form-group>
              <b-form-input v-model="phone" required></b-form-input>
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
              rows="3"
            ></b-form-textarea>
            <hr />
            <footer class="popular-jobs__cvform-input--btn">
              <span class="popular-jobs__cvform-input--btn-submit" @click="submit" :disabled="!isValid">
                <a>Submit</a>
              </span>
              <span
                class="popular-jobs__cvform-input--btn-cancle"
                @click="close()"
              >
                <a>Cancle</a>
              </span>
            </footer>
          </form>
        </b-modal>
      </article>
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
import json from "~/static/data.json";
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
      careers: json,
      fullName: "",
      email: "",
      phone: "",
      file: null,
      fileUrl: "",
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
        name: this.fullName,
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
      if (this.message) {
        data.Personal_Note = this.message;
      }
      return Object.keys(data).length ? JSON.stringify(data) : "";
    },
    isValid() {
      if (this.fullName && this.email && this.message && this.file) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    gotoCareerDetails(career) {
      this.$router.push(`/career/${career.id}`);
    },
    // Form Submission
    submit() {
      if (this.isValid) {
        axios
          .post("https://ms-contact.buildo.xyz", this.formData)
          .then((response) => {
            if (200 <= response.status < 300) {
              this.showSuccessModal = true;
              this.close();
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
    close() {
      this.$refs["cv-form"].hide();
	  this.$refs.file.value = null;
      this.fullName = ""
      this.email = "";
      this.phone = "";
      this.message = "";
    },
  },
};
</script>
