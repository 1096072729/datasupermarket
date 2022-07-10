import elementResizeDetectorMaker from 'element-resize-detector';
export default {
  data() {
    return {
      style: {
        width: '1920',
        height: '1080',
        transform: 'scaleY(1) scaleX(1) translate(-50%, -50%)',
      },
    };
  },
  mounted() {
    const that = this;
    that.setScale();
    /* 窗口改变事件*/
    const erd = elementResizeDetectorMaker();
    erd.listenTo(this.$refs.appRef.parentElement.parentElement, element => {
      console.log(element);
      that.$nextTick(() => {
        //监听到事件后执行的业务逻辑
        // console.log(111);
        that.setScale();
      });
    });
  },
  methods: {
    getScale() {
      console.log(this.$refs.appRef);
      console.log('this.$refs.appRef');
      // const w =
      //   this.$refs.appRef.parentElement.parentElement.clientWidth /
      //   this.style.width;
      // const h =
      //   this.$refs.appRef.parentElement.parentElement.clientHeight /
      //   this.style.height;
      const w = window.innerWidth / this.style.width;
      const h = window.innerHeight / this.style.height;

      return { x: w, y: h };
    },
    setScale() {
      const appRef = this.$refs['appRef'];
      const scale = this.getScale();
      appRef.style.width = this.style.width + 'px';
      appRef.style.height = this.style.height + 'px';
      appRef.style.transform =
        'scaleY(' + scale.y + ') scaleX(' + scale.x + ') translate(-50%, -50%)';
    },
  },
};
