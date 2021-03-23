<template>
      <div>
         <div class="bd_x">
           <nav class="nav" id="nav">
              <!--harmbugger-->
               <div class="bars" @click="showText = !showText" id="openNav">
                    <div class="containerrr" >
                         <div class="bar1"></div>
                         <div class="bar2"></div>
                         <div class="bar3"></div>
                    </div>
                </div>
              <!--end of harmbugger-->
                <div class="" id="container1">
                    
                    <div class="flexb" id="flexb">
                         <router-link to="/" text=""><span class="comex">Come</span>Home</router-link>
                    </div>
                <!--div class="flexc flexc1 hidden-md-only" id="flexc" v-if="!showText"-->
                  <div class="flexc flexc1" id="flexc" v-if="!showText">
                  <div class="nav-list">
                    <li><router-link to="/" text="">Home</router-link></li>
                    <li><router-link to="/about" text="">About</router-link></li>   
                    
                    <li>
                      <b-nav-item-dropdown text="Resources" left>
                        <b-dropdown-item><router-link to="/resource" text="/resources">Resources</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/teaching" text="/teaching">POS Teachings</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/apologetics" text="/apologetic">Apologetics</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/reading" text="/reading">Daily Bible Planner</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/music" text="/music">Listen to Gospel Songs</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/article" text="/article">Articles</router-link></b-dropdown-item>
                      </b-nav-item-dropdown>
                    </li>
                    <li>
                      <b-nav-item-dropdown text="Events" left>
                        <b-dropdown-item><router-link to="/testimony" text="">Testimony</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/help" text="">Need Help</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/accept" text="">Accept</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/event" text="">Events</router-link></b-dropdown-item>
                      </b-nav-item-dropdown>
                     </li>
                     <li><router-link to="/contact" role="button" class="btn btn-primary text-white contactt">Contact Us</router-link></li>
                     </div>
                    </div>
                    <!--second nav start-->
                    <div class="flexc flexc2" id="flexc2" v-if="showText">
                    <div class="nav-list">
                    <li><router-link to="/" text="">Home</router-link></li>
                    <li><router-link to="/about" text="">About</router-link></li>   
                    
                    <li>
                      <b-nav-item-dropdown text="Resources" left>
                        <b-dropdown-item><router-link to="/resource" text="/resources">Resources</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/teaching" text="/teaching">POS Teachings</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/apologetics" text="/apologetic">Apologetics</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/reading" text="/reading">Daily Bible Planner</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/music" text="/music">Listen to Gospel Songs</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/article" text="/article">Articles</router-link></b-dropdown-item>
                      </b-nav-item-dropdown>
                    </li>
                    <li>
                      <b-nav-item-dropdown text="Events" left>
                        <b-dropdown-item><router-link to="/testimony" text="">Testimony</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/help" text="">Need Help</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/accept" text="">Accept</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/event" text="">Events</router-link></b-dropdown-item>
                      </b-nav-item-dropdown>
                     </li>
                     <li><router-link to="/contact" role="button" class="btn btn-primary text-white contactt">Contact Us</router-link></li>
                     </div>
                    </div>
                    <!--end of nav2-->
                </div>
            </nav>
        </div>
    </div> 
</template>

<script>
  export default {
    data: () => {
      return {
         showText: true
      }
    },

//copied from example
    /*props: {
            source: String,
        },
        data: () => ({
            drawer: null,
    }),
    created () {
            this.$vuetify.theme.dark = true
    },*/

    methods: {
        //......methods of your component
      },

        mounted() {
          //nav bar slidder on mobile view
            /*let y;
            y = document.getElementById("flexc");

            function openNav() {
                if(y.style.display === "block"){
                    y.style.display = "none";
                }else{
                    y.style.display = "block";
                }
            }*/
        
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
        
        /*function myFunction(x) {
          x.classList.toggle("change");
        }*/
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.flexb a{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
}

.flexb a:hover{
  text-decoration: none;
}

.comex{
  color: red;
}

.nav{
  /*border: 2px solid red;*/
  background: #ffffff;
  position: fixed;
  top: 0;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  display: block;
  transition: top 0.7s;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  z-index: 1;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  }

.nav-contact{
  border-radius: 10px;
}

.nav-list{
  display: flex;
  align-items: center;
}

.nav-list li
{
  list-style-type: none;
  margin-left: 20px;
}

.nav-list li a, 
.nav-list2 li a{
  font-weight: normal;
}

#dpd_x2{
  padding-right: 10px;
}

#container1{
  display: flex;
  justify-content: space-between;
  padding: 8px;
  margin: auto;
  width: 92%;
}

.g_overlay{
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
}

.overlay{
  position: absolute;
  width: 100%;
  top: 350px;
}

#overlay_text{
 height: auto;
 padding: 10px 0 20px 0;
 background: rgba(0, 0, 0, 0.46);
 background-blend-mode: soft-light;
 border-radius: 5px;
 font-family: 'Poppins';
}

/*mobile nav transition style*/
.bars{
  display: none;
  position: absolute;
  top: 5px;
  right: 75px;
}

.containerrr {
  display: inline-block;
  cursor: pointer;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

/*section1 start here*/

.contactt{
  /*border: 2px solid red;*/
  padding: 5px 10px 5px 10px;
}

@media screen and (max-width: 768px){
  /*nav start here*/
  .bars{
      display: block;
  }

  .header{
    background-size: cover;
    background-position: center;
  }

  .flexc1{
    /*display: none;*/
    width: 100%;
    height: auto;
    background: purple;
    padding-top: 20px;
    padding-bottom: 20px;
    position: absolute;
    top: 48px;
    left: 0px;
    z-index: 1;
    transition: 0.5s;
  }

.flexc2{
    display: none;
    width: 100%;
    height: auto;
    background: purple;
    padding-top: 20px;
    padding-bottom: 20px;
    position: absolute;
    top: 48px;
    left: 0px;
    z-index: 1;
    transition: 0.5s;
  }


  .nav-list{
    display: block;
    align-items: center;
    width: 85%;
    margin: auto;
  }

  .nav li{
    list-style-type: none; 
    margin-bottom: 30px; 
    margin-left: 0;
  }

  .resource-menu li,
    .event-menu li{
    margin-left: 7px;
  }

  .flexc a{
    color: #ffffff;
  }

  .nav-list li{
    list-style-type: none;
    margin-left: 10px;
  }

  #bg-img2a, 
  #bg-img2b, 
  #bg-img2c,
  #bg-img2d{
    display: none;
  }

  /*section two starts here*/
  .c_home{
    display: block;
  }

  .flex2{
    width: 100%;
    height: 500px;
    display: flex;
    flex-flow: column;
  }

  .ml-4-about{
    margin-right: 0px;
  }

  .accept-ptag{
    margin-left: 20px;
  }

  .flex2a{
    display: none;
  }

  .flex2b{
    height: 100%;
    margin-bottom: 30px;
  }

  #flex4, #flex5{
      margin-bottom: 30px;     
  }

  #accept>div{
  width: 100%; 
  border-radius: 5px;
  margin: auto;
  }

}
</style>