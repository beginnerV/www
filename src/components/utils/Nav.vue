<template>
  <div id="nav">
    <el-menu
  :default-active="this.$route.path"
  class="el-menu"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  router
  >
  <el-menu-item index="/">期货交易</el-menu-item>
  <el-menu-item index="/contract">合约交易</el-menu-item>
  <el-menu-item index="3">账户资产</el-menu-item>
</el-menu>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data(){
    return{
    }
  },

  methods:{

  },
  mounted(){
  }
}
</script>

<style scoped>
#nav{
position: fixed;
 width: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
}
</style>
