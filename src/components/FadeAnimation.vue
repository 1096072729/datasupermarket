<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
</script>

<style lang="scss" scoped>
.v-enter {
  width: 100px;
}
.v-leave-to {
  width: 300px;
}
.v-enter-active,
.v-leave-active {
  transition: width 0.5s;
}
</style>
