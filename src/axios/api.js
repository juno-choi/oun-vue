import axios from "axios";

const req = axios.create({
    baseURL: '/ounapi'
});

export default req;