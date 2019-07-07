<template>
  <div>

    <div>
      <el-row type="flex">
        <el-col class="myTableTitle">
          16.什么是MD5、SHA1、3DES加密?
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
              width="360">
            </el-table-column>

            <el-table-column
              prop="chname"
              label="中文名"
              width="360">

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
            name: "MD5(MD5 Message-Digest Algorithm",
            chname: "MD5消息摘要算法",
            concept: "一种hash算法。可被破解不太安全不建议用。"
          },
          {
            name: "SHA1(Secure Hash Algorithm 1)",
            chname: "安全散列算法1",
            concept: "一种hash算法，也不太安全。"
          },
          {
            name: "3DES(Triple Data Encryption Algorithm)",
            chname: "三重数据加密算法",
            concept: "基于DES的对称性加密算法。用3个不同密钥对同一个分组数据块进行三次加密。"
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
