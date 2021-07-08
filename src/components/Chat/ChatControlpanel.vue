<template>
  <div class="hero">
    <div class="hero-body">
      <div
        class="container is-flex is-flex-direction-column is-justify-content-center"
      >
        <div class="level is-mobile m-0">
          <div class="level-item">
            <font-awesome-icon
              icon="info-circle"
              size="2x"
              class="is-clickable"
              @click="infoOnOff()"
              @mouseover="isHoverInfo = true"
              @mouseleave="isHoverInfo = false"
              :class="{
                'has-text-link': isHoverInfo,
                'has-text-warning': info,
              }"
            ></font-awesome-icon>
          </div>
          <div class="level-item">
            <font-awesome-icon
              icon="backward"
              size="2x"
              class="is-clickable"
              @click="speedBackward()"
              @mouseover="isHoverBackward = true"
              @mouseleave="isHoverBackward = false"
              :class="{ 'has-text-link': isHoverBackward }"
            ></font-awesome-icon>
          </div>
          <div class="level-item">
            <div>
              <font-awesome-icon
                v-if="pause"
                icon="play"
                size="2x"
                class="is-clickable"
                @click="pauseFunction()"
                @mouseover="isHoverPlayPause = true"
                @mouseleave="isHoverPlayPause = false"
                :class="{ 'has-text-link': isHoverPlayPause }"
              ></font-awesome-icon>
              <font-awesome-icon
                v-if="!pause"
                icon="pause"
                size="2x"
                class="is-clickable"
                @click="pauseFunction()"
                @mouseover="isHoverPlayPause = true"
                @mouseleave="isHoverPlayPause = false"
                :class="{ 'has-text-link': isHoverPlayPause }"
              ></font-awesome-icon>
            </div>
          </div>
          <div class="level-item">
            <font-awesome-icon
              icon="backward"
              size="2x"
              class="is-clickable"
              flip="horizontal"
              @click="speedForward()"
              @mouseover="isHoverForward = true"
              @mouseleave="isHoverForward = false"
              :class="{ 'has-text-link': isHoverForward }"
            ></font-awesome-icon>
          </div>
          <div class="level-item">
            <font-awesome-icon
              icon="download"
              size="2x"
              class="is-clickable"
              @mouseover="isHoverDownload = true"
              @mouseleave="isHoverDownload = false"
              :class="{ 'has-text-link': isHoverDownload }"
            ></font-awesome-icon>
          </div>
        </div>
        <div class="level is-mobile">
          <div class="level-item">
            <p v-if="pause"> pause </p>
            <p v-if="!pause">{{ this.speedtext[this.speedLevel] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { eventBus } from "@/main";

export default {
  data() {
    return {
      info: false,
      pause: false,
      speedLevel: 2,
      speedtext: ["slowest", "slower", "normal"],
      isHoverInfo: false,
      isHoverBackward: false,
      isHoverPlayPause: false,
      isHoverForward: false,
      isHoverDownload: false,
    };
  },
  emits: ["emit-pause"],

  methods: {
    infoOnOff() {
      this.info = !this.info;
      eventBus.$emit("emit-info", this.info);
    },
    pauseFunction() {
      this.pause = !this.pause;
      eventBus.$emit("emit-pause", this.pause);
    },
    speedBackward() {
      if (this.speedLevel > 0) this.speedLevel--;
      eventBus.$emit("emit-speed", this.speedLevel);
    },
    speedForward() {
      if (this.speedLevel < 2) this.speedLevel++;
      eventBus.$emit("emit-speed", this.speedLevel);
    },
  },
};
</script>
<style scoped>
.hero {
  height: 100%;
}
.level {
  width: 100%;
}
</style>
