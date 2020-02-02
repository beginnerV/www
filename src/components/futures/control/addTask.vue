<template>
<el-dialog
  :visible.sync="visible"
  @close="$emit('update:show',false)"
  width="90%"
  :show="show">
<el-form ref="form" :model="form" label-width="100px">
  <el-form-item label="跟单名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <div class="row">
    <el-form-item label="目标账户">
        <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
      <el-form-item label="随从账户">
        <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
        <el-form-item label="跟随模式">
        <el-select v-model="form.region" placeholder="随目标" >
      <el-option label="随目标" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
</div>
 <el-form-item label="撒补时间">
<el-input-number size="mini" v-model="num"></el-input-number>
秒
  </el-form-item>
  <el-divider content-position="left">跟随品种仓位限制</el-divider>
  <el-divider content-position="left">微信通知</el-divider>
          <el-form-item label="通知AppID:">
        <el-select v-model="form.region" placeholder="随目标" >
      <el-option label="随目标" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
    <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 300px"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="用户ID"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="备注"
      width="120">
    </el-table-column>
  </el-table>
</el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="visible = false">取 消</el-button>
    <el-button type="primary" @click="visible = false">确 定</el-button>
  </span>
</el-dialog>
</template>

<script>
export default {
  name: 'addTask',
  props:{
    show:{
      type:Boolean,
      default: false
    }
  },
  data(){
    return {
    visible:this.show,
    num:1,
    form:{
      name:"",
      region:""
    }
    }
  },
  watch:{
    show(){
      this.visible = this.show;
      console.log(this.show);
    }
  }
}
</script>

<style scoped>
.row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
