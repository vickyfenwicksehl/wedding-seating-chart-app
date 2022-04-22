<template>
<div class="tableCount">
  <h3> How many tables do you need? </h3>
    <input id = "totalTables" v-model.number="numberOfTables" />
  </div>

<router-link to="/table">
  <Table>Table</Table>
</router-link>
<router-view />

</template>  

<script setup lang="ts">

export default{
  const numberOfTables = 0

  return{
    numberOfTables
  }

}

</script>

<style scoped>

</style>