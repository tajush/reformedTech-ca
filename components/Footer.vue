<template>
  <section
    class="footer-section"
    itemscope
    itemtype="https://schema.org/WPFooter"
  >
    <b-container>
      <section class="footer-section__content">
        <section class="footer-section__content-services">
          <h4 itemprop="name">Our Services</h4>          
            <nuxt-link to="/offshore/" itemprop="archivedAt">Offshore Development</nuxt-link>
            <nuxt-link to="/web/" itemprop="archivedAt">Web Application</nuxt-link>
            <nuxt-link to="/mobileapp/" itemprop="archivedAt">Mobile Application</nuxt-link>
            <nuxt-link to="/ecommerce/" itemprop="archivedAt">eCommerce Development</nuxt-link>
            <nuxt-link to="/devops/" itemprop="archivedAt">DevOps</nuxt-link>
            <nuxt-link to="/digitalmarketing/" itemprop="archivedAt">Digital Marketing</nuxt-link>
            <nuxt-link to="/shopify/" itemprop="archivedAt">Shopify Development</nuxt-link>
            <nuxt-link to="/wordpress/" itemprop="archivedAt">WordPress Development</nuxt-link>
        </section>
        <section class="footer-section__content-resources">
          <h4 itemprop="name">Useful Resources</h4>
          <nuxt-link to="/projects/" itemprop="archivedAt">Case Study</nuxt-link>
          <nuxt-link to="/career/" itemprop="archivedAt">Career</nuxt-link>
          <nuxt-link to="/faq/" itemprop="archivedAt">FAQs</nuxt-link>
          <nuxt-link to="/terms/" itemprop="archivedAt">Terms of use</nuxt-link>
          <nuxt-link to="/policy/" itemprop="archivedAt">Privacy Policy</nuxt-link>
        </section>        
        <section
          class="footer-section__content-contact"
          itemscope
          itemtype="https://schema.org/ContactPoint"
        >
          <h4 itemprop="name">Contact Us</h4>
          <div class="footer-section__content-contact--address">
            <i class="fa fa-map-marker"></i>
            <p itemprop="contactOption">
              291,Gordonhorn crescent, V2E 1G6,<br/>Kamloops, British Colombia, <br/>Canada.
            </p>
          </div>
          <div class="footer-section__content-contact--address">
            <i class="fa fa-phone pt-1"></i>
            <p itemprop="telephone">Mob: +1 236 565 4003</p>
          </div>
          <div class="footer-section__content-contact--address">
            <i class="fa fa-paper-plane pt-1"></i>
            <p itemprop="email">contact@reformedtech.ca</p>
          </div>
        </section>
      </section>
      <hr />
      <section class="footer-section__link">
        <section class="footer-section__link-content">
          <p itemprop="copyrightNotice">
            &copy; 2020
            <nuxt-link to="/" itemprop="archivedAt">ReformedTech</nuxt-link>,
            All rights reserved.
          </p>
        </section>

        <section class="footer-section__link-icon">
          <a
            rel="preconnect"
            href="https://www.facebook.com/reformedtech"
            itemprop="url"
            ><i class="fa fa-facebook" title="Facebook"></i
          >
          <span class="d-none">Facebook</span>
        </a>
          <a
            rel="preconnect"
            href="https://twitter.com/ReformedTech"
            itemprop="url"
            ><i class="fa fa-twitter" title="Twitter"></i
          >
        <span class="d-none">Twitter</span>
        </a>
          <a
            rel="preconnect"
            href="https://www.linkedin.com/company/reformedtech"
            itemprop="url"
          >
            <i class="fa fa-linkedin" title="Linkedin"></i
          >
          <span class="d-none">Linkedin</span>
        </a>

          <a
            rel="preconnect"
            href="https://www.instagram.com/reformed_tech"
            itemprop="url"
            ><i class="fa fa-instagram" title="Instagram"></i
          >
          <span class="d-none">Instagram</span>
        </a>
          <a
            rel="preconnect"
            href="https://www.pinterest.com/reformedtech"
            itemprop="url"
            ><i class="fa fa-pinterest" title="Pinterest"></i
          >
          <span class="d-none">Pinterest</span>
        </a>
          <a
            rel="preconnect"
            href="https://youtube.com/@Reformed-Tech"
            itemprop="url" 
          >
            <i class="fa fa-youtube-square" title="Youtube"></i
          >
          <span class="d-none">Youtube</span>
        </a>
        </section>
      </section>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
