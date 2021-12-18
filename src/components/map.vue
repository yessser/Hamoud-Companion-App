<template>
  <l-map
    id="map"
    :zoom="zoom"
    :center="center"
    @ready="onReady"
    @locationfound="onLocationFound"
  >
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker :lat-lng="markerLatLng" :icon="pin"></l-marker>
  </l-map>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
  import Vue from "vue"
import Vuex from 'vuex' 
Vue.use(Vuex)
import { Icon } from 'leaflet';


delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


var position = [51.504, -0.159];

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    // HelloWorld
  },
  methods: {
    onReady(mapObject) {
      mapObject.locate();
    },
    onLocationFound(location) {
      this.position = location;
      console.log(location);
      console.log("blaa bla");
    },
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: position,
      markerLatLng: [51.504, -0.159],
      pin: Icon({
        iconUrl: "./assets/pin.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      }),
    };
  },
};
</script>
<style>
#map {
    height: 90vh;
    width: 100vw;
}
</style>