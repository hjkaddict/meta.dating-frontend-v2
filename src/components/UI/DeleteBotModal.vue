<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close"></div>

    <div
      class="modal-content has-background-white has-text-dark is-flex is-flex-direction-column is-justify-content-center"
    >
      <div class="level p-5">
        <div class="level-item is-size-5">
          <slot name="modal-body"></slot>
          {{ this.addedbot.name }} wirklich löschen ?
        </div>
      </div>
      <div class="level pb-5">
        <div class="level-item" @click="close">
          <base-button buttonTitle="cancel"></base-button>
        </div>
        <div class="level-item" @click="confirmDeletion()">
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
  props: ["addedbot"],
  data() {
    return {
      ProfileData: this.addedbot,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async confirmDeletion() {
      const token = localStorage.getItem("accessToken");
      const parameterURL =
        "https://www.metathema.net/api/bots/service/" +
        this.ProfileData.service +
        "/id/" +
        this.ProfileData._id;
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + token);
      let request = {
        method: "GET",
        headers: headers,
      };

      fetch(parameterURL, request)
        .then(async (res) => {
          if (!res.ok) {
            //get error message from body or default to response status
            const error = res.status;
            this.$router.push({ name: "login" });
            return Promise.reject(error);
          }
          this.$router.go();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
