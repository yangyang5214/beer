<template>
  <div class="galleryDetail">
    <div class="list-item wow bounceInLeft">
      <div class="item-img" v-for="url in img_list">
        <img :src="url.url" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'galleryDetail',
    data: function () {
      return {
        gallery_type: '',
        img_list: []
      }
    },
    created() {
      let url_path = this.$route.path
      this.gallery_type = decodeURI(url_path.split('/')[3])
    },
    mounted: function () {
      this.getImageList()
    },
    methods: {
      getImageList() {
        let params = {
          type: this.gallery_type
        }
        this.$axios.get(this.$api.getImageList, {params}).then(response => {
          let data = response.data
          this.img_list = data.data
        })
      },
    }
  }
</script>

<style scoped>
  .galleryDetail {
    /*将div 中的元素分为三列*/
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;

    /*规定列间的间隔为 30 像素*/
    -moz-column-gap: 30px;
    -webkit-column-gap: 30px;
    column-gap: 30px;

    margin-top: 80px;
    margin-left: 200px;
    margin-right: 200px;
  }

  .list-item {
    margin-bottom: 30px;
  }

  .item-img {
    margin-bottom: 30px;
  }

  .item-img img {
    width: 100%;
  }
</style>
