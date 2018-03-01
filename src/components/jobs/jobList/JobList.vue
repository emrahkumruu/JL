<template>
  <div>
    <div class="row">
      <div class="col-md-12"> 
        <div class="job-search">
            <input class="form-control" type="text" placeholder="Filter by Poistion Name or Location" v-model="keywords">
        </div>
      </div>
    </div>
    <div class="row job-list">
        <div class="col-md-12">
          <ul class="list-group">
            <li class="list-group-item job-list-item" v-for="job in search(keywords)"  v-if="status">
              <router-link :to="{ name: 'JobDetail', params: { id: job.jobId }}"> 
                  <div class="job-name"> 
                      {{job.positionName}}
                  </div>
                  <div class="job-company-name"> 
                      {{job.companyName}}
                  </div>
                  <div class="job-location"> 
                      {{job.cityName}}
                  </div>
              </router-link>
            </li>
          </ul>
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
      jobs: null,
      status: false,
      keywords: null
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      const apiUrl = "http://localhost:3030/";
      axios
        .get(apiUrl + "src/data/jobs.json")
        .then(response => {
          this.status = true;
          this.jobs = response.data;
        })
        .catch(e => {
          console.log(e);
          this.status = false;
        });
    },
    search(keywords){
      return this.jobs.filter(function(v) {
        if (keywords){ 
            return v.positionName.toLowerCase().indexOf(keywords) > -1  || v.cityName.toLowerCase().indexOf(keywords) > -1;
        }else{
            return v;
        }
     });
    }
  }
};
</script>
<style lang="scss" scoped>
  .job-list {

    margin-top:20px;

    &-item {
      a {
          width: 100%;
          display: inline-block;
        
        &:hover {
          text-decoration:none;
        }

      }
      .job-name {
          display: inline-block;
          margin-bottom: 5px;

      }
      .job-company-name {
           text-transform: uppercase;
          
      }
      .job-location {
          text-align:right;
      }
    }
  }
</style>
