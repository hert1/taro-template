const delay = require('mocker-api/utils/delay');
const mockjs=require('mockjs');
const data= {
  'GET /xhr/user/getDetail.json': {
    code: 200,
    data: {id: 1, userName: 'root'},
    message: 'success'
  },
}
//使用delay方法可以延迟返回数据
module.exports=delay(data,1000);
