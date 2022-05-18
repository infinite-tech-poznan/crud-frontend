<template>
    <form v-on:submit.prevent="handleSubmit">
        <div class="form-group">
                <label>First name</label>
                <input 
                type="text" 
                name="first_name" 
                class="form-control"
                placeholder="First name" 
                v-model="client.firstName"/>
            </div>

               <div class="form-group">
                <label>Last name</label>
                <input 
                type="text" 
                name="last_name" 
                class="form-control"
                placeholder="Last name"
                v-model = "client.lastName"
                />
            </div>

              <div class="form-group">
                <label>Email</label>
                <input 
                type="text"
                name="email" 
                class="form-control"
                placeholder="email"
                v-model = "client.emailId"
                />
            </div>

              <div class="form-group">
                <label>Phone</label>
                <input 
                type="text"
                name="phone"
                class="form-control"
                placeholder="phone"
                v-model = "client.phoneNumber"
                />
            </div>


           <input type="submit" class="btn btn-primary" value="Add Item"/>
        </form>
</template>



<script>

import axios from 'axios'

export default {
    name: 'Add-client',
    data(){
        return{
            client: {}
        }
    },
    methods: {
        handleSubmit (){
            if(this.client == undefined){return}
            console.log('TY KURWO iza')
            let uri = 'http://localhost:8081/client';
                axios.post(uri, this.client).then((response) => {
                       console.log(response.data)
             })
        }
    }
}




</script>


<style>


</style>