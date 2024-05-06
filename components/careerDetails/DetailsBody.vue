<template>
  <section v-if="career && Object.keys(career).length" class="career-detail">
    <b-container>
      <main class="career-detail__content">
        <div class="career-detail__content-article">
          <h2>{{ career.jobTitle }}</h2>
          <span class="mr-3"
            ><i class="fa fa-list-ul mr-2"></i>{{ career.tag }}</span
          >
          <span
            ><i class="fa fa-calendar mr-2"></i> Deadline:
            {{ career.deadLine }}</span
          >
          <div class="career-detail__content-article-btn">
            <b-button>{{ career.jobType }}</b-button>
          </div>
          <div class="career-detail__content-article-overview">
            <section class="career-detail__content-article-overview-item">
              <h4>Job Overview</h4>
              <div class="career-detail__content-article-overview-item-list">
                <div
                  class="career-detail__content-article-overview-item-list-post1"
                >
                  <div
                    class="career-detail__content-article-overview-item-list-post1-info"
                  >
                    <div>
                      <i class="fa fa-calendar"></i>
                    </div>
                    <div>
                      <h6>Date Posted</h6>
                      <p>{{ career.overview.posted }}</p>
                    </div>
                  </div>
                </div>
                <div
                  class="career-detail__content-article-overview-item-list-post1"
                >
                  <div
                    class="career-detail__content-article-overview-item-list-post1-info"
                  >
                    <div>
                      <i class="fa fa-calendar"></i>
                    </div>
                    <div>
                      <h6>Vacancy</h6>
                      <p>{{ career.overview.vacancy }}</p>
                    </div>
                  </div>
                </div>
                <div
                  class="career-detail__content-article-overview-item-list-post1"
                >
                  <div
                    class="career-detail__content-article-overview-item-list-post1-info"
                  >
                    <div>
                      <i class="fa fa-calendar"></i>
                    </div>
                    <div>
                      <h6>Experience</h6>
                      <p>{{ career.overview.experience }}</p>
                    </div>
                  </div>
                </div>
                <div
                  class="career-detail__content-article-overview-item-list-post1"
                >
                  <div
                    class="career-detail__content-article-overview-item-list-post1-info"
                  >
                    <div>
                      <i class="fa fa-calendar"></i>
                    </div>
                    <div>
                      <h6>Location</h6>
                      <p>{{ career.overview.location }}</p>
                    </div>
                  </div>
                </div>
                <div
                  class="career-detail__content-article-overview-item-list-post1"
                >
                  <div
                    class="career-detail__content-article-overview-item-list-post1-info"
                  >
                    <div>
                      <i class="fa fa-calendar"></i>
                    </div>
                    <div>
                      <h6>Working Hours</h6>
                      <p>{{ career.overview.workingHours }}</p>
                    </div>
                  </div>
                </div>
                <div
                  class="career-detail__content-article-overview-item-list-post1"
                >
                  <div
                    class="career-detail__content-article-overview-item-list-post1-info"
                  >
                    <div>
                      <i class="fa fa-calendar"></i>
                    </div>
                    <div>
                      <h6>Working Day</h6>
                      <p>Weekly: {{ career.overview.workingDay.weekly }}</p>
                      <p>Weekend: {{ career.overview.workingDay.weekend }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="career-detail__content-article-overview-item-applyBtn">
                <a :href="career.jobLink" target="_blank">Apply Now</a>
              </div>
             
            </section>
          </div>
          <article
            class="career-detail__content-article-position"
            v-for="(career, i) in career.description"
            :key="'careerAbout' + i"
          >
            <h2>{{ career.aboutTitle }}</h2>
            <p v-html="career.aboutContent"></p>
          </article>

          <article
            class="career-detail__content-article-position"
            v-for="(career, i) in career.description"
            :key="'careerAbout' + i"
          >
            <h2>{{ career.jobContextTitle }}</h2>
            <p v-html="career.jobContextContent"></p>
          </article>          

          <article
            class="career-detail__content-article-mustHave"
            v-for="(career, i) in career.description"
            :key="'careerResponsibility' + i"
          >
            <h2>{{ career.responsibilityTitle }}</h2>
            <li
              v-for="(career, i) in career.responsibilityContent"
              :key="'careerResponsibilityContent' + i"
            >
              <span v-html="career"></span>
            </li>           
          </article>
          <article
            class="career-detail__content-article-bonusPoint"
            v-for="(career, i) in career.description"
            :key="'careerAdditional' + i"
          >
            <h2>{{ career.additionalTitle }}</h2>
            <li
              v-for="(career, i) in career.additonalContent"
              :key="'careerAdditonalContent' + i"
            >
              {{ career }}
            </li>
          </article>
          <article
            class="career-detail__content-article-mustHave"
            v-for="(career, i) in career.description"
            :key="'careerResponsibility' + i"
          >
          <h2>{{ career.opportunitiesTitle }}</h2>
            <li
              v-for="(career, i) in career.opportunitiesContent"
              :key="'careerResponsibilityContent' + i"
            >
              <span v-html="career"></span>
            </li>           
          </article>          
          <article
            class="career-detail__content-article-education"
            v-for="(career, i) in career.description"
            :key="'careerEducation' + i"
          >
            <h2>{{ career.educatationalRequireTitle }}</h2>
            <p>{{ career.educatationalRequireContent }}</p>
          </article>          
          <article
          class="career-detail__content-article-bonusPoint"
            v-for="(career, i) in career.description"
            :key="'careerNiceToHave' + i"
          >
            <h2>{{ career.niceToHave }}</h2>
            <li
              v-for="(career, i) in career.niceToHaveContent"
              :key="'careerNiceToHaveContent' + i"
            >
              {{ career }}
            </li>
          </article>
          <article
          class="career-detail__content-article-bonusPoint"
            v-for="(career, i) in career.description"
            :key="'careerSalaryTitle' + i"
          >
            <h2>{{ career.salaryTitle }}</h2>
            <li
              v-for="(career, i) in career.salaryContent"
              :key="'careerSalaryContent' + i"
            >
              {{ career }}
            </li>
          </article>          
          <article
            class="career-detail__content-article-hours"
            v-for="(career, i) in career.description"
            :key="'careerWork' + i"
          >
            <h2>{{ career.workTitle }}</h2>
            <p>{{ career.workContent }}</p>
          </article>
          <article
            class="career-detail__content-article-days"
            v-for="(career, i) in career.description"
            :key="'careerWeek' + i"
          >
            <h2>{{ career.weekTitle }}</h2>
            <p
              v-for="(career, i) in career.weekContent"
              :key="'careerWeekContent' + i"
            >
              {{ career }}
            </p>
          </article>
          <article
            class="career-detail__content-article-days"
            v-for="(career, i) in career.description"
            :key="'careerWeek' + i"
          >
            <h2>{{ career.benifitTitle }}</h2>
            <p
              v-for="(career, i) in career.benifitContent"
              :key="'careerWeekContent' + i"
            >
              {{ career }}
            </p>
          </article>          
          <div class="career-detail__content-article-applyButton">
            <a :href="career.jobLink" target="_blank">Apply Now</a>
          </div>
        </div>
        <!-- <CareerForm /> -->
      </main>
    </b-container>
  </section>
</template>
<script>
import CareerForm from "~/components/careerDetails/CareerForm";
import json from "~/static/data.json";

export default {
  components: {
    CareerForm,
  },
  mounted() {
    this.career = this.jobs.find((el) => el.id == this.jobId);
  },
  data() {
    return {
      jobs: json,
      career: {},
    };
  },
  computed: {
    jobId() {
      return this.$route.params.id;
    },
  },
  head({ $seo }) {
    return $seo({
      title: this.career ? this.career.jobTitle : "Unknown",
      description: this.career ? this.career.jobTitle : "Job Title",
      url: "https://reformedtech.org/" + `career/${this.career.id}`
    });
  }
};
</script>
