<template>
  <section class="has-background-primary">
    <div class="formContainer container has-text-white p-5">
      <form @submit.prevent="createBotEntry">
        <!-- platform select -->
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Platform *</label>
          </div>
          <div class="field-body">
            <div class="control">
              <div class="select">
                <select>
                  <option>Watson Assistant V2</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- semester select -->
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Semester *</label>
          </div>
          <div class="field-body">
            <div class="control">
              <div class="select">
                <select v-model="newBotEntry.semester">
                  <option>Sommersemester 21</option>
                  <option>Wintersemester 20-21</option>
                  <option>Sommersemester 20</option>
                  <option>Wintersemester 19-20</option>
                  <option>Sommersemester 19</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- project term select -->
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Project *</label>
          </div>
          <div class="field-body">
            <div class="control">
              <div class="select">
                <select v-model="newBotEntry.term">
                  <option>AIOT2</option>
                  <option>AIOT</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- group number select -->
        <div class="field is-horizontal ">
          <div class="field-label is-normal">
            <label class="label">Group</label>
          </div>
          <div class="field-body">
            <div class="field is-grouped">
              <div class="control">
                <div class="select">
                  <select class="selectGroup" v-model="newBotEntry.group">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <input class="input" placeholder="Ricarda Schuster" disabled />
              <input class="input" placeholder="Eldric Schwarz" disabled />
              <input class="input" placeholder="Mina Dietrich" disabled />
              <span class="mt-5">
                <font-awesome-icon
                  icon="plus-circle"
                  size="1x"
                  class="is-clickable"
                ></font-awesome-icon
              ></span>
            </div>
          </div>
        </div>

        <!-- bot name input  -->
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Bot Name *</label>
          </div>
          <div class="field-body">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="e.g Marvin"
                v-model="newBotEntry.name"
              />
            </div>
          </div>
        </div>

        <!-- bot picture  -->

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Bot Picture *</label>
          </div>
          <div class="field-body">
            <div class="field">
              <FilePond
                name="file"
                ref="pond"
                label-idle="Drop files here..."
                credits="false"
                max-file-size="3MB"
                accepted-file-types="image/jpeg, image/png"
                image-crop-aspect-ratio="1"
                :files="myFiles"
                @init="handleFilePondInit"
                @addfile="handleFileAdd"
              />
            </div>
          </div>
        </div>

        <!-- bot description text area -->
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Bot Description</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Description of the bot"
                  v-model="newBotEntry.description"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <!-- Assistant ID input  -->
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Assistant ID *</label>
          </div>
          <div class="field-body">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Assistant ID"
                required
                v-model="newBotEntry.assistant_id"
              />
            </div>
          </div>
        </div>

        <!-- API Key input -->
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">API Key *</label>
          </div>
          <div class="field-body">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="API Key"
                required
                v-model="newBotEntry.apikey"
              />
            </div>
          </div>
        </div>

        <!-- sichtbar checkbox  -->
        <div class="field is-horizontal">
          <div class="field-label">
            <label for="" class="checkbox">
              Sichtbar
            </label>
          </div>
          <div class="field-body">
            <div class="control">
              <!-- In current setup, isPublic is set to false to all newBotEntry. It needs to be modified later -->
              <p-check color="danger" v-model="newBotEntry.isPublic"></p-check>
            </div>
          </div>
        </div>

        <div class="level is-mobile">
          <div class="level-item">
            <router-link to="home">
              <base-button buttonTitle="Abbrechen" class="m-5"></base-button
            ></router-link>
            <base-button
              type="submit"
              buttonTitle="Bot anlegen"
              class="m-5"
            ></base-button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton";

// Import Vue FilePond
import vueFilePond from "vue-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Import image preview / file type validation / image crop / image transformation plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginImageEdit from "filepond-plugin-image-edit";
import FilePondPluginImageResize from "filepond-plugin-image-resize";

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageTransform,
  FilePondPluginFileValidateSize,
  FilePondPluginImageEdit,
  FilePondPluginImageResize
);

export default {
  components: {
    BaseButton,
    FilePond,
  },
  data() {
    return {
      newBotEntry: {
        service: "AssistantV2",
      },
      file: "",
      myFiles: [],
    };
  },
  computed: {},
  methods: {
    handleFilePondInit() {
      console.log("FilePond has initialized");
    },

    handleFileAdd() {
      this.file = this.$refs.pond.getFile().file;
    },

    async createBotEntry() {
      const token = localStorage.getItem("accessToken");
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + token);

      let newBotEntry = JSON.stringify(this.newBotEntry);
      console.log(newBotEntry);
      let formData = new FormData();
      formData.append("botEntry", newBotEntry);

      if (this.file) {
        formData.append("profilePic", this.file, this.file.name);
      }
      const request = {
        method: "POST",
        headers: headers,
        body: formData,
      };
      fetch("http://metathema.net/api/bots/", request)
        .then(async (res) => {
          // check for error response
          if (!res.ok) {
            // get error message from body or default to response status
            const error = res.status;
            return Promise.reject(error);
          }
          this.$router.push({ name: "dashboard" });
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
  },
};
</script>

<style scoped>
.blank {
  height: 90px;
}

.formContainer {
  min-height: calc(100vh - 90px);
  z-index: 0;
}

label {
  color: white;
}

select,
input {
  width: 300px;
  margin: 0 5px 5px 0;
}

.selectGroup {
  width: 80px;
}
</style>
