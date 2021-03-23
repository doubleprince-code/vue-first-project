<template>
    <div>
        <div class="all">
        <section class="accept_main">
           <div class="container bg-white txtxt1">
                 <div class="bg-primary mb-3 txtxt2">
                     <h3 class="text-white ml-4">Accept JESUS?</h3>
                </div>
                <div class="ml-4 mr-4 pb-4">
                <div class="text-left">
                    If thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him
                    from the dead, thou shalt be saved. For with the heart man believeth unto
                    rightheousness; and with the mouth confession is made unto salvation... For
                    whosoever shall call upon the name of the Lord shall be saved.
                </div>
                <div class="text-danger">Romans 10:9-10, 13</div>

                <hr />
                <div class=""> Receiving Jesus Christ as your Lord and Savior is the most important decision you'll ever make!</div>
                <hr />

                <div class="text-danger">Pray out Loud,</div>
                <div class="text-left">Jesus, O confess that You are my Lord and Savior. I believe in my heart that God raised You from the dead.
                    I, therefore submit myself to you and by faith in Your Word, i receive salvation now.
                    I accept Your promise of the Holy Spirit right now and rejoice that i have been reconciled and restored back to you.
                    Thank You for saving me Father in the name of Jesus,
                    Amen.
                </div>
                <br>
                <div class="">
                  If you prayed this prayer right now, we would like to know. <a href="contact.html" class="text-primary font-weight-bold">Click here</a> to contact us and share your testimony.</div>
                </div>
           </div>

            <!--comment form start here-->
            <!--div class="grip"-->
                <div class="container" id="accpt_form1">
                    <h5 class="font-weight-bold">LEAVE COMMENT</h5>
                    <div class="accpt_form2">
                        <form action="">
                          <div class="form-group">
                            <textarea name="" id="" class="form-control pl-4" placeholder="Enter Comment" cols="30" rows="10" style="box-shadow: 0px 2px 1px 0px silver;" require></textarea>
                          </div>
                          <div class="form-group">
                            <input type="text" class="form-control" placeholder="Name" id="" style="box-shadow: 0px 2px 1px 0px silver;" require>
                          </div>
                          <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email" id="" style="box-shadow: 0px 2px 1px 0px silver;" require>
                           </div>
                           <button class="text-white btn btn-primary">POST COMMENT</button>
                        </form>
                    </div>
                </div>

                <!--comment message start here-->
                <div class="container">
                    <div>
                        <p>10 Comments</p>
                    </div>
                </div>
             <!--/div-->
           </section>
         <my-footer2></my-footer2>
       </div>
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

/*body{
    background: rgb(222, 233, 235);
}*/

.all{
    background: rgb(222, 233, 235);
    padding-top: 100px;
}

.comex{
    color: red;
}

/*section2 start here*/
  .accept_main{
    margin-top: 0px;
  }

  txtxt1{
    padding: 20px 0 20px 0;
    z-index: -1;
  }

txtxt2{
    width: 230px;
    position: relative;
    right: 10px;
    padding: 2px 0 2px 0;
    box-shadow: 1px 1px 5px 1px silver;
  }

  #accpt_form1{
      padding: 10px 0 10px 0;
      margin-top: 50px;
      margin-bottom: 50px;
  }

  .accpt_form2{
      margin-left: 0px !important;
      margin-right: 0px !important;
      width: 100%;
   }
/*footer start here*/
    /*#footer{
     border: 2px solid red;
     height: auto;
     width: 100%;
   }*/

   #page-nav{
     border: 1px solid silver;
     width: auto;
     float: right;
     position:relative;
     bottom: 50px;
     padding: 2px 5px 2px 5px;
     background: #0085FF;
   }

    /*.grip{
        width: 65%;
        margin: auto;
    }*/

/*first section starts here*/
@media screen and (max-width: 1200px){


@media screen and (max-width: 900px){

    /*.grip{
        width: 85%;
        margin: auto;
    }*/

@media screen and (max-width: 800px){


@media screen and (max-width: 768px){
.bars{
    display: block;
}

.flexc{
  display: none;
}

.accept_main{
    margin-top: 0px;
}

#accpt_form1{
    width: 90%;
}

.all{
   padding-top: 70px;
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

