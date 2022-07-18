<template>
  <div class="invitation">
    <invitation-banner :banner="banner"> </invitation-banner>

  </div>

</template>

<script>
import InvitationBanner from './components/InvitationBanner.vue'

import axios from 'axios'
// import axios from 'axios'
export default {
  name: 'InvitationView',
  data () {
    return {
      banner: ''

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
        //获取各个数据home的组件数据
        // this.thirdPartyList = data.thirdPartyList
      }
    }
  },
  mounted () {

    this.getInvitation()
  },
  components: {
    InvitationBanner
  }
}
</script>


<style lang="scss" scoped>
</style>