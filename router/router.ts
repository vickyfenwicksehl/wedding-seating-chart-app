import{
    createWebHistory,
    createRouter
} from 'vue-router'
import Table from '../src/components/TableSetting.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/table',
            component: Table
        }

    ]
})

export { router }