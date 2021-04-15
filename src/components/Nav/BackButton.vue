<template lang="">
  <div :style="{ color: 'white' }">
    <font-awesome-icon
      class="is-clickable"
      icon="arrow-left"
      size="3x"
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
    };
  },
};
</script>
