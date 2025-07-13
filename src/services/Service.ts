import axios from "axios";

const api = axios.create ({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

export const getAll = async (url: string) => {
    const response = await api.get(url);
    return (response.data);
}