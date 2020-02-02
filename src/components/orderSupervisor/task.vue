<template>
<el-card class="home">
<div class="title">跟单任务</div>
<el-divider></el-divider>
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
  </el-select>
  </div>
  <div>
    <el-button @click="toggleSelection()">刷新</el-button>
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
      width="130">
      <template slot-scope="scope">{{ scope.row.task }}</template>
    </el-table-column>
    <el-table-column
      prop="contractID"
      label="合约ID"
      width="110">
    </el-table-column>
    <el-table-column
      prop="direction"
      label="目标方向"
      width="120"
     >
    </el-table-column>
        <el-table-column
      prop="price"
      label="目标价格"
      width="120">
    </el-table-column>
        <el-table-column
      prop="targetQuantity"
      label="目标数量"
      width="120">
    </el-table-column>
          <el-table-column
      prop="targetTurnover"
      label="目标成交量"
      width="120">
    </el-table-column>
          <el-table-column
      prop="targetState"
      label="目标状态"
      width="120">
    </el-table-column>
          <el-table-column
      prop="targetAccount"
      label="目标账户"
      width="120">
    </el-table-column>
          <el-table-column
      prop="followAccount"
      label="跟随账户"
      width="120">
    </el-table-column>
              <el-table-column
      prop="followQuantity"
      label="跟单数量"
      width="120">
    </el-table-column>
              <el-table-column
      prop="followTurnover"
      label="跟单成交量"
      width="120">
    </el-table-column>
              <el-table-column
      prop="orders"
      label="跟单挂单量"
      width="120">
    </el-table-column>
              <el-table-column
      prop="followState"
      label="跟单状态"
      width="120">
    </el-table-column>
              <el-table-column
      prop="orderNumber"
      label="目标订单号"
      width="120">
    </el-table-column>
        <el-table-column
      prop="time"
      label="目标下单时间"
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
          // 跟单任务
          task: 'ABC-BM9-ZXH-BTC',
          // 合约ID
          contractID: 'XBTUSD',
          // 目标方向
          direction: '买入',
          // 目标价格
          price: '8657',
          // 目标数量
          targetQuantity: '10298',
          // 目标成交量
          targetTurnover: '10298',
          // 目标状态
          targetState: '全部成交',
          // 目标账户
          targetAccount: 'bitmex-ABC',
          // 跟随账户
          followAccount: 'BM9-ZXH-BTC',
          // 跟单数量
          followQuantity: '3090',
          // 跟单成交量
          followTurnover: '3090',
          // 跟单挂单量
          orders: '0',
          // 跟单状态
          followState: '已完成',
          // 目标订单号
          orderNumber: '4cc711aa76hff78711',
          // 目标下单时间
          time: '2020-02-02'
        }, {
          task: 'ABC-BM8-HK',
          contractID: 'XBTUSD',
          direction: '买入',
          price: '8657',
          targetQuantity: '10298',
          targetTurnover: '10298',
          targetState: '全部成交',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM9-ZXH-BTC',
          followQuantity: '3090',
          followTurnover: '3090',
          orders: '0',
          followState: '已完成',
          orderNumber: '4cc711aa76hff78711',
          time: '2020-02-02'
        }, {
          task: 'ABC-BM7',
          contractID: 'XBTUSD',
          direction: '买入',
          price: '8657',
          targetQuantity: '10298',
          targetTurnover: '10298',
          targetState: '全部成交',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM9-ZXH-BTC',
          followQuantity: '3090',
          followTurnover: '3090',
          orders: '0',
          followState: '已完成',
          orderNumber: '4cc711aa76hff78711',
          time: '2020-02-02'
        }, {
          task: 'ABC-BM9-ZXH-BTC',
          contractID: 'XBTUSD',
          direction: '买入',
          price: '8657',
          targetQuantity: '10298',
          targetTurnover: '10298',
          targetState: '全部成交',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM9-ZXH-BTC',
          followQuantity: '3090',
          followTurnover: '3090',
          orders: '0',
          followState: '已完成',
          orderNumber: '4cc711aa76hff78711',
          time: '2020-02-02'
        }, {
          task: 'ABC-BM9-ZXH-BTC',
          contractID: 'XBTUSD',
          direction: '买入',
          price: '8657',
          targetQuantity: '10298',
          targetTurnover: '10298',
          targetState: '全部成交',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM9-ZXH-BTC',
          followQuantity: '3090',
          followTurnover: '3090',
          orders: '0',
          followState: '已完成',
          orderNumber: '4cc711aa76hff78711',
          time: '2020-02-02'
        }, {
          task: 'ABC-BM9-ZXH-BTC',
          contractID: 'XBTUSD',
          direction: '买入',
          price: '8657',
          targetQuantity: '10298',
          targetTurnover: '10298',
          targetState: '全部成交',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM9-ZXH-BTC',
          followQuantity: '3090',
          followTurnover: '3090',
          orders: '0',
          followState: '已完成',
          orderNumber: '4cc711aa76hff78711',
          time: '2020-02-02'
        }, {
          task: 'ABC-BM9-ZXH-BTC',
          contractID: 'XBTUSD',
          direction: '买入',
          price: '8657',
          targetQuantity: '10298',
          targetTurnover: '10298',
          targetState: '全部成交',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM9-ZXH-BTC',
          followQuantity: '3090',
          followTurnover: '3090',
          orders: '0',
          followState: '已完成',
          orderNumber: '4cc711aa76hff78711',
          time: '2020-02-02'
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
        text-align: left;
}
span{
  font-size: 14px;
  margin-right: 10px;
}
div>span:nth-child(3){
  margin-left: 15px;
}
</style>
