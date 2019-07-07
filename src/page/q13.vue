<template>
  <div>
    <div>
      <el-row type="flex">
        <div>
          <el-col class="myTableTitle">
            13.什么是SQL注入攻击？
          </el-col>
        </div>

      </el-row>

      <el-card class="box-card">
        <div class="my-left-text">
          <p>
            是在输入的字符串之中注入SQL指令，在设计不良的程序当中忽略了字符检查，那么这些注入进去的恶意指令就会被数据库服务器误认为是正常的SQL指令而运行，因此遭到破坏或是入侵。
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
