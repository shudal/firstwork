<template>
  <div>

    <div>
      <el-row type="flex">
        <el-col class="myTableTitle">
          17.了解Base64、Base32、Base16编码、莫尔斯电码、进制转换 等形式特点
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
              label="形式特点"
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
            name: "Base64",
            concept: "字符集a-z,A-Z,0-9,+,/,=共65个。"
          },
          {
            name: "Base32",
            concept: "A-Z,2-7,=共33个。"
          },
          { name: "Base16",
            concept: "0-9,A-F共16个。"
          },
          { name: "莫尔斯电码",
            concept: "含 点(1) 划(111) 字符内部的停顿(0) 字符之间的停顿(000) 单词间的停顿(000000)"
          },
          {
            name: "进制转换",
            concept: "二进制含有[0,1], 八进制含有[0,7], 十六进制含有[0,9]、[A,F]"
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
