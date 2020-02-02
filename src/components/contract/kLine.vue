<template>
  <el-card class="card">
   <div>
    <el-button round>分时</el-button>
    <el-button round>5分钟</el-button>
    <el-button round>日线</el-button>
  </div>

  </el-card>
</template>

<script>

export default {
  name: 'kLine',

}
</script>

<style scoped>
.card{
    width: 48%;
    height: 400px;
}

</style>