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
        <nb-button v-for="item in page" :key="item.route" 
                  :onPress="() => GoPress(item)" 
                  block rounded info :style="{marginBottom:20}">
          <nb-text>{{item.nombre}}</nb-text>
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
     data(){
       return{
         page:[{
             route:'Tabla1',
             nombre:'Tabla #1'
           },{
             route:'Tabla2',
             nombre:'Tabla #2'
           },{
             route:'Tabla3',
             nombre:'Tabla #3'
           },{
             route:'Tabla4',
             nombre:'Tabla #4'
           },{
             route:'Tabla5',
             nombre:'Tabla #5'
           },{
             route:'Tabla6',
             nombre:'Tabla #6'
           },{
             route:'Tabla7',
             nombre:'Tabla #7'
           },{
             route:'Tabla8',
             nombre:'Tabla #8'
           },{
             route:'Tabla9',
             nombre:'Tabla #9'
           },{
             route:'Tabla10',
             nombre:'Tabla #10'
           },{
             route:'Tabla11',
             nombre:'Tabla #11'
           },{
             route:'Tabla12',
             nombre:'Tabla #12'
           }]
       }
     },
     methods: {
         GoPress:function(item){
             this.navigation.navigate(item.route)
         }
     },
 }
 </script>