const list = [
    {
        nick:'Allen1',
        phone:8778678768765,
        name:'aaa',
        subject:'math',
        job:'a',
        year:22,
        updateTime:'2021-9-12'
    },
    {
        nick:'Allen2',
        phone:8778678768765,
        name:'aaa',
        subject:'math',
        job:'a',
        year:22,
        updateTime:'2021-9-12'
    },
    {
        nick:'Allen3',
        phone:8778678768765,
        name:'aaa',
        subject:'math',
        job:'a',
        year:22,
        updateTime:'2021-9-12'
    }
]


module.exports = [
    {
        url:'/vue-element-admin/test/list',
        type:'get',
        response:config =>{
            return{
                code:20000,
                data:{
                    total:list.length,
                    items:list
                }
            }
        }
    }
]