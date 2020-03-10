// const axios = require('axios').default;
// import axios from "axios";

let sendGetRequest = () => {
    console.log("axios: ", axios);
    axios.get("/api/tags")
        .then(res => {
            console.log("response: ", res);
        })
        .catch(err => {
            console.log("error: ", err);
        })
}
