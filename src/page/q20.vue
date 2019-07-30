<template>
  <div class="my-left-text">
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>

        <el-input v-model="input" placeholder="请输入内容" class="my-input-narrow"></el-input>
      </el-row>
      <el-select v-model="value" placeholder="清选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

    </el-form>
    <el-button>确定</el-button>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        input: '',
        options: [
          {value: '选项一', label: '黄金糕'},
          {value: '选项二', label: '双皮奶'}
        ]
      }
    }

  }
</script>
<style>
  .my-left-text {
    text-align: left
  }
  .my-input-narrow {
    width: 300px
  }
</style>
</style>
