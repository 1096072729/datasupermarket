import banner1 from '../../assets/img/invitation/join_us_banner.svg';
import discribeImg from '../../assets/img/invitation/finger.png';
import zhaomu1 from '../../assets/img/invitation/zhaomu_1.png';
import zhaomu2 from '../../assets/img/invitation/zhaomu_2.png';
import zhaomu3 from '../../assets/img/invitation/zhaomu_3.png';
import why1 from '../../assets/img/invitation/why_1.png';
import why2 from '../../assets/img/invitation/why_2.png';
import why3 from '../../assets/img/invitation/why_3.png';
import why4 from '../../assets/img/invitation/why_4.png';
import joinImg from '../../assets/img/invitation/join-setp.png';
import baozhang1 from '../../assets/img/invitation/baozhang_1.png';
import baozhang2 from '../../assets/img/invitation/baozhang_2.png';
import baozhang3 from '../../assets/img/invitation/baozhang_3.png';
import baozhang4 from '../../assets/img/invitation/baozhang_4.png';

const Mock = require('mockjs');
let data = Mock.mock({
  'banner|1': [banner1],
  discribe: {
    discribeImg: discribeImg,
    'discribeContent|2': ['@csentence(70)'],
  },
  'planList|3': [
    {
      'imgUrl|1': [zhaomu1, zhaomu2, zhaomu3],
      title: '数据提供方',
      content: '@csentence(20)',
    },
  ],
  'partnerList|4': [
    {
      'imgUrl|1': [why1, why2, why3, why4],
      'title|1': ['数据资源', '开发能力', '生态体系', '市场营销'],
      content: '@csentence(20)',
    },
  ],
  'joinImg|1': [joinImg, joinImg, joinImg],
  'serviceList|4': [
    {
      'imgUrl|1': [baozhang1, baozhang2, baozhang3, baozhang4],
      'title|1': ['优质产品', '交易保障', '强力监管', '专业服务'],
      content: ['专业、安全可定制', '数据资源开发利用'],
    },
  ],
});

Mock.mock(RegExp('/home/invitation'), 'get', () => {
  //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
  return data;
});
