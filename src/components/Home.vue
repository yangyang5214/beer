<template>
  <div class="home">
    <top></top>
    <router-view></router-view>
  </div>
</template>

<script>
  import Top from './Top'

  export default {
    name: 'home',
    components: {
      Top,
    },
    data: function () {
      return {}
    },
    mounted: function () {
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
