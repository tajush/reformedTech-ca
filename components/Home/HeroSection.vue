<template>
  <section
    class="hero-section"
    itemscope
    itemtype="https://schema.org/WebContent"
  >
    <b-container>
      <main class="hero-content">
        <b-row>
          <b-col
            lg="6"
            cols="12"
          >
            <header class="hero-content__caption">
              <h1 class="hero-content__caption-headline" itemprop="text">
                Unlock <br>Evolution & Success with 
                <span class="hero-content__caption-companyName" itemprop="text">ReformedTech</span>
              </h1>
              <p itemprop="description">
                We employ software development to cultivate your projects, assess your influence, and drive your mission forward. Our offshore software development team and in-house products are primed to meet your requirements. Explore our recent projects and reach out to us!
              </p>
              <nuxt-link
                to="/projects/"
                itemprop="url"
              >Our Works</nuxt-link>
            </header>
          </b-col>
          <b-col
            lg="6"
            cols="12"
          >
            <figure class="hero-content__dot-image">
              <picture>
                <img
                  src="~/assets/images/animation-image/polka-dots.svg"
                  alt="pokla-dot"
                  itemprop="image"
                />
              </picture>
            </figure>
            <figure class="hero-content__dot1"></figure>
            <figure class="hero-content__dot2"></figure>
            <figure class="hero-content__hero-image">
              <picture>
                <source
                  srcset="~/assets/images/hero-section/hero-image.png"
                  type="image/png"
                />
                <source
                  srcset="~/assets/images/hero-section/hero-image.webp"
                  type="image/webp"
                />
                <img
                  src="~/assets/images/hero-section/hero-image.png"
                  alt="hero-image"
                  itemprop="image"
                />
              </picture>
            </figure>
          </b-col>
        </b-row>
        <figure class="hero-content__shape-image">
          <img
            src="~/assets/images/animation-image/shape-3.svg"
            alt="shape-image"
            itemprop="image"
          />
        </figure>
      </main>
    </b-container>
  </section>
</template>
