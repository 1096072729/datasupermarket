<template>
  <div class="invitation">
    <invitation-banner :banner="banner"> </invitation-banner>
    <invitation-describe
      :Content="discribeContent"
      :imgUrl="discribeImg"
    > </invitation-describe>
    <invitation-plan :planList="planList"> </invitation-plan>
    <invitation-partner :partnerList="partnerList"> </invitation-partner>
    <invitation-join :joinImg="joinImg"> </invitation-join>
    <invitation-service :serviceList="serviceList"> </invitation-service>

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
      serviceList: []
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
        console.log('asdddddddddddddddddddddd')
        // console.log(this.discribeImg)
        // console.log(this.discribeContent)
        //获取各个数据home的组件数据
        // this.thirdPartyList = data.thirdPartyList
      }
    }
  },
  mounted () {

    this.getInvitation()
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
</style>