import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FlightDetailsContext } from '../contexts/flightContext';

export default function FlightDetails() {
    const { detail, loading, error } = useContext(FlightDetailsContext);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!detail) { 
        return <div>Flight not found</div>;
    }
    
    return (
        <div>
            <div className="container-fluid">
                <Link to="/"><button className="btn btn-dark btn-sm"><i className="fa fa-arrow-left"></i> Back</button></Link>
                <div className="card mt-3">
                    <div className="card-header"> Flight Detail </div>
                    <div className="card-body">
                        <p><b>Flight No.:</b> {detail.flightNumber}</p>
                        <p><b>Airline:</b> {detail.airline}</p>
                        <p><b>Origin:</b> {detail.origin}</p>
                        <p><b>Destination:</b> {detail.destination}</p>
                        <p><b>Departure Time:</b> {detail.departureTime}</p>
                        <p><b>Status:</b> {detail.status}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
