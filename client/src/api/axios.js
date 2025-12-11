//enable cookies in axios
//all reqs made by this axios instanse go to backend
import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:8080", //by default all reqs should go express-server port
    withCredentials: true //allow cookies to be sent/recived
});

export function setInterceptors(setErr) {
    api.interceptors.response.use(
        (res) => res,
        (err) => {
            const msg = err.response?.data?.message || err.message || "Unexpected error!";
            setErr(msg);
            return Promise.reject(err);
        }
    )
}

export default api;