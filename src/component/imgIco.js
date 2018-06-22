Vue.component('img-ico',{
    name:'img-ico',
    props:['icoSrc','linkSrc'],
    template:`<a href="linkSrc" target="_blank"><img :src="icoSrc"  v-on:mouseover="addHover(icoSrc)" v-on:mouseout="moveHover(icoSrc)"  ></a>`,
    methods:{
        addHover(src){
            console.log(src);
            if(src.match("-hover")===null){
                var add=src.split(".");
                this.icoSrc=add[0]+"-hover.svg";
            }
        },
        moveHover(src){
            if(src.match("-hover")!==null){
                var add=src.split("-");
                this.icoSrc=add[0]+".svg";
            }
            console.log(src);
        }
    }
})