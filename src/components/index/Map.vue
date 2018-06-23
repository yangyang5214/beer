<template>
  <div class="index">

  </div>
</template>

<script>
export default {
  name: 'map',
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
