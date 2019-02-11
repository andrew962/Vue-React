<template>
    <root>
        <app-navigation><app-navigation>
    </root>
</template>

<script>
import Vue from "vue-native-core";
import { VueNativeBase,Root,Icon } from "native-base";
import { StackNavigator } from 'vue-native-router'

import Init from './src/screen/Init.vue'

Vue.use(VueNativeBase)

const AppNavigation = StackNavigator(
    {
        App: { screen:Init },
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