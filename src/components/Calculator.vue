<template>
  <div class="container">
    <section>
      <div class="calculator">
        <div class="display">{{ result || 0 }}</div>
        <div class="btn clear" @click="clear()">C</div>
        <div class="btn operator" @click="divide()">/</div>
        <div class="btn" @click="append('7')">7</div>
        <div class="btn" @click="append('8')">8</div>
        <div class="btn" @click="append('9')">9</div>
        <div class="btn operator" @click="multiply()">x</div>
        <div class="btn" @click="append('4')">4</div>
        <div class="btn" @click="append('5')">5</div>
        <div class="btn" @click="append('6')">6</div>
        <div class="btn operator" @click="subtract()">-</div>
        <div class="btn" @click="append('1')">1</div>
        <div class="btn" @click="append('2')">2</div>
        <div class="btn" @click="append('3')">3</div>
        <div class="btn operator" @click="add()">+</div>
        <div class="btn cero" @click="append('0')">0</div>
        <div class="btn" @click="punto()">.</div>
        <div class="btn operator" @click="ecual">=</div>
        <hr class="list hr" @click="openClose"> 
        <section class="sec" v-if="historyStatus">
          <div class="list" v-for="i in history" v-bind:key="i.id">
            <h3>{{i}}</h3>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Calculadora',
  data() {
    return {
      pre: null,
      result: '',
      op:'',
      operator: null,
      operatorClick: false,
      history:[],
      historyStatus:true,

    };
  },
  mounted() {},
  methods: {
    clear() {
      this.result = "";
    },
    append(num) {
      if (this.operatorClick) {
        this.result = "";
        this.operatorClick = false;
      }
      this.result = `${this.result}` + `${num}`;
    },
    punto() {
      if (this.result.indexOf(".") === -1) {
        this.append(".");
      }
    },
    setPrevius() {
      this.pre = this.result;
      this.operatorClick = true;
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.op = '/';
      this.setPrevius();
    },
    multiply() {
      this.operator = (a, b) => a * b;
      this.op = '*';
      this.setPrevius();
    },
    subtract() {
      this.operator = (a, b) => a - b;
      this.op = '-';
      this.setPrevius();
    },
    add() {
      this.operator = (a, b) => a + b;
      this.op = '+';
      this.setPrevius();
    },
    ecual() {
      this.appenHistory()
      this.result = `${this.operator(
        parseFloat(this.pre),
        parseFloat(this.result)
      ).toFixed(2)}`;
      this.pre = null;
    },
    appenHistory(){
      console.log(this.pre)
      var node = `${this.pre.toString()}${this.op}${this.result.toString()} = ${this.operator(parseFloat(this.pre),parseFloat(this.result)).toFixed(2)}`;
      this.history.unshift(node);
      console.log(this.history,'🥙');
    },
    openClose(){
      if(this.historyStatus == true){
        this.historyStatus = false;
      }else{
        this.historyStatus = true;
      }
    }
  },
};
</script>

<style>
.calculator {
  border: 2px solid rgb(90, 90, 90);
  border-radius: 20px;
  box-shadow: 4px 4px #e6e6e6;
  width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  font-size: 45px;
}
.display {
  background-color: #333;
  border-radius: 30px;
  color: aliceblue;
  grid-column: 1 / 5;
  text-align: center;
  margin: 15px;
}
.cero {
  grid-column: 1 / 3;
}
.btn {
  margin: 10px;
  font-size: 40px;
  border: 1px solid rgb(94, 94, 94);
  border-radius: 10px;
  background-color: rgb(143, 255, 221);
}
.operator {
  background-color: rgb(255, 239, 149);
}
.clear {
  grid-column: 1 / 4;
}
.sec{
  grid-column: 1 / 5;
}
.list{
  background-color: rgb(219, 206, 255);
  grid-column: 1 / 5;
  border: 1px solid;
  border-radius: 50px;
  margin: 15px;
}
.hr{
  background-color: rgb(255, 206, 247);
  width:85%; 
  text-align:center; 
  margin:0 auto;
  margin-top: 15px; 
  padding-top: 5px;
}
.list h3{
  text-align: center;
  padding: 5px;
  font-size: 30px;
  margin-bottom: 0px;
}
</style>
