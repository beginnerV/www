<template>
<el-card  class="home">
<div class="title">跟单控制中心</div>
<el-divider></el-divider>
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
    <el-button @click="addTask()">增加跟踪任务</el-button>
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
      width="130">
      <template slot-scope="scope">{{ scope.row.task }}</template>
    </el-table-column>
    <el-table-column
      prop="targetAccount"
      label="目标账户"
      width="110">
    </el-table-column>
    <el-table-column
      prop="followAccount"
      label="跟随账户"
      width="120"
     >
    </el-table-column>
        <el-table-column
      prop="type"
      label="关注品种"
      width="120">
    </el-table-column>
        <el-table-column
      prop="time"
      label="撤补时间"
      width="120">
    </el-table-column>
        <el-table-column
      prop="state"
      label="状态"
      show-overflow-tooltip
      >
    </el-table-column>
  </el-table>
  <addTask :show.sync="show"></addTask>
</el-card>
</template>

<script>
import addTask from "./addTask"
export default {
  name: 'Control',
    components:{
    addTask
  },
data() {
      return {
        show:false,
          options: [{
          value: '选项1',
          label: 'BitMEX-bitmex-ABC'
        }, {
          value: '选项2',
          label: 'BitMEX-MT-ZJH'
        }, {
          value: '选项3',
          label: 'BitMEX-BM11-TC'
        }, {
          value: '选项4',
          label: 'BitMEX-DC-KJ'
        }, {
          value: '选项5',
          label: 'BitMEX-HT12-DF'
        }],
        value: 'BitMEX-bitmex-ABC',
        tableData: [{
          task: 'ABC-BM9-ZXH-BTC',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM9-ZXH-BTC',
          type: 'ETH|XBT|',
          time: '5',
          state: '已启动',
        }, {
          task: 'ABC-BM8-HK',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM8-HK',
          type: 'ETH|XBT|',
          time: '5',
          state: '已启动',
        }, {
          task: 'ABC-BM9-ZXH-BTC',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM9-ZXH-BTC',
          type: 'ETH|XBT|',
          time: '5',
          state: '已启动',
        }, {
          task: 'ABC-BM9-ZXH-BTC',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM9-ZXH-BTC',
          type: 'ETH|XBT|',
          time: '5',
          state: '已启动',
        }, {
          task: 'ABC-BM9-ZXH-BTC',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM9-ZXH-BTC',
          type: 'ETH|XBT|',
          time: '5',
          state: '已启动',
        }, {
          task: 'ABC-BM9-ZXH-BTC',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM9-ZXH-BTC',
          type: 'ETH|XBT|',
          time: '5',
          state: '已启动',
        }, {
          task: 'ABC-BM9-ZXH-BTC',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM9-ZXH-BTC',
          type: 'ETH|XBT|',
          time: '5',
          state: '已启动',
        }],
        multipleSelection: []
      }
  },
  methods:{
        addTask(){
       this.show = true;
        },
        handleSelectionChange(){

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
        text-align: left;
}
span{
  font-size: 14px;
  margin-right: 10px;
}
</style>
