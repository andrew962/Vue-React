<template>
<nb-button :onPress="GoPress"><nb-text>Paso</nb-text></nb-button>  
    <!--nb-container>
    <nb-header>
      <nb-left>
        <nb-button transparent>
          <nb-icon :name="menu" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Header</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-text></nb-text>
      <nb-item>
        <nb-input/>
      </nb-item>
        <nb-button v-model="GoPress">
          <nb-text>Adelante</nb-text>
        </nb-button>
    </nb-content>
    <nb-footer>
      <nb-footer-tab>
        <nb-button active full>
          <nb-text>Footer</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container-->
  
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