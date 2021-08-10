import Vue from 'vue';
import GMap from "C:\\Users\\rpr29\\Downloads\\themeforest-wNTXSPcr-veluxi-vue-js-landing-page-collection\\veluxi_v215\\veluxi\\packages\\agency-theme\\node_modules\\nuxt-gmaps\\components\\GMap.vue";
import GMapMarker from "C:\\Users\\rpr29\\Downloads\\themeforest-wNTXSPcr-veluxi-vue-js-landing-page-collection\\veluxi_v215\\veluxi\\packages\\agency-theme\\node_modules\\nuxt-gmaps\\components\\GMapMarker.vue";
import GMapInfoWindow from "C:\\Users\\rpr29\\Downloads\\themeforest-wNTXSPcr-veluxi-vue-js-landing-page-collection\\veluxi_v215\\veluxi\\packages\\agency-theme\\node_modules\\nuxt-gmaps\\components\\GMapInfoWindow.vue";
export default(context, inject) =>{
  Vue.component('GMap', GMap);
  Vue.component('GMapMarker', GMapMarker);
  Vue.component('GMapInfoWindow', GMapInfoWindow);
  inject('GMaps', {apiKey: "", loaded: false, libraries: undefined})
}