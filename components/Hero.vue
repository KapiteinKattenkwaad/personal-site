<template>
  <section class="py-lg-5 py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-7 my-auto">
            <div>
                <p class="hero-text">
                    <span>I’m Max, a Frontend Developer.&nbsp;
                     I’m a front-end web developer specializing in Javascript, HTML, and CSS/SCSS –
                      which basically means I craft websites, web pages, emails, and apps that are responsive on mobile and desktop.
                    </span>
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
   aspect-ratio:  1 / 1;
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