<template>
  <div>
    <div class="row">
      <div class="col-md-2"> 
        <router-link to="/" class="page-action btn btn-outline-primary">Geri Dön</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12  "> 

        <div class="card" >
            <div class="card-body">
              <h5 class="card-title">
                {{job[0].positionName}}
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">
                {{job[0].companyName}}
              </h6>
              <p class="card-text">
                {{job[0].address}}
              </p>
              <p class="card-text text-right">
                {{job[0].townName}}, {{job[0].cityName}}
              </p>
            </div>
          </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "JobList",
  data() {
    return {
      job: null,
      status: false
    };
  },
  created() {
    if (this.$route.params.id) {
      this.fetchData();
    }
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      const apiUrl = "http://localhost:3030/";

      axios
        .get(apiUrl + "src/data/jobDetail.json")
        .then(response => {
          const __self = this;
          this.status = true;

          this.job = response.data.filter((v, k) => {
            return v.jobId == __self.$route.params.id;
          });
        })
        .catch(e => {
          console.log(e);
          this.status = false;
        });
    }
  }
};
</script>
<style lang="scss">
  .page-action {
    margin: 0 0 20px;
  }

</style>
