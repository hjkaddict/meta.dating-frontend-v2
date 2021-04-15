<template>
  <section class="hero is-dark p-0">
    <div class="hero-body">
      <div class="container">
        <div class="level">
          <div class="level-left"></div>
          <div class="level-right">
            <!-- Click add class one on list and remove others -->
            <!-- https://jsfiddle.net/Herteby/5amw1mfn/ -->
            <ol class="is-fullwidth">
              <Semester
                v-for="semester in semesters"
                :key="semester.id"
                :semester="semester"
                :selection="selected == semester.id"
                @click.native="selected = semester.id"
                @this-semester="emitSemester"
              >
              </Semester>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Semester from "./Semester.vue";

export default {
  components: {
    Semester,
  },
  emits: ["semester-info"],
  data() {
    return {
      selected: undefined,
      semesters: [
        {
          id: 0,
          title: "AIOT#2 - Darkbot",
          term: "wintersemester2020-21",
          platform: "Watson Assistant V2",
          lecturer: "Klaus Gasteier",
          mitarbeiter: [
            "Alexej Bormatenkow",
            "Dominikus Muncha",
            "Daniel Franke",
          ],
          tutor: ["Hyungjoong Kim"],
          description:
            "Vis nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex.",
        },
        {
          id: 1,
          title: "Artificial Intelligence X Internet of Things",
          term: "sommersemester2020",
          platform: "Watson Assistant V2",
          lecturer: "Klaus Gasteier",
          mitarbeiter: [
            "Alexej Bormatenkow",
            "Dominikus Muncha",
            "Daniel Franke",
          ],
          description:
            "Vis nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex.",
        },
        {
          id: 2,
          title: "Artificial Intelligence X Internet of Things",
          term: "wintersemester2019-20",
          platform: "Watson Assistant V2",
          lecturer: "Klaus Gasteier",
          mitarbeiter: [
            "Alexej Bormatenkow",
            "Dominikus Muncha",
            "Daniel Franke",
          ],
          tutor: ["Hyungjoong Kim"],
          description:
            "Vis nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex.",
        },
        {
          id: 3,
          title: "BrandBotLove",
          term: "sommersemester2019",
          platform: "Watson Assistant V2",
          lecturer: "Klaus Gasteier",
          mitarbeiter: [
            "Alexej Bormatenkow",
            "Dominikus Muncha",
            "Daniel Franke",
          ],
          tutor: ["Hyungjoong Kim"],
          description:
            "1111Vis nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex.",
        },
        {
          id: 4,
          title: "BrandBotLove",
          term: "wintersemester2018-19",
          platform: "Watson Assistant V2",
          lecturer: "Klaus Gasteier",
          mitarbeiter: [
            "Alexej Bormatenkow",
            "Dominikus Muncha",
            "Daniel Franke",
          ],
          tutor: ["Hyungjoong Kim"],
          description:
            "Vis nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex.",
        },
        {
          id: 5,
          title: "BOTIFY!",
          term: "sommersemester2018",
          platform: "Watson Assistant V2",
          lecturer: "Klaus Gasteier",
          mitarbeiter: ["Alexej Bormatenkow", "Dominikus Muncha", "Daniel Franke"],
          tutor: ["Hyungjoong Kim"],
          description:
            "Vis nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex.",
        },
      ],
    };
  },

  methods: {
    emitSemester(id) {
      const selectedSemester = this.semesters.find(
        (semester) => semester.id === id
      );
      this.$emit("semester-info", selectedSemester);
    },
  },
};
</script>

<style scoped>
.level-right {
  width: 100%;
}

.is-fullwidth {
  width: 100%;
}
</style>
