<template>
<root>
  <app-navigation><app-navigation>
</root>
</template>

<script>
import Vue from "vue-native-core";
import { VueNativeBase,Root,Toast } from "native-base";
import { StackNavigator } from 'vue-native-router'
import App from './src/screens/App.vue'
import Lista from './src/screens/Lista.vue'

Vue.use(VueNativeBase)

const AppNavigation = StackNavigator(
  {
    App: { screen:App },
    Lista: { screen:Lista }
  },
  {
    initialRouteName: 'App',
    headerMode: 'none'
  }
)
export default {
  components:{
    AppNavigation,
    Root
  }
}
</script>
