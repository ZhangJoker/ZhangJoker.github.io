
Vue.component('nav-bar',{
    name:'nav-bar',
    props:['isNavRight','gitIcoSrc','linkedInSrc'],
    template:`
    <div :class="isNavRight===true?'nav-bar-right':'nav-bar-top'">
        <nav-button title="About me" value="me"></nav-button>
        <nav-button title="My skill" value="mySkill"></nav-button>
        <nav-button title="My life" value="myLife"></nav-button>
        <div id="social">
            <img :src="gitIcoSrc" v-on:mouseover="addHover(gitIcoSrc)" v-on:mouseout="moveHover(gitIcoSrc)"  >
            <img :src="linkedInSrc">
        </div>
    </div>`,
    method:{
        addHover(src){
            if(src.match("-hover")===null){
                var add=src.split(".");
                src=add[0]+"-hover.svg";
            }
            console.log(src);
        },
        moveHover(src){
            if(src.match("-hover")!==null){
                var add=src.split("-");
                src=add[0]+".svg";
            }
            console.log(src);
        }
    }
})