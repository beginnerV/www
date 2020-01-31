<template>
<el-card  class="home">
<div class="title">跟单控制中心</div>
<div class="header">
   <div>
    <span>目标账户</span>
      <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
  <div>
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">增加跟踪任务</el-button>
    <el-button @click="toggleSelection()">启动</el-button>
    <el-button @click="toggleSelection()">停止</el-button>
    </div>
</div>
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
    /* border: 2px gray solid; */
}
.header{
    display: flex;
    justify-content: space-between;
}
.title{
    margin-bottom: 20px;
    
}
</style>
