<template>
  <div class="blogHome">
    <div class="l_box">
      <div class="search">
        <form action="" method="post" name="searchform" id="searchform">
          <input name="keyboard" id="keyboard" class="input_text" value="请输入关键字词" style="color: rgb(153, 153, 153);"
                 onfocus="if(value=='请输入关键字词'){this.style.color='#000';value=''}"
                 onblur="if(value==''){this.style.color='#999';value='请输入关键字词'}" type="text">
          <input name="show" value="title" type="hidden">
          <input name="tempid" value="1" type="hidden">
          <input name="tbname" value="news" type="hidden">
          <input name="Submit" class="input_submit" value="搜索" type="submit">
        </form>
      </div>

      <div class="group_type">
        <h2>文章分类</h2>
        <ul v-on:click="selectType(item.type)" v-for="item in group_type">
          <li>{{item.type}} ({{item.count}})</li>
        </ul>
      </div>

      <div class="group_date">
        <h2>日期归档</h2>
        <ul v-on:click="selectDate(item.date)" v-for="item in group_date">
          <li>{{item.date}} ({{item.count}})</li>
        </ul>
      </div>
    </div>

    <div class="r_box">
      <!--<blog></blog>-->
      <li v-on:click="goDetail(blog.id)" v-for="blog in blog_list">
        <i>
          <a><img :src="blog.image"></a>
        </i>
        <h3><a href="/">{{blog.name}}</a></h3>
        <p>{{blog.remark}}</p>
      </li>

      <div class="block">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="page_size"
          :total=total
          :current-page=current_page
          @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import Blog from "./Blog";

  export default {
    name: 'blogHome',
    components: {Blog},
    data: function () {
      return {
        page_size: 5,
        total: '',
        blog_list: [],
        current_page: 1,
        group_type: [],
        group_date: [],
        type: '',
        date: '',
      }
    },
    mounted: function () {
      this.getBlogList()
      this.getStatisticByDate()
      this.getStatisticByType()
    },
    methods: {
      selectType(type) {
        this.type = type
        this.getBlogList()
      },
      selectDate(date) {
        this.date = date
        this.getBlogList()
      },
      handleCurrentChange(val) {
        this.current_page = val
        this.getBlogList()
      },
      getStatisticByDate() {
        this.$axios.get(this.$api.getStatisticByDate).then(response => {
          let data = response.data
          this.group_date = data.data
        })
      },
      getStatisticByType() {
        this.$axios.get(this.$api.getStatisticByType).then(response => {
          let data = response.data
          this.group_type = data.data
          console.error(this.group_date)
        })
      },
      getBlogList() {
        let params = {
          type: this.type,
          date: this.date,
          pageNum: this.current_page,
          pageSize: this.page_size
        }
        this.$axios.get(this.$api.getBlogList, {params}).then(response => {
          let data = response.data
          this.blog_list = data.list
          this.total = data.total
          this.type = ""
          this.date = ""
        })
      },
      goDetail(id) {
        let routeData = this.$router.resolve({path: '/blog/detail'});
        window.open(routeData.href + '/' + id, '_blank');
      }
    }
  }
</script>

<style scoped>
  .blogHome {
    background: rgba(255, 255, 255, .9);
    margin-top: 100px;
    margin-left: 400px;
    margin-right: 400px;
  }

  .search input.input_submit {
    border: 0;
    background: 0;
    color: #fff;
    outline: none;
    position: absolute;
    top: 10px;
    right: 8%
  }

  .search input.input_text {
    border: 0;
    line-height: 36px;
    height: 36px;
    width: 72%;
    padding-left: 10px;
    outline: none
  }

  .l_box {
    width: 20%;
    float: left
  }

  .l_box .search {
    border: 1px solid #000;
    background: #000;
    border-radius: 0 5px 5px 0;
    position: relative;
  }

  .l_box h2 {
    color: #333;
    font-size: 14px;
    line-height: 30px;
    padding-left: 20px;
    background: #fff
  }

  .l_box div {
    background: rgba(255, 255, 255, 0.5);
    margin-bottom: 20px;
    overflow: hidden
  }

  .l_box div ul {
    padding: 10px;
    overflow: hidden
  }

  li {
    margin-left: 10px
  }

  .r_box {
    width: 75%;
    float: right
  }

  .r_box li {
    background: rgba(255, 255, 255, 0.8);
    padding: 15px;
    overflow: hidden;
    color: #797b7c;
    margin-bottom: 20px
  }

  .r_box li h3 {
    font-size: 16px;
    line-height: 25px;
    text-shadow: #FFF 1px 1px 1px
  }

  .r_box li h3 a {
    color: #222
  }

  .r_box li h3 a:hover {
    color: #000;
    text-decoration: underline
  }

  .r_box li img {
    float: right;
    clear: right;
    width: 100%;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
  }

  .r_box li i {
    width: 150px;
    display: block;
    max-height: 100px;
    overflow: hidden;
    float: right;
    margin-left: 20px
  }

  .r_box li p {
    margin: 20px 0 0 0;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }

  .r_box li:hover img {
    transform: scale(1.05)
  }

  .r_box li:hover h3 a {
    color: #19585d;
  }

  .block {
    text-align: center;
  }
</style>
