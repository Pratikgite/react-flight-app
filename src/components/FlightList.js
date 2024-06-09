import React, { useContext } from 'react';
import { FlightContext } from '../contexts/flightContext';
import { Link } from 'react-router-dom';

export default function FlightList() {

    const { flights, loading, error } = useContext(FlightContext);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="card mt-3">
                    <div className="card-header"> Flight List </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">S.No.</th>
                                <th scope="col">Flight No.</th>
                                <th scope="col">Airline</th>
                                <th scope="col">Origin</th>
                                <th scope="col">Destination</th>
                                <th scope="col">Departure Time</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {flights.map((flight, i) => (
                                <tr key={i+1}>
                                <th scope="row">{i+1}</th>
                                <td>{flight.flightNumber}</td>
                                <td>{flight.airline}</td>
                                <td>{flight.origin}</td>
                                <td>{flight.destination}</td>
                                <td>{flight.departureTime}</td>
                                <td>{flight.status}</td>
                                <td><Link to={`/detail/${flight.id}`} className='btn btn-primary' >View</Link></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
