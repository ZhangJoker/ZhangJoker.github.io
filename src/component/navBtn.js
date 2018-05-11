
Vue.component('nav-button',{
    name:'navButton',
    props:['title','value'],
    template:'<button class="nav-button" v-on:click="openTab(value)" :value="value">{{title}}</button>',
    methods:{
        openTab(tab){
            this.$root.tab=tab;
        }
    }
})