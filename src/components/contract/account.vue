<template>
  <el-card class="card">
   <div>
    <span>账号</span>
      <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
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
      label="合约"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="最新价"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="现货指数"
      width="120"
     >
    </el-table-column>
        <el-table-column
      prop="name"
      label="24h成交量"
      width="120">
    </el-table-column>
  </el-table>
  </el-card>
</template>

<script>

export default {
  name: 'contract',

}
</script>

<style scoped>
.card{
    width: 48%;
}

</style>