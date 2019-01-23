<template>
    <app-navigation></app-navigation>
</template>

<script>
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
import { StackNavigator } from 'vue-native-router'

import App from './src/screens/App.vue'
import Tabla1 from './src/screens/Tabla1.vue'
import Tabla2 from './src/screens/Tabla2.vue'
import Tabla3 from './src/screens/Tabla3.vue'
import Tabla4 from './src/screens/Tabla4.vue'
import Tabla5 from './src/screens/Tabla5.vue'

Vue.use(VueNativeBase)

//Con este se controlan las rutas dentro de la app
const AppNavigation = StackNavigator(
  {
    App: { screen: App},
    Tabla1: { screen:Tabla1 },
    Tabla2: { screen:Tabla2 },
    Tabla3: { screen:Tabla3 },
    Tabla4: { screen:Tabla4 },
    Tabla5: { screen:Tabla5 },
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
