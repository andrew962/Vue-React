<template>
<nb-container>
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
      <nb-text>{{mensg}}</nb-text>
      <nb-item>
        <nb-input v-model="mensg" />
      </nb-item>
    </nb-content>
    <nb-footer>
      <nb-footer-tab>
        <nb-button active full>
          <nb-text>Footer</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>

<script>
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";

Vue.use(VueNativeBase)

export default {
  data:function(){
    return{
      mensg:''
    }
  }
}
</script>
<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>