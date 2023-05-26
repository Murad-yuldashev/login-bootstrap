import axios from "axios";
import { getItem } from "../helpers/Persistence-storage";

axios.defaults.baseURL = 'http://localhost:3000/api';

axios.interceptors.request.use(config => {
    const token = getItem('token');
    const authoration = token ? `Token ${token}` : '';
    config.headers.Authorization = authoration;
    return config
})

export default axios;