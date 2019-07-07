<template>
  <div>
    <div>
      <el-row type="flex">
        <div>
          <el-col class="myTableTitle">
              3.什么是0day漏洞？
          </el-col>
        </div>

      </el-row>

      <el-card class="box-card">
        <div class="my-left-text">
          指软件被人发现的并且还未被软件公司修复的漏洞。
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
