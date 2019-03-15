<template>
    <nb-container>
    <nb-header :style="{ backgroundColor: '#81DAF5' }" androidStatusBarColor="#01A9DB" noLeft>
      <nb-body>
          <!--Titulo del encabezado-->
        <nb-title>Alita</nb-title>
      </nb-body>
    </nb-header>
    <nb-content padder>
        <!--Contenido-->
        <nb-card class="mb-15">
                <nb-card-item>
                    <nb-body>
                        <nb-text>Ingresa los datos</nb-text>
                        <nb-text>Ten en cuenta que si ingresas algún dato mal, la operación estará mal</nb-text>
                    </nb-body>            
                </nb-card-item>
            </nb-card>
        <nb-form>
            <nb-item inlineLabel>
                <nb-label>Tarifa laboral ($)</nb-label>
                <nb-input keyboardType="numeric"  v-model="TL"/>
            </nb-item>
            <nb-item inlineLabel>
                <nb-label>Productividad media (Por mes)</nb-label>
                <nb-input keyboardType="numeric"  v-model="PM"/>
            </nb-item>
            <nb-item inlineLabel>
                <nb-label>Esfuerzo ajustado (Personas)</nb-label>
                <nb-input keyboardType="numeric"  v-model="EA"/>
            </nb-item>
            <nb-item inlineLabel>
                <nb-label>Lineas de codigo estimadas (-)</nb-label>
                <nb-input keyboardType="numeric"  v-model="LCE"/>
            </nb-item>
            <nb-item inlineLabel>
                <nb-label>Plazo (Del cliente - Meses)</nb-label>
                <nb-input keyboardType="numeric"  v-model="PLAZO"/>
            </nb-item>
            <nb-button :onPress="calcular" block info>
                <nb-text>Calcular</nb-text>
            </nb-button>
        </nb-form>
        <nb-list>
            <nb-list-item>
                <nb-text>Costo por linea de codigo: ${{ CLDD }}</nb-text>
            </nb-list-item>
            <nb-list-item>
                <nb-text>Costo del Software: ${{ CDSD }}</nb-text>
            </nb-list-item>
            <nb-list-item>
                <nb-text>Esfuerzo real: {{ ERD }} personas</nb-text>
            </nb-list-item>
            <nb-list-item>
                <nb-text>Productividad total proyectada individualmente: {{ PTPID }} LDC</nb-text>
            </nb-list-item>
            <nb-list-item>
                <nb-text>Productividad media ajustada: {{ PMAD }} LDC/mes</nb-text>
            </nb-list-item>
            <nb-list-item>
                <nb-text>Tiempo: {{ TIEMPOD }} Meses </nb-text>
            </nb-list-item>
        </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import { StackNavigator } from "vue-native-router";
import { Right,Toast } from 'native-base';
import { Alert } from 'react-native';
export default {
    props:{
         navigation:{
             type:Object
         }
     },
     data(){
         return{
             // Entrada
             TL:'',//Tarifa Laboral
             TLD:0,

             PM:'', //Productividad media
             PMD:0,

             LCE:'', //Lineas de codico estimadas
             LCED:0,

             PLAZO:'', //Tiempo de entraga del soft
             PLAZOD:0,

             EA:'', //Esfuerzo ajustado
             EAD:0,

             // Salidas
             ER:0, //Esfuerzo real
             ERD:0,//Esfuerzo real redondiado

             CLD:0,//Costo por linea de codigo
             CLDD:0,//Costo por linea de codigo "Redondiado a dos(2) decimales"

             CDS:0, //Costo del Software
             CDSD:0,//Costo del Software sin decimal

             PTPI:0, //Productividad total proyectada individualmente
             PTPID:0,//Productividad total proyectada individualmente redondeado a (3) decimales

             PMA:0, //Productividad media ajustada
             PMAD:0,//Productividad media ajustada redondeado

             TIEMPO:'', //Tiempo
             TIEMPOD:0, //Tiempo redondeado

             AJUSTE:0,
             TOTAL:0

         }
     },
     methods: {
         back(){
             this.navigation.goBack()
         },
         calcular(){
             //Costo por linea de codigo CLD
             if (!(this.TL && this.PM && this.LCE && this.EA && this.PLAZO != '')){
                Toast.show({
                    text: "No puede haber ni un campo en blanco",
                    buttonText: "Okay",
                    duration: 3000,
                    type:'danger'
                }); 
             }else{
                this.TLD = parseFloat(this.TL)
                this.PMD = parseFloat(this.PM)
                this.LCED = parseFloat(this.LCE)
                this.EAD = parseFloat(this.EA)
                this.PLAZOD = parseInt(this.PLAZO)
                this.AUMENTOD = parseFloat(this.AUMENTO)

                this.CLDD = parseFloat(this.TLD/this.PMD).toFixed(2)

                // Costo del Software (CDS)
                this.CDS = this.CLDD * this.LCED
                this.CDSD = parseFloat(this.CDS)

                // Esfuerzo real ER
                this.ER = this.CDSD / this.TLD
                this.ERD = parseFloat(this.ER).toFixed()

                // Productividad total proyectada individualmente (PTPI)
                this.PTPI = this.LCED / this.EAD
                this.PTPID = parseFloat(this.PTPI).toFixed()

                // Productividad media ajustada (PMA)
                this.PMA = (this.EAD * this.PMD)/this.ERD
                this.PMAD = parseFloat(this.PMA).toFixed()

                //TIEMPO
                this.TIEMPO = this.PTPID / this.PMAD
                this.TIEMPOD = parseFloat(this.TIEMPO).toFixed()

                if(this.TIEMPOD >= this.PLAZOD){
                    Alert.alert(
                    'Aplicar porcentaje % para aumentar productividad',
                    'El tiempo calculado es mayor o igual al plazo del cliente, se aplica manualmente',
                    [
                        {text: 'Entendido', onPress: () => console.log('OK')},,
                    ],
                    { cancelable: false }
                );
                }
             }
             
         },
     },
}
</script>
<!--
    Formulas
    Costo por linea de codigo (LDC) = TL / PM
    Costo del Software (CDS) = LDC * LCE
    Esfuerzo "Personas al mes" = CDS / TL
    Productividad total proyectada individualmente (PTPI) = LCE / EA


-->