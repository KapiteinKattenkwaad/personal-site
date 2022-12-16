<template>
  <section class="py-lg-5 py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-7 my-auto">
            <div>
                <p class="hero-text">
                    <span>
                      Hi, my name is Max and I am a frontend web developer
                      with a focus on Javascript, HTML, and CSS/SCSS.
<!--                      With my expertise in these technologies, I am able to create websites,-->
<!--                      web pages, emails, and apps that are both visually appealing and responsive on mobile and desktop devices.-->
                      My goal is to craft user-facing web experiences that are intuitive, easy to use, and
                      accessible.
                    </span>
                </p>
            </div>
          </div>
          <div class="col-md-5">
            <div class="img-wrapper my-4 my-md-0 ms-md-auto">
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
   max-height: 360px;
 }

 .img-wrapper {
   position: relative;
   max-height: 360px;
   width: fit-content;

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