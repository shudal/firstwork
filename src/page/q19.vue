<template>
  <div>

    <div>
      <el-row type="flex">
        <el-col class="myTableTitle">
          19.解密：
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-table
            :data="mydata"
          >
            <el-table-column
              prop="name"
              label="解密前"
              width="180">
            </el-table-column>

            <el-table-column
              prop="concept"
              label="解密后"
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
            name: "1)57656C636F6D654F70656E536F75726365",
            concept: "WelcomeOpenSource"
          },
          {
            name: "2)V2VsY29tZU9wZW5Tb3VyY2U=",
            concept: "WelcomeOpenSource"
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
