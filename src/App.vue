<template>
  <div id="app" class="container">
    <div class="row"> 
      <div class="col-md-12"> 
        <h1 class="page-title">{{ msg }}</h1>
      </div>
    </div>
    <hr>
     
    <router-view></router-view>
  
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Our Job App"
    };
  }
};
</script>
<style lang="scss">
  @import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');


  a,
  a:hover {
    text-decoration:none;
  }

  .page-title {
    margin: 20px 0;
  }

</style>
