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
          <h3 class="has-text-weight-bold is-size-5">
            {{ this.term.topic }}
          </h3>
          <h4 class="is-size-6">{{ this.term.term }}</h4>
        </li>
      </div>
    </div>

    <!-- Semester Descrption on mobile -->
    <term-description
      class="is-hidden-tablet"
      v-if="select"
      :metadata="this.term"
    ></term-description>
  </section>
</template>

<script>
import TermDescription from "@/components/Home/TermDescription";

export default {
  components: {
    TermDescription,
  },
  props: ["term", "selection"],
  emits: ["this-term-id"],
  data() {
    return {
      select: false,
      hover: false,
    };
  },
  methods: {
    selected() {
      //close the project description tag when click again in mobile
      if (this.isMobile()) this.select = !this.select;
      else this.select = true;

      //emit semester.id to SemesterList
      if (this.select) this.$emit("this-term-id", this.term.id);
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
</style>
