<template>
  <button
    class="button is-link is-outlined is-normal"
    :disabled="disabled"
    :class="{ 'is-focused': focus }"
  >
    {{ buttonTitle }}
  </button>
</template>

<script>
export default {
  props: ["buttonTitle", "focus", "disabled"],
  methods: {},
};
</script>

<style scoped>
.button {
  border: 5px solid #f64c72;
}
</style>
