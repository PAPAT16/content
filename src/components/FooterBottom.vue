<template>
  <footer >
  <img src="@/assets/assets/logo_white.svg" alt="">
  <div class="pro">
  <ul class="">
    <li><h6>Products</h6></li>
    <li><a href="#">Publish</a></li>
    <li><a href="#">Ai writer</a></li>
    <li><a href="#">Analyze</a></li>
    <li><a href="#">Engage</a></li>
    <li><a href="#">Discover</a></li>
    <li><a href="#">Plans & Pricing</a></li>
    <li><a href="#">Integration</a></li>
  </ul>

  <ul class="">
    <li><h6>Solutions</h6></li>
    <li><a href="#">Social media <br> management</a></li>
    <li><a href="#">Social media <br>customer service</a></li>
    <li><a href="#">Social media <br> analytics</a></li>
    <li><a href="#">Social media <br>competitor analytics</a></li>
    <li><a href="#">Content approval <br>workflow</a></li>
    <li><a href="#">Content planning</a></li>
    <li><a href="#">Content curation</a></li>
    <li><a href="#"> Content discovery</a></li>
    <li><a href="#">More</a></li>
  </ul>

  <ul class="">
    <li><h6>Resources</h6></li>
    <li><a href="#">Startup program</a></li>
    <li><a href="#">Affiliate program</a></li>
    <li><a href="#">Mobile apps</a></li>
    <li><a href="#">Chrome extension</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Careers</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Write for us</a></li>
    <li><a href="#">Glossary</a></li>
    <li><a href="#">Brand assets</a></li>
  </ul>
  <ul class="">
    <li><h6>Compare</h6></li>
    <li><a href="#">Hootsuite vs. <br> ContentStudio</a></li>
    <li><a href="#">Sprout Social vs. <br> ContentStudio</a></li>
    <li><a href="#">Buffer vs. <br> ContentStudio</a></li>
  </ul>

  <ul class="">
    <li><h6>Products</h6></li>
    <li><a href="#">Publish</a></li>
    <li><a href="#">Ai writer</a></li>
    <li><a href="#">Analyze</a></li>
    <li><a href="#">Engage</a></li>
    <li><a href="#">Discover</a></li>
    <li><a href="#">Plans & Pricing</a></li>
    <li><a href="#">Integration</a></li>
  </ul>

  <ul class="">
    <li><h6>Products</h6></li>
    <li><a href="#">Publish</a></li>
    <li><a href="#">Ai writer</a></li>
    <li><a href="#">Analyze</a></li>
    <li><a href="#">Engage</a></li>
    <li><a href="#">Discover</a></li>
    <li><a href="#">Plans & Pricing</a></li>
    <li><a href="#">Integration</a></li>
  </ul>
</div>
<h3 class="text-align-center">Free Tools</h3>
<div class=" comp">
  <p><a href="#">Instagram competitor analytics</a></p>
  <p><a href="#">Ai social caption generator</a></p>
  <p><a href="#">Tiktok downloader</a></p>
  <p><a href="#">Linkedin video downloader</a></p>
  <p><a href="#">Tiktok caption generator</a></p>
  <p><a href="#">Youtube title generator</a></p>
  <p><a href="#">Instagram  generator</a></p>
  <p><a href="#">Tweet generator</a></p>
  <p><a href="#">Facebook post  generator</a></p>
  <p><a href="#">Linkedin post generator</a></p>
  <p><a href="#">Instagram bio generator</a></p>
  <p><a href="#">Instagram hashtag generator</a></p>
  <p><a href="#">Tiktok bio generator</a></p>
  <p><a href="#">Twitter hashtag generator</a></p>
  <p><a href="#">Linkedin hashtag generator</a></p>
</div>
</footer>
<div class="twe">
<p>© 2024 ContentStudio. All rights reserved.</p>
<a href="#">Privacy</a>  |  <a href="#">Terms</a>  |  <a href="#">GDPR</a> | <a href="#">System status</a> | <a href="#">Security policy</a>
<img
        src="@/assets/assets/asset 5.png"
        alt=""
        style="border-radius: 40px; height: 30px;"
      />
      <img
        src="@/assets/assets/asset 6.png"
        alt=""
        style="border-radius: 40px; height: 30px"
      />
      <img
        src="@/assets/assets/asset 7.png"
        alt=""
        style="border-radius: 40px; height: 30px"
      />
      <img
        src="@/assets/assets/asset 9.png"
        alt=""
        style="border-radius: 40px; height: 30px"
      />
      <img
        src="@/assets/assets/asset 12.png"
        alt=""
        style="border-radius: 40px; height: 30px"
      />
      <img
        src="@/assets/assets/asset 11.png"
        alt=""
        style="border-radius: 40px; height: 30px"
      />
      <span style="margin-left: 300px">
      <img src="@/assets/assets/App Store.svg" alt="">
      <img src="@/assets/assets/Google Play.svg" alt="">
    </span>
</div>

</template>

<script>
export default {

}
</script>

<style>
footer{
  background: rgb(0,13,33);
  margin-top: 100px;
  color: white;
  padding: 40px;
}
footer ul{
  list-style-type: none;
  gap: 5cm;
  padding: 40px;
}
footer li a {
  text-decoration: none;
  color: rgb(135, 166, 211);
  font-size: 14px;
}
footer li a:hover {
  transition:  0.3s ease-in-out;
  color: white;
  font-weight:600;
  font-size: 14px;
}
.comp p{
  gap: 2cm;
  padding: 5px;
  display: inline-flex;
}
.comp p a{
  border: 1px solid rgb(135, 166, 211);;
  text-decoration: none;
  font-size: 13px;
  color: rgb(135, 166, 211);
  padding: 8px;
  border-radius: 10px;
}
.comp p a:hover{
  color: white;
  border: 1px solid white;
  font-weight: 600;
}
.twe{
text-align: left;
background: rgb(0,19,49);
padding-bottom: 50px;
padding: 20px;
color: white;
}
.twe  a{
  color: white;
}
.pro{
  display: inline-flex  
}
@media screen and (max-width:768px) {
  .pro{
    display: inline;
  }
}

</style>