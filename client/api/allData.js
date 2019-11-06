import axios from "axios"

const imageApi = 'http://localhost:3000/api'

export const getAllData = ({query, callback}) => {
    axios.get(`${imageApi}?q=${query}`).then(callback)
    .catch((error) => {
        console.log(error);
    })
} 