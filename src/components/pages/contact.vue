<template>
    <div id="app">
      <div>
       <!--testimonies start here-->
       <div class="test_con">
            <b-container style="padding-top: 50px; padding-bottom: 50px;">
              <div class="bg-primary" style="padding: 50px 0 50px 0; margin-bottom: 50px;">
                 <div class="" style="width: 80%; margin: auto;">
                   <h3 class="text-white font-weight-bold">LOCATION:</h3>
                   <h2 class="text-white font-weight-bold">12 AKOKA ROAD, YABAB<br />
                        LAGOS STATE</h2>
                    <br />
                    <br />

                     <div class="" style="display: flex; justify-content: space-between;">
                        <div>
                          <a href="#" class="mr-4"><li class="fa fa-phone text-white">+2348100056740</li></a>
                          <a href="#"><li class="fa fa-envelope text-white">info@COMEHOME.net</li></a>
                       </div>
                       <div>
                            <a href="#" class=""><li class="fa fa-facebook text-white"></li></a>
                            <a href="#"><li class="fa fa-instagram text-white"></li></a>
                            <a href="#"><li class="fa fa-twitter text-white"></li></a>
                            <a href="#"><li class="fa fa-youtube text-white"></li></a>
                       </div>
                    </div>
                   </div>
                </div>

                <div class="form_contt">
                    <form action="/contact" method="post" class="ml-4 frmm">
                           <div class="form-group" style="margin-bottom: 30px;">
                               <input type="text" class="form-control" name="fullName" placeholder="Your Name" id="" v-model="fullName">
                           </div>
                           <div class="contact-group mb-3">
                               <div class="form-group">
                                    <input type="text" class="form-control" name="email" placeholder="Email Address" id="" v-model="email">
                               </div>
                               <div class="form-group">
                                    <input type="text" class="form-control" name="phoneNumber" placeholder="Phone Number" id="" v-model="phoneNumber">
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                  <input type="text" class="form-control" name="title" placeholder="Subject" id=""
                                  v-model="title">
                            </div>
                            <div class="form-group" id="txt-area">
                                <textarea class="" name="message" placeholder="Message" id="" cols="44" rows="10" style="width: 100%;" v-model="textarea"></textarea>
                                  <p><button class="btn btn-primary ctt-btn" :disabled="!fullName.length || !email.length || !phoneNumber.length || !title.length || !textarea.length">SUBMIT</button></p>
                            </div>
                    </form>
                </div>
            </b-container>
         </div>
        </div>
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
                fullName: '',
                email: '',
                phoneNumber: '',
                title: '',
                textarea: ''
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
    .section1{
    width: 100%;
    height: auto;
}

.comex{
    color: red;
}

#txt-area textarea{
    border: 2px solid silver;
}
/*section2 start here*/
.test_con{
    margin-top: 50px;
}

.form_contt{
    width: 70%;
    margin: auto;
}

.ctt-btn{
    float: right;
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

.contact-group{
  display: flex;
 justify-content: space-between;
}

.contact-group .form-group{
  width: 100%;
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

.form_contt{
    width: 100%;
    margin: auto;
}

.frmm{
    margin-left: 0px !important;
}

.ctt-btn{
    float: none;
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
