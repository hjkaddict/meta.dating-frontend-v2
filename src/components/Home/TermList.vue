<template>
  <section class="hero is-dark p-0">
    <div class="hero-body">
      <div class="container">
        <div class="level">
          <div class="level-right">
            <ol class="is-fullwidth">
              <Term
                v-for="term in terms"
                :key="term.id"
                :term="term"
                @click.native="selected = term.id"
                :selection="selected == term.id"
                @this-term-id="emitTermId"
              />
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Term from "@/components/Home/Term";

export default {
  components: {
    Term,
  },
  emits: ["this-term"],
  data() {
    return {
      selected: undefined,
      terms: [
        {
          id: 0,
          // topic: "AIOT2 - Darkbot",
          topic: "AIOT2",
          term: "wintersemester20-21",
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
          // topic: "Artificial Intelligence X Internet of Things",
          topic: "AIOT",
          term: "sommersemester20",
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
          id: 2,
          topic: "Artificial Intelligence X Internet of Things",
          term: "wintersemester19-20",
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
          topic: "BrandBotLove",
          term: "sommersemester19",
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
          topic: "BrandBotLove",
          term: "wintersemester18-19",
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
          topic: "BOTIFY!",
          term: "sommersemester18",
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
      ],
    };
  },

  methods: {
    //find semester.id in this.semesters and emit to ProjectContainer
    emitTermId(id) {
      const selectedTerm = this.terms.find((term) => term.id === id);
      this.$emit("this-term", selectedTerm);
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
