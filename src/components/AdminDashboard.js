import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT');
                const data = await response.json();
                setBookings(data);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        };

        fetchBookings();  // ✅ Call the async function inside `useEffect`
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            {bookings.map((booking, index) => (
                <div key={index}>
                    <p>Name: {booking.name}</p>
                    <p>Phone: {booking.phone}</p>
                    <p>Vehicle: {booking.vehicle}</p>
                    <p>Seats: {booking.Seats}</p>
                    <p>Fromdate: {booking.Fromdate}</p>
                    <p>Todate: {booking.Todate}</p>



                    <hr />
                </div>
            ))}
        </div>
    );
};

export default AdminDashboard;
