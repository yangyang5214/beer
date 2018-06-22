<template>
  <div class="index">
     {{city_list}}
     {{city_list.length}}
    <index-map></index-map>
  </div>
</template>

<script>
import IndexMap from './IndexMap'

export default {
  name: 'index',
  components: {IndexMap},
  data: function () {
    return {
      city_list: []
    }
  },
  mounted: function () {
    this.getCityList()
  },
  methods: {
    getCityList () {
      this.$axios.get(this.$api.getAllCityList).then(response => {
        let data = response.data
        this.city_list = data.data
      }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .index{
    width: 100%;
    height: 950px
  }

</style>
