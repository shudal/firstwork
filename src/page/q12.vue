<template>
  <div>
    <div>
      <el-row type="flex">
        <div>
          <el-col class="myTableTitle">
            12.什么是CSRF攻击？
          </el-col>
        </div>

      </el-row>

      <el-card class="box-card">
        <div class="my-left-text">
          <p>
            跨站请求伪造(Cross-site request forgery)是指通过技术手段欺骗用户的游览器去访问一个自己曾经认证过的网站并运行一些操作。
          </p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
<style>
  .myTableTitle {
    text-align: left
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  .my-left-text {
    text-align: left
  }
</style>
