<template>
  <div>
    <div>
      <el-row type="flex">
        <div>
          <el-col class="myTableTitle">
            9.什么是PKI？
          </el-col>
        </div>

      </el-row>

      <el-card class="box-card">
        <div class="my-left-text">
          <p>Public Key Infrastructure, 公开密钥基础架构。</p>
          <p>在非对称加密通讯中，这个PKI中的CA(认证机构)保证特定公钥与某个人对应而不是对应与其他人。</p>
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
