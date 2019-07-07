<template>
  <div>

    <div>
      <el-row type="flex">
          <el-col class="myTableTitle">
            1.简单解释：防火墙、VPN、路由器、交换机
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
            name: "防火墙",
            concept: "分为两种，一种网络层，一种应用层。防火墙制定数据规则，限制数据的流入流出。"
          },
          {
            name: "VPN",
            concept: "代理的一种。如公司建了一些只能公司的电脑的ip段才能访问的网站，那么处于公司外的人可以通过vpn这种代理来访问公司内的服务。"
          },
          { name: "路由器",
            concept: "路由器连接上internet后，具有了唯一的ip，可以通过开wifi，插网线等方式让用户上网。路由器决定数据包发送的线路，工作于网络层"
          },
          { name: "交换机",
            concept: "设备们连接上交换机后，交换机生成mac表，之后交换数据时直接将数据发送到对的mac地址而不是所有，工作于数据链路层。"
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
