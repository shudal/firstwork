<template>
  <div>

    <div>
      <el-row type="flex">
        <el-col class="myTableTitle">
          18.什么是对称加密与非对称加密
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
    </div>



  </div>
</template>


<script>
  export default {
    data() {
      return {
        mydata: [
          {
            name: "对称加密",
            concept: "加密和解密使用相同的密钥"
          },
          {
            name: "非对称加密",
            concept: "加密和解密使用不同的密钥。可以公钥加密，私钥解密，也可以私钥加密，公钥解密。"
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
</style>
