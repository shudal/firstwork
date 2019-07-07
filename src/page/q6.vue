<template>
  <div>

    <div>
      <el-row type="flex">
        <el-col class="myTableTitle">
          6.常用的端口有哪些？分别对应了哪些服务？
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-table
            :data="mydata"
          >
            <el-table-column
              prop="name"
              label="端口"
              width="180">
            </el-table-column>

            <el-table-column
              prop="concept"
              label="服务"
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
            name: "TCP 21",
            concept: "FTP文件传输服务"
          },
          {
            name: "TCP 23",
            concept: "TELNET终端仿真服务"
          },
          { name: "TCP 25",
            concept: "SMTP简单邮件传输服务"
          },
          { name: "UDP 53",
            concept: "DNS域名解析服务"
          },
          {
            name: "TCP 80",
            concept: "HTTP超文本传输服务"
          },
          {
            name: "TCP 110",
            concept: "POP3 smtp3"
          },
          {
            name: "TCP 443",
            concept: "HTTPS加密的超文本传输服务"
          },
          {
            name: "TCP 1521",
            concept: "Oracle数据库服务"
          },
          {
            name: "TCP 5000",
            concept: "MS SQL Server使用的端口"
          },
          {
            name: "UDP 8000",
            concept: "腾讯QQ"
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
