<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close"></div>

    <div class="modal-content has-background-white has-text-dark is-flex is-flex-direction-column is-justify-content-center">
      <div class="level p-5">
        <div class="level-item is-size-5">
          <slot name="modal-body"></slot>
        </div>
      </div>
      <div class="level pb-5">
        <div class="level-item" @click="close">
          <base-button buttonTitle="cancel"></base-button>
        </div>
        <div class="level-item">
          <base-button buttonTitle="delete"></base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton";
export default {
  components: {
    BaseButton,
  },
  props: ["thisbot"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-content {
  /* width: 50vw; */
  /* height: 50vh; */
}
</style>
