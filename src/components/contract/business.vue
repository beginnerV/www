<template>
  <el-card class="card">
<el-form ref="form" :model="form" label-width="90px">
    <el-form-item label="杠杆倍数">
    <el-radio-group v-model="form.resource">
      <el-radio label="10%"></el-radio>
      <el-radio label="20%"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="委托类型">
    <el-select v-model="form.region" placeholder="限值单">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="价格">
  <el-input-number v-model="form.num" controls-position="right" @change="handleChange"></el-input-number>
  </el-form-item>
      <el-form-item label="数量">
  <el-input-number v-model="form.num" @change="handleChange"></el-input-number>
  <span>张 ≈  0  xxx</span>
  </el-form-item>
 <el-form-item label="可用保证金">
   0
  </el-form-item>
   <el-form-item label="多仓可平">
     0  <span class="font">空仓可平</span>0
  </el-form-item>
</el-form>
<div class="foot">
<el-button class="pay">买入</el-button>
<el-button class="pay">卖出</el-button>
</div>

  </el-card>
</template>

<script>

export default {
  name: 'business',
  data(){
      return{
          form:{
              resource:"",
              region:"",
              num:1
          }
      }
  }
}
</script>

<style scoped>
.card{
    width: 31%;
    height: 400px;
}
.font{
  margin-left: 80px;
  margin-right: 12px;
      font-size: 14px;
    color: #606266;
}
.pay{
  padding: 18px 60px;
}
</style>