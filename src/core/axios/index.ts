import axios from "axios";

const axiosAPI = axios.create({
    url: 'https://jsonplaceholder.typicode.com',

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
})

export default axiosAPI;
