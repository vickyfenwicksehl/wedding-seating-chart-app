<template>
<h1>Vicky & Tyler are FINALLY getting hitched!</h1>
<h2>So let's find out where you should sit!</h2>
    <div class="table">
        <div class ="tableNumber">
            Head Table
            <slot name ="tableNumber"/>
        </div>

        <div class="tableGuests">
            Jake Peralta<br>
            Rosa Diaz<br>
            Terry Jeffords<br>
            Amy Santiago<br>
            Charles Boyle<br>
            Gina Linetti<br>
            Raymond Holt<br>
            Michael Hitchcock<br>
            Norm Scully<br>
            <slot name ="tableGuests"/>
        </div>
    </div>

</template>

<script>

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
.tableNumber, .tableGuests{
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
  border-bottom: 1px solid silver;
}
.tableNumber{
    font-size:1.25em;
}
.table:hover{
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}
</style>
