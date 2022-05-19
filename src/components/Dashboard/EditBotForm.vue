<template>
  <section class="has-background-primary">
    <div class="formContainer container has-text-white p-5">
      <form enctype="multipart/form-data" @submit.prevent>
        <!-- platform select -->
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Platform *</label>
          </div>
          <div class="field-body">
            <div class="control">
              <div class="select">
                <select v-model="ProfileData.service">
                  <option
                    @click="serviceSelect(platform)"
                    v-for="platform in platforms"
                    :value="platform"
                    v-bind:key="platform"
                    >{{ platform }}</option
                  >
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
                <select v-model="ProfileData.semester">
                   <option>Sommersemester 22</option>
                  <option>Wintersemester 21-22</option>
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
                <select v-model="ProfileData.term">
                  <option>TruthinessMachines</option>
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
            <label class="label">Group *</label>
          </div>
          <div class="field-body">
            <div class="field is-grouped">
              <div class="control">
                <div class="select">
                  <select class="selectGroup" v-model="ProfileData.group">
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
          </div>
        </div>

        <!-- student names input  -->
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Students</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div v-for="(student, index) in students" :key="student">
                <input
                  class="input"
                  placeholder="name"
                  v-model.lazy="students[index]"
                />
                <span class="mt-5">
                  <font-awesome-icon
                    icon="minus-circle"
                    size="1x"
                    class="is-clickable"
                    @click="students.splice(index, 1)"
                  ></font-awesome-icon
                ></span>
              </div>
              <span class="mt-5">
                <font-awesome-icon
                  icon="plus-circle"
                  size="1x"
                  class="is-clickable"
                  @click="addInput"
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
                v-model="ProfileData.name"
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
              <croppa
                :initial-image="ProfileData.image_path"
                v-model="myCroppa"
                @file-choose="handleFileChoose"
              ></croppa>
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
                  v-model="ProfileData.description"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

                <!-- SAPCAI auth_url input  -->

        <div class="field is-horizontal"  v-if="platformSelected == 'SAPCAI'">
          <div class="field-label is-normal">
            <label class="label">Auth URL *</label>
          </div>
          <div class="field-body">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Auth URL"
                required
                v-model="ProfileData.auth_url"
              />
            </div>
          </div>
        </div>

         <!-- SAPCAI client_id input  -->

        <div class="field is-horizontal"  v-if="platformSelected == 'SAPCAI'">
          <div class="field-label is-normal">
            <label class="label">Client ID *</label>
          </div>
          <div class="field-body">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Client ID"
                required
                v-model="ProfileData.client_id"
              />
            </div>
          </div>
        </div>

         <!-- SAPCAI client_secret input  -->

        <div class="field is-horizontal"  v-if="platformSelected == 'SAPCAI'">
          <div class="field-label is-normal">
            <label class="label">Client Secret *</label>
          </div>
          <div class="field-body">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Client Secret"
                required
                v-model="ProfileData.client_secret"
              />
            </div>
          </div>
        </div>

          <!-- SAPCAI request_token input  -->

         <div class="field is-horizontal"  v-if="platformSelected == 'SAPCAI'">
          <div class="field-label is-normal">
            <label class="label">Request Token *</label>
          </div>
          <div class="field-body">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Request Token"
                required
                v-model="ProfileData.request_token"
              />
            </div>
          </div>
        </div>

        <!-- Assistant ID input  -->
        <div class="field is-horizontal" v-if="platformSelected == 'AssistantV2'">
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
                v-model="ProfileData.assistant_id"
              />
            </div>
          </div>
        </div>

        <!-- API Key input -->
        <div class="field is-horizontal" v-if="platformSelected == 'AssistantV2'">
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
                v-model="ProfileData.apikey"
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
              <p-check color="danger" v-model="ProfileData.isPublic"></p-check>
            </div>
          </div>
        </div>

        <div class="level is-mobile">
          <div class="level-item">
            <router-link to="/dashboard">
              <base-button buttonTitle="Abbrechen" class="m-5"></base-button
            ></router-link>
            <div @click="updateBotEntry()">
              <base-button
                type="submit"
                buttonTitle="Aktualisieren"
                class="m-5"
              ></base-button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton";
import Croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";

export default {
  components: {
    BaseButton,
    croppa: Croppa.component,
  },
  data() {
    return {
      myCroppa: {},
      editedBotEntry: this.ProfileData,
      file: "",
      students: this.ProfileData.names,
      platforms: ["AssistantV2", "SAPCAI"],
      platformSelected: this.ProfileData.service,
    };
  },
  props: {
    ProfileData: {
      type: Object,
      required: true,
    },
  },
  created() {
    if (!this.ProfileData) this.$router.push({ name: "dashboard" });
    this.students = this.students.map(function(el) {
      return el.name;
    });
  },

  computed: {},

  methods: {
    serviceSelect(platform) {
      this.platformSelected = platform;
      console.log(this.platformSelected);
    },

    addInput() {
      this.students.push("");
    },
    handleFileChoose(file) {
      this.file = file;
    },

    async updateBotEntry() {
      const token = localStorage.getItem("accessToken");
      const parameterURL =
        "https://www.metathema.net/api/bots/service/" +
        this.editedBotEntry.service +
        "/id/" +
        this.editedBotEntry._id;
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + token);

      const namesArray = [];

      this.students.forEach((element) => {
        namesArray.push({ name: element });
      });

      Object.assign(this.editedBotEntry, { names: namesArray });

      let editedBotEntryForm = JSON.stringify(this.editedBotEntry);

      let formData = new FormData();
      formData.append("botEntry", editedBotEntryForm);

      this.myCroppa.generateBlob((blob) => {
        formData.append("profilePic", blob, this.ProfileData.image_path);
        const request = {
          method: "POST",
          headers: headers,
          //cache: "default",
          body: formData,
        };
        fetch(parameterURL, request)
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
