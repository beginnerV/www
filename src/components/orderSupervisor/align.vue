<template>
<el-card  class="home">
<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="持仓对齐" name="first">
      <el-button @click="toggleSelection()" class="btn">一键对齐</el-button>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="跟单任务"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="目标账户"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="跟随账户"
      width="120"
     >
    </el-table-column>
        <el-table-column
      prop="name"
      label="关注品种"
      width="120">
    </el-table-column>
        <el-table-column
      prop="name"
      label="撤补时间"
      width="120">
    </el-table-column>
        <el-table-column
      prop="name"
      label="状态"
      show-overflow-tooltip
      >
    </el-table-column>
  </el-table>
    </el-tab-pane>
    <el-tab-pane label="委托" name="second">
        <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      label="交易所"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="账户"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="合约"
      width="120"
     >
    </el-table-column>
        <el-table-column
      prop="name"
      label="委托类型"
      width="120">
    </el-table-column>
        <el-table-column
      prop="name"
      label="数量"
      width="120">
    </el-table-column>
            <el-table-column
      prop="name"
      label="成交数量"
      width="120">
    </el-table-column>
            <el-table-column
      prop="name"
      label="委托价格"
      width="120">
    </el-table-column>
            <el-table-column
      prop="name"
      label="平均价格"
      width="120">
    </el-table-column>
            <el-table-column
      prop="name"
      label="订单状态"
      width="120">
    </el-table-column>
            <el-table-column
      prop="name"
      label="委托时间"
      width="120">
    </el-table-column>
                <el-table-column
      prop="name"
      label="订单ID"
      width="120">
    </el-table-column>
        <el-table-column
      prop="name"
      label="用户订单ID"
      show-overflow-tooltip
      >
    </el-table-column>
  </el-table>
      
      </el-tab-pane>
  </el-tabs>
    
</el-card>
</template>

<script>
export default {
  name: 'Align',
data() {
      return {
        activeName: 'first',
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
    /* border: 2px gray solid; */
}
.header{
    display: flex;
    justify-content: space-between;
}

.btn{
  float: left;
}
</style>
