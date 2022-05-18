import axios from 'axios'

const CLIENT_API_BASE_URL = 'http://localhost:8081/clients'


class ClientService{
    getClients(){
        return axios.get(CLIENT_API_BASE_URL);
    }
}


export default new ClientService()

