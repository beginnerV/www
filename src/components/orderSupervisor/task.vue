<template>
<el-card class="home">
<div class="title">跟单任务</div>
<div class="header">
   <div>
    <span>目标账户</span>
      <el-select v-model="value" placeholder="全部">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
      <span>跟随账户</span>
      <el-select v-model="value" placeholder="全部">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
    <el-button @click="toggleSelection()">刷新</el-button>
  </el-select>
  </div>

</div>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
>
    <el-table-column
      label="跟单任务"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="合约ID"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="目标方向"
      width="120"
     >
    </el-table-column>
        <el-table-column
      prop="name"
      label="目标价格"
      width="120">
    </el-table-column>
        <el-table-column
      prop="name"
      label="目标数量"
      width="120">
    </el-table-column>
          <el-table-column
      prop="name"
      label="目标成交量"
      width="120">
    </el-table-column>
          <el-table-column
      prop="name"
      label="目标状态"
      width="120">
    </el-table-column>
          <el-table-column
      prop="name"
      label="目标账户"
      width="120">
    </el-table-column>
          <el-table-column
      prop="name"
      label="跟随账户"
      width="120">
    </el-table-column>
              <el-table-column
      prop="name"
      label="跟单数量"
      width="120">
    </el-table-column>
              <el-table-column
      prop="name"
      label="跟单成交量"
      width="120">
    </el-table-column>
              <el-table-column
      prop="name"
      label="跟单挂单量"
      width="120">
    </el-table-column>
              <el-table-column
      prop="name"
      label="跟单状态"
      width="120">
    </el-table-column>
              <el-table-column
      prop="name"
      label="目标订单号"
      width="120">
    </el-table-column>
        <el-table-column
      prop="name"
      label="时间"
      show-overflow-tooltip
      >
    </el-table-column>
  </el-table>
</el-card>
</template>

<script>
export default {
  name: 'Control',
data() {
      return {
          options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
  }
}
</script>

<style scoped>
.home{
    width: 48%;
}
.header{
    display: flex;
    justify-content: space-between;
}
.title{
    margin-bottom: 20px;
}
</style>
