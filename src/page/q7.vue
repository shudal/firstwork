<template>
  <div>

    <div>
      <el-row type="flex">
        <el-col class="myTableTitle">
          7.简单介绍几种常见协议：ARP、TCP三次握手、HTTP、DNS、SSH、UDP。http和https谁跟安全？
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
      <el-card class="box-card">
        <div class="my-left-text">
          https更安全。
        </div>
      </el-card>
    </div>



  </div>
</template>


<script>
  export default {
    data() {
      return {
        mydata: [
          {
            name: "Address Resolution Protocol(ARP)",
            chname: "地址解析协议",
            concept: "解析网络层地址到数据链路层地址。如ipv4中将ip地址与MAC地址互相转换。"
          },
          {
            name: "Transmission Control Protocol(TCP)",
            chname: "传输控制协议",
            concept: "三次握手用于建立TCP建立连接。1.client发送SYN 和 随机数A. 2.server返回ACK(=A+1) 和 随机数B. 3.client发送ACK（=A+1）,server返回确认码（=B+1)。"
          },
          {
            name: "User Datagram Protocol(UDP)",
            chname: "用户数据包协议",
            concept: "适用于对网络延迟有要求，对丢失、错误、重复数据包有容忍的情况的传输层协议。"
          },
          {
            name: "HyperText Transfer Protocol(HTTP)",
            chname: "超文本传输协议",
            concept: "应用层协议。"
          },
          {
            name: "Domain Name System(DNS)",
            chname: "域名系统",
            concept: "将域名和ip地址相互映射的一个分布式数据库。"
          },
          {
            name: "Secure Shell(SSH)",
            chname: "安全外壳协议",
            concept: "主要用于远程登录到计算机的安全的网络传输协议。"
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
