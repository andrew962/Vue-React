<template>
  <view class="container">
    <nb-text class="text-color-primary">My Vue Native App</nb-text>
    </view>
</template>
<script>
import { StackNavigator } from "vue-native-router";
export default {
    props:{
         navigation:{
             type:Object
         }
     },
}
</script>
