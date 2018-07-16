Vue.component('me-tab',{
    name:'me-tab',
    props:['tab','profilePic'],
    template:`
    <div :style="tab === 'me'? 'display:block' : 'display:none'">
        <a>hahhahhahahah</a>
    </div>
    `

})