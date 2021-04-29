<template>
  <section class="has-background-primary">
    <div class="">
      <Nav />
    </div>
    <!-- create blank DOM for heading space  -->
    <div class="blank"></div>
    <div
      class="formContainer container has-background-primary has-text-white p-5"
    >
      <form @submit.prevent="submitForm">
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
                <select>
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

        <!-- group number select -->
        <div class="field is-horizontal ">
          <div class="field-label is-normal">
            <label class="label">Group</label>
          </div>
          <div class="field-body">
            <div class="field is-grouped">
              <div class="control">
                <div class="select">
                  <select class="selectGroup">
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
              <input class="input" placeholder="Ricarda Schuster" />
              <input class="input" placeholder="Eldric Schwarz" />
              <input class="input" placeholder="Mina Dietrich" />
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
              <input class="input" type="text" placeholder="Name of the bot" />
            </div>
          </div>
        </div>

        <!-- bot picture  -->

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Bot Picture *</label>
          </div>
          <div class="field-body">
            <div class="control">
              <div class="file">
                <label class="file-label">
                  <input class="file-input" type="file" name="" />
                  <span class="file-cta">
                    <span class="file-label">
                      Choose a file (png)
                    </span>
                  </span>
                </label>
              </div>
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
              <input class="input" type="text" placeholder="Assistant ID" />
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
              <input class="input" type="text" placeholder="API Key" />
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
              <p-check color="danger"></p-check>
            </div>
          </div>
        </div>
      </form>

      <div class="level is-mobile">
        <div class="level-item">
          <base-button buttonTitle="Bot anlegen" class="m-5"></base-button>
          <base-button buttonTitle="Abbrechen" class="m-5" ></base-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Nav from "@/components/Nav/Nav";
import BaseButton from "@/components/UI/BaseButton";

export default {
  components: {
    Nav,
    BaseButton,
  },
  methods: {
    submitForm() {},
  },
};
</script>

<style scoped>
.blank {
  height: 90px;
}

.formContainer {
  min-height: calc(100vh - 90px);
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
