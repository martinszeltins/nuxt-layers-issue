import PrimeVue from 'primevue/config'

export default defineNuxtPlugin({
    name: 'primevue',
    
    setup(nuxtApp) {
        nuxtApp.vueApp.use(PrimeVue, {
            ripple: false,
        })
    },
})

