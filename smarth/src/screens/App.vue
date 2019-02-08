<template>
    <nb-container>
    <nb-header :style="{ backgroundColor: '#dc4239' }" androidStatusBarColor="#dc4239">
      <nb-body>
        <nb-title>Smarth</nb-title>
      </nb-body>
    </nb-header>
    <nb-content padder>
        <nb-form>
            <nb-input placeholder="Nombre" v-model="lista.nombre"></nb-input>
            <nb-button :onPress="addNom">
                <nb-text>Agregar!</nb-text>
            </nb-button>
        </nb-form>
        <nb-button :onPress="next">
            <nb-text>Ver lista</nb-text>
        </nb-button>
    </nb-content>
  </nb-container>
</template>
<script>
import { StackNavigator } from "vue-native-router";
import { Toast } from "native-base";
import Firebase,{functions} from 'firebase'

let config = {

  };
let app = Firebase.initializeApp(config);
let db = app.database();
let refNom = db.ref('nombres')

export default {
    props:{
         navigation:{
             type:Object
         }
     },
     data(){
         return{
             lista:{
                 nombre:''
             }
         }
     },
     firebase:{
            nombre:refNom
    },
     methods: {
         addNom(){
             if (this.lista.nombre == ''){
                 Toast.show({
                    text: "Ingresa algun texto",
                    duration: 3000,
                    type: "warning"
                });
             }else{
                refNom.push(this.lista)
                this.lista.nombre = ''
             }
         },
         next(){
             this.navigation.navigate('Lista')
         }
     },
}
</script>
