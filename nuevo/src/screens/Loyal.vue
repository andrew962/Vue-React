<template>
  <nb-container>
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="back">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Loyal</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-text></nb-text>
      <nb-item>
        <nb-input/>
      </nb-item>
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
    methods: {
        back:function(){
            this.navigation.goBack()
        }
    },
    
}
</script>