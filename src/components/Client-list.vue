<template>
    <div class = "container">
        <h1 class = "text-center">Client list</h1>
        <table class="table table=striped">
            <thead>
                <th>id</th>
                <th>first name</th>
                <th>last name</th>
                <th>emailId</th>
                <th>phoneNumber</th>
            </thead>
            <tbody>
                <tr v-for="client in clients" v-bind:key="client.id">
                    <td>{{client.id}}</td>
                    <td>{{client.firstName}}</td>
                    <td>{{client.lastName}}</td>
                    <td>{{client.emailId}}</td>
                    <td>{{client.phoneNumber}}</td>        
                </tr>
            </tbody>
        </table>
        </div>
</template>



<script>
import ClientService from '../services/ClientService'

    export default {
        /* eslint-disable */
        name: 'clients',
        data(){
            return{
                 clients : []
            }
        },
        methods: {
            getClients(){
                ClientService.getClients().then((response) =>{
                    this.clients = response.data;
                })
            }
        },
        created(){
            console.log('TY KURWO JEBANA')
            this.getClients()
        }
    }

</script>


<style>


</style>