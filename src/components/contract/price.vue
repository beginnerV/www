<template>
  <el-card class="card">
   <el-table
    ref="multipleTable"
    :data="tableData"
    :cell-style="cellStyle"
    :row-style="rowStyle"
    tooltip-effect="dark"
    style="width: 100%"
    max-height="400"
    @selection-change="handleSelectionChange">

        <el-table-column
      prop="pay"
      label=""
      width="80"

      >
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
          pay: ' ',
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
        ]
    }
},methods:{
cellStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return 'color: #909399;font-weight: bold;'
      } else {
        return ''
      }

    },
    rowStyle({row,rowIndex}){
        if (rowIndex === 11) {
        return {"background-color": "green"}
      } else {
        return ''
      }
    }
},
}
</script>

<style scoped>
.card{
    width: 48%;
}

</style>