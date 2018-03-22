<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>information</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
              <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left color='red lighten-3'>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-md floating>
        <v-layout row wrap>
          <v-flex sm-9 v-for="data in results" :key="data.Id">
            <v-jumbotron style="border-radius:3px; border-style:solid; border-color: #ff4444;" dark>
            <v-container fill-height>
     <v-layout align-center>
       <v-flex>
         <img :src=baseURL+data.ImageUrl height="70px">
           <h3 class="display-1 pa-3"><div class="headline">{{data.Name}}</div></h3>
      </v-flex>
    </v-layout>
  </v-container>
        </v-jumbotron>
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
