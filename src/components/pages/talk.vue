
<template>
 <v-app>
     <div>
        <div class="serve">
            <h1>Goodies, loading</h1>
        </div>
     </div>
     <my-footer></my-footer>
    </v-app>
</template>

<script>

    import Footer2 from '../footers/footer2'

        export default {
            components: {
                'my-footer':Footer2
            },

        data () {
            return {
              slide: 0,
              sliding: null
            }
        },

        methods: {
          onSlideStart(slide) {
          this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    },

  //vuetify card 
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  

            mounted() {
            
            },
    }

</script>

<style scoped>
/*section starts here*/
*{
  margin: 0;
  padding: 0;
  --gen-blue: #0085FF;
  --nav-link-color: #000000;
  box-sizing: border-box;
}

.serve{
    position: relative;
    top: 150px;
    text-align: center;
    margin-bottom: 500px;
}

@media screen and (max-width: 768px){

}

</style>
