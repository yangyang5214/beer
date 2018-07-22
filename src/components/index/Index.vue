<template>
  <div class="index">
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
    },
    methods: {
      getHasCityList() {
        this.$axios.get(this.$api.getAllCityList).then(response => {
          let data = response.data
          this.has_city_list = data.data
          this.initCityMap()
        })
      },
      initCityMap() {
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
  .index {
    height: 100%;
    margin-top: 80px;
    margin-left: 50px;
    margin-right: 50px;
  }

  #container {
    width: 100%;
    height: 800px;
    margin: 0px;
  }
</style>
