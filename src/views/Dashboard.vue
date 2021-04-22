<template>
  <section>
    <div class="">
      <Nav />
    </div>
    <!-- create blank DOM for heading space  -->
    <div class="blank"></div>

    <div class="dashboardContainer has-background-primary has-text-white">
      <!-- dashboard header -->
      <div class="container is-fluid py-5">
        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item">
              <p>3 bots</p>
              <span class="pl-2" :style="{ color: '#f64c72' }">
                <font-awesome-icon
                  icon="plus-circle"
                  size="2x"
                  class="is-clickable"
                ></font-awesome-icon
              ></span>
            </div>
          </div>

          <!-- account -->
          <div class="level-right">
            <div class="level-item">
              gruppe2@meta-dating.de
              <span class="pl-2" :style="{ color: 'white' }">
                <font-awesome-icon
                  icon="chevron-circle-down"
                  size="1x"
                  class="is-clickable"
                ></font-awesome-icon
              ></span>
            </div>
          </div>
        </div>
      </div>
      <!-- dashbord bots container -->
      <div class="container is-fluid">
        <DashboardBotsContainer />
      </div>
    </div>
  </section>
</template>

<script>
import Nav from "../components/Nav/Nav";
import DashboardBotsContainer from "@/components/Dashboard/DashboardBotsContainer.vue";

export default {
  components: {
    Nav,
    DashboardBotsContainer,
  },
  methods: {},
};
</script>

<style scoped>
.b {
  border: 1px solid red;
}

.blank {
  height: 90px;
}

.dashboardContainer {
  min-height: calc(100vh - 90px);
}
</style>
