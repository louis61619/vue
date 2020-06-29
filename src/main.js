
//1.使用commonjs的模塊化標籤
const{add, mul} = require('./js/mathUtil.js')

console.log(add(20, 30));
console.log(mul(20, 30));


//2.使用ES6的模塊化標籤
import {name, sex, height} from "./js/ingo";
console.log(name);
console.log(sex);
console.log(height);

//3.加入css

require('./css/normal.css');

//4.加入less
require('./css/special.less');
document.writeln('<h2>去死吧,c8c8c8c8c8</h2>');

//5.加入vue

import Vue from 'vue';


import App from './vue/App.vue'



new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
  
  
  

})