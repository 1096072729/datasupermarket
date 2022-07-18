import banner1 from '../../assets/img/invitation/join_us_banner.svg';
const Mock = require('mockjs');
let data = Mock.mock({
  'banner|1': [banner1],
});

Mock.mock(RegExp('/home/invitation'), 'get', () => {
  //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
  return data;
});
