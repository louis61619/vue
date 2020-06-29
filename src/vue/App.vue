<template>
  <div>
      <h2 class="title">他媽的到底要學多久{{message}}</h2>
      <button @click="btnClick">按鈕</button>
      <Cpn></Cpn>
    </div>
</template>

<script>
import Cpn from './Cpn.vue';

export default {
  components: {
    Cpn
  },
  data() {
    return {
      message: 'Hello, webpack'
    }
  },
  methods: {
    btnClick(){
      console.log('13131');
    }
  },

}
</script>

<style>
.title{
  color: green;
}
</style>