<template>
  <el-card class="card">
   <div>
<div class="title">委托</div>
<el-divider></el-divider>
        <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      label="合约"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
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
  </div>

  </el-card>
</template>

<script>

export default {
  name: 'entrust',

}
</script>

<style scoped>
.card{
    width: 48%;
    height: 400px;
}

</style>