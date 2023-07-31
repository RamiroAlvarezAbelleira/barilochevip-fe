import axios from 'axios'

export default axios.create({
    baseURL: 'https://barilochevip-be-production.up.railway.app/api/v1'
})