<template>
  <div class="me">
    <div class="daily">

      <div class="daily-date">
        {{daily.dateline}}
      </div>

      <img class="detail-img" v-bind:src="daily.picture2">

      <div class="detail-content-en">
        {{daily.content}}
      </div>

      <div class="detail-content-zh">
        {{daily.note}}
      </div>

      <blockquote class="detail-content-desc">
        {{daily.translation}}
      </blockquote>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'me',
    data: function () {
      return {
        daily: "",
      }
    },
    mounted: function () {
      this.getDaily();
    },
    methods: {
      getDaily() {
        this.$axios.get(this.$api.getDaily).then(response => {
          let data = response.data
          this.daily = data.data
        })
      },
    }
  }
</script>

<style>
  .me {
    background: rgba(255, 255, 255, .9);
    margin-top: 100px;
    margin-left: 300px;
    margin-right: 300px;
  }

  .daily {
  }

  .detail-img {
  }

  .detail-content-en {
    font-size: 26px;
    line-height: 34px;
    margin-top: 20px;
  }

  .detail-content-zh {
    font-size: 18px;
    line-height: 24px;
    margin-top: 8px;
  }

  .daily-date {
    font-size: 25px;
    line-height: 50px;
  }

  .detail-content-desc {
    margin-top: 16px;
  }

  blockquote {
    line-height: 24px;
    font-size: 14px;
    color: #666;
  }
</style>
