<template>
  <div class="d-flex m-5 mx-5">
    <form>
      <div class="">
    <h5 class="fw-bold">Welcome Back</h5>
    <div class="soc">
      <img src="@/assets/assets/asset 5.png" alt="" />
      <img src="@/assets/assets/asset 7.png" alt="" />
      <img src="@/assets/assets/th.jpeg" alt="" />
    </div>
    <hr style="color: hsla(0, 1%, 81%, 0.5725490196)" />
  </div>
      <div class="emp">
        <input type="email" placeholder="Email Address" />
      </div>
      <div class="mt-4 emp">
        <input type="password" placeholder="Password" />
      </div>

      <div class="jus mt-3">
        <input type="checkbox" />
          <label>Remember Me</label>
          
        <a href="#">Forgot Password?</a>
      </div>

      <button class="sg">Sign In</button>
      <div class="mt-5">
        <p>Just approving content?<a href="#">Sign in without a password</a></p>
        <p>Don't have account? <a href="#">Sign up</a></p>
      </div>
    </form>
<img src="@/assets/assets/youtube-analytics.png" alt="" width="600px">
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.soc img {
  border: 0.5px solid hsla(0, 1%, 81%, 0.5725490196);
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 10px;
  margin: 10px;
}
form{
  font-size: 12px;
}
 .emp input {
  border: 1px solid hsla(0, 1%, 81%, 0.5725490196);
  width: 300px;
  height: 50px;
  padding: 20px;
  outline: none;
}
.sg{
  color: white;
  background: rgb(1,104,229);
  border: none;
  width: 300px;
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
}
.jus{
  padding: 20px;
}
</style>