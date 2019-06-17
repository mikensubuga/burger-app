import axios from "axios";
const instance = axios.create({
  baseURL: "https://my-burger-ef5e6.firebaseio.com/"
});
export default instance;
