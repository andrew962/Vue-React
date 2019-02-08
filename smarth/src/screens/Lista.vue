<template>
    <nb-container>
    <nb-header :style="{ backgroundColor: '#dc4239' }" androidStatusBarColor="#dc4239">
      <nb-body>
        <nb-title>Smarth</nb-title>
      </nb-body>
    </nb-header>
    <nb-content padder>
        <nb-text>Lista</nb-text>

        <nb-text v-for="item in nombre" :key="item['.key']">
          {{item.nombre}}
        </nb-text>

        <nb-button :onPress="back">
            <nb-text>Atras</nb-text>
        </nb-button>
    </nb-content>
  </nb-container>
</template>
<script>
import Firebase,{functions} from 'firebase'
import refNom from './App'
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data(){
      return{
          
      }
  },
  firebase:{
    nombre:refNom
  },
    methods: {
        back:function(){
            this.navigation.goBack()
        }
    },
    
}
</script>