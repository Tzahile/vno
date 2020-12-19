/* eslint-disable */
// prettier-ignore
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

var Orange = Vue.component('orange', {
  template: `<div id="orange"> <h1>Jordan</h1><a href="https://imgbb.com/"><img src="https://i.ibb.co/m46njhp/jordan.png" alt="jordan" border="0" /></a><p>Jordan has worked on Broadway! So, yes, he has much sass!</p>`,
  name: 'orange',
  data() {
    return { color: 'orange' };
  },
});
var Green = Vue.component('green', {
  template: `<div id="green"> <h1>Mikey</h1> <a href="https://imgbb.com/" ><img src="https://i.ibb.co/Lz6jw4b/mikey.png" alt="mikey" border="0" /></a> <p> Mikey is a certified Sommolier. That means he knows a lot more about wine &nbsp;than you do. Also Sake. </p></div>`,
  name: 'green',
  data() {
    return { color: 'green' };
  },
});
var Red = Vue.component('red', {
  template: `<div id="red"> <h1>Andrew</h1> <a href="https://imgbb.com/" ><img src="https://i.ibb.co/cxPPLvy/andrew.png" alt="andrew" border="0" /></a> <p> Andrew is a classically trained flutist. He's a boss ass bitch who don't &nbsp; take no shit </p></div>`,
  name: 'red',
  data() {
    return { color: 'red' };
  },
});
var Purple = Vue.component('purple', {
  template: `<div id="purple"> <h1>Kyle</h1> <a href="https://imgbb.com/" ><img src="https://i.ibb.co/6rxv4gC/kyle.png" alt="kyle" border="0" /></a> <p>Kyle (aka Grandpa Kyle) is here to party</p></div>`,
  name: 'purple',
  data() {
    return { color: 'purple' };
  },
});
var App = new Vue({
  template: ` <div id="app"> <header class="header"> <img class="logo" src="https://svgshare.com/i/SNz.svg" alt="logo" /> <nav class="inner"> <button v-on:click="handelClick('green')">Mikey</button> <button v-on:click="handelClick('orange')">Jordan</button> <button v-on:click="handelClick('purple')">Kyle</button> <button v-on:click="handelClick('red')">Andrew</button> <a class="github" href="https://github.com/oslabs-beta/vno" target="_blank" ><button>Github</button> </a> </nav> </header> <body v-if="displayedComponent === 'red'"> <Red /> </body> <body v-else-if="displayedComponent === 'green'"> <Green /> </body> <body v-else-if="displayedComponent === 'orange'"> <Orange /> </body> <body v-else-if="displayedComponent === 'purple'"> <Purple /> </body> <body v-else> <h1>Welcome to Your vno Project</h1> <p> For a guide on project customization,<br /> check out out GitHub repo at: <a href="https://github.com/oslabs-beta/vno" target="_blank" rel="noopener" >vno documentation</a > </p> <ul> <li> <a href="https://github.com/jgrubb16/vnocli" target="_blank" rel="noopener" >Open Source CLI Tool</a > </li> </ul> </body> </div>`,
  name: 'app',
  data() {
    return { displayedComponent: '' };
  },
  methods: {
    handelClick: function (event) {
      this.displayedComponent = event;
      console.log(this.displayedComponent);
    },
  },
  components: { Red, Green, Orange, Purple },
});

App.$mount('#app');
export default App;