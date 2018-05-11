var app = new Vue({
    el:"#app",
    data:{
        message:'Hi. I am Zhang Xiaoyan. Welcome to my site.'
    },
    beforeMount:function(){
        
    },
    mounted:function(){
        this.$nextTick(function(){
            this.message="Everything is coming soon..."
        })
    }
})