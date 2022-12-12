<template>
  <section class="py-lg-5 py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-7 my-auto">
            <div>
                <p class="hero-text">
                    <span>I’m Max,
                      a front-end web developer specializing in Javascript, HTML, and CSS/SCSS –
                      which basically means I craft websites, web pages, emails, and apps that are responsive on mobile and desktop.
                    </span>
                </p>
            </div>
          </div>
          <div class="col-md-5">
            <div class="img-wrapper">
              <img src="~/assets/img/profile-pic.jpeg" alt="Max Stouten Web Developer" class="img-fluid">
            </div>
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

 .img-wrapper {
   position: relative;

 }

 .img-wrapper::after {
   content: "";
   position: absolute;
   top: -10px;
   left: -10px;
   z-index: -1;
   width: 100%;
   height: 100%;
   background-image: linear-gradient(120deg, #eaee44, #33d0ff);
   opacity: .7;
   border-radius: 5px;
   transition: all .3s ease-in;
 }

 .img-wrapper:hover::after {
   top: 10px;
   left: 10px;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
 }


</style>