<template>
    <div>
        <div class="resource5">
            <div>
              <div class="container mt-3" id="resource5-heading">
                <h3><span style="border-top: 2px solid black;">RE</span>SOURCES</h3>
                  <div style="line-height: 0.5;">
                    <p class="font-weight-bold">Enjoy as you get answers to your questions</p>
                    <p class="text-danger font-weight-bold mb-4">POOL OF SILOAM TEACHINGS</p>
                  </div>
               </div>
              </div>

            <div class="bg-white" id="resource5xx">
                <div class="container" id="resource5-heading2">
                  <h4 class="text-primary font-weight-bold mb-3 text-left">Daily Bible Reading Plan</h4>
                  <p class="bible-reading">
                      <span class="text-danger font-weight-bold">Bible in a Year:</span><span class="font-weight-bold"> 365-Day Reading Plan</span>
                  Regular Bible reading is one of the important habits
                      you can develop.
                      This daily Bible reading plan will give you all the benefits of a steady diet of God's Word as you read through Scripture in a year. The whole Bible is arranged into 365 daily readings, including an Old Testament passage,
                       a New Testament passage, and a Psalm or Proverb for each day.
                  </p>

                  <div class="text-center" id="reading-plan">
                        <h3 class="text-danger">DOWNLOAD</h3>
                        <p>Complete Reading Plan Here</p>
                        <a href="#"><li class="fa fa-download fa-2x text-dark"></li></a>
                    </div>
                </div>
            </div>
       </div>

    <!--pagination-->
       <!--div class="pagination1">
        <div class="pagination2 d-flex justify-content-around bg-primary"-->
        <!--a href="#" class="text-white bg-secondary font-weight-bold">&laquo;</a>
        <a href="#" class="text-primary bg-white font-weight-bold ml-1">1</a>
        <a href="#" class="text-white font-weight-bold ml-1">2</a>
        <a href="#" class="text-white font-weight-bold ml-1">3</a>
        <a href="#" class="text-white font-weight-bold ml-1 mr-1">4</a>
        <a href="#" class="text-white bg-secondary font-weight-bold">&raquo;</a-->

        <!--/div>
       </div-->
       <center clas="" style="margin: 30px 0 30px 0;">
          <div class="paginate" style="font-weight: bold;">
            <Page :total="60" />
          </div>
       </center>

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

.resource5{
        margin-top: 0px;
    }

    .resource5>div:nth-of-type(1){
        background: rgb(222, 233, 235);
        padding: 70px 0 10px 0 ;
      }

    .section1{
        width: 100%;
        height: auto;
    }

    .comex{
        color: red;
    }

    #resource5xx{
        padding: 40px 0 100px 0;
    }

    .bible-reading{
    width: 60%;
    }

    #reading-plan{
    width: 30%;
    padding: 30px;
    box-shadow: 1px 1px 1px 1px silver;
    margin-top: 70px;
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

    .bible-reading{
    width: 100%;
    }

    #reading-plan{
    width: 100%;
    padding: 30px;
    box-shadow: 1px 1px 1px 1px silver;
    margin-top: 70px;
    }

    /*footer*/
    /*#footer_comehome,
    #footer_helpline,
    #footer_pos, #footer_counsel{
    margin-bottom: 30px;
    }*/

    .resource5>div:nth-of-type(1){
        background: rgb(222, 233, 235);
        padding: 70px 0 10px 0 ;
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
