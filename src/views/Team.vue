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
          bio: "",
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
