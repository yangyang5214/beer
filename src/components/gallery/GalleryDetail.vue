<template>
  <div class="galleryDetail">
    <div class="list-item wow bounceInLeft">
      <div class="item-img" v-for="url in img_list">
        <img :src="url" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'galleryDetail',
    data: function () {
      return {
        img_list: [
          'https://yangyang-1256523277.cos.ap-shanghai.myqcloud.com/test/1529979248565/2c14d647-ec7e-44fa-b109-0a458c3ba528.png',
          'https://yangyang-1256523277.cos.ap-shanghai.myqcloud.com/test/1529979248565/2c14d647-ec7e-44fa-b109-0a458c3ba528.png',
          'https://yangyang-1256523277.cos.ap-shanghai.myqcloud.com/test/1529979248565/2c14d647-ec7e-44fa-b109-0a458c3ba528.png',
          'https://yangyang-1256523277.cos.ap-shanghai.myqcloud.com/test/1529979248565/2c14d647-ec7e-44fa-b109-0a458c3ba528.png',
          'https://yangyang-1256523277.cos.ap-shanghai.myqcloud.com/test/1529979248565/2c14d647-ec7e-44fa-b109-0a458c3ba528.png',
          'https://yangyang-1256523277.cos.ap-shanghai.myqcloud.com/test/1529979248565/2c14d647-ec7e-44fa-b109-0a458c3ba528.png',
          'https://yangyang-1256523277.cos.ap-shanghai.myqcloud.com/test/1529979248565/2c14d647-ec7e-44fa-b109-0a458c3ba528.png',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530017077427&di=f5577191241c484108d1e4e08f95af17&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cec52444bf9e45d688d53f2051.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530017077427&di=f5577191241c484108d1e4e08f95af17&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cec52444bf9e45d688d53f2051.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530017077427&di=f5577191241c484108d1e4e08f95af17&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cec52444bf9e45d688d53f2051.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530017077427&di=f5577191241c484108d1e4e08f95af17&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cec52444bf9e45d688d53f2051.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530017077427&di=f5577191241c484108d1e4e08f95af17&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cec52444bf9e45d688d53f2051.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530017077427&di=f5577191241c484108d1e4e08f95af17&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cec52444bf9e45d688d53f2051.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530017077427&di=f5577191241c484108d1e4e08f95af17&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cec52444bf9e45d688d53f2051.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530017077427&di=f5577191241c484108d1e4e08f95af17&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cec52444bf9e45d688d53f2051.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530017077427&di=f5577191241c484108d1e4e08f95af17&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cec52444bf9e45d688d53f2051.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530017077427&di=f5577191241c484108d1e4e08f95af17&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cec52444bf9e45d688d53f2051.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530017077427&di=f5577191241c484108d1e4e08f95af17&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cec52444bf9e45d688d53f2051.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530017077427&di=f5577191241c484108d1e4e08f95af17&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cec52444bf9e45d688d53f2051.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530017077427&di=f5577191241c484108d1e4e08f95af17&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cec52444bf9e45d688d53f2051.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530017077427&di=f5577191241c484108d1e4e08f95af17&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cec52444bf9e45d688d53f2051.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530017077427&di=f5577191241c484108d1e4e08f95af17&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cec52444bf9e45d688d53f2051.jpg',
        ]
      }
    },
    mounted: function () {
    },
    methods: {}
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
