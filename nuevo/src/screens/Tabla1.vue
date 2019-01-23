<template>
  <nb-container>
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="back">
          <nb-icon :name="'md-open'" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Tabla #1</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-button bordered block primary :style="{ marginBottom:20 }" v-for="item in valor" :key="item">
        <nb-text>{{num}} X {{item}} = {{item * num}}</nb-text>
      </nb-button> 
    </nb-content>
  </nb-container>
</template>
<script>
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data(){
    return{
      num:1,
      valor:12
    }
  },
    methods: {
        back:function(){
            this.navigation.goBack()
        }
    },
    
}
</script>