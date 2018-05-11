var app = new Vue({
    el:"#app",
    data:{
        loadFinish:false,
        tab:'none',
        message:'Everything is coom soon...',
        loadMessage:'Hi. I am Zhang Xiaoyan. Welcome to my site.',
        backgroundImg:'static/image/background.jpg'
    },
    methods:{
        backgroundImgLoad(){
            this.loadFinish=true;
        },
        openTab(tab){
            this.tab=tab;
        }
    }
});