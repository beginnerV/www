<template>
  <div class="home">
<account/>
<price/>
<kLine/>
<business/>
<type/>
<entrust/>
  </div>
</template>

<script>
import account from "./account"
import price from "./price"
import kLine from "./kLine"
import business from "./business"
import type from "./type"
import entrust from "./entrust"
export default {
  name: 'contract',
  components:{
      account,
      price,
      kLine,
      business,
      type,
      entrust
  }
}
</script>

<style scoped>
.home{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>
