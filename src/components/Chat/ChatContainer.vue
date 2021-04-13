<template>
  <div class="container">
    <div class="chat1">
      <div id="message-right" class="column is-offset-6">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <div class="">
                <p class="has-text-right has-text-white">
                  <small>PR-Kooikerhondje</small>
                </p>
              </div>
              <div class="box p-2">
                <p class="has-text-right">
                  <strong>
                    Hi How are you?
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div class="media-right">
            <figure class="media-right ml-2">
              <p class="image is-64x64">
                <img
                  src="@/assets/img/profilepictures/PR-Kooikerhondje.png"
                  class="is-rounded"
                />
              </p>
            </figure>
          </div>
        </article>
      </div>
    </div>

    <div class="chat2">
      <div id="message-left" class="column is-6">
        <article class="media">
          <div class="media-left">
            <figure class="media-left mr-2">
              <p class="image is-64x64">
                <img
                  src="@/assets/img/profilepictures/PR-Kooikerhondje.png"
                  class="is-rounded"
                />
              </p>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <div class="">
                <p class="has-text-left has-text-white">
                  <small>Die Klangschale</small>
                </p>
              </div>
              <div class="box">
                <p class="has-text-left">
                  <strong>
                    Thanks, how are you?
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.container {
  height: 100%;
  border: 1px solid red;
  overflow: auto;
  display: flex; /* establish flex container */
  flex-direction: column; /* align children vertically */
}

.chat1:first-child {
  margin-top: auto;
}

.chat1,
.chat2 {
  border: 1px solid black;
}
</style>
