import axios from "axios";

const baseURL = `http://192.168.1.127:3500/api/v1`

export default axios.create({
    baseURL
})