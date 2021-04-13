<template>
  <div class="container hero">
    <div class="level is-mobile hero-body" :style="{ color: 'white' }">
      <div class="level-item">
        <font-awesome-icon
          icon="info-circle"
          size="2x"
          class="is-clickable"
        ></font-awesome-icon>
      </div>
      <div class="level-item">
        <font-awesome-icon
          icon="backward"
          size="2x"
          class="is-clickable"
        ></font-awesome-icon>
      </div>
      <div class="level-item">
        <font-awesome-icon
          icon="play"
          size="2x"
          class="is-clickable"
        ></font-awesome-icon>
      </div>
      <div class="level-item">
        <font-awesome-icon
          icon="backward"
          size="2x"
          class="is-clickable"
          flip="horizontal"
        ></font-awesome-icon>
      </div>
      <div class="level-item">
        <font-awesome-icon
          icon="download"
          size="2x"
          class="is-clickable"
        ></font-awesome-icon>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  /* border: 1px solid white; */
  height: 100%;
}
</style>
