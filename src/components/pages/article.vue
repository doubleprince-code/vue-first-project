<template>
    <div>
        <!--testimonies start here-->
       <section class="article2a bg-white pt-4">
            <b-container>
                <div class="article2c">
                  <div class="article2d"></div>
                    <div class="article2e ml-4 mr-4">
                        <div class="" style="display: flex; justify-content: space-between;">
                            <p></p>
                            <p class="text-danger font-weight-bold">New Articles>what is Repentance?</p>
                        </div>
                        <p>
                            <span class="font-weight-bold">What is Repentance?</span><br>
                            We repent by turning a new leave, turning from sin and turning unto God
                            Jesus told us to be the salt of the earth..
                            We repent by turning a new leave, turning from sin and turning unto God
                            Jesus told us to be the salt of the earth..
                        </p>
                        <p class="text-left">
                            There is no fear in love, for perfect love casts
                            out fear."(1 John 4:18, ESV)"
                        </p>
                        <p class="text-left">At the time of this writing, many people in the United States
                            are fearful about the outcome of the 2015 presidential
                            election. They're anxious about what America will look like after November 8.
                            The polls show a very hight unfavourable rating for major party presidential candidates,
                            so no matter who wins the presidenty, many people will continue to experience
                            fear.
                        </p>
                    </div>
                </div>
                <div>
                    <p class="text-left">They will have trepidations regarding national security, financial solvency, racial divisions, and a host of
                        other ghastly things that go "bump in the night."
                    </p>
                    <p class="text-left">
                        All believers have a responsibility to reach out to the fearful,
                            offering them spiritual weapons to cast out fear,
                            by fear, i refer to the imagining of a future that
                            is either dangerous or painful, presenting challenges
                            that are difficult to meet or avoid. The Bible teaches that
                            we're part of the priesthood of all believers (1 Pet. 2:9),
                            so people of faith must be prepared to arm themselves
                            and others against fear. As you think about various weapons,
                            remeber that the most effective ones will be spiritual. The Apostle Paul puts it this way in 2 Cor.
                                10:4; "We use God's mighty weapon, not wordly weapons, to knock down the strongholds of human reasoning and to destroy false
                                arguments."
                    </p>
                   <p class="text-left">
                        Through sharing, teaching, preaching, and living biblical thruths, believers can empower others to cast away
                        fear. In Romans 10:14-15, 17, Paul asks,
                        "How can they call on him to save them
                        unless they believe in him? And how can they believe in Him if they have never heard about him?And how can they hear aboutHim unless someone tells them?
                        And how will anyone go and tell them without being sent? ...
                        S faith comes from hearing, that is, hearing the
                        Good News about Christ." Believers can become God's
                        hands and feet and voice on earth to help people
                        deal with fear. But what
                        can we say to help people cast out fear?"
                        There is no fear in love, for perfect love casts out fear." (1 John 4:18, ESV)"
                    </p>

                    <hr />

                  <div class="article-tags">
                      <p></p>
                      <p class="text-left mt-3">
                        <span class="font-weight-bold">TAGS:</span> Bible Study<br>
                        <span class="font-weight-bold">PREFERENCES:</span> none<br />
                        <span class="font-weight-bold">POSTED:</span> March 25, 2020
                    </p>
                    <p></p>
                  </div>


                    <div class="article2f_1a">
                     <div class="article2f mr-4">
                       <div class="artic_1a"></div>
                         <div class="article2g ml-4 mr-2">
                            <span class="font-weight-bold">What is Love?</span><br />
                             <p class="text-left">
                                We repent by turning a new leave, turning from sin and turning
                                unto God, Jesus told us to be the salt of the earth...,<br />
                                We repent by turning a new leave, turning from sin and turning
                                unto God , Jesus told us to be the salt of the earth...
                              </p>
                              <p>
                                <span class="text-danger font-weight-bold">CONTINUE READING</span>
                              </p>
                        </div>
                    </div>

                    <div class="article3f">
                        <div class="artic_1a"></div>
                          <div class="article2g ml-4">
                                 <span class="font-weight-bold">What is Love?</span><br />
                                <p class="text-left">
                                     We repent by turning a new leave, turning from sin and turning
                                     unto God, Jesus told us to be the salt of the earth...,<br />
                                     We repent by turning a new leave, turning from sin and turning
                                     unto God , Jesus told us to be the salt of the earth...
                                 </p>
                                 <p>
                                   <span class="text-danger font-weight-bold">CONTINUE READING</span>
                                 </p>
                         </div>
                     </div>
                 </div>
               </div>
            </b-container>
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
       </section>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .section1{
    width: 100%;
    height: auto;
}

.comex{
    color: red;
}

/*article start here*/
.article2a{
  margin-top: 100px;
  padding-bottom: 30px;
}

.article2f_1a{
    display: flex;
    justify-content: space-between;
}

 .article2c{
    height: auto;
    width: auto;
    display: flex;
    margin-bottom: 20px;
 }

.article2d{
   height: auto;
   width: 35%;
   background: url(~@/assets/images/gallery/rec1.png);
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
}

.article2e{
   height: auto;
   width: 100%;
}

.article2f, .article3f{
  height: auto;
  width: auto;
  display: flex;
  box-shadow: 0px 1px 2px 2px silver;
  border-radius: 5px;
}

.artic_1a{
   height: auto;
   width: 30%;
   background: url(~@/assets/images/gallery/rec1.png);
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
}

.article2f>div:last-child,
.article3f>div:last-child{
   height: auto;
   width: 100%;
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
   padding: 30px 0 20px 0;
   background: #0085FF;
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

 .article2c{
    display: block;
 }

.article2d{
   height: 300px;
   width: 100%;
   background: url(~@/assets/images/gallery/rec1.png);
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
}

.article2e{
   margin-left: 0px !important;
}

.article2f_1a{
    display: block;
}

.article2f, .article3f{
  display: block;
  box-shadow: none;
  border-radius: 0px;
}

.artic_1a{
   height: 300px;
   width: 100%;
}

.article2g{
    margin: 20px 0 0 0 !important;
}

/*footer*/
#footer_comehome,
#footer_helpline,
#footer_pos, #footer_counsel{
  margin-bottom: 30px;
}

.footer-links{
  margin-bottom: 10px;
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

