<template>
  <section
    class="is-flex is-flex-direction-column is-justify-content-center is-align-items-flex-start"
  >
    <meta-tag
      v-for="(value, key) in metadata"
      :key="key"
      :title="key"
      :addon="value"
    ></meta-tag>
    <div>
      <!-- when I do {{metadata.description}} it shows the text but console error, strange -->
      {{ metadata }} 

    </div>
  </section>
</template>
<script>
import MetaTag from "@/components/UI/MetaTag";
export default {
  components: { MetaTag },
  props: ["metadata"],
  data() {
    return {};
  },
};
</script>
