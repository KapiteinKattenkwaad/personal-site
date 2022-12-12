<template>
  <section class="py-lg-5 py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-7 my-auto">
            <div>
                <p class="hero-text">
                    <span>I’m Max, a Frontend Developer.&nbsp;Always interested in Graphics, I started from a little coding knowledge, went on to designing stuff and later shifted to Frontend Development. Now, I'm a full-time Vue.js Developer.&nbsp;</span>
                </p>
            </div>
          </div>
          <div class="col-md-5">
              <img src="~/assets/img/profile-pic.jpeg" alt="Max Stouten Web Developer" class="img-fluid">
          </div>
        </div>
      </div>
  </section>
</template>

<style scoped>

 img {
   border-radius: 5px;
   position: relative;
   display: block;
 }

 img::after {
   content: '';
   position: absolute;
   top: -20px;
   left: -20px;
   width:100%;
   height:100%;
   display: block;
   background-color: yellow;
   border-radius: 5px;

 }


</style>