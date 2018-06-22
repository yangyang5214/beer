<template>
  <div class="index">
    <top></top>
    <left></left>
  </div>
</template>

<script>
import Top from '../common/Top'
import Left from './IndexLeft'
export default {
  name: 'index',
  components: {
    Top,
    Left
  },
  data: function () {
    return {
    }
  },
  mounted: function () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
