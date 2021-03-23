<template>
    <div>
       <!--testimonies start here-->
       <section class="need_main">
           <div class="bg-primary" style="padding: 35px 0 35px 0; margin-bottom: 50px;">
               <b-container>
                 <h3 class="text-white">Need Help?</h3>
                 <p class="text-white">There is absolutely nothing you have done or gone through in life that God in His infinite Mercy
                     can not change. Jesus can save you completely if you are ready to accept Him into Your Life and
                     situation right now.<br>
                     He is our present Help in times of Need and He cares for you when you cast your worry and fears on
                     Him.
                 </p>
                </b-container>
           </div>

            <div class="bg-white">
                <b-container>
                    <div class="helpp">

                    <div class="helpp1">
                        <div class="bg-primary text-white">
                            <h2>Get in Touch</h2>
                        </div>
                        <form action="">

                            <div class="form-group mb-4">
                                <label for="">Name</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-group mb-4">
                                    <label for="">E-Mail</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group mb-4">
                                      <label for="">Phone Number</label>
                                     <input type="text" class="form-control">
                                </div>
                                <div class="form-group mb-4">
                                        <label for="">Location</label>
                                       <input type="text" class="form-control">
                                  </div>
                                <div class="form-group pb-2">
                                <label for="">Message</label>
                                <textarea name="" class="form-control" id="" cols="30" rows="10" placeholder=""></textarea>
                                </div>
                                <a href="#" class="help-mssg">Send</a>
                        </form>
                    </div>

                    <div class="helpp2">
                        <div style="padding-top: 22px; padding-bottom: 22px; position: relative; top: 30px;">
                           <p><a href="#"><li class="fa fa-phone text-white fa-2x" style="padding: 10px; position: relative; left: 20px;"></li></a></p>
                            <p ><a href="#"><li class="fa fa-instagram text-white fa-2x" style="padding: 10px; position: relative; left: 20px;"></li></a></p>
                            <p ><a href="#"><li class="fa fa-twitter text-white fa-2x" style="padding: 10px; position: relative; left: 20px;"></li></a></p>
                            <p ><a href="#"><li class="fa fa-telegram text-white fa-2x" style="padding: 10px; border-radius: 100%; position: relative; left: 20px;"></li></a></p>
                         </div>
                       </div>
                    </div>
                </b-container>

           </div>
       </section>
       <my-footer2></my-footer2>
    </div>
</template>

<script>
    import Footer2 from '../../footers/footer2'

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section1{
    /*border: 2px solid purple;*/
    width: 100%;
    height: auto;
  }

    .header{
        /*border: 2px solid red;*/
        height: auto;
        width: 100%;
    }

    .need_main{
        margin-top: 100px;
    }

    /*section2 start here*/

        .helpp{
            display: flex;
            width: 70%;
            margin: auto;
        }

               .helpp1{
                   width: 85%;
                   box-shadow: 1px 1px 8px 1px silver;
               }

               .helpp1>div{
                    padding-top: 30px;
                    padding-bottom: 30px;
               }

                .helpp1 h2{
                    width: 90%;
                    margin: auto;
                    font-weight: bold;
               }

               .helpp1 form{
                  padding: 20px 0 20px 0
               }

              .helpp2{
                   background: #1E90FF;
                   width: 100px;
                }

               .helpp1 .form-group{
                    /*border: 2px solid red;*/
                    width: 90%;
                    margin: auto;
                }

                .helpp1 .form-control{
                    border-top: none;
                    border-left: none;
                    border-right: none;
                }

                .bg-white{
                    margin: 50px 0 50px 0;
                    padding: 30px 0 30px 0;
                }


    .helpp2{
        height: 400px;
        position: relative;
        top: 150px;
    }

.help-mssg
{
  padding: 10px 25px;
  border-radius: 5px;
  background: rgb(62, 123, 202);
  color: white;
  font-weight: bold;
  position: relative;
  top: 70px;
  display: none;
}

    /*footer start here*/
        #footer{
            height: auto;
            width: 100%;
            margin-top: 30px;
        }

        footer{
            padding: 30px 0 20px 0;
        }

/*first section starts here*/
@media screen and (max-width: 1200px){


@media screen and (max-width: 1000px){


@media screen and (max-width: 800px){


@media screen and (max-width: 768px){
.bars{
    display: block;
}

.flexc{
  display: none;
}

.helpp{
  width: 100%;
  display: block;
}

.helpp1{
    width: 100%;
    box-shadow: 1px 1px 8px 1px silver;
}

.helpp2{
    display: none;
}

.help-mssg
{
  padding: 10px 25px;
  border-radius: 5px;
  background: #0085FF;
  color: white;
  font-weight: bold;
  position: relative;
  top: 80px;
  display: block;
  width: 50%;
  margin: auto;
}

@media screen and (max-width: 600px){


@media screen and (max-width: 470px){

}
  }
   }
  }
 }
}

</style>
