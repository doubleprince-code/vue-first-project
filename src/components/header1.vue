<template>
    <div>    
     <div class="bd_x" id="">
      <!--header starts here-->
      <div class="section1" id="section1">
        <header class="header" id="header">
        <div class="bond"><!--anchor for all sliders-->
        <div class="mySlide_j" id="head_aa" ><!--slider effect div 1-->

            <div class="mySlidder" id="firstSlidder">
                <!--firstslider -->
                <div class="bg-img1" id="bg-img1">
                    <!--background image 1-->
                </div>
            </div>
            <!--end of firstslider-->

            <div class="mySlidder" id="secondSlidder">
                <!--second slidder-->
                <div class="bg-img2" id="bg-img2a">
                </div>
                <div class="bg-img2" id="bg-img2b">
                </div>
                <div class="bg-img2" id="bg-img2c">
                </div>
                <div class="bg-img2" id="bg-img2d">
                </div>
            </div>
            <!--end of second slidder-->
            <br>

            <div class="dot1">
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
        </div>
        <div class="mySlide_j myJ-slider1" id="head_ab"><!--slider effect div 2-->
            <div>
                <div class="inner-img">
                    <div></div>
                </div><!--bg img-->
            </div>
        </div>

        <div class="mySlide_j myJ-slider2" id="head_ac"><!--slider effect div 3-->
                <div>
                    <div class="inner-img2">
                        <div></div>
                    </div><!--bg img-->
                </div>
        </div>
        
        <br>
        <div class="dot1"><!--slideshow container starts here -->
                <span class="dot2">1</span> 
                <span class="dot2">2</span> 
                <span class="dot2">3</span>
        </div>
        </div><!--end of general slider effect-->
        </header>
        <div class="g_overlay">
            <!--overlay starts here-->
            <div class="rgba1">
                <nav class="nav" id="nav">
                    <div class="" id="container1">
                        <div class="flexb" id="flexb">
                            <a href="/" text-><span class="comex">Come</span>Home</a>
                        </div>
                        <div class="flexc" id="flexc">
                            <ul class="nav-list">
                                <li class="nav-item active text-success">
                                        <a href="/" >Home</a>
                                </li>
                                <li class="nav-item active text-success">
                                        <a href="/about" >About</a>
                                </li>
                                <li class="dropdown font-weight-bold mr-4">
                                        <a class="dropdown-toggle" data-toggle="dropdown" href="/resources">Resources <span class="caret"></span></a>
                                    <ul class="dropdown-menu bg-dark resource-menu" id="dpd_x2">
                                        <li  id="divider1">
                                                <a href="/resources/audiosermon" class="text-white">Sermons</a>
                                        </li>
                                        <li class="divider"></li>
                                        <hr>
                                        <li  id="divider1">
                                                <a href="/resources/videosermon" class="text-white">Video Teachings</a>
                                        </li>
                                        <hr>
                                        <li  id="divider1"><a href="/resources/teachings" class="text-white">POS Teachings</a>
                                        </li>
                                        <hr>
                                        <li  id="divider1"><a href="/resources/apologetics" class="text-white">Apologetics</a>
                                        </li>
                                        <hr>
                                        <li  id="divider1"><a href="/resources/biblereading" class="text-white">Daily Bible Planner</a>
                                        </li>
                                        <hr>
                                        <li  id="divider1"><a href="/resources/music" class="text-white">Listen to Gospel Songs</a>
                                        </li>
                                        <hr>
                                        <li  id="divider1"><a href="/article" class="text-white">Articles</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown font-weight-bold mr-4">
                                        <a class="dropdown-toggle" data-toggle="dropdown"
                                        href="#">Events <span class="caret"></span></a>
                                    <ul class="dropdown-menu bg-dark event-menu" id="dpd_x2">
                                        <li class="" id="divider1">
                                                <a href="/testimony" target="_blank" class="text-white">Testimony</a></li>
                                        <li class="divider"></li>
                                        <hr>
                                        <li class="mb-2" id="divider1">
                                                <a href="/need" target="_blank" class="text-white">Need Help</a></li>
                                        <hr>
                                        <li class="mb-2" id="divider1">
                                                <a href="/accept" target="_blank" class="text-white">Accept</a></li>
                                        <hr>
                                        <li class="mb-2" id="divider1">
                                                <a href="/events" target="_blank" class="text-white">Events</a></li>
                                        <hr>
                                        <!--li class="mb-2" id="divider1">
                                                <a href="/article" target="_blank" class="text-white">Articles</a></li-->
                                    </ul>
                                </li>
                                <li class="nav-item" style="position: relative; bottom: 0px;">
                                        <a href="/contact" target="_blank" role="button" class="btn btn-primary">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="bars" onclick=openNav(); id="openNav">
                        <!--navbar transition-->
                        <div class="containerrr" onclick="myFunction(this)">
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                            <div class="bar3"></div>
                        </div>
                    </div>
                </nav>
            <center>
                    <div class="overlay" id="overlay">
                        <h2 class="text-white" id="overlay_text">Jesus Can Save You <span class="typed-words"></span></h2>
                        <a href="/let-us-talk" role="button" class="btn btn-primary font-weight-bold wow fadeInUp"
                            id="tak2">Let's
                            Talk</a>
                </div>
            </center>
            </div>
        </div>
       </div>
      </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
        //title: 'Travel Treasure',
    }
  },

      mounted() {
      //slide transition for div_xx
        /*let slideIndex = 0;
        showSlidess();
        
        function showSlidess() {
            let i;
            let slides = document.getElementsByClassName("mySlidder");
            let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
            setTimeout(showSlidess, 5000); // Change image every 5 seconds
        }*/

    //general slider 
    /*let slideIndext = 0;
    showSlidexx();
        
    function showSlidexx() {
        let i;
        let slides = document.getElementsByClassName("mySlide_j");
        let dots = document.getElementsByClassName("dot2");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndext++;
        if (slideIndext > slides.length) {slideIndext = 1}    
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
        }
        slides[slideIndext-1].style.display = "block";  
        dots[slideIndext-1].className += " active";
        setTimeout(showSlidexx, 10000); // Change image every 5 seconds
    }*/

  // typing script
     let typed = new Typed('.typed-text', {
        strings: ["Completely", "Wholly", "Freely"," And Give You a Renewed Life"],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 4000,
        startDelay: 1000,
        loop: true,
        showCursor: true
     });

     //jquery added
    hp(document).ready(function(){
      hp("#overlay").addClass("animated zoomInLeft");
    }); 

    $(document).ready(function(){
      $(".bg-img1").addClass("animated zoomInBackground");
    });

    $(document).ready(function(){
      $(".bg-img1").addClass("animated zoomInBackground");

      $(".bg-img2").addClass("animated zoomIn");
    
      $(".inner-img").addClass("animated flipInX");
    
      $(".inner-img2").addClass("animated zoomIn");

      //mobile nav transition
        $(".bars").click(function(){
          $(".flexc, .about-header").addClass("animated rotateIn");
        });      
    });

//nav bar slidder on mobile view
        let x ;
        x = document.getElementById("flexc");

        function openNav(){
            if(x.style.display === "block"){
                x.style.display = "none";
            }else{
                x.style.display = "block";
            }
        }
    
  //nav slidder effect
    let prevScrollpos = window.pageYOffset;
       window.onscroll = function() {
       let currentScrollPos = window.pageYOffset;
         if (prevScrollpos > currentScrollPos) {
           document.getElementById("nav").style.top = "0";
         } else {
           document.getElementById("nav").style.top = "-100px";
         }
         prevScrollpos = currentScrollPos;
       }
  
    //nav hamburger transition effect
    function myFunction(x) {
       x.classList.toggle("change");
    }

    },
    methods: {
      //......methods of your component
    }
   }

</script>

<style scoped>

</style>