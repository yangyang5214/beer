<template>
  <div class="indexMap">
    <div id="container">
    </div>
  </div>
</template>

<script>
import AMap from 'AMap'

var map
export default {
  name: 'indexMap',
  data: function () {
    return {
      has_city_list: []
    }
  },
  mounted: function () {
    this.init()
    this.getHasCityList()
    this.initCityMap()
  },
  methods: {
    getHasCityList () {
      this.has_city_list = ['120000', '130000', '320000']
    },
    initCityMap () {
      let citys = this.has_city_list
      AMap.plugin('AMap.DistrictSearch', function () {
        var district = new AMap.DistrictSearch({
          extensions: 'all',
          level: 'province'
        })
        for (let i = 0; i < citys.length; i++) {
          district.search(citys[i], function (status, result) {
            var bounds = result.districtList[0].boundaries
            var polygons = []
            if (bounds) {
              for (var i = 0, l = bounds.length; i < l; i++) {
                var polygon = new AMap.Polygon({
                  map: map,
                  strokeWeight: 1,
                  path: bounds[i],
                  fillOpacity: 0.7,
                  fillColor: '#FF0000',
                  strokeColor: '#CC66CC'
                })
                polygons.push(polygon)
              }
            }
          })
        }
      })
    },
    init: function () {
      map = new AMap.Map('container', {
        center: [116.397428, 39.90923],
        resizeEnable: true,
        zoom: 4
      })
      AMap.plugin(['AMap.Scale'], function () {
        map.addControl(new AMap.Scale())
      })
    }

  }
}
</script>

<style scoped>
  .indexMap {
    height: 100%
  }

  #container {
    width: 1000px;
    height: 600px;
    margin: 0px;
  }
</style>
