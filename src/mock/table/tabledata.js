var Mock = require('mockjs');
Mock.mock('/table',{
  checkTable:[
      {
        key: '1',
        username: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      },
      {
        key: '2',
        username: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园2号'
      }
    ],
   unfoldTable:[
       {
         key: '1',
         username: '胡彦斌',
         age: 32,
         address: '西湖区湖底公园1号',
         description:'胡彦斌的家在西湖区湖底公园1号'
       },
       {
         key: '2',
         username: '胡彦祖',
         age: 42,
         address: '西湖区湖底公园2号',
         description:'胡彦祖的家在西湖区湖底公园2号'
       }
     ],
     sunTableHead:[
       {
         key: '1',
         username: '胡彦斌',
         age: 32,
         address: '西湖区湖底公园1号',
         gender:'男'
       },
       {
         key: '2',
         username: '胡彦祖',
         age: 32,
         address: '西湖区湖底公园2号',
         gender:'男'
       },
       {
         key: '3',
         username: '王源',
         age: 18,
         address: '西湖区湖底公园3号',
         gender:'男'
       },
       {
         key: '4',
         username: '杨超越',
         age: 20,
         address: '西湖区湖底公园4号',
         gender:'女'
       }
     ]
})
