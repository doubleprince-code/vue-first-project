<template>
    <div>
       <section class="resource4 mt-3">
            <div class="mb-4">
              <div class="contain" id="resource4-heading">
                <h3><span style="border-top: 2px solid black;">RE</span>SOURCES</h3>
                  <div style="line-height: 1.3;">
                    <p class="font-weight-bold">Enjoy as you get answers to your questions</p>
                    <p class="text-danger font-weight-bold">POOL OF SILOAM TEACHINGS</p>
                  </div>
               </div>
            </div>

            <div class="bg-white" id="resource4xx">
             <div class="contain" id="resource4-heading2">
                <div>
                   <!--div style="box-shadow: 0px 0px 2px 1px silver; border-radius: 5px;"-->
                       <h2 class="text-primary" style="box-shadow: 0px 0px 2px 1px silver; border-radius: 5px;">Apologetic</h2>
                   <!--/div-->
                    <div>
                    <form>
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Your Email">
                        <div class="input-group-append">
                          <span class="input-group-text"><i class="fa fa-search fa-2x"></i></span>
                        </div>
                      </div>
                    </form>
                    </div>
                  </div>
            </div>

            <div class="apol-contain" style="margin: auto; position: relative; left: 0px; padding: 30px 0 30px 0;">
                    <p class="apo-x pt-2 pb-2 text-left">Apologetics is the religious
                            discipline of defending religious
                            doctrines through systematic argumentation
                        and discourse.
                        Early Christian writers who defended their beliefs
                        against critics and recommended their faith
                        to outsiders were called Christian aplologists.
                    </p>
            </div>
            <div class="apol-contain" style="position: relative; left: 0px;">
                    <div class="resource4-heading3">
                        <!--fisrst card starts here-->
                        <div>
                          <div class="card" id="cardx">
                            <img class="card-img-top" src="@/assets/images/gallery/rec3.png" alt="Card image" style="width:100%">
                              <div class="card-body">
                                <br>
                               <center>
                               <!--h4 class="card-title">John Doe</h4-->
                               <p class="card-text mr-2 ml-2"><span class="text-danger font-weight-bold">Why do you Believe?</span> See why
                                and what you believe as a Christians. See
                                why and what you believe as a Christians</p>
                               <!--a href="#" class="btn btn-primary text-white">Watch</a-->
                               <v-btn
                                        depressed
                                        color="primary"
                                        class="mb-3 mt-2 bg-primary"
                                      >
                                        Primary
                                </v-btn>
                               </center>
                              </div>
                              </div>
                             </div>
                            <!--second card starts here-->
                            <div>
                              <div class="card" id="cardxy">
                                <img class="card-img-top" src="@/assets/images/gallery/rec3.png" alt="Card image" style="width:100%">
                              <div class="card-body">
                                <br>
                                <center>
                               <!--h4 class="card-title">John Doe</h4-->
                               <p class="card-text mr-2 ml-2"><span class="text-danger font-weight-bold">Why do you Believe?</span> See why
                                and what you believe as a Christians. See
                                why and what you believe as a Christians</p>
                               <!--a href="#" class="btn btn-primary text-white">Watch</a-->
                               <v-btn
                                        depressed
                                        color="primary"
                                       class="mb-3 mt-2 bg-primary"
                                      >
                                        Primary
                                </v-btn>
                              </center>
                            </div>
                           </div>
                        </div>
                        <!--cards end here-->
                    </div>
                    <div class="resource4-heading4">
                      <!--fisrst card starts here-->
                          <div>
                               <div class="card" id="cardm">
                                  <img class="card-img-top" src="@/assets/images/gallery/rec3.png" alt="Card image" style="width:100%">
                                    <div class="card-body">
                                      <br>
                                     <center>
                                     <!--h4 class="card-title">John Doe</h4-->
                                     <p class="card-text mr-2 ml-2"><span class="text-danger font-weight-bold">Why do you Believe?</span> See why
                                        and what you believe as a Christians. See
                                        why and what you believe as a Christians</p>
                                       <!--a href="#" class="btn btn-primary">Watch</a-->
                                       <v-btn
                                        depressed
                                        color="primary"
                                       class="mb-3 mt-2 bg-primary"
                                      >
                                        Primary
                                      </v-btn>
                                     </center>
                                    </div>
                                    </div>
                                  </div>
                                  <!--second card starts here-->
                                  <div>
                                    <div class="card" id="cardmn">
                                      <img class="card-img-top" src="@/assets/images/gallery/rec3.png" alt="Card image" style="width:100%">
                                    <div class="card-body">
                                      <br>
                                      <center>
                                     <!--h4 class="card-title">John Doe</h4-->
                                     <p class="card-text mr-2 ml-2"><span class="text-danger font-weight-bold">Why do you Believe?</span> See why
                                        and what you believe as a Christians. See
                                        why and what you believe as a Christians</p>
                                       <!--a href="#" class="btn btn-primary text-white">Watch</a-->
                                        <v-btn
                                        depressed
                                        color="primary"
                                        class="mb-3 mt-2 bg-primary"
                                      >
                                        Primary
                                      </v-btn>
                                    </center>
                                  </div>
                                 </div>
                              </div>
                         <!--cards end here-->
                    </div>
             </div>

                    <center clas="" style="margin: 30px 0 30px 0;">
                        <div class="paginate" style="font-weight: bold;">
                            <Page :total="60" />
                        </div>
                    </center>
          </div>
       </section>
       <!--footer included-->
       <my-footer2></my-footer2>
    </div>
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
    }
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --uniform-bg: #E5EEF6;
    --gen-blue: #0085FF;
}

.resource4{
    position: relative;
    top: 0px;
  }

  .resource4>div:nth-of-type(1){
     background: rgb(222, 233, 235);
     padding: 70px 0 15px 0 ;
  }

/**APOLOGETICS SPECIFICS*/
  #resource4-heading2>div{
     display: flex;
     justify-content: space-between;
     width: 85%;
     margin: auto;
  }

  #resource4-heading2 #search{
     border: none;
     padding: 5px;
     position: relative;
     right: 20px;
     top: 0px;
  }

  .resource4-heading3{
       display: flex;
       justify-content: spacebetween;
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

  /*pagination start here*/
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
     top: 0px;
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

  .searchx input{
    width: 100%;
  }

  #cardx, #cardxy,
  #cardm, #cardmn{
      width:80%;
      margin: auto;
  }

.apol-contain{
  width: 85%;
  margin: auto;
}

#resource4-heading2>div> h2{
  height: 45px;
  padding: 0px 20px;
  position: relative;
  left: 0px;
}

 #resource4-heading2 .input-group-text{
  background: white;
 }

/**END OF APOLOGETIC SPECIFICS**/

@media screen and (max-width: 1200px){


@media screen and (max-width: 1000px){


@media screen and (max-width: 800px){


@media screen and (max-width: 768px){

.resource4{
    position: relative;
    top: 35px;
  }

  /*.resource4>div:nth-of-type(1){
     background: rgb(222, 233, 235);
     padding: 40px 0 15px 0 ;
  }

  #resource4-heading2>div>div,
  #resource4-heading2 .searchx{
     width: 70%;
  }

  #resource4-heading2 #search{
    right: 0px;
    bottom: 7px;
  }

  #resource4-heading2 .search-link{
    width: 100%;
    right: 0px;
  }

.bars{
    display: block;
}

.flexc{
  display: none;
}

.resource4-heading3{
   display: block;
}

.resource4-heading4{
   display: block;
}

.resource4-heading4>div:first-child,
.resource4-heading3>div:first-child{
    margin-bottom: 30px;
}

.apo-x{
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}
*/

#cardx, #cardxy,
#cardm, #cardmn{
    width:100%;
    margin: auto;
}

/*footer*/
#footer_comehome,
#footer_helpline,
#footer_pos, #footer_counsel{
  margin-bottom: 30px;
}

@media screen and (max-width: 600px){

    #resource4-heading2>div{
          display: block;
          width: 85%;
          position: relative;
      }

       #resource4-heading2>div> h2{
          margin-bottom: 30px;
      }

@media screen and (max-width: 470px){

    }
    }
   }
  }
 }
}


</style>
