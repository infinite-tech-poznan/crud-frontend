import { createRouter, createWebHistory} from 'vue-router'
import Client from '../components/Client-list.vue'
import Addclient from '../components/Add-client.vue'

const routes = [
    {
        path: '/client-list',
        name: 'Client',
        component: Client
    },
    {
        path: '/add-client',
        name: 'Addclient',
        component: Addclient
    }
]




const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



export default router