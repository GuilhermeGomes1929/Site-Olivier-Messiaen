import axios from "axios";

const api = axios.create({
    baseURL: "https://olivier-messiaen.herokuapp.com",
});
api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default api;