<template>
  <div>

    <div>
      <el-row type="flex">
        <el-col class="myTableTitle">
          10.什么是cookie和session？作用有何不同？
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-table
            :data="mydata"
          >
            <el-table-column
              prop="name"
              label="名称"
              width="180">
            </el-table-column>

            <el-table-column
              prop="concept"
              label="概念"
            >
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>

      <div class="my-left-text">
        <el-card class="box-card">
          <div class="my-left-text">
            区别：
            <ol>
              <li>cookie保存与游览器，session保存于服务器</li>
              <li>session常用来保存会话中的用户的基础信息，如id。 cookie常用来保存那些缓存到游览器中比较好的东西，如用户名</li>
            </ol>
          </div>
        </el-card>
      </div>
    </div>



  </div>
</template>

<script>
  export default {
    data() {
      return {
        mydata: [
          {
            name: "cookie",
            concept: "web中，服务器通过设置cookie来保存想要保存的东西于客户端上。"
          },
          {
            name: "session",
            concept: "web中，服务器通过设置session来保存会话中需要保存的变量。"
          }
        ]
      }
    }

  }
</script>

<style>
  .myTableTitle {
    text-align: left
  }

  .my-left-text {
    text-align: left
  }
</style>
