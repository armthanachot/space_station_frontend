import axios from "axios"
const apiUrl = "http://localhost:3300"
const post = async(url,data)=>{
    const result = await axios.post(`${apiUrl}/${url}`,data)
    return result
}

const postFormData = async(url,data)=>{
    const headers = {headers:{"Content-Type":"multipart/form-data"}}
    const result = await axios.post(`${apiUrl}/${url}`,data,headers)
    return result 
}

const get = async(url)=>{
    const result = await axios.get(`${url}`)
    return result 
}

export {
    post,postFormData,get
}