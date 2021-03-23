<template>
    <div>
        <div class="pull">
            <div class="container" id="resourcy">
                <h2>Watch out..</h2>
            </div>
            <!--footer linked-->
            <my-footer2></my-footer2>
         </div>
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

.pull{
    background: rgb(222, 233, 235);
    padding-top: 50px;
}

#resourcy{
    width: 100%;
    margin: auto;
    text-align: center;
    padding: 160px 0 250px 0;
}

/*first section starts here*/
@media screen and (max-width: 1200px){


@media screen and (max-width: 1000px){                      


@media screen and (max-width: 800px){
    

@media screen and (max-width: 768px){

#resourcy{
    width: 20%;
    margin: auto;
    text-align: center;
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

