import banner1 from '../../assets/img/home/banner1.png';
import banner2 from '../../assets/img/home/banner2.png';
import banner3 from '../../assets/img/home/banner3.png';
import recom from '../../assets/img/production/data_report.svg';
import swiperImgUrl from '../../assets/img/home/icon02.png';
import content from '../../assets/img/home/pic201.png';
import thirdPartyImg1 from '../../assets/img//home/pic101.png';
import thirdPartyImg2 from '../../assets/img//home/pic102.png';
import thirdPartyImg3 from '../../assets/img//home/pic103.png';
import thirdPartyImg4 from '../../assets/img//home/pic104.png';
import thirdPartyImg5 from '../../assets/img//home/pic105.png';
import icon01 from '../../assets/img/home/icon01.png'
import icon02 from '../../assets/img/home/icon02.png'
import icon03 from '../../assets/img/home/icon03.png'
import pre from '../../assets/img//home/arrl.png';
import next from '../../assets/img//home/arr.png';
import signnImg from '../../assets/img//home/cardTagWarning.png';
const Mock = require('mockjs');
Mock.setup({
  timeout: '500-1000',
});
let data = Mock.mock({
  homeSwipper: [
    { id: 0, imgUrl: banner1 },
    { id: 1, imgUrl: banner2 },
    { id: 2, imgUrl: banner3 },
  ],
  'recommendList|8': [
    {
      'id|+1': 0,
      imgUrl: recom,
      signnImg: signnImg,
      title:
        '新项asdasdasdddddddd目dsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd',
      synopsis:
        '一杠一asdasdasdasdasd杠一杠aasddddddasdasdasdsdasd一杠一asdddddddddddddddddddddd杠一杠一杠一杠',
    },
  ],
  'developmentList|3': [
    {
      'id+1': 0,
      swiperImgUrl: swiperImgUrl,
      'title|+1': ['数据开发', '数据治理', '数据服务'],
      'titleImg|+1':[icon01,icon02,icon03],
      preImg: pre,
      nextImg: next,
      'show|4': [
        {
          'showId|+1': 0,
          imgUrl: content,
          'title|1': [
            '快速建模asdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd',
            '联邦学习',
            '线上预测',
            '安全运行环境',
          ],
          synopsis: '@csentence(80)',
        },
      ],
    },
  ],
  'thirdPartyList|5': [
    {
      'id|+1': 0,
      'imgUrl|+1': [
        thirdPartyImg1,
        thirdPartyImg2,
        thirdPartyImg3,
        thirdPartyImg4,
        thirdPartyImg5,
      ],
      'title|+1': [
        '安全评测asdddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddd',
        '项目招标代理',
        '项目咨询设计',
        '信息安全风险评估',
        '项目软件测试',
      ],
      'synopsis|1': '@csentence(100)',
    },
  ],
});
// Mock.mock(/api\/home/, 'get', () => {
//   //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
//   return data;
// });
Mock.mock(/api\/home/, 'get', () => {
  //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
  return data;
});
