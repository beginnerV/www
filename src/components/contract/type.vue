<template>
  <el-card class="card">
   <div>
 <el-table
 border
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      label="类型"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="币种"
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
      label="账户权益"
      width="120">
    </el-table-column>
            <el-table-column
      prop="name"
      label="账户余额"
      width="120">
    </el-table-column>
            <el-table-column
      prop="name"
      label="可用余额"
      width="120">
    </el-table-column>
            <el-table-column
      prop="name"
      label="保证金"
      width="120">
    </el-table-column>
            <el-table-column
      prop="name"
      label="已实现盈亏"
      width="120">
    </el-table-column>
            <el-table-column
      prop="name"
      label="未实现盈亏"
      width="120">
    </el-table-column>
  </el-table>
  </div>
<div>
     <el-table
     class="table2"
      border
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      label="类型"
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
      label="多空"
      width="120"
     >
    </el-table-column>
        <el-table-column
      prop="name"
      label="持仓量"
      width="120">
    </el-table-column>
        <el-table-column
      prop="name"
      label="可平量"
      width="120">
    </el-table-column>
        <el-table-column
      prop="name"
      label="保证金"
      width="120">
    </el-table-column>
        <el-table-column
      prop="name"
      label="预估强平价格"
      width="120">
    </el-table-column>
            <el-table-column
      prop="name"
      label="收益率"
      width="120">
    </el-table-column>
  </el-table>
</div>
  </el-card>
</template>

<script>

export default {
  name: 'type',
}
</script>

<style scoped>
.card{
    width: 48%;
    height: 400px;
}
.table2{
    margin-top: 20px;
}
</style>