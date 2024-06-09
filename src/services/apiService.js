import axios from "axios";

const BaseUrl = process.env.REACT_APP_API_URL;
export const fetchFlights = async () => {
    try {
        const response = await axios.get(`${BaseUrl}/flights`);
        console.log("response: ", response);
        return response;
    } catch (error) {
        console.error("fetch api error: ", error);
        throw error;
    }
}

export const fetchFlightsDetails = async (id) => {
    try {
        const response = await axios.get(`${BaseUrl}/flights/${id}`);
        return response;
    } catch (error) {
        console.error("fetch detail api error: ", error);
        throw error;
    }
}