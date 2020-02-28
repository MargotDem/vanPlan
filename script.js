// const axios = require('axios').default;
// import axios from "axios";

let sendGetRequest = () => {
    console.log("axios: ", axios);
    axios.get("api/test")
        .then(res => {
            console.log("response: ", res);
        })
        .catch(err => {
            console.log("error: ", err);
        })
}
