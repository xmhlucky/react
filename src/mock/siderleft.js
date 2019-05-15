//侧边请求
var Mock = require('mockjs');
Mock.mock('/siderbar',{
    reactsiderbar:[
      {
        key:'/react/introduction',
        router:'/react/introduction',
        text:'react简介'
      },
      {
        key:'/react/hellowrold',
        router:'/react/hellowrold',
        text:'HelloWrold'
      },
      {
        key:'/react/jsxgrammar',
        router:'/react/jsxgrammar',
        text:'jsx语法'
      },
      {
        key:'/react/state',
        router:'/react/state',
        text:'state'
      },
      {
        key:'/react/props',
        router:'/react/props',
        text:'props'
      },
      {
        key:'/react/lifecycle',
        router:'/react/lifecycle',
        text:'生命周期'
      },
      {
        key:'/react/list',
        router:'/react/list',
        text:'list渲染'
      },
      {
        key:'/react/form',
        router:'/react/form',
        text:'form表单'
      },
      {
        key:'/react/proptypes',
        router:'/react/proptypes',
        text:'proptypes'
      },{
        key:'/react/ref',
        router:'/react/ref',
        text:'ref'
      },
      {
        key:'/react/notice',
        router:'/react/notice',
        text:'注意事项'
      }

    ],
    headernav:[
        {
          key:'/react',
          router:'/react',
          text:'react'
        },
        {
          key:'/es6',
          router:'/es6',
          text:'es6'
        }
    ],
    antdsiderbar:[
      {
        key:'/antd/table',
        router:'/antd/table',
        text:'table',
        children:[
            {
              key:'/antd/edittable',
              router:'/antd/edittable',
              text:'edittable'
            }
        ]
      },    
      {
        key:'/antd/form',
        router:'/antd/form',
        text:'form'
      },
      {
        key:'/antd/tree',
        router:'/antd/tree',
        text:'tree',
        children:[{
          key:'/antd/tree/commontree',
          router:'/antd/tree/commontree',
          text:'普通tree',
        },
        {
          key:'/antd/tree/commontree',
          router:'/antd/tree/commontree',
          text:'搜索tree',
        }]
      }
    ]
});
