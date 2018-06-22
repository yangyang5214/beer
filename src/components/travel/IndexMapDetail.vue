<template>
  <div class="indexMapDetail">
    <div id="container">
    </div>
  </div>
</template>

<script>
import AMap from 'AMap'
var map
export default {
  name: 'indexMapDetail',
  data: function () {
    return {
      marker_list: []
    }
  },
  mounted: function () {
    this.init()
    this.getMarkerList()
    this.initMarker()
  },
  methods: {
    initMarker () {
      for (let i = 0; i < this.marker_list.length; i++) {
        let marker = new AMap.Marker({
          icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
          position: this.marker_list[i]
        })
        marker.setMap(map)
      }
    },
    getMarkerList () {
      this.marker_list = [[110.397428, 39.90923], [116.397428, 39.90923]]
    }
  }
}
</script>

<style scoped>
</style>
