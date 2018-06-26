<template>
  <div class="gallery">
    <div class="list-item">
      <div class="item-img" v-for="img in img_list">
        <img :src="img.url" @click="goDetail(img.id)">
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
        img_list: [
          {
            'id': '1',
            'url': 'https://yangyang-1256523277.cos.ap-shanghai.myqcloud.com/test/1529979247956/647435d9-be49-4f85-99ec-4756a52b207a.png',
            'type': '泰山',
            'count': '10'
          },
          {
            'id': '1',
            'url': 'https://yangyang-1256523277.cos.ap-shanghai.myqcloud.com/test/1529979247956/647435d9-be49-4f85-99ec-4756a52b207a.png',
            'type': '泰山',
            'count': '10'
          },
          {
            'id': '1',
            'url': 'https://yangyang-1256523277.cos.ap-shanghai.myqcloud.com/test/1529979247956/647435d9-be49-4f85-99ec-4756a52b207a.png',
            'type': '泰山',
            'count': '999'
          },
          {
            'id': '1',
            'url': 'https://yangyang-1256523277.cos.ap-shanghai.myqcloud.com/test/1529979247956/647435d9-be49-4f85-99ec-4756a52b207a.png',
            'type': '泰山',
            'count': '100'
          },
          {
            'id': '1',
            'url': 'https://yangyang-1256523277.cos.ap-shanghai.myqcloud.com/test/1529979247956/647435d9-be49-4f85-99ec-4756a52b207a.png',
            'type': '泰山',
            'count': '10'
          },
          {
            'id': '1',
            'url': 'https://yangyang-1256523277.cos.ap-shanghai.myqcloud.com/test/1529979247956/647435d9-be49-4f85-99ec-4756a52b207a.png',
            'type': '泰山',
            'count': '10'
          },
          {
            'id': '1',
            'url': 'https://yangyang-1256523277.cos.ap-shanghai.myqcloud.com/test/1529979247956/647435d9-be49-4f85-99ec-4756a52b207a.png',
            'type': '泰山',
            'count': '10'
          },
        ]
      }
    },
    mounted: function () {
    },
    methods: {
      goDetail(id){
        console.error(id)
      }
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
