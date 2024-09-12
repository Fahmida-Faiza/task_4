import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://ask4-sable.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;