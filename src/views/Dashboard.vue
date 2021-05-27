<template>
  <section>
    <div class="">
      <Nav />
    </div>
    <!-- create blank DOM for heading space  -->
    <div class="blank"></div>

    <router-view></router-view>

  </section>
</template>

<script>
import Nav from "@/components/Nav/Nav";

export default {
  components: {
    Nav,
  },
};
</script>

<style scoped>
.blank {
  height: 90px;
}

</style>
