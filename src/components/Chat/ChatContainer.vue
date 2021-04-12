<template>
  <div class="container">
    <div class="chat1">
      <div id="message-right" class="column is-offset-6">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <div class="mb-0">
                <p class="has-text-right">
                  <small>PR-doggo</small>
                </p>
              </div>
              <div class="box mb-4">
                <p class="has-text-left">
                  <strong>
                    layout fuck
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div class="media-right">
            <figure class="media-right ml-2">
              <p class="image is-64x64">
                <img class="is-rounded" />
              </p>
            </figure>
          </div>
        </article>
      </div>
    </div>
    <div class="chat2">chat2 first</div>
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
}

.chat1,
.chat2 {
  border: 1px solid red;
}
</style>
