<template>
  <button class="button is-link is-outlined">{{buttonTitle}}</button>
</template>

<script>
export default {
  props: ['buttonTitle']
};
</script>

<style scoped>

.button {
  border: 5px solid #f64c72;
}
</style>
