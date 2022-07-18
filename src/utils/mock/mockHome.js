import banner1 from '../../assets/img/home/banner1.png';
import banner2 from '../../assets/img/home/banner2.png';
import banner3 from '../../assets/img/home/banner3.png';
import recom from '../../assets/img/home/recom.png';
import swiperImgUrl from '../../assets/img/home/icon02.png';
import content from '../../assets/img/home/pic201.png';
import thirdPartyImg from '../../assets/img//home/pic105.png';
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
      imgUrl: recom,
      title: '新项目',
      synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
    },
    {
      id: 1,
      imgUrl: recom,
      title: '新项目',
      synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
    },
    {
      id: 2,
      imgUrl: recom,
      title: '新项目',
      synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
    },
    {
      id: 3,
      imgUrl: recom,
      title: '新项目',
      synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
    },
    {
      id: 4,
      imgUrl: recom,
      title: '新项目',
      synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
    },
  ],
  developmentList: [
    {
      id: 0,
      swiperImgUrl: swiperImgUrl,
      show: [
        {
          showId: 0,
          imgUrl: content,
          title: '新项目',
          synopsis:
            '一杠一杠一杠一杠一杠一杠一杠一杠asdddddddddddddddddddddddddddddddddddddddddddddddddddd',
        },
        {
          showId: 1,
          imgUrl: content,
          title: '新项目',
          synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
        },
        {
          showId: 2,
          imgUrl: content,
          title: '新项目',
          synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
        },
        {
          showId: 3,
          imgUrl: content,
          title: '新项目',
          synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
        },
      ],
    },
    {
      id: 0,
      swiperImgUrl: swiperImgUrl,
      show: [
        {
          showId: 0,
          imgUrl: content,
          title: '新项目',
          synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
        },
        {
          showId: 1,
          imgUrl: content,
          title: '新项目',
          synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
        },
        {
          showId: 2,
          imgUrl: content,
          title: '新项目',
          synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
        },
        {
          showId: 3,
          imgUrl: content,
          title: '新项目',
          synopsis:
            '一杠一杠一杠一杠一杠一杠一杠一杠asddddddddddddddddddddddddddasdddddddddddddddddddddas',
        },
      ],
    },
    {
      id: 2,
      swiperImgUrl: swiperImgUrl,
      show: [
        {
          showId: 0,
          imgUrl: content,
          title: '新项目',
          synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
        },
        {
          showId: 1,
          imgUrl: content,
          title: '新项目',
          synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
        },
        {
          showId: 2,
          imgUrl: content,
          title: '新项目',
          synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
        },
        {
          showId: 3,
          imgUrl: content,
          title: '新项目',
          synopsis: '一杠一杠一杠一杠一杠一杠一杠一杠',
        },
      ],
    },
  ],
  thirdPartyList: [
    {
      id: 0,
      imgUrl: thirdPartyImg,
      title: '超级项目',
      synopsis: 'asdddddddddddsd',
    },
    {
      id: 1,
      imgUrl: thirdPartyImg,
      title: '超级项目',
      synopsis: 'asdddddasdasd',
    },
    {
      id: 2,
      imgUrl: thirdPartyImg,
      title: '超级项目',
      synopsis: 'asddddddasdasd',
    },
    {
      id: 3,
      imgUrl: thirdPartyImg,
      title: '超级项目',
      synopsis: 'asddddddddaasdasd',
    },
    {
      id: 4,
      imgUrl: thirdPartyImg,
      title: '超级项目',
      synopsis: 'asdasdasdasd',
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
