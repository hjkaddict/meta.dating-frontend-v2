<template lang="">
  <div :style="{ color: 'white' }">
    <font-awesome-icon
      class="is-clickable"
      icon="arrow-left"
      :size="sizeChange"
      @click="$router.go(-1)"
      @mouseover="isHover = true"
      @mouseleave="isHover = false"
      :class="{ 'has-text-link': isHover }"
    ></font-awesome-icon>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHover: false,
      iconSize: '3x'
    };
  },
  computed: {
    sizeChange() {
      if (this.isMobile()) return '2x'
      else return '3x'
    }
  }
};
</script>
