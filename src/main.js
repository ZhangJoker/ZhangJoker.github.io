var app = new Vue({
    el:"#app",
    data:{
        loading:true,
        loadingMessage:`Hi. I am Zhang Xiaoyan. Welcome to  my site`,
        message:'My page is building. Please wait...'
    },
    beforeMount:function(){
        
    },
    mounted:function(){
        this.loading=false;
    }
})