<template>
  <section>
    <div class="container has-background-white has-text-black p-2">
      <!-- first row -->
      <div class="section px-2 pt-2 pb-0">
        <div class="level is-mobile">
          <div class="level-left is-family-primary">
            <div class="level-item">
              <p class="is-size-4">{{ this.addedbot.name }}</p>
            </div>

            <div
              v-show="this.addedbot.isPublic"
              class="level-item align-bottom has-text-danger"
            >
              <p>Sichtbar</p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <font-awesome-icon
                icon="trash"
                size="1x"
                class="is-clickable"
                @click="showModal"
              ></font-awesome-icon>
            </div>
            <div class="level-item">
              <font-awesome-icon
                icon="edit"
                size="1x"
                class="is-clickable"
                @click="editBot()"
              ></font-awesome-icon>
            </div>
          </div>
        </div>
      </div>
      <!-- second row -->
      <div class="section px-2 py-0 ">
        <div class="level is-mobile">
          <div class="level-left"></div>
          <div class="level-right">
            <div class="level-item is-family-secondary is-size-7">
              <p>created: {{ dateFormatter(this.addedbot.date_created) }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- third row  -->
      <article class="media py-2">
        <figure class="media-left pl-3 mr-1 media-image">
          <p class="image is-128x128">
            <img :src="this.addedbot.image_path" class="" />
          </p>
        </figure>
        <div class="media-content px-2">
          <div class="content">
            <MetaTag
              v-if="this.addedbot.service"
              title="Platform"
              :addon="this.addedbot.service"
            />
            <MetaTag
              v-if="this.addedbot.term"
              title="Project"
              :addon="this.addedbot.term"
            />
            <MetaTag
              v-if="this.addedbot.semester"
              title="Semester"
              :addon="this.addedbot.semester"
            />
            <!-- <MetaTag title="Account" :addon="this.addedbot.owner" /> -->
            <MetaTag
              v-if="this.addedbot.group"
              title="Group"
              :addon="this.addedbot.group"
            />
          </div>
        </div>
      </article>

      <!-- fourth row  -->
      <div class="section px-3 py-1 is-family-secondary is-size-7">
        <div class="descriptionContainer">
          {{ this.addedbot.description }}
        </div>
      </div>
    </div>

    <DeleteBotModal
      v-show="isModalVisible"
      @close="closeModal"
      :addedbot="this.addedbot"
    />
  </section>
</template>

<script>
import MetaTag from "@/components/UI/MetaTag";
import DeleteBotModal from "@/components/UI/DeleteBotModal.vue";

export default {
  components: {
    MetaTag,
    DeleteBotModal,
  },
  props: ["addedbot"],
  data() {
    return {
      isModalVisible: false,
      id: this.addedbot._id,
      ProfileData: this.addedbot,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    editBot() {
      this.$router.replace({
        name: "edit",
        params: {
          id: this.id,
          ProfileData: this.ProfileData,
        },
      });
    },
    dateFormatter(input) {
      var date = ""
      var cut = input.substring(0, 10);
      date = cut.substring(8, 10) + '.' + cut.substring(5,7) + '.' + cut.substring(2, 4)
      return date
    }
  },
};
</script>

<style>
.descriptionContainer {
  height: 100px;
  overflow: auto;
}

/* Push level-item and following elements to the bottom or top */
.align-top {
  align-self: flex-start;
}

.align-bottom {
  align-self: flex-end;
}

.media-image {
  overflow: hidden;
}
</style>
