<template>
  <div>{{loginMsg}}</div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("login Enter");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("login Update");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("login Leave");
    next();
  },
  name: "Login",
  data (){
    return {
      loginMsg: '这是一个登录页面'
    }
  }
};
</script>