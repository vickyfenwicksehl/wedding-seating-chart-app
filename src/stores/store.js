import { defineStore } from 'pinia'

export const useStore = defineStore('store',{
    state: () =>{
        return{
           tableName: 'Table One',[
           {
               tableGuestId: 0,
               tableGuestName: 'Jake Peralta',
               isSeated: true,
           },
           {
               tableGuestId: 1,
               tableGuestName: 'Amy Santiago',
               isSeated: true
           }
        ]

        }
    }
})
        