import PrimeButton from 'primevue/button'

export default defineNuxtPlugin({
    name: 'global-components',

    setup(nuxtApp) {
        nuxtApp.vueApp.component('PrimeButton', PrimeButton)
    },
})
