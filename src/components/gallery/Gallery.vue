<template>
  <div class="gallery">
    <div class="list-item">
      <div class="item-img" v-for="img in img_cover_list">
        <img :src="img.url" @click="goDetail(img.type)">
        <div>{{img.type}}</div>
        <span>{{img.count}}</span>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'gallery',
    data: function () {
      return {
        img_cover_list: []
      }
    },
    mounted: function () {
      this.getImageCoverList()
    },
    methods: {
      goDetail(type) {
        let routeData = this.$router.resolve({path: '/gallery/detail'});
        window.open(routeData.href + '/' + type, '_blank');
      },
      getImageCoverList() {
        this.$axios.get(this.$api.getImageCoverList).then(response => {
          let data = response.data
          this.img_cover_list = data.data
        })
      },
    }
  }
</script>

<style scoped>
  .gallery {
    margin-top: 100px;
    margin-left: 300px;
    margin-right: 300px;
  }

  .list-item {
  }

  .item-img {
    background: rgba(255, 255, 255, .9);
    display: inline-block;
    width: 300px;
    height: 200px;
    margin-right: 50px;
    margin-left: 50px;
    margin-bottom: 40px;
  }

  .item-img img {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    width: 260px;
  }

  .item-img div {
    margin-left: 20px;
    font-size: 20px;
    width: 230px;
    display: inline-block;
  }

  .item-img span {
    font-size: 20px;
    margin-right: 20px;
  }
</style>
