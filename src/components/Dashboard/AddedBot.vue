<template>
  <section>
    <div class="container has-background-white has-text-black">
      <!-- first row -->
      <div class="section px-2 pt-2 pb-0">
        <div class="level is-mobile">
          <div class="level-left is-family-primary">
            <div class="level-item">
              <p class="is-size-4">Die Klangschale</p>
            </div>
            <div class="level-item align-bottom"><p>Sichtbar</p></div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <font-awesome-icon
                icon="trash"
                size="1x"
                class="is-clickable"
              ></font-awesome-icon>
            </div>
            <div class="level-item">
              <font-awesome-icon
                icon="edit"
                size="1x"
                class="is-clickable"
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
              <p>bearbeitet: 2021-04-19 09:39:05</p>
            </div>
          </div>
        </div>
      </div>
      <!-- third row  -->
      <article class="media py-2">
        <figure class="media-left pl-3 mr-1">
          <p class="image is-128x128">
            <img
              src="@/assets/img/profilepictures/PR-Kooikerhondje.png"
              class=""
            />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <meta-tag title="Platform" addon="Watson Assistant V2"> </meta-tag>
            <meta-tag title="Term" addon="wintersemester20-21"> </meta-tag>
            <meta-tag title="Gruppe" addon="3"> </meta-tag>
          </div>
        </div>
      </article>

      <!-- fourth row  -->
      <div class="section px-3 py-0 is-family-secondary is-size-6">
        <div class="descriptionContainer">
          000Vis nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et
          velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram.
          Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip
          menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy
          eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur
          eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MetaTag from "@/components/UI/MetaTag";
export default {
  components: {
    MetaTag,
  },
};
</script>

<style>
.b {
  border: 1px solid red;
}

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
</style>
