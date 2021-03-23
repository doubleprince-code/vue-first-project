<template>
   <div>
    <div id="footer">
    <div>
        <div class="page-nav" id="page-nav">
                <a href="#section1" role="button" class="btn btn-primary">
                    <li class="fa fa-angle-up fa-2x text-white"></li>
                </a>
        </div>
    </div>
    <footer class="">
        <div class="container">
            <div class="footer-links">
                <a href="#">
                    <li class="fa fa-facebook fa-2x text-white wow fadeIn"></li>
                </a>
                <a href="#">
                    <li class="fa fa-instagram fa-2x text-white wow fadeIn"></li>
                </a>
                <a href="#">
                    <li class="fa fa-twitter fa-2x text-white wow fadeIn"></li>
                </a>
                <a href="#">
                    <li class="fa fa-youtube fa-2x text-white wow fadeIn"></li>
                </a>
            </div>
            <div class="text-white wow fadeIn mt-2">
                <span class="last">
                    @2020 ComeHome.com All right seserved. Privacy Policy || Terms of Use ||
                    Return Policy || Cookie Policy
                </span> 
            </div>
        </div>
    </footer>
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
      
    },

   }

</script>

<style scoped>
 
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
        background: #0085FF;
        padding: 50px 0 30px 0;
      }
  
      footer span.last{
        font-size: 0.7rem;
        text-align: center;
        display: block;
      }
  
      .footer-links{
        text-align: center;
      }

  @media screen and (max-width: 1200px){
  
  @media screen and (max-width: 1100px){                      
  
  @media screen and (max-width: 992px){
    
  @media screen and (max-width: 768px){
  /*nav start here*/
  
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

  /*#flex5>div{
    width: 100%;
    margin: auto;
  }*/
  
  @media screen and (max-width: 600px){
       
  @media screen and (max-width: 470px){
      /*.t_step{
          width: 90%;
      }*/
        
  @media screen and (max-width: 300px){
    footer p{
      font-size: 0.7rem;
    }
     }
     } 
     }
    }
   }
  }
  }
  </style>
