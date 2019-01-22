<template>
    <app-navigation></app-navigation>
</template>

<script>
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
import { StackNavigator } from 'vue-native-router'

import App from './src/screens/App.vue'
import Loyal from './src/screens/Loyal.vue'

Vue.use(VueNativeBase)

//Con este se controlan las rutas dentro de la app
const AppNavigation = StackNavigator(
  {
    App: { screen: App},
    Loyal: { screen:Loyal }
  },
  {
    initialRouteName: 'App',
    //headerMode - es para poner la barra de navegacion oculta
    headerMode: "none"
  },
);

export default {
  components:{ AppNavigation }

}
</script>
