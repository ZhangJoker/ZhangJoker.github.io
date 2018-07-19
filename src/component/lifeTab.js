Vue.component('life-tab',{
    name:"life-tab",
    props:['tab'],
    template:`
    <div class = "tab" :style="tab === 'myLife'? 'display:block' : 'display:none'">
        <a>this is my-life tab</a>
    </div>
    `
})