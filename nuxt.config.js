const isDevelopment = process.env.NODE_ENV !== 'production'
import { fetchSitemapRoutes } from "./utils/sitemap"

export default async () => {
  const routes = await fetchSitemapRoutes()

  return {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: true,
 
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      htmlAttrs: {
        lang: "en-US",
      },
      meta: [
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1.0,  maximum-scale=1.0, user-scalable=no"
        },
        { 
          hid: "HandheldFriendly", 
          name: "HandheldFriendly", 
          content: "true" 
        },
        {
          hid: "facebook-domain-verification",
          name: "facebook-domain-verification",
          content: "mfdjg454c3og7aokhrjde15n6vw032"
        }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" },
      ],
      script: [
        { src: "https://kit.fontawesome.com/601adbbd38.js", crossorigin:"anonymous", body: true }
      ]
    },

      // nuxt-seo package custom configuration
      seo: {
        baseUrl: 'https://reformedtech.org',
        name: 'ReformedTech',
        title: 'ReformedTech | Offshore Web And Software Development Company',
        templateTitle: '%title%',
        description: 'ReformedTech provides startups with the chance to hire an amazing team of designers & developers for offshore software and mobile app development services.',
        canonical: 'auto',
        isForcedTrailingSlash: true,
        url: 'https://reformedtech.org',
        twitter: {
          site: '@ReformedTech', 
          creator: '@ReformedTech',
          card: 'summary_large_image', 
          type: '', 
          title: '', 
          description: ''
        },
        openGraph: {
          type: 'website',
          // image: {
          //   url: 'https://reformedtech.org/logo-02.png',
          //   alt: 'ReformedTech',
          //   width: '200',
          //   height: '150',
          // }        
        },
      },  

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~/assets/scss/style.scss"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
      { src: "./plugins/vue-carousel.js", mode: "client" },
      { src: "~/plugins/vue-fb-customer-chat.js", ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      // https://go.nuxtjs.dev/bootstrap
      "bootstrap-vue/nuxt",
      // https://go.nuxtjs.dev/axios
      "@nuxtjs/axios",
      "@nuxtjs/sitemap",
      '@nuxtjs/apollo',
      "@nuxtjs/robots",
      "nuxt-seo"
    ],

    sitemap: {
      hostname: isDevelopment ? "http://localhost:3000/" : "https://reformedtech.org/",
      cacheTime: 1000 * 60 * 15,
      routes,
      exclude: [
        '/blog',
      ],
      trailingSlash: true
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    env: {
      appUrl: 'https://reformedtech.org/'
    },

    apollo: {
      clientConfigs: {
        default: {
          httpEndpoint: 'https://dashboard.reformedtech.org/graphql',
        }
      }
    },

    //https://dashboard.reformedtech.org/
    sitemap: {
      hostname:
        process.env.NODE_ENV === "production"
          ? "https://reformedtech.org/"
          : "http://localhost:3000/",
      exclude: [
        '/blog',
      ],
      trailingSlash: true
    },
    robots: {
      UserAgent: "*",
      Disallow: "/cgi-bin/",
      Disallow: "/_nuxt/",
      Allow: "/_nuxt/img/",
      Sitemap: "https://reformedtech.org/sitemap.xml",
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},
    vue: {
      config: {
        productionTip: !!isDevelopment,
        devtools: true
      }
    },
    messages: {
      server_error: 'Oh no! Server error',
      nuxtjs: 'Is this Nuxt.js?',
      back_to_home: 'Cmon, back home!',
      server_error_details: 'Uh uh :| Server errorrrrr',
      error_404: 'This page could not be found'
    },

    serverMiddleware: [
      { path: '/event', handler: (req, res, next) => { res.spa = true; next() } }
    ]
  }
};
