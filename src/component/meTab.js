Vue.component('me-tab',{
    name:'me-tab',
    props:['tab','profilePic'],
    template:`
    <div class = "tab" :style="tab === 'me'? 'display:block' : 'display:none'">
        <div class = "me-tab-container">
            <div class = "me-tab-main">
                <div class="me-tab-profile">
                    <img src="">
                </div>
                <div>
                    <p>
                    </p>
                </div>
            </div>
            <div class = "me-tab-left">
            </div>
            <div class = "me-tab-right">
            </div>
        </div>
    </div>
    `

})