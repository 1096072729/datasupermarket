<template>
  <div
    id="app"
    class="app"
    ref="appRef"
  >

    <router-view />
  </div>
</template>

<script>
import drawMixin from "@/utils/drawMixin.js";
export default {
  mixins: [drawMixin],
}
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}
.app {
  font-size: 12px;
  line-height: 16px;
  transform-origin: 0 0;
  // position: relative;
  position: fixed;
  background-color: #f0f2f5;
  // position: relative;
  left: 50%;
  top: 50%;
  transform: 0.3s;
}

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
</style>
