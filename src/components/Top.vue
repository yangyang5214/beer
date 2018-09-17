<template>
  <div class="top">
    <div class="header-navigation" id="header">
      <nav>
        <div class="logo"><a href="/"><b>Beer Home</b></a></div>
        <ul id="starlist">
          <li>
            <router-link id='index' to="/index">首页</router-link>
          </li>
          <li>
            <router-link id='gallery' to="/gallery">相册</router-link>
          </li>
          <li>
            <router-link id='blog' to="/blog">博客</router-link>
          </li>
          <li>
            <router-link id='/bug' to="/bug">Bug</router-link>
          </li>
          <li>
            <router-link id='me' to="/me">关于我</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'head',
    data: function () {
      return {}
    },
    mounted: function () {
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped">
  .top {
    width: 100%;
    position: fixed;
    top: 0;
  }

  .header-navigation {
    top: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: rgba(255, 255, 255, .9);

    text-align: center;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .04);
    z-index: 9999;
  }

  #starlist {
    float: right;
  }

  #starlist li {
    float: left;
    display: block;
    padding: 0 0 0 40px;
    font-size: 16px
  }

  #starlist {
    float: right;
  }

  .logo {
    float: left;
    font-size: 22px
  }

  #starlist li {
    float: left;
    display: block;
    padding: 0 0 0 40px;
    font-size: 16px
  }

</style>
