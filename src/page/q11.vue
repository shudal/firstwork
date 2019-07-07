<template>
  <div>
    <div>
      <el-row type="flex">
        <div>
          <el-col class="myTableTitle">
            11.简单介绍DDos攻击
          </el-col>
        </div>

      </el-row>

      <el-card class="box-card">
        <div class="my-left-text">
          <p>
            分布式拒绝服务攻击(distributed denial-of-service attack)指使用多个(>=2)计算机对特定主机发动Dos攻击。
          </p>
          <p>
            分为消耗带宽和消耗资源两种类型，目的是瘫痪特定主机的网络以及系统。
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
