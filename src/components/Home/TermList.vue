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
          term: "wintersemester20-21 / sommersemester21",
          platform: "Watson Assistant V2",
          lecturer: "Klaus Gasteier",
          mitarbeiter: [
            { name: "Alexej Bormatenkow" },
            { name: "Dominikus Muncha" },
            { name: "Daniel Franke" },
          ],
          tutor: [{ name: "Hyungjoong Kim" }],
          description:
            "<br>Artificial Intelligence X Internet of Things<br><br>ANY IMAGINABLE OBJECT TALKS.<br>Das Internet der Dinge. Lange Zeit Vision, heute komplexe Realität, die allzuoft auf ein vereinfachendes Bildnis reduziert wird: Objekte ’sprechen‘ mit dem Internet, mit einer Datenbank, dem Nutzer oder miteinander. Nehmen wir diesen Gedanken einmal wörtlich. Gehen wir davon aus, jedes beliebige Objekt liesse sich in ein „connected device“, ein „smart object“ oder „enchanted object“ verwandeln. Was würden diese Dinge sagen, wenn sie plötzlich sprechen könnten? Wie würden diese sich ausdrücken – und mit wem und worüber würden diese Dinge überhaupt reden? <br><br> ARTIFICIAL INTELLIGENCE OFF TOPIC. <br> In dem experimentellen Projektseminar meta.dating AIOT haben die Objekte nicht nur ein Wörtchen mitzureden, sondern spielen die Hauptrolle in einem Diskurs, in dem nicht weniger verhandelt wird als ihre eigene Identität. <br><br>Oder entdecken wir spielerisch eine subversive Ebene des Turing-Tests:<br>ALLES INTELLIGENT ODER TUT-SO?",
        },
        {
          id: 1,
          // topic: "Artificial Intelligence X Internet of Things",
          topic: "AIOT",
          term: "wintersemester19-20 / sommersemester20",
          platform: "Watson Assistant V2",
          lecturer: "Klaus Gasteier",
          mitarbeiter: [
            { name: "Alexej Bormatenkow" },
            { name: "Dominikus Muncha" },
            { name: "Daniel Franke" },
          ],
          tutor: [{ name: "Hyungjoong Kim" }],
          description:
            "<br>Artificial Intelligence X Internet of Things<br><br>ANY IMAGINABLE OBJECT TALKS.<br>Das Internet der Dinge. Lange Zeit Vision, heute komplexe Realität, die allzuoft auf ein vereinfachendes Bildnis reduziert wird: Objekte ’sprechen‘ mit dem Internet, mit einer Datenbank, dem Nutzer oder miteinander. Nehmen wir diesen Gedanken einmal wörtlich. Gehen wir davon aus, jedes beliebige Objekt liesse sich in ein „connected device“, ein „smart object“ oder „enchanted object“ verwandeln. Was würden diese Dinge sagen, wenn sie plötzlich sprechen könnten? Wie würden diese sich ausdrücken – und mit wem und worüber würden diese Dinge überhaupt reden? <br><br> ARTIFICIAL INTELLIGENCE OFF TOPIC. <br> In dem experimentellen Projektseminar meta.dating AIOT haben die Objekte nicht nur ein Wörtchen mitzureden, sondern spielen die Hauptrolle in einem Diskurs, in dem nicht weniger verhandelt wird als ihre eigene Identität. <br><br>Oder entdecken wir spielerisch eine subversive Ebene des Turing-Tests:<br>ALLES INTELLIGENT ODER TUT-SO?",
        },
        // {
        //   id: 3,
        //   topic: "BrandBotLove",
        //   term: "sommersemester19",
        //   platform: "Watson Assistant V2",
        //   lecturer: "Klaus Gasteier",
        //   mitarbeiter: ["Alexej Bormatenkow", "Dominikus Muncha"],
        //   tutor: ["Hyungjoong Kim"],
        //   description:
        //     "<br> Wenn Marken mitereinander reden, flirten, lieben, lachen… <br><br> Die Aufgabe: eine Marke der Wahl zum Sprechen zu bringen – und mit anderen Brand.Bots, die in dem Seminar entstehen, chatten zu lassen. <br><br> Die Studierenden mussten dazu eine Markenpersönlichkeit kreieren, die sich nicht nur ad hoc zu Alltagsthemen und unerwarteten Fragestellungen äußern kann, sondern in ihrem sprachlichen Ausdruck und Handlungen erlebbar wird. Das Spiel mit der jeweilige performativen Marken-Identität gestalteten die Studierenden mit unterschiedlicher Distanz sowie freien Zielsetzungen und Strategien – von trockenem Realismus, über Persiflage, bis zur subversiven Affirmation.",
        // },
        // {
        //   id: 4,
        //   topic: "BrandBotLove",
        //   term: "wintersemester18-19",
        //   platform: "Watson Assistant V2",
        //   lecturer: "Klaus Gasteier",
        //   mitarbeiter: ["Alexej Bormatenkow", "Dominikus Muncha"],
        //   tutor: ["Hyungjoong Kim"],
        //   description:
        //     "<br> Wenn Marken mitereinander reden, flirten, lieben, lachen… <br><br> Die Aufgabe: eine Marke der Wahl zum Sprechen zu bringen – und mit anderen Brand.Bots, die in dem Seminar entstehen, chatten zu lassen. <br><br> Die Studierenden mussten dazu eine Markenpersönlichkeit kreieren, die sich nicht nur ad hoc zu Alltagsthemen und unerwarteten Fragestellungen äußern kann, sondern in ihrem sprachlichen Ausdruck und Handlungen erlebbar wird. Das Spiel mit der jeweilige performativen Marken-Identität gestalteten die Studierenden mit unterschiedlicher Distanz sowie freien Zielsetzungen und Strategien – von trockenem Realismus, über Persiflage, bis zur subversiven Affirmation.",
        // },
        // {
        //   id: 5,
        //   topic: "BOTIFY!",
        //   term: "sommersemester18",
        //   platform: "Watson Assistant V2",
        //   lecturer: "Klaus Gasteier",
        //   mitarbeiter: ["Alexej Bormatenkow", "Dominikus Muncha"],
        //   tutor: ["Jan-Henrik Walter", "Phillip Rapp"],
        //   description:
        //     "<br>Maschinen als Menschen? Eine Annäherung an die Möglichkeiten des Natrual Language Understandings und KI-gestützter Kommuniation. <br><br> Lassen sich die unterschiedlichen Plattformen zur Gestaltung von Service-(Chat)Bots als Erzähl-Medium nutzen? Welche Formen der Autonarration ermöglichen sie und wie lässt sich darüber Charakter sprachlich abbilden? Die Seminar-Teilnehmer modellierten Bot Prototypen in Recast.ai (heute SAP Conversational AI), Dialogflow (google) oder IBM Watson Assistant und testeten sie an unterschiedlichen Domänen aus Alltag und Flirt.",
        // },
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
