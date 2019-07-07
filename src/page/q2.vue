<template>
  <div>

    <div>
      <el-row type="flex">
        <el-col class="myTableTitle">
          2.简单介绍：白帽、黑帽、灰帽、红帽
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
            name: "白帽",
            concept: "发现漏洞，报告漏洞，以便他人修复漏洞"
          },
          {
            name: "黑帽",
            concept: "发现漏洞，利用漏洞for个人利益"
          },
          { name: "灰帽",
            concept: "发现漏洞，可能利用漏洞for报告漏洞"
          },
          { name: "红帽",
            concept: "爱国黑客。"
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
