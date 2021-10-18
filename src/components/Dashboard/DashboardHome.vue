<template>
  <section>
    <div class="dashboardContainer has-background-primary has-text-white">
      <DashboardHeader
        :numOfBots="this.botProfileData.length"
        :username="username"
      />
      <div class="container is-fluid">
        <DashboardBotsContainer :addedbots="botProfileData" />
      </div>
    </div>
  </section>
</template>
<script>
import DashboardBotsContainer from "@/components/Dashboard/DashboardBotsContainer";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import jwt_decode from "jwt-decode";
export default {
  components: {
    DashboardBotsContainer,
    DashboardHeader,
  },
  data() {
    return {
      botProfileData: [],
      username: null,
    };
  },
  async created() {
    const token = localStorage.getItem("accessToken");
    this.username = jwt_decode(token).username;

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + token);

    let request = {
      method: "GET",
      headers: headers,
    };

    fetch("http://192.168.0.109:3000/api/bots/protected", request)
      .then(async (res) => {
        this.botProfileData = await res.json();

        if (!res.ok) {
          //get error message from body or default to response status
          const error = res.status;
          this.$router.push({ name: "login" });
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.dashboardContainer {
  min-height: calc(100vh - 90px);
}
</style>
