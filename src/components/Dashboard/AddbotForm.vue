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
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Group *</label>
          </div>
          <div class="field-body">
            <div class="field is-grouped">
              <div class="control">
                <div class="select">
                  <select
                    required
                    class="selectGroup"
                    v-model="newBotEntry.group"
                  >
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
                required
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
              <croppa
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
        <!-- <div class="field is-horizontal">
          <div class="field-label">
            <label for="" class="checkbox">
              Sichtbar
            </label>
          </div>
          <div class="field-body">
            <div class="control">
              <p-check color="danger" v-model="newBotEntry.isPublic"></p-check>
            </div>
          </div>
        </div> -->

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
import Croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";

import BaseButton from "@/components/UI/BaseButton";

export default {
  components: {
    BaseButton,
    croppa: Croppa.component,
  },
  data() {
    return {
      myCroppa: {},
      newBotEntry: {
        service: "AssistantV2",
        semester: "Sommersemester 21",
        term: "AIOT2",
      },
      file: "",
      students: [],
    };
  },
  methods: {
    addInput() {
      this.students.push("");
    },
    handleFileChoose(file) {
      this.file = file;
    },

    async createBotEntry() {
      const token = localStorage.getItem("accessToken");
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + token);

      //create student namesArray
      const namesArray = [];
      this.students.forEach((element) => {
        namesArray.push({ name: element });
      });
      Object.assign(this.newBotEntry, { names: namesArray });

      let newBotEntryForm = JSON.stringify(this.newBotEntry);

      let formData = new FormData();
      formData.append("botEntry", newBotEntryForm);

      this.myCroppa.generateBlob((blob) => {
        console.log(this.file.name)
        formData.append("profilePic", blob, this.file.name);
        const request = {
          method: "POST",
          headers: headers,
          body: formData,
        };
        fetch("http://192.168.0.109:3000/api/bots/", request)
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
