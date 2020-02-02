<template>
  <el-card class="card">
   <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    max-height="400"
    @selection-change="handleSelectionChange">

        <el-table-column
      prop="pay"
      label=""
      width="80">
    </el-table-column>
    <el-table-column
      label="价格（USD）"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="数量（张）"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="订单数量（笔）"
      width="120"
     >
 </el-table-column>
  </el-table>
  </el-card>
</template>

<script>

export default {
  name: 'price',
data(){
    return{
     tableData: [{
          pay: '最高限价',
        },
        {
          pay: '卖10',
        },
        {
          pay: '卖9',
        },
        {
          pay: '卖8',
        },
            {
          pay: '卖7',
        },
            {
          pay: '卖6',
        },
            {
          pay: '卖5',
        },
            {
          pay: '卖4',
        },
            {
          pay: '卖3',
        },
            {
          pay: '卖2',
        },
            {
          pay: '卖1',
        },
            {
          pay: '一',
        },
            {
          pay: '买10',
        },
            {
          pay: '买9',
        },
            {
          pay: '买8',
        },
            {
          pay: '买7',
        },
            {
          pay: '买6',
        },
            {
          pay: '买5',
        },
            {
          pay: '买4',
        },
            {
          pay: '买3',
        },
            {
          pay: '买2',
        },
            {
          pay: '买1',
        },
            {
          pay: '买1',
        },
        ]
    }
}
}
</script>

<style scoped>
.card{
    width: 45%;
}

</style>