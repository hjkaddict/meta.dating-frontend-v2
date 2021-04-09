<template>
  <section>
    <div
      class="columns m-0 reverse-columns"
    >
      <semester-list
        class="column is-one-third"
        @semester-info="storeSelectedSemester"
      ></semester-list>
      <project-description
        class="column"
        v-if="!selectedSemester"
      ></project-description>
      <semester-description
        class="column is-hidden-mobile"
        v-if="selectedSemester"
        :metadata="selectedSemester"
      ></semester-description>
    </div>
    <div></div>
  </section>
</template>

<script>
import SemesterList from "./SemesterList";
import ProjectDescription from "./ProjectDescription";
import SemesterDescription from "./SemesterDescription";

export default {
  data() {
    return {
      selectedSemester: false,
    };
  },
  components: {
    SemesterList,
    ProjectDescription,
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
  border: 1px solid red;
}

@media (max-width: 767px) {
  .reverse-columns {
    flex-direction: column-reverse;
    display: flex;
  }
}
</style>
