import axios from "axios";

const Api = axios.create({baseUrl: "https://api-capstone-m3.herokuapp.com/"})

export default Api