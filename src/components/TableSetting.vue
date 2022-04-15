<template>
<div class="table">
    <div class="tableName">
      <slot name="tableName" />
        {{ createTable.TableNumber }}
    </div>

   <div class="guests">
      <slot name="guests" />
        {{ createTable.guestName }}
    </div>

  </div>
</template>

<script setup>
import { useStore } from '../stores/store'

const store = useStore();
const createTable = createTable()

return{ 
  store,
  createTable

}


</script>

<style scoped>
.table{
  border: 1px solid silver;
  border-radius: 8px;
  max-width: 200px;
  margin: 0 5px;
  cursor:pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 0.2s;
}
.guests{
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
font-size:1.25em;
}
.table, .guests{
  border-bottom: 1px solid silver;
}

.table:hover{
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}
</style>