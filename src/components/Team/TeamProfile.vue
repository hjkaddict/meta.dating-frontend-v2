<template>
  <div class="container px-6 py-5">
    <div class="columns is-tablet is-vcentered">
      <div class="column is-3">
        <div class="has-text-centered">
          <figure class="image is-128x128 ">
            <img class="is-rounded" :src="'img/' + this.profileData.imgUrl" />
          </figure>
        </div>

        <p class="has-text-centered">{{ this.profileData.name }}</p>
        <p class="has-text-centered is-family-secondary">{{ this.profileData.email }}</p>
      </div>

      <div class="column is-family-secondary">
        {{ this.profileData.bio }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["profileData"],
  created() {
    console.log(this.profileData)
  },
  methods: {},
  
};
</script>
<style scoped>
figure {
  display: inline-block;
}
</style>
