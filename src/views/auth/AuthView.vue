<template>
  <div
    class="auth"
    ref="appRef"
  >

    <router-view />
  </div>
</template>

<script>
import drawMixin from "@/utils/drawMixin.js";
export default {
  name: 'AuthView',
  mixins: [drawMixin],
}
</script>


<style lang="scss" scoped>
.auth {
  font-size: 12px;
  transform-origin: 0 0;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: 0.3s;
}
</style>