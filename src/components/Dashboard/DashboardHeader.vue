<template lang="">
  <section>
    <div class="container is-fluid py-5">
      <div class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <p>{{ this.numOfBots }} bots</p>
            <router-link to="addbot">
              <span class="pl-2" :style="{ color: '#f64c72' }">
                <font-awesome-icon
                  icon="plus-circle"
                  size="2x"
                  class="is-clickable"
                ></font-awesome-icon
              ></span>
            </router-link>
          </div>
        </div>

        <!-- account -->
        <div class="level-right">
          <div class="level-item">
            {{ username }}
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
  </section>
</template>
<script>
export default {
  props: ["numOfBots", "username"],
};
</script>
