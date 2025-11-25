//enable cookies in axios
import axios from "axios"

export default axios.create({
    baseURL: "http://localhost:8080", //by default all reqs should go express-server port
    withCredentials: true //allow cookies to be sent/recived
});

//all reqs made by this axios instanse go to backend