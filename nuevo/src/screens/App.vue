<template>
<!--
  :style="{ backgroundColor: '#fff' }" es para darle el color a mi header en este caso es rojo
androidStatusBarColor="#" le da color a la barra de estado, es bueno poner estos dos juntos para tener el
mismo color en tanto en el header como en la barra de estado
-->
    <nb-container>
    <nb-header :style="{ backgroundColor: '#dc4239' }" androidStatusBarColor="#dc4239">
      <nb-body>
        <nb-title>Tablas de Multiplicar</nb-title>
      </nb-body>
    </nb-header>
    <nb-content padder>
        <nb-button :onPress="GoPress">
          <nb-text>Paso</nb-text>
        </nb-button>
    </nb-content>
  </nb-container>
  
</template>
 <script>
 import { StackNavigator } from "vue-native-router";
 export default {
     props:{
         navigation:{
             type:Object
         }
     },
     methods: {
         GoPress:function(){
             this.navigation.navigate('Loyal')
         }
     },
 }
 </script>