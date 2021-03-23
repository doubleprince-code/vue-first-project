<template>
    <v-app>
        <section class="section2" id="section2">
            <v-container id="about_1">
                <h5 class="text-primary mt-4 ml-3 font-weight-bold pt-4 text-left">ABOUT THE PROJECT</h5>
                <div class="row">
                    <div class="col-md-7 text-left">
                      <p class="font-weight-bold ml-3">JESUS Mission & Values</p>
                      <p class="mb-4 ml-3">He desire for you to know Him and accept Him into Your life.</p>
                      <p class="ml-3">We want to give everyone an oprtunity to grow their spiritually with the
                        resources available. We should love to be committed to Him as you take a step.
                     </p>
                   </div>
                    <div class="col-md-5">
                            <div class="text-white" id="msnv_2">
                                <p>JESUS Mission & Values</p>
                                <p class="mb-4">He desire for you to know Him and accept Him into Your life.</p>
                                <p>We want to give everyone an oprtunity to grow their spiritually with the
                                  resources available. We should love to be committed to Him as you take a step.
                                </p>
                            </div>
                        <p class="text-primary mr-3" style="float: right;"><span class="text-danger">Come</span>Home</p>
                    </div>
                </div>
             </v-container>

             <!--board memebers starts here-->
            <v-container id="team_x1">
                <div class="team_x2 ml-4">
                    <h4 class="text-primary font-weight-bold">Board Of Trustees</h4>
                    <p class="font-weight-bold">Members</p>
                </div>
                <div id="team" class="d-flex justify-content-between">
                    <div class="team_1">
                        <div>
                            <center>
                            <div class="team_bg1"></div>
                            </center>
                            <p class="font-weight-bold text-center">Mr.Gideon Mojolaoluwa</p>
                            <p class="text-center text-white bg-primary p-1" style="width: 50%; margin: auto; border-radius: 7px; position: relative; top: 0px;">Founder</p>
                            <p class="text-center">A seasoned teacher of God's word. He ministers on
                            several online platforms. He is a software Engineer with
                            interest in Artificial Inteligence.
                            </p>
                        </div>
                    </div>
                    <div class="team_2">
                        <div>
                            <center>
                            <div class="team_bg2"></div>
                            </center>
                            <p class="font-weight-bold text-center">Mr.Gideon Mojolaoluwa</p>
                            <p class="text-center text-white bg-primary p-1" style="width: 50%; margin: auto; border-radius: 7px; position:relative; top: 0px;">Founder</p>
                            <p class="text-center">A seasoned teacher of God's word. He ministers on
                            several online platforms. He is a software Engineer with
                            interest in Artificial Inteligence.
                            </p>
                        </div>
                    </div>
                    <div class="team_3">
                        <div>
                        <center>
                            <div class="team_bg3"></div>
                        </center>
                        <p class="font-weight-bold text-center">Mr.Gideon Mojolaoluwa</p>
                        <p class="text-center text-white bg-primary p-1" style="width: 50%; margin: auto; border-radius: 7px; position:relative; top: 0px;">Founder</p>
                        <p class="text-center">A seasoned teacher of God's word. He ministers on
                            several online platforms. He is a software Engineer with
                            interest in Artificial Inteligence.
                        </p>
                        </div>
                    </div>
                </div>
            </v-container>

            <!--team members starts here-->
            <v-container id="team_x2">
                <div class="team_x2 ml-4">
                   <h4 class="text-primary font-weight-bold">TEAM</h4>
                   <p class="font-weight-bold">Team Members</p>
                </div>
                <div id="team2">
                    <div class="team_2">
                        <div>
                            <center>
                            <div class="team_bg1"></div>
                            </center>
                            <p class="font-weight-bold text-center">Mr.Gideon Mojolaoluwa</p>
                            <p class="text-center text-white bg-primary p-1" style="width: 50%; margin: auto; border-radius: 7px; position:relative; top: 0px;">Founder</p>
                            <p class="text-center">A seasoned teacher of God's word. He ministers on
                            several online platforms. He is a software Engineer with
                            interest in Artificial Inteligence.
                            </p>
                        </div>
                    </div>
                    <div class="team_2">
                        <div>
                        <center>
                            <div class="team_bg2"></div>
                            </center>
                            <p class="font-weight-bold text-center">Mr.Gideon Mojolaoluwa</p>
                            <p class="text-center text-white bg-primary p-1" style="width: 50%; margin: auto; border-radius: 7px; position:relative; top: 0px;">Founder</p>
                        <p class="text-center">A seasoned teacher of God's word. He ministers on
                            several online platforms. He is a software Engineer with
                            interest in Artificial Inteligence.
                        </p>
                    </div>
                    </div>
                    <div class="team_3">
                    <div>
                        <center>
                            <div class="team_bg3"></div>
                        </center>
                        <p class="font-weight-bold text-center">Mr.Gideon Mojolaoluwa</p>
                        <p class="text-center text-white bg-primary p-1" style="width: 50%; margin: auto; border-radius: 7px; position:relative; top: 0px;">Founder</p>
                        <p class="text-center">A seasoned teacher of God's word. He ministers on
                        several online platforms. He is a software Engineer with
                        interest in Artificial Inteligence.
                        </p>
                        </div>
                    </div>
                </div>
            </v-container>
            <div class="row py-4 help-btn">
                <a class="btn btn-primary mx-auto text-white" href="/need">Need Help</a>
            </div>
        </section>
        <my-footer2></my-footer2>
    </v-app>
</template>

<script>
import Footer2 from '../footers/footer2'

     export default {
        components: {
          'my-footer2':Footer2
        },

        data () {
            return {
                //title: 'Travel Treasure',
            }
        },

        mounted() {

        },

        methods: {
            //......methods of your component
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --uniform-bg: #E5EEF6;
    --gen-blue: #0085FF;
 }

html{
    scroll-behavior: smooth;
}

body{
    background: rgb(222, 233, 235);
    font-family: 'Montserrat', sans-serif;
}

.section1{
    width: 100%;
    height: auto;
}

.header{
    height: auto;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
}

/*.nav{
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
    padding-top: 10px;
}

.nav-list{
    display: flex;
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

#container1{
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
    width: 94%;
    margin: auto;
}*/

.comex{
    color: red;
}

.overlay{
    position: relative;
    top: 200px;
}

.bars{
    display: none;
    position: absolute;
    top: 10px;
    right: 5px;
}

/*mobile nav hamburger transition*/
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

 /*mobile nav transition style ends here*/

.group{
    display: flex;
    justify-content: space-between;
}

.group>div:first-child, .group>div:nth-of-type(2){
    width: 50%;
}

#container1{
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
    width: 85%;
}

/*section start here*/
.section2{
    padding-top: 20px;
    margin-top: 50px;
    height: auto;
    background: var(--uniform-bg);
}

#about_1{
    background: white;
    position: relative;
    margin: auto;
}

#team_x1, #team_x2{
    margin: auto;
}

.team_x1 h4, .team_x2 h4{
    text-transform: uppercase;
}

/*board members*/
#team_x1{
    margin-top: 30px;
    background: white;
    padding: 30px 0 30px 0;
}

#team>div{
    /*border: 2px solid yellow;*/
    padding: 10px;
    position: relative;
    left: 5px;
}

.team_bg1{
    /* border: 2px solid red; */
    height: 130px;
    width: 130px;
    border-radius: 100%;
    background: url(~@/assets/images/gallery/rec4.png);
    background-size: cover;
    background-position: center;
}

.team_bg2{
    /*border: 2px solid red;*/
    height: 130px;
    width: 130px;
    border-radius: 100%;
    background: url(~@/assets/images/gallery/rec4.png);
    background-size: cover;
    background-position: center;
}

.team_bg3{
    /*border: 2px solid red;*/
    height: 130px;
    width: 130px;
    border-radius: 100%;
    background: url(~@/assets/images/gallery/rec4.png);
    background-size: cover;
    background-position: center;
}

/*team members*/
#team_x2{
    margin-top: 30px;
    background: white;
    padding: 30px 0 30px 0;
    margin-bottom: 30px;
}

#team2{
    display: flex;
    justify-content: space-between;
}

#team2>div{
    padding: 10px;
    position: relative;
    left: 5px;
}

  .team_1>div,
   .team_2>div,
   .team_3>div
   {
       padding: 7px;
       width: 97%;
       border-radius: 5px;
       border: none;
       cursor: pointer;
       border: 1px solid silver;
   }

  /*need div*/
   #need_2{
    background: white;
    margin-top: 50px;
    margin-bottom: 20px;
    padding: 20px 0 20px 0;
   }

   /*ADDED BUTTON BEFORE FOOTER*/
   .help-btn{
    width: 50%;
    margin: auto;
    text-align: center;
   }

   .help-btn>a{
    width: 200px;
    border-radius: 15px;
   }

   /*footer start here*/
   #footer{
    height: auto;
    width: 100%;
  }

  #page-nav{
    border: 1px solid silver;
    width: auto;
    float: right;
    position:relative;
    bottom: 50px;
    padding: 2px 5px 2px 5px;
    background: #0085FF;
  }

  footer{
    padding: 50px 0 20px 0;
    background: #0085FF;
  }

  footer span.last{
    font-size: 0.7rem;
    /*text-align: center;*/
    display: block;
    margin-left: 0;
  }

  .footer-links{
    /*text-align: center;*/
    margin-left: 0;
  }

  /*
    SPECIFIC TO AUDIO TEMPLATE PAGE
  */
  .article2a{
    padding-top: 72px;
    background: var(--uniform-bg);
  }

  /*pagination*/
  .pagination1{
    margin: 40px 0 40px 0;
}

.pagination2{
    width: 22%;
    padding: 10px 20px;
    margin: auto;
}

.pagination2>a{
    border: 1px solid white;
    padding: 0 10px 0 10px;
    text-decoration: none;
}

/*section*/
.searchx{
    border: 1px solid rgba(0, 0, 0, 0.6);
    width: 35%;
    height: 40px;
    background: white;
    border-radius: 5px;
}

#search{
    border: none;
    padding: 2px;
    position: relative;
    right: 12px;
    bottom: 0px;
    width: 100%;
    outline: none;
}

.search-link{
    color: silver !important;
    position: relative;
    bottom: -2px;
    right: 5px;
    /* z-index: 1; */
}

#resource-heading div{
    display: flex;
    justify-content: space-between;
}

#resource-heading2 div{
    display: flex;
    justify-content: space-between;
}

#sermon-heading{
    padding-top: 10px;
    padding-bottom: 10px;
}

.sermon-icons{
    display: flex;
    justify-content: space-between;
}

#sermon-heading3,
#sermon-heading4,
#sermon-heading5,
#sermon-heading6
{
    margin-bottom: 25px;
}

.sermon-heading>div{
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.09);
    padding: 18px;
}

/***ENDING AUDIO SPECIFICS***/

/*** START VIDEO SPECIFICS*****/
.contents_1x{
    padding-top: 62px;
    background: var(--uniform-bg)
}

.video-container{
    padding-bottom: 30px;
}

.flop{
    width: 110%;
    margin: auto -5%;
}

.flop>p{
    margin-bottom: 0;
}

.flop a{
    text-decoration: none;
}

.filter-bg{
    background: rgba(0, 0, 0, 0.33);
    height: 100%;
    text-align: center;
    color: #fff;
    padding: 10px;
    font-size: 1.5rem;
    /* border: 2px solid green; */
}

.video-bg{
    /* border: 2px solid red; */
    border-radius: 100%;
    height: 30px;
    width: 100px;
    margin: auto;
    background: url(~@/assets/images/gallery/lp3.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    top: 130px;
}

.video-icon{
    border-radius: 50%;
    padding: 10px;
    background: rgba(249, 4, 4, 0.6);
}

.img-icon{
    width: 15px;
    height: 15px;
}

.pagination3{
    margin: 0 0 0 0;
    padding-bottom: 40px;
}

.pagination4{
    margin-top: 30px;
    width: 205px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: auto;
}

.pagination4>a{
    border: 1px solid white;
    padding: 0 10px 0 10px;
    text-decoration: none;
}

#spec{
    border: 2px solid green;
}

/*section*/
#contents_2x div{
display: flex;
justify-content: space-between;
}

.prayer_1,
.prayer_2,
.prayer_3{
display: flex;
justify-content: space-between;
}

.prayer_1x,
.prayer_2x,
.prayer_3x
{
    width: 50%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 40px 0;
}

.prayer_1x p:nth-of-type(1),
.prayer_2x p:nth-of-type(1),
.prayer_3x p:nth-of-type(1)
{
    width: 60%;
    margin-bottom: 30px;
}

.prayer_1xx
{
    width: 50%;
    height: 300px;
    padding: 40px 0;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.prayer_1xx>div{
    height: 90%;
    width: 90%;
    background: url(~@/assets/images/gallery/rec3.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    left: 10%;
}

.vds{
    padding-top: 30px;
}

/*.video-bg{
    border: 2px solid red;
}*/

/***ENDING VIDEO SPECIFICS***/

/**APOLOGETICS SPECIFICS*/
#resource4xx{
    padding-top: 40px;
  }

  #resource4-heading2 div{
     display: flex;
     justify-content: space-between;
  }

  #resource4-heading2 .serachx{
     border: 2px solid silver;
     width: 250px;
     padding: 0 0 4px 0;
     background: white;
     border-radius: 5px;
  }

  #resource4-heading2 #search{
     border: none;
     padding: 5px;
     position: relative;
     right: 20px;
     top: 2px;
  }

  #resource4-heading2 .search-link{
     position: relative;
     top: 3px;
  }

  .resource4-heading3{
       display: flex;
       justify-content: space-between;
       margin-bottom: 50px;
  }

  .resource4-heading4{
     display: flex;
     justify-content: space-between;
     margin: auto;
  }

.apo-x{
   width: 60%;
}


.pagin4{
   margin: 0 0 0 0;
   padding: 40px 0 40px 0;;
}

.pagin4x{
   margin-top: 30px;
   width: 205px;
   padding-top: 10px;
   padding-bottom: 10px;
   margin: auto;
}

.pagin4x>a{
   border: 1px solid white;
   padding: 0 10px 0 10px;
   text-decoration: none;
}


  #resource4-heading2 .searchx{
     border: 2px solid silver;
     width: auto;
     height: 40px;
     background: white;
     border-radius: 5px;
     position: relative;
     top: 10px;
  }

  #resource4-heading2 #search{
    border: none;
    padding: 5px;
    position: relative;
    right: 12px;
    bottom: 7px;
  }

  #resource4-heading2 .search-link{
      color: silver !important;
      position: relative;
      bottom: 3px;
      right: 5px;
      z-index: 1;
  }

  #cardx, #cardxy,
  #cardm, #cardmn{
      width:80%;
      margin: auto;
  }
/**END OF APOLOGETIC SPECIFICS**/

/*first section starts here*/
@media screen and (max-width: 1200px){


@media screen and (max-width: 992px){

    .pagination2{
        width: 30%;
    }

@media screen and (max-width: 800px){


@media screen and (max-width: 768px){
/*nav starts here*/
.nav{
    padding-bottom: 10px;
}

.bars{
    display: block;
}

.flexc{
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
   width: 89%;
   margin: auto;
}

.nav li{
   list-style-type: none;
   margin-bottom: 30px;
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
  margin-left: 15px;
}

#dpd_x2{
  padding-right: 10px;
}

#msnv_2{
   display: none;
}

/*end of nav*/

/*team 1 start here*/
#team{
    display: block!important;
}

#team p:nth-of-type(1),
#team p:nth-of-type(3){
    text-align: center;
}

.team_1, .team_2{
    margin-bottom: 20px;
}

/*team 2 start here*/
#team2{
    display: block;
    justify-content: space-between;
}

#team2 p:nth-of-type(1),
    #team2 p:nth-of-type(3){
    text-align: center;
}

.team_1, .team_2{
    margin-bottom: 20px;
}

#footer_comehome,
    #footer_helpline,
    #footer_pos, #footer_counsel{
    margin-bottom: 30px;
}

.footer-links{
    margin-bottom: 10px;
}

.footer-row{
    flex-direction: column;
    text-align: center;
}

.footer-links{
    width: 125px;
    margin: auto;
}

/*SPECIFIC TO AUDIO PAGE*/
#sermon-heading3a,
#sermon-heading3b,
#sermon-heading4a,
#sermon-heading4b,
#sermon-heading5a,
#sermon-heading5b,
#sermon-heading6a,
#sermon-heading6b,
#sermon-heading7a,
#sermon-heading7b{
   margin-bottom: 30px;
}

#sermon-heading3a p,
#sermon-heading3b p,
#sermon-heading3c p,
#sermon-heading4a p,
#sermon-heading4b p,
#sermon-heading4c p,
#sermon-heading5a p,
#sermon-heading5b p,
#sermon-heading5c p,
#sermon-heading6a p,
#sermon-heading6b p,
#sermon-heading6c p,
#sermon-heading7a p,
#sermon-heading7b p,
#sermon-heading7c p{
    text-align: left !important;
}

.searchx{
    width: 50%;
}

#search{
    width: 80%;
}

/*audio Specific Ends Here*/

/**Video Responsiveness starts here*/
.prayer_1,
.prayer_2,
.prayer_3{
 display: block;
}

.prayer_1x,
.prayer_2x,
.prayer_3x
{
    width: 100%;
}

.prayer_1xx
{
    width: 100%;
    padding: 0 0;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.prayer_1xx>div{
    width: 95%;
    margin: auto;
    height: 95%;
    background-position: center;
    left: 0%;
    top: 5px;
}

.prayer_1x p:nth-of-type(1),
.prayer_2x p:nth-of-type(1),
.prayer_3x p:nth-of-type(1)
{
    width: 100%;
}

.pagination2{
    width: 40%;
}

.video-bg{
    top: 170px;
}


    /*audio Specific Ends Here*/
    @media screen and (max-width: 600px){

    .nav-list{
       width: 95%;
       margin: auto;
    }

    #container1{
       width: 90%;
    }

    .search-title{
        display: block!important;
    }
    .searchx{
        width: 80%;
    }

    .pagination2{
        width: 65%;
    }

    .footer-links{
        width: 160px;
        margin: auto;
    }

    @media screen and (max-width: 470px){

     footer p{
        font-size: 0.7rem;
      }

      .footer-links{
        margin: auto;
    }


      #search{
        padding: 2px;
        position: relative;
        right: 12px;
        bottom: 0px;
        width: 80%;
        outline: none;
    }

    .pagination2{
        width: 80%;
    }

    }
    }
   }
  }
 }
}

</style>
