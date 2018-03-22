<template>
  <v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 md6 v-for="data in results" :key="data.Id">
            <v-card
            height="250px"
            width="250px"
            light
            flat>
              <v-card-media
                :src=baseURL+data.ImageUrl
                height="100px"
              >
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{data.Name}}</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios';

  export default {
    data: () => ({
      drawer: false,
      posts:[],
      results:[],
      baseURL: ''
    }),
    methods:{
      getData(){
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
        .then(response => {
            this.posts = response['data'];
            this.baseURL = this.posts['BaseImageUrl'];
            console.log(this.baseURL);
            this.posts = this.posts['Data'];
            this.posts = Object.values(this.posts);
            for(var i=0;i<this.posts.length;i++){
              if(this.posts[i]['Symbol']=='ETH'||this.posts[i]['Symbol']=='BTC' ||this.posts[i]['Symbol']=='XRP'||this.posts[i]['Symbol']=='LTC')
                this.results.push(this.posts[i]);
                console.log(this.results);
            }
        })
       }
    },
    created(){
      this.getData();
    }
  }
</script>