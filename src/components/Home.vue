<template>
  <div class="home">
    <top></top>
    <router-view></router-view>
    <!--<left></left>-->
  </div>
</template>

<script>
  import Top from './common/Top'
  import Left from './index/IndexLeft'

  export default {
    name: 'home',
    components: {
      Top,
      Left
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
