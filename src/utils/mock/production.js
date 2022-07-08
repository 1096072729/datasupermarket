import banner1 from '../../assets/img/production/data_service.svg';
const Mock = require('mockjs');
let data = Mock.mock({
  'recommendList|6': ['@csentence(5)'],
  'searchLimit|2-5': [
    {
      id: '@guid',
      type: 'price',
      criteriaTitle: '产品分类',
      criteriaContent: [
        '全部',
        '数据服务',
        '数据分析报告',
        '数据报表',
        '数据模型',
        '通用软件',
        '其他',
        '数据分析报告',
        '数据报表',
        '数据模型',
        '通用软件',
      ],
    },
  ],
  'productionList|20': [
    {
      'id|+1': 0,
      title: 'TESsaddddddddddddasdasdddddddddasd',
      imgUrl: banner1,
      usageScenarios: ['大白天'],
      type: '好产品',
      serviceProvider: '阿斯顿',
      price: 9090,
    },
  ],
});
// Mock.mock(/api\/home/, 'get', () => {
//   //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
//   return data;
// });
Mock.mock(/home\/production/, 'get', () => {
  //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
  return data;
});
