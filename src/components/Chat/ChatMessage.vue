<template>
  <section>
    <!-- chat right -->
    <section
      class="chat-right px-3 is-flex is-flex-direction-row is-flex-direction-row-reverse is-align-items-flex-start"
      v-if="evenTurn"
    >
      <div class="picture">
        <figure>
          <p class="image is-64x64">
            <img :src="message.image_path" class="is-rounded" />
          </p>
        </figure>
      </div>

      <div
        class="name-right has-text-right has-text-white m-2 is-size-6"
        :class="{ 'has-text-black is-size-7 m-0': pdfDiv }"
      >
        <div>
          <p>
            {{ message.name }}
          </p>
        </div>
        <div v-if="info">
          <div
            class="table is-borderless is-size-7 has-background-dark has-text-white has-text-left m-1"
          >
            <div v-if="message.intents" class="tbody">
              <tr v-show="message.intents">
                <th class="has-text-link">intents</th>
                <td>#{{ message.intents.intent }}</td>
                <td>confidence: {{ message.intents.confidence.toFixed(2) }}</td>
              </tr>

              <tr v-for="(entity, index) in message.entities" :key="entity.id">
                <th class="has-text-link">{{ textEntitiesReturn(index) }}</th>
                <td>@{{ entity.entity }}:{{ entity.value }}</td>
                <td>confidence: {{ entity.confidence.toFixed(2) }}</td>
              </tr>
            </div>
          </div>
        </div>

        <div
          class="box px-3 my-1"
          :class="{ 'is-border my-0': pdfDiv }"
          v-for="line in message.plaintext"
          v-bind:key="line.id"
        >
          <p>
            <strong>{{ line.line }}</strong>
          </p>
        </div>
      </div>
    </section>

    <!-- chat left -->
    <section
      class="chat-left px-3 is-flex is-flex-direction-row is-align-items-flex-start"
      v-if="!evenTurn"
    >
      <div class="picture">
        <figure>
          <p class="image is-64x64">
            <img :src="message.image_path" class="is-rounded" />
          </p>
        </figure>
      </div>
      <div
        class="name-left has-text-left m-1 has-text-white"
        :class="{ 'has-text-black is-size-7 m-0': pdfDiv }"
      >
        <div>
          <p>
            {{ message.name }}
          </p>
        </div>
        <div v-if="info">
          <div
            class="table is-borderless is-size-7 has-background-dark has-text-white has-text-left m-1"
          >
            <div v-if="message.intents" class="tbody">
              <tr v-if="message.intents">
                <th class="has-text-link">intents</th>
                <td>#{{ message.intents.intent }}</td>
                <td>confidence: {{ message.intents.confidence.toFixed(2) }}</td>
              </tr>
              <tr v-for="(entity, index) in message.entities" :key="entity.id">
                <th class="has-text-link">{{ textEntitiesReturn(index) }}</th>
                <td>@{{ entity.entity }}:{{ entity.value }}</td>
                <td>confidence: {{ entity.confidence.toFixed(2) }}</td>
              </tr>
            </div>
          </div>
        </div>

        <div
          class="box px-3 my-1"
          :class="{ 'is-border': pdfDiv }"
          v-for="line in message.plaintext"
          v-bind:key="line.id"
        >
          <p>
            <strong>{{ line.line }}</strong>
          </p>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  props: {
    message: {
      type: Object,
      required: false,
    },
    info: {
      type: Boolean,
    },
    pdfDiv: {
      type: Boolean,
    },
  },
  data: function() {
    return {
      evenTurn: (this.message.turn + 1) % 2,
    };
  },
  methods: {
    textEntitiesReturn(index) {
      if (index === 0) return "entities";
      else return "";
    },
  },
};
</script>

<style scoped>
.is-border {
  border: 1px solid black;
}
.box {
  max-width: 60vw;
}

.name-right {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.name-left {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@media only screen and (max-width: 1023px) {
  /* For mobile phones: */
  .box {
    max-width: 100vw;
  }
}
</style>
