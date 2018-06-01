
Vue.component('nav-button',{
    name:'navButton',
    props:['title','value'],
    template:'<a class="nav-button" v-on:click="openTab(value)" :value="value">{{title}}</a>',
    methods:{
        openTab(tab){
            this.$root.tab=tab;
            this.$root.isNavRight=false;
        }
    }
})