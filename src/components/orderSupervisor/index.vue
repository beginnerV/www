<template>
  <div class="home">
    <div>
  <Control></Control>
    <Task></Task>
    </div>
  <Log></Log>
  <Align></Align>
  </div>
</template>

<script>
import Align from './align'
import Log from './log'
import Control from './control'
import Task from './task'
export default {
  name: 'Index',
  components:{
    Align,
    Log,
    Control,
    Task
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.home>div:nth-child(1){
  display: flex;
flex-direction: row;
justify-content: space-around;
}
</style>
