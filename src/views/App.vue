<template>
<div class="tableCount">
  <h3> How many tables do you need? </h3>
  <button @click="numberOfTables">Number of Tables is: {{ tableNumbers }}</button>
</div>

  <table />

  <div v-bind="tableName">
    {{ table.tableName }}
  </div>

<div v-bind="guests">
  {{ table.guests}}
  </div>



</template>  

<script setup>
//import { useStore } from '../stores/store'
import { ref, onMounted} from 'vue'
import table from '../components/TableSetting.vue'



const tableNumbers = ref(0)

function numberOfTables(){
  tableNumbers.value++
}

onMounted(()=>{
  console.log(`The number of tables is ${tableNumbers.value}`)
})



</script>

<style scoped>

</style>