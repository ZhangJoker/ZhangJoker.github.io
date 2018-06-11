var app = new Vue({
    el:"#app",
    data:{
        loadFinish:false,
        tab:'none',
        isNavRight:true,
        message:'Everything will be cooming soon...',
        loadMessage:'Hi. I am Zhang Xiaoyan. Welcome to my site.',
        backgroundImg:'static/image/background.jpg',
        gitIcoSrc:'static/image/GitHub.svg',
        linkedInSrc:'static/image/linkedin.svg'
    },
    methods:{
        backgroundImgLoad(){
            this.loadFinish=true;
        }
    }
});
