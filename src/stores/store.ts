import { defineStore } from 'pinia'
import  { faker } from '@faker-js/faker'



export const useStore = defineStore('store',{
    state: () =>{
        return{ 
            createTable

        }
    }
})

export default interface tableSetting{
    tableNumber: number,
    guestId: string,
    guestName: string,
    isSeated: boolean
    
 

}



export function createTable(): tableSetting{
    const tableNumber = faker.datatype.number({min: 1, max: 12})
    const guestId = faker.datatype.uuid()
    const guestName = faker.name.findName()
    const isSeated = faker.datatype.boolean()


    return{
        tableNumber,
        guestId,
        guestName,
        isSeated
}

}