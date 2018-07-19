Vue.component('skill-tab',{
    name:'me-tab',
    props:['tab','profilePic'],
    template:`
    <div class = "tab" :style="tab === 'mySkill'? 'display:block' : 'display:none'">
        <a>this is my-skill tab</a>
    </div>
    `

})