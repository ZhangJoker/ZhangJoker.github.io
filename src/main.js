var app = new Vue({
    el:"#app",
    data:{
        loadFinish:false,
        message:'Everything is coom soon...',
        loadMessage:'Hi. I am Zhang Xiaoyan. Welcome to my site.',
        backgroundImg:'static/image/background.jpg'
    },
    beforeMount:function(){
        
    },
    methods:{
        backgroundImgLoad(){
            this.loadFinish=true;
        }
    }
    
})