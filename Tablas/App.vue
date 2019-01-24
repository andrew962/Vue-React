<template>
    <root>
      <app-navigation></app-navigation>
    </root>
</template>

<script>
import Vue from "vue-native-core";
import { VueNativeBase,Root } from "native-base";
import { StackNavigator } from 'vue-native-router'

import App from './src/screens/App.vue'
import Tabla1 from './src/screens/Tabla1.vue'
import Tabla2 from './src/screens/Tabla2.vue'
import Tabla3 from './src/screens/Tabla3.vue'
import Tabla4 from './src/screens/Tabla4.vue'
import Tabla5 from './src/screens/Tabla5.vue'
import Tabla6 from './src/screens/Tabla6.vue'
import Tabla7 from './src/screens/Tabla7.vue'
import Tabla8 from './src/screens/Tabla8.vue'
import Tabla9 from './src/screens/Tabla9.vue'
import Tabla10 from './src/screens/Tabla10.vue'
import Tabla11 from './src/screens/Tabla11.vue'
import Tabla12 from './src/screens/Tabla12.vue'


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
    Tabla6: { screen:Tabla6 },
    Tabla7: { screen:Tabla7 },
    Tabla8: { screen:Tabla8 },
    Tabla9: { screen:Tabla9 },
    Tabla10: { screen:Tabla10 },
    Tabla11: { screen:Tabla11 },
    Tabla12: { screen:Tabla12 },
  },
  {
    initialRouteName: 'App',
    //headerMode - es para poner la barra de navegacion oculta
    headerMode: "none"
  },
);

export default {
  components:{ AppNavigation,Root }
}
</script>
