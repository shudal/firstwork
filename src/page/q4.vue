<template>
  <div>
    <div>
      <el-row type="flex">
        <div>
          <el-col class="myTableTitle">
            4.什么是木马？什么是病毒？
          </el-col>
        </div>

      </el-row>

      <el-card class="box-card">
        <div class="my-left-text">
          <p><span class="red-text">木马</span>在计算机领域中指的是一种后门程序，是黑客用来盗取其他用户的个人信息，甚至是远程控制对方的计算机而加壳制作，然后通过各种手段传播或者骗取目标用户执行该程序，以达到盗取密码等各种数据资料等目的。</p>
          <p><span class="red-text">病毒</span>是一种在人为或非人为的情况下产生的、在用户不知情或未批准下，能自我复制或运行的计算机程序；计算机病毒往往会影响受感染计算机的正常运作，或是被控制而不自知，计算机正常运作仅盗窃数据、或者被利用做其他用途...等用户非自发引导的行为。</p>
          <p><span class="red-text">区别</span>
          <ol>
            <li>病毒会传染，而木马不会传染；</li>
            <li>病毒入侵电脑后会有感觉，而木马不会，主要原因是便其开展后续“工作”；</li>
            <li>病毒主要是以“破坏”著称，而木马主要是用来盗取用户信息。</li>
        </ol>
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
  .red-text {
    color: red
  }
</style>
