// import { mock } from 'mockjs';
import banner1 from '../../assets/img/production/data_service.svg';
import banner2 from '../../assets/img/production/data_report.svg';
import banner3 from '../../assets/img/production/data_model.svg';
import banner4 from '../../assets/img/production/data_analysis_report.svg';
import backgroundImg from '../../assets/img/production/pricebg.png';
import processImg from '../../assets/img/production/liucheng.png';
const Mock = require('mockjs');
Mock.setup({
  timeout: '500-1000',
});
let data = Mock.mock({
  recommendList: [
    'mysql',
    '高级数据库教程',
    'nodejs全套讲解',
    '程序员的自我修养--链接、装载与库',
    '深入理解计算机系统',
    '计算机科学导论',
    '计算机科学概论',
    'C程序设计语言',
    'C Primer Plus(第6版)',
  ],
  searchLimit: {
    typeLimitList: [
      '全部',
      '数据服务',
      '数据分析报告',
      '数据报表',
      '数据模型',
      '通用软件',
      '其他',
    ],
    fieldLimitList: [
      '全部',
      '科技创新',
      '财务金融',
      '公共安全',
      '机构团体',
      '法律服务',
      '市场监管',
      '资源能源',
      '安全生产',
      '生活服务',
      '信用服务',
      '气象服务',
      '教育文化',
      '社保就业',
      '社会救助',
      '商贸互通',
    ],
    priceLimitList: [
      '全部',
      '10万以下',
      '10-500万',
      '500-1000万',
      '1000万以上',
    ],
  },
  total: 10000,
  productionList: [],
  // 'productionList|8': [
  //   {
  //     'id|+1': 0,
  //     'title|1': [
  //       'mysql',
  //       '高级数据库教程',
  //       'nodejs全套讲解',
  //       '程序员的自我修养--链接、装载与库',
  //       '深入理解计算机系统',
  //       '计算机科学导论',
  //       '计算机科学概论',
  //       'C程序设计语言',
  //       'C Primer Plus(第6版)',
  //     ],
  //     imgUrl: banner1,
  //     'usageScenarios|1': ['大白天'],
  //     'type|1': [
  //       '数据服务',
  //       '数据分析报告',
  //       '数据报表',
  //       '数据模型',
  //       '通用软件',
  //       '其他',
  //     ],
  //     'serviceProvider|1': [
  //       '阿斯顿',
  //       '大实打',
  //       '莫阿斯顿',
  //       '青蛙撒',
  //       '萨阿瑟东',
  //     ],
  //     launchTime: '@date(yyyy-MM-dd)',
  //     'price|+10000': 50000,
  //     'viewsNumber|1-1000': 1,
  //     'appliedNumber|1-1000': 1,
  //   },
  // ],
});

let popularityList = Mock.mock({
  'popularityList|8': [],
  // [
  //   {
  //     'id|+1': 0,
  //     title: 'TESsaddddddddddddasdasdddddddddasd',
  //     imgUrl: banner1,
  //     usageScenarios: ['大白天'],
  //     'type|1': [
  //       '数据服务',
  //       '数据分析报告',
  //       '数据报表',
  //       '数据模型',
  //       '通用软件',
  //       '其他',
  //     ],
  //     'serviceProvider|1': [
  //       '阿斯顿',
  //       '大实打',
  //       '莫阿斯顿',
  //       '青蛙撒',
  //       '萨阿瑟东',
  //     ],
  //     launchTime: '@date(yyyy-MM-dd)',
  //     'price|+1': 9090,
  //     'viewsNumber|1-1000': 1,
  //     'appliedNumber|1-1000': 1,
  //   },
  // ],
});
// let detail = Mock.mock({
//   'detail|1': [
//     {
//       'id|+1': 0,
//       'title|1': [
//         '云原生数据库 TDSQL-C',
//         '轻量应用服务器',
//         '云硬盘',
//         '即时通信 IM',
//         '腾讯云微搭低代码',
//       ],
//       imgUrl: banner1,
//       'usageScenarios|1': ['大白天'],
//       'type|1': [
//         '数据服务',
//         '数据分析报告',
//         '数据报表',
//         '数据模型',
//         '通用软件',
//         '其他',
//       ],
//       'serviceProvider|1': [
//         '阿斯顿',
//         '大实打',
//         '莫阿斯顿',
//         '青蛙撒',
//         '萨阿瑟东',
//       ],
//       launchTime: '@date(yyyy-MM-dd)',
//       'price|+1': 9090,
//       'viewsNumber|1-1000': 1,
//       'appliedNumber|1-1000': 1,
//       pricebg: backgroundImg,
//       processImg: processImg,
//       'field|1': ['医疗', '证券', '稀土资源', '教育', '娱乐'],
//       synopsis: '牙髓炎days打压试验电压时调用',
//     },
//   ],
// });

let uptateList = Mock.mock({
  total: 10000,
  page: 1,
  'productionList|10000': [
    {
      'id|+1': 0,
      'title|1': [
        'mysql',
        '高级数据库教程',
        'nodejs全套讲解',
        '程序员的自我修养--链接、装载与库',
        '深入理解计算机系统',
        '计算机科学导论',
        '计算机科学概论',
        'C程序设计语言',
        'C Primer Plus(第6版)',
      ],
      'imgUrl|1': [banner1, banner2, banner3, banner4],
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
      'price|+10000': 50000,
      'viewsNumber|1-1000': 1,
      'appliedNumber|1-1000': 1,
      'price|+2q000': 9090,
      pricebg: backgroundImg,
      processImg: processImg,
      'field|1': [
        '全部',
        '科技创新',
        '财务金融',
        '公共安全',
        '机构团体',
        '法律服务',
        '市场监管',
        '资源能源',
        '安全生产',
        '生活服务',
        '信用服务',
        '气象服务',
        '教育文化',
        '社保就业',
        '社会救助',
        '商贸互通',
      ],
      synopsis: '牙髓炎days打压试验电压时调用',
    },
  ],
});

let apiTest = Mock.mock({
  textarea: `
    "code":0,
    "message":"校验完成",
    "data":{
      "result":1,
      "remark":"验证通过"
    }`,
});

function by(name) {
  return function (o, p) {
    let a, b;
    a = o[name];
    b = p[name];
    if (a === b) {
      return 0;
    }
    if (typeof a === typeof b) {
      return a < b ? -1 : 1;
    }
    return typeof a < typeof b ? -1 : 1;
  };
}

Mock.mock(/home\/production/, 'get', () => {
  let list = JSON.parse(JSON.stringify(uptateList));

  data.productionList = list.productionList.slice(0, 8);
  //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
  return data;
});

Mock.mock(RegExp('/home/popularity'), 'get', () => {
  //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
  let list = JSON.parse(JSON.stringify(uptateList));
  popularityList.popularityList = list.productionList.slice(0, 8);
  return popularityList;
});

Mock.mock(RegExp('/home/detail'), 'post', req => {
  console.log(req);
  const { id } = JSON.parse(req.body); //将传递进来的数据保存

  for (let i = 0; i < uptateList.productionList.length; i++) {
    //
    console.log(id);
    if (id == uptateList.productionList[i].id) {
      console.log('uptateList.productionList[i].id');
      return uptateList.productionList[i];
    }
  }
});

Mock.mock(RegExp('/upload'), 'post', () => {
  return;
});
Mock.mock(RegExp('/home/create'), 'post', () => {
  return;
});
Mock.mock(RegExp('/home/production/update'), 'post', req => {
  let list = JSON.parse(JSON.stringify(uptateList));
  // const { searchValue, type ,field ,currentPage ,pageSize,minprice} = JSON.parse(req.body); //将传递进来的数据保存
  const {
    searchValue,
    pageSize,
    currentPage,
    type,
    field,
    minPrice,
    maxPrice,
    keyValue,
    reserve,
  } = JSON.parse(req.body); //将传递进来的数据保存
  let productionList = [];
  list.page = currentPage;

  for (let i = 0; i < uptateList.productionList.length; i++) {
    //
    if (
      (type == uptateList.productionList[i].type || type == '全部') &&
      (field == uptateList.productionList[i].field || field == '全部') &&
      minPrice <= uptateList.productionList[i].price &&
      maxPrice >= uptateList.productionList[i].price &&
      (uptateList.productionList[i].title.indexOf(searchValue) !== -1 ||
        searchValue == '')
    ) {
      productionList.push(uptateList.productionList[i]);
    }
  }

  console.log(keyValue, reserve);
  productionList.sort(by(keyValue));
  if (reserve) {
    productionList.reverse();
  }

  list.total = productionList.length;
  list.productionList = productionList.slice(
    currentPage * pageSize - pageSize,
    currentPage * pageSize
  );

  return list;
});

Mock.mock(RegExp('/create/test'), 'post', () => {
  return apiTest;
});
