<template>
  <section>
    <div class="columns m-0 reverse-columns">
      <semester-list
        class="column is-one-third"
        :class="{ 'p-5': isMobile() }"
        @semester-info="storeSelectedSemester"
      ></semester-list>

      <project-overview
        class="column"
        :class="{ 'is-hidden-desktop': selectedSemester}"
      ></project-overview>

      <semester-description
        class="column is-hidden-mobile is-fullheight"
        v-if="selectedSemester"
        :metadata="selectedSemester"
      ></semester-description>
    </div>
  </section>
</template>

<script>
import SemesterList from "./SemesterList";
import ProjectOverview from "./ProjectOverview";
import SemesterDescription from "./SemesterDescription";

export default {
  data() {
    return {
      selectedSemester: null,
    };
  },
  components: {
    SemesterList,
    ProjectOverview,
    SemesterDescription,
  },
  methods: {
    storeSelectedSemester(semester) {
      this.selectedSemester = semester;
    },
  },
};
</script>

<style scoped>
.columns {
  width: 100vw;
}

.column {
  /* border: 1px dashed white; */
}
.is-fullheight {
  height: 100vh;
}

@media (max-width: 767px) {
  .reverse-columns {
    flex-direction: column-reverse;
    display: flex;
  }
}
</style>
