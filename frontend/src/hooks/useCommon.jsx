import axios from "axios";

const axiosCommon = axios.create({
    baseURL: "https://rapid-quest-assignment-server.vercel.app/api"
    //baseURL: "http://localhost:5000/api"
})



const useCommon = () => {
    return axiosCommon
};

export default useCommon;
