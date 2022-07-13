// import { mock } from 'mockjs';
import banner1 from '../../assets/img/production/data_service.svg';
import backgroundImg from '../../assets/img/production/pricebg.png';
import processImg from '../../assets/img/production/liucheng.png';
const Mock = require('mockjs');
// Mock.setup({
//   timeout: '2000-3600',
// });
let data = Mock.mock({
  'recommendList|4': ['@csentence(5)'],
  'searchLimit|2-5': [
    {
      'id|+1': 0,
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
      ],
    },
  ],
  'productionList|20': [
    {
      'id|+1': 0,
      title: 'TESsaddddddddddddasdasdddddddddasd',
      imgUrl: banner1,
      'usageScenarios|1': ['大白天'],
      'type|1': [
        '数据服务',
        '数据分析报告',
        '数据报表',
        '数据模型',
        '通用软件',
        '其他',
      ],
      'serviceProvider|1': [
        '阿斯顿',
        '大实打',
        '莫阿斯顿',
        '青蛙撒',
        '萨阿瑟东',
      ],
      launchTime: '@date(yyyy-MM-dd)',
      'price|+1': 9090,
      'viewsNumber|1-1000': 1,
      'appliedNumber|1-1000': 1,
    },
  ],
});

let popularityList = Mock.mock({
  'popularityList|8': [
    {
      'id|+1': 0,
      title: 'TESsaddddddddddddasdasdddddddddasd',
      imgUrl: banner1,
      usageScenarios: ['大白天'],
      'type|1': [
        '数据服务',
        '数据分析报告',
        '数据报表',
        '数据模型',
        '通用软件',
        '其他',
      ],
      'serviceProvider|1': [
        '阿斯顿',
        '大实打',
        '莫阿斯顿',
        '青蛙撒',
        '萨阿瑟东',
      ],
      launchTime: '@date(yyyy-MM-dd)',
      'price|+1': 9090,
      'viewsNumber|1-1000': 1,
      'appliedNumber|1-1000': 1,
    },
  ],
});
let detail = Mock.mock({
  'detail|1': [
    {
      'id|+1': 0,
      title: 'TESsaddddddddddddasdasdddddddddasd',
      imgUrl: banner1,
      'usageScenarios|1': ['大白天'],
      'type|1': [
        '数据服务',
        '数据分析报告',
        '数据报表',
        '数据模型',
        '通用软件',
        '其他',
      ],
      'serviceProvider|1': [
        '阿斯顿',
        '大实打',
        '莫阿斯顿',
        '青蛙撒',
        '萨阿瑟东',
      ],
      launchTime: '@date(yyyy-MM-dd)',
      'price|+1': 9090,
      'viewsNumber|1-1000': 1,
      'appliedNumber|1-1000': 1,
      pricebg: backgroundImg,
      processImg: processImg,
      'field|1': ['医疗', '证券', '稀土资源', '教育', '娱乐'],
      synopsis: '牙髓炎days打压试验电压时调用',
    },
  ],
});
Mock.mock(/home\/production/, 'get', () => {
  //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
  return data;
});

// Mock.mock(/home\/popularity/, 'get', () => {
//   //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
//   return popularityList;
// });
Mock.mock(RegExp('/home/popularity'), 'get', () => {
  //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
  return popularityList;
});

Mock.mock(RegExp('/home/detail*'), 'get', () => {
  return detail;
});

Mock.mock(RegExp('/upload'), 'post', () => {
  return;
});
