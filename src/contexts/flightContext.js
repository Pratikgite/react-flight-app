import { createContext, useEffect, useState } from "react";
import { fetchFlights, fetchFlightsDetails } from "../services/apiService";

export const FlightContext = createContext();
export const FlightDetailsContext = createContext();

export const FlightProvider = ({ children }) => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchList = async () => {
            setLoading(true);
            try {
                const FetchApiResponse = await fetchFlights();
                setFlights(FetchApiResponse.data);
            } catch (error) {
                setError(error.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        }
        fetchList();

        // every 30 seconds call the fetchList function
        setInterval(() => { fetchList(); }, 30000);
    }, []);
    
    return (
        <FlightContext.Provider value={{ flights, loading, error }}>
            {children}
        </FlightContext.Provider>
    );
}

export const FlightDetailProvider = ({ children, id }) => {
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const FetchApiResponse = await fetchFlightsDetails(id);
                setDetail(FetchApiResponse.data);
            } catch (error) {
                setError(error.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        }
        fetchDetail();
    }, [id]);

    return (
        <FlightDetailsContext.Provider value={{ detail, loading, error }}>
            {children}
        </FlightDetailsContext.Provider>
    );
}