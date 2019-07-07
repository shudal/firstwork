<template>
  <div>
    <div>
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="1"
        :pager-count="11"
        layout="prev, pager, next"
        :total="19">
      </el-pagination>
    </div>

    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        'con': ''
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.$router.push("q1");
      },
      handleCurrentChange(_currentPage) {
        console.log(_currentPage)
        this.$router.push("q" + _currentPage)
      }
    }
  }
 </script>
