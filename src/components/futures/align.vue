<template>
<el-card  class="home">
<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="持仓对齐" name="first">
      <el-button @click="toggleSelection()" class="btn">一键对齐</el-button>
  <el-table
    ref="multipleTable"
    :data="positionData"
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
      <template slot-scope="scope">{{ scope.row.task }}</template>
    </el-table-column>
    <el-table-column
      prop="contract"
      label="合约"
      width="120">
    </el-table-column>
    <el-table-column
      prop="direction"
      label="方向"
      width="120">
    </el-table-column>
        <el-table-column
      prop="positions"
      label="目标持仓"
      width="120">
    </el-table-column>
        <el-table-column
      prop="protectNum"
      label="目标套保量"
      width="120">
    </el-table-column>
        <el-table-column
      prop="followRate"
      label="跟单比率"
      width="120">
    </el-table-column>
        <el-table-column
      prop="positionsNum"
      label="持仓量"
      width="120">
    </el-table-column>
        <el-table-column
      prop="positionsMax"
      label="持仓上限"
      width="120">
    </el-table-column>
        <el-table-column
      prop="positionsMin"
      label="持仓下限"
      width="120">
    </el-table-column>
        <el-table-column
      prop="positionBalance"
      label="持仓差额"
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
      show-overflow-tooltip
      >
    </el-table-column>
  </el-table>
    </el-tab-pane>
    <el-tab-pane label="委托" name="second">
        <el-table
    ref="multipleTable"
    :data="delegateData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      label="交易所"
      width="120">
      <template slot-scope="scope">{{ scope.row.exchange }}</template>
    </el-table-column>
    <el-table-column
      prop="account"
      label="账户"
      width="120">
    </el-table-column>
    <el-table-column
      prop="contract"
      label="合约"
      width="120"
     >
    </el-table-column>
        <el-table-column
      prop="delegateType"
      label="委托类型"
      width="120">
    </el-table-column>
        <el-table-column
      prop="quantity"
      label="数量"
      width="120">
    </el-table-column>
            <el-table-column
      prop="turnover"
      label="成交数量"
      width="120">
    </el-table-column>
            <el-table-column
      prop="price"
      label="委托价格"
      width="120">
    </el-table-column>
            <el-table-column
      prop="averagePrice"
      label="平均价格"
      width="120">
    </el-table-column>
            <el-table-column
      prop="state"
      label="订单状态"
      width="120">
    </el-table-column>
            <el-table-column
      prop="time"
      label="委托时间"
      width="120">
    </el-table-column>
                <el-table-column
      prop="orderID"
      label="订单ID"
      width="120">
    </el-table-column>
        <el-table-column
      prop="userOrderID"
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
        positionData: [{
          // 跟单任务
          task: 'ABC-BM12-LZH',
          // 合约
          contract: 'ETHUSD',
          // 方向
          direction: '多',
          // 目标持仓
          positions: '0',
          // 目标套保量
          protectNum: '0',
          // 跟单比率
          followRate: '0.02',
          // 持仓量
          positionsNum: '1',
          // 持仓上限
          positionsMax: '12000',
          // 持仓下限
          positionsMin: '0',
          // 持仓差额
          positionBalance: '-1',
          // 目标账户
          targetAccount: 'bitmex-ABC',
          // 跟随账户
          followAccount: 'BM12-LZH',
        }, {
          task: 'ABC-BM10-W',
          contract: 'ETHUSD',
          direction: '多',
          positions: '0',
          protectNum: '0',
          followRate: '1.5',
          positionsNum: '1',
          positionsMax: '1000000',
          positionsMin: '0',
          positionBalance: '-1',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM10-W',
        }, {
          task: 'ABC-BM12-LZH',
          contract: 'ETHUSD',
          direction: '多',
          positions: '0',
          protectNum: '0',
          followRate: '0.02',
          positionsNum: '1',
          positionsMax: '12000',
          positionsMin: '0',
          positionBalance: '-1',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM12-LZH',
        }, {
          task: 'ABC-BM12-LZH',
          contract: 'ETHUSD',
          direction: '多',
          positions: '0',
          protectNum: '0',
          followRate: '0.02',
          positionsNum: '1',
          positionsMax: '12000',
          positionsMin: '0',
          positionBalance: '-1',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM12-LZH',
        }, {
          task: 'ABC-BM12-LZH',
          contract: 'ETHUSD',
          direction: '多',
          positions: '0',
          protectNum: '0',
          followRate: '0.02',
          positionsNum: '1',
          positionsMax: '12000',
          positionsMin: '0',
          positionBalance: '-1',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM12-LZH',
        }, {
          task: 'ABC-BM12-LZH',
          contract: 'ETHUSD',
          direction: '多',
          positions: '0',
          protectNum: '0',
          followRate: '0.02',
          positionsNum: '1',
          positionsMax: '12000',
          positionsMin: '0',
          positionBalance: '-1',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM12-LZH',
        }, {
          task: 'ABC-BM12-LZH',
          contract: 'ETHUSD',
          direction: '多',
          positions: '0',
          protectNum: '0',
          followRate: '0.02',
          positionsNum: '1',
          positionsMax: '12000',
          positionsMin: '0',
          positionBalance: '-1',
          targetAccount: 'bitmex-ABC',
          followAccount: 'BM12-LZH',
        }],
        // 委托
        delegateData: [{
          // 交易所
          exchange: 'ZG.com',
          // 账户
          account: 'bitmex-ABC',
          // 合约
          contract: 'ETHUSD',
          // 委托类型
          delegateType: '',
          // 数量
          quantity: '0',
          // 成交数量
          turnover: '100',
          // 委托价格
          price: '888',
          // 平均价格
          averagePrice: '1000',
          // 订单状态
          state: '已完成',
          // 委托时间
          time: '2020-02-02',
          // 订单ID
          orderID: '6cc67se788373',
          // 用户订单ID
          userOrderID: '12'
        }, {
          exchange: 'ZG.com',
          account: 'bitmex-ABC',
          contract: 'ETHUSD',
          delegateType: '',
          quantity: '0',
          turnover: '100',
          price: '888',
          averagePrice: '1000',
          state: '已完成',
          time: '2020-02-02',
          orderID: '6cc67se788373',
          userOrderID: '12'
        }, {
          exchange: 'ZG.com',
          account: 'bitmex-ABC',
          contract: 'ETHUSD',
          delegateType: '',
          quantity: '0',
          turnover: '100',
          price: '888',
          averagePrice: '1000',
          state: '已完成',
          time: '2020-02-02',
          orderID: '6cc67se788373',
          userOrderID: '12'
        }, {
          exchange: 'ZG.com',
          account: 'bitmex-ABC',
          contract: 'ETHUSD',
          delegateType: '',
          quantity: '0',
          turnover: '100',
          price: '888',
          averagePrice: '1000',
          state: '已完成',
          time: '2020-02-02',
          orderID: '6cc67se788373',
          userOrderID: '12'
        }, {
          exchange: 'ZG.com',
          account: 'bitmex-ABC',
          contract: 'ETHUSD',
          delegateType: '',
          quantity: '0',
          turnover: '100',
          price: '888',
          averagePrice: '1000',
          state: '已完成',
          time: '2020-02-02',
          orderID: '6cc67se788373',
          userOrderID: '12'
        }, {
          exchange: 'ZG.com',
          account: 'bitmex-ABC',
          contract: 'ETHUSD',
          delegateType: '',
          quantity: '0',
          turnover: '100',
          price: '888',
          averagePrice: '1000',
          state: '已完成',
          time: '2020-02-02',
          orderID: '6cc67se788373',
          userOrderID: '12'
        }, {
          exchange: 'ZG.com',
          account: 'bitmex-ABC',
          contract: 'ETHUSD',
          delegateType: '',
          quantity: '0',
          turnover: '100',
          price: '888',
          averagePrice: '1000',
          state: '已完成',
          time: '2020-02-02',
          orderID: '6cc67se788373',
          userOrderID: '12'
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
