<template>
  <section class="hero is-dark is-fullheight">
    <div class="hero-head">
      <Nav />
    </div>
    <div class="blank"></div>

    <div class="">
      <TeamProfile :profileData="this.teamData[0]" />
      <TeamProfile :profileData="this.teamData[1]" />
      <TeamProfile :profileData="this.teamData[2]" />
      <TeamProfile :profileData="this.teamData[3]" />
      <TeamProfile :profileData="this.teamData[4]" />
    </div>
  </section>
</template>

<script>
import Nav from "../components/Nav/Nav";
import TeamProfile from "@/components/Team/TeamProfile";

export default {
  components: {
    Nav,
    TeamProfile,
  },
  data() {
    return {
      teamData: [
        {
          name: "Klaus Gasteier",
          email: "kg@udk-berlin.de",
          imgUrl: "Klaus.jpeg",
          bio:
            "Klaus Gasteier wurde in Limburg an der Lahn geboren, absolvierte ein Ingenieursstudium an der BUGH Wuppertal und studierte als Postgraduierter Audiovisuelle Medien an der Kunsthochschule für Medien, Köln. Er war Mitbegründer der Kölner Designagentur cutup codes GmbH in den 90ern. Im Studiengang Visuelle Kommunikation am FB Design der FH Aachen vertrat er die Professur Medientheorie/Medienpraxis, danach wurde er im Studiengang Visuelle Kommunikation 2002 regulär als Professor für Interaktive Medien/Interaktionsdesign berufen. Seit 2008 lehrt er als Professor für Audiovisuelle Kommunikation/Neue Medien an der Fakultät Gestaltung im Studiengang Gesellschafts- und Wirtschaftskommunikation an der UdK Berlin.",
        },
        {
          name: "Alexej Bormatenkow",
          email: "alexejbormatenkow@udk-berlin.de",
          imgUrl: "Alexej.jpg",
          bio: "Wissenschaftlicher Mitarbeiter und Informatiker mit Marketingdiplom. Osziliert zwischen Hype, Gestaltung und technischer Umsetzung.",
        },
        {
          name: "Dominikus Mucha",
          email: "dom@udk-berlin.de",
          imgUrl: "Dom.jpeg",
          bio:
            "Much, Muchier, Mucha. Creative conceptionist, copywriter, building brands and teaching them to talk, teaching AI to impersonate objects - and students to do so, too. UdK Alumnus. Lecturer for verbal communication.",
        },
        {
          name: "Daniel Franke",
          email: "",
          imgUrl: "Daniel.png",
          bio: "Daniel Franke (*06.09.1982) ist ein Künstler, Kurator und künstlerischer Forscher. Er lebt und arbeitet derzeit in Berlin. Er studierte Visuelle Kommunikation und Medienkunst an der Universität der Künste Berlin, schloss 2009 seine Diplom bei Prof. Siegfried Zielinski ab und erlangte 2011 seinen Meisterschüler bei Prof. Joachim Sauter und Prof. Alberto DeCampo. Derzeit ist er Lehrender an der Universität der Künste Berlin sowie der Leupahana Universität Lüneburg und Doktorand an der Bauhaus-Universität in Weimar. Davor war er künstlerischer Mitarbeiter im Bereich Medienkunst an der Hochschule für Gestaltung, Karlsruhe (HfG). Er ist zudem einer der Gründer von LEAP (Lab for Electronic Arts and Performance), einem interdisziplinären Non-Profit-Projekt für aufstrebende, digitale Medienkunst und Performance, das den Dialog zwischen Kunst, Wissenschaft und Technologie zu initiieren versuchte. In seinen eigenen Arbeiter fordert er das Verständnis des Digitalen heraus mit dem Ziel es im Kontext einer physischen Wahrnehmung am Transformationsprozess des algorithmischen Denkens zum Realen zu untersuchen. Dabei transformiert er, aus der klassischen Animation, sowie von Simulations-Prozessen bekannte Praktiken in greifbare Formen in der “realen”, faktischen und körperlichen Welt, mit dem Ziel komplexe Zusammenhänge zu erforschen und zu visualisieren.",
        },
        {
          name: "Hyungjoong Kim",
          email: "hjkaddict@gmail.com",
          imgUrl: "Hyungjoong.png",
          bio:
            "Tutor, Generative Kunst, Absolvent in Kunst und Medien Udk",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
