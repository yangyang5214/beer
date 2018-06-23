<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  * { margin: 0; padding: 0 }
  body { font: 15px "Microsoft YaHei", Arial, Helvetica, sans-serif; color: #555; background:#efefef; line-height: 1.5; }
  img { border: 0; display: block }
  ul, li { list-style: none; }
  a { text-decoration: none; color: #555 }
  a:hover { text-decoration: none; color: #000; }
  .clear { clear: both; }
  .blank { height: 20px; overflow: hidden; width: 100%; margin: auto; clear: both }
  .f_l { float: left }
  .f_r { float: right }
  article { width: 1000px; margin:80px auto 0; overflow: hidden }
  .container { width: 1000px; margin: auto }
  nav{ width:900px; margin:auto}
</style>
