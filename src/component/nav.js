
Vue.component('nav-bar',{
    name:'nav-bar',
    props:['isNavRight','gitIcoSrc','linkedInSrc'],
    template:`
    <div :class="isNavRight===true?'nav-bar-right':'nav-bar-top'">
        <nav-button title="About me" value="me"></nav-button>
        <nav-button title="My skill" value="mySkill"></nav-button>
        <nav-button title="My life" value="myLife"></nav-button>
        <div id="social">
            <img-ico :icoSrc = "gitIcoSrc" linkSrc = "https://github.com/ZhangJoker"></img-ico>
            <img-ico :icoSrc = "linkedInSrc" linkSrc = "https://www.linkedin.com/in/xiaoyan-zhang/"></img-ico>
        </div>
    </div>`
})