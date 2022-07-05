import banner1 from '../../assets/img/home/banner1.png';
import banner2 from '../../assets/img/home/banner2.png';
import banner3 from '../../assets/img/home/banner3.png';
const Mock = require('mockjs');
let data = Mock.mock({
  homeSwipper: [
    { id: 0, imgUrl: banner1 },
    { id: 1, imgUrl: banner2 },
    { id: 2, imgUrl: banner3 },
  ],
  recommendList: [
    {
      id: 0,
      imgUrl: banner1,
      title: '新项目',
      synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
    },
    {
      id: 1,
      imgUrl: banner1,
      title: '新项目',
      synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
    },
    {
      id: 2,
      imgUrl: banner1,
      title: '新项目',
      synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
    },
    {
      id: 3,
      imgUrl: banner1,
      title: '新项目',
      synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
    },
    {
      id: 4,
      imgUrl: banner1,
      title: '新项目',
      synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
    },
  ],
});
Mock.mock(/api\/home/, 'get', () => {
  //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
  return data;
});
