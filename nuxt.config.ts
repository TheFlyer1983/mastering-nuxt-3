// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/supabase', '@pinia/nuxt'],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons'
    ]
  }
});
