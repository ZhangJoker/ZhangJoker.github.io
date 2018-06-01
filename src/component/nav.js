
Vue.component('nav-bar',{
    name:'nav-bar',
    props:['isNavRight'],
    template:`
    <div :class="isNavRight===true?'nav-bar-right':'nav-bar-top'">
        <nav-button title="About me" value="me"></nav-button>
        <nav-button title="My skill" value="mySkill"></nav-button>
        <nav-button title="My life" value="myLife"></nav-button>
        <div id="social">
            
        </div>
    </div>`
})