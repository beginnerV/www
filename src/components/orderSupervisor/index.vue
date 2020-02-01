<template>
  <div class="home">
    <div>
  <Control></Control>
    <Task></Task>
    </div>
    <div>
  <Log></Log>
  <Align></Align>
    </div>
  </div>
</template>

<script>
import Align from './align'
import Log from './log'
import Control from './control/control'
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
.home>div{
  display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 25px;
}
</style>
