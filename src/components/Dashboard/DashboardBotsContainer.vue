<template>
  <div class="columns is-multiline ">
    <AddedBot
      class="column is-12-tablet is-4-desktop"
      v-for="a in 4"
      :key="a.id"
    />

  </div>
</template>
<script>
import AddedBot from "@/components/Dashboard/AddedBot.vue";
export default {
  components: {
    AddedBot,
  },
};
</script>
<style scoped></style>
