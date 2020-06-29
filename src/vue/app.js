export default {
  data() {
    return {
      message: 'Hello, webpack'
    }
  },
  template: `
    <div>
      <h2>他媽的到底要學多久{{message}}</h2>
      <button @click="btnClick">按鈕</button>
    </div>
  `,
  methods: {
    btnClick(){
      console.log('13131');
    }
  },

}