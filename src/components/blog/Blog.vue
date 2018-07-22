<template>
  <div>
    <div v-html="content">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'blog',
    data: function () {
      return {
        blog_id: '',
        content: '',
      }
    },
    mounted: function () {
      let url_path = this.$route.path
      this.blog_id = url_path.split('/')[3]
      this.getBlogById()
    },
    methods: {
      getBlogById() {
        let params = {
          id: this.blog_id
        }
        this.$axios.get(this.$api.getBlogById, {params}).then(response => {
          let data = response.data
          this.content = data.data
        })
      }
    }
  }
</script>

<style scoped>
</style>
