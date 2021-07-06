<template>
  <section>
    <!-- chat right -->
    <div
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

      <div class="name-right has-text-right has-text-white m-2">
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
            </div>
          </div>
        </div>

        <div
          class="box px-3 my-1"
          v-for="line in message.plaintext"
          v-bind:key="line.id"
        >
          <p>
            <strong>{{ line.line }}</strong>
          </p>
        </div>
      </div>
    </div>

    <!-- chat left -->
    <div
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
      <div class="name-left has-text-left has-text-white m-2">
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
            </div>
          </div>
        </div>

        <div
          class="box px-3 my-1"
          v-for="line in message.plaintext"
          v-bind:key="line.id"
        >
          <p>
            <strong>{{ line.line }}</strong>
          </p>
        </div>
      </div>
    </div>
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
      type: Boolean
    }
  },
  data: function() {
    return {
      evenTurn: (this.message.turn + 1) % 2,
    };
  },
};
</script>

<style scoped>
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

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .box {
    max-width: 100vw;
  }
}
</style>
