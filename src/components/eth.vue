<template>
<v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
            class="elevation-1"
            >
            <template slot="items" slot-scope="props">
            <td class="text-xs-center">{{ props.item.name }}</td>
            <td class="text-xs-center">{{ props.item.usd }}</td>
            <td class="text-xs-center">{{ props.item.eur }}</td>
            <td class="text-xs-center">{{ props.item.inr }}</td>
            </template>
        </v-data-table>
      </v-container>
    </v-content>
</v-app>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';

export default {
    data: () => ({
        headers: [
          {
            text: 'Market',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { text: 'Price', value: 'price', align:"center" },
          { text: 'EUR', value: 'eur', align:"center" },
          { text: 'INR', value: 'inr', align:"center" }
        ],
        items: [
          {
            value: false,
            name: 'Coinbase',
            price:'',
            eur: 6.0,
            inr: 24
          },
          {
            value: false,
            name: 'Bittrex',
            price:'',
            eur: 6.0,
            inr: 24
          },
          {
            value: false,
            name: 'Polonix',
            price:'',
            eur: 6.0,
            inr: 24
          },
          {
            value: false,
            name: 'Zebpay',
            price:'',
            eur: 6.0,
            inr: 24
          },
          {
            value: false,
            name: 'Binance',
            price:'',
            eur: 6.0,
            inr: 24
          },
        ],
        results:[]
    }),
    components:{
      Header
  },
    methods:{
        getData(){
            for(var i=0;i<this.items.length;i++){
                axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD&e='+this.items[i].name).then(response =>{
                    this.results.push(response.data.DISPLAY);
                })
            }
            for(var i=0;i<this.results.length;i++){
                console.log(this.results);
            }
            console.log(this.results);
        }
    },
    mounted(){
        this.getData();
    }
}
</script>
