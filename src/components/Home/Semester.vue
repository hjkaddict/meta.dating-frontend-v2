<template>
  <section>
    <div
      class="my-3 ml-5"
      :class="{
        selectedDesktop: selection && !isMobile(),
        selectedMobile: select && isMobile(),
      }"
    >
      <div>
        <li
          class="is-family-sans-serif is-clickable has-text-right my-1 pr-5"
          @mouseover="hover = true"
          @mouseleave="hover = false"
          :class="{ 'has-text-link': hover && !isMobile() }"
          @click="selected"
        >
          <h3 class="has-text-weight-bold is-size-5">{{ semester.title }}</h3>
          <h4 class="is-size-6">{{ semester.term }}</h4>
        </li>
      </div>
    </div>

    <!-- Semester Descrption on mobile -->
    <semester-description
      class="is-hidden-tablet"
      v-if="select"
      :metadata="this.semester"
    ></semester-description>
  </section>
</template>

<script>
import SemesterDescription from "@/components/Home/SemesterDescription";

export default {
  components: {
    SemesterDescription,
  },
  props: ["semester", "selection"],
  emits: ["this-semester"],
  data() {
    return {
      select: false,
      hover: false,
    };
  },
  methods: {
    selected() {
      if (this.isMobile()) {
        this.select = !this.select;
      } else {
        this.select = true;
      }
      if (this.select) this.$emit("this-semester", this.semester.id);
    },
  },
};
</script>

<style scoped>
.selectedDesktop {
  color: #f64c72;
  border: solid #f64c72;
  border-width: 1px 0px 1px 40px;
  background: #082b9d;
  outline: 1px solid #082b9d;
}

.selectedMobile {
  color: #f64c72;
  border: solid #f64c72;
  border-width: 1px 1px 1px 20px;
  background: #082b9d;
  outline: 1px solid #082b9d;
}

/* @media only screen and (max-width: 768px) {
  .selected {
    border-width: 1px 1px 1px 20px;
  }
} */
</style>
