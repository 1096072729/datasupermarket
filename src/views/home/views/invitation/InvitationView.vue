<template>
  <div
    class="invitation"
    @scroll="scrollShow()"
    ref="invitation"
  >
    <invitation-banner :banner="banner"> </invitation-banner>
    <invitation-describe
      :Content="discribeContent"
      :imgUrl="discribeImg"
    > </invitation-describe>
    <invitation-plan :planList="planList"> </invitation-plan>
    <invitation-partner
      :partnerList="partnerList"
      v-show="showPartner"
    > </invitation-partner>
    <invitation-join
      :joinImg="joinImg"
      v-show="showJoin"
    > </invitation-join>
    <invitation-service
      :serviceList="serviceList"
      v-show="showService"
    > </invitation-service>

  </div>

</template>

<script>
import InvitationBanner from './components/InvitationBanner.vue'
import InvitationDescribe from './components/InvitationDescribe.vue'
import InvitationPartner from './components/InvitationPartner.vue'
import InvitationJoin from './components/InvitationJoin.vue'
import InvitationPlan from './components/InvitationPlan.vue'
import InvitationService from './components/InvitationService.vue'

import axios from 'axios'
// import axios from 'axios'
export default {
  name: 'InvitationView',
  data () {
    return {
      banner: '',
      discribeImg: '',
      partnerList: [],
      planList: [],
      joinImg: '',
      serviceList: [],
      showJoin: false,
      showPartner: false,
      showService: false,
    }
  },
  methods: {
    getInvitation () {
      axios.get("http://localhost:8080/home/invitation").then(
        (res) => {
          this.getInvitationSuc(res);
        }

      )
    },
    getInvitationSuc (res) {
      const data = res.data;
      if (data.length !== 0) {
        this.banner = data.banner
        this.discribeImg = data.discribe.discribeImg
        this.discribeContent = data.discribe.discribeContent
        this.planList = data.planList
        this.partnerList = data.partnerList
        this.joinImg = data.joinImg
        this.serviceList = data.serviceList
        console.log(data.serviceList)
        console.log(data.partnerList)
        console.log(data.joinImg)
        // console.log('获取各个数据home的组件数据')
        // console.log(this.discribeImg)
        // console.log(this.discribeContent)
        //获取各个数据home的组件数据
        // this.thirdPartyList = data.thirdPartyList
      }
    },
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log(scrollTop)
    },
    scrollShow () {
      let scrollHeight = this.$refs.invitation.scrollTop
      let children = this.$refs.invitation.children;
      for (const element in children) {
        if (element == 3) {

          if (children[element].offsetTop - scrollHeight < 1080) {
            this.showPartner = true
          }
          if (children[element].offsetTop - scrollHeight > 1080) {
            this.showPartner = false;
          }
        }
        if (element == 4) {

          if (children[element].offsetTop - scrollHeight < 1080) {
            this.showJoin = true
          }
          if (children[element].offsetTop - scrollHeight > 1080) {
            this.showJoin = false;
          }
        }
        if (element == 5) {

          if (children[element].offsetTop - scrollHeight < 1080) {
            this.showService = true
          }
          if (children[element].offsetTop - scrollHeight > 1080) {
            this.showService = false;
          }
        }
      }
      console.log(children)


    }
  },
  mounted () {
    this.getInvitation()
    // window.addEventListener('scroll', this.handleScroll)

  },

  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  components: {
    InvitationBanner,
    InvitationDescribe,
    InvitationPartner,
    InvitationJoin,
    InvitationPlan,
    InvitationService
  }
}
</script>


<style lang="scss" scoped>
.invitation {
  height: 1000px;
  overflow: auto;
}
</style>