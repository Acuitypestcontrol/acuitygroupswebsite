import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBookings = async () => {
      try {
        const response = await fetch("YOUR_API_ENDPOINT");
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acuitygroups.in/admindashboard" />
        <title>Admin Dashboard | Acuity Groups</title>
        <meta
          name="description"
          content="Admin dashboard for Acuity Groups – manage bookings, enquiries, and facility management requests."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="author" content="Acuity Groups" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://acuitygroups.in/admindashboard"
        />
        <meta property="og:title" content="Admin Dashboard | Acuity Groups" />
        <meta
          property="og:description"
          content="Admin dashboard for Acuity Groups – manage bookings, enquiries, and facility management requests."
        />
        <meta property="og:site_name" content="Acuity Groups" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Admin Dashboard | Acuity Groups" />
        <meta
          name="twitter:description"
          content="Admin dashboard for Acuity Groups – manage bookings, enquiries, and facility management requests."
        />
      </Helmet>

      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">
          Admin Dashboard
        </h1>
        <div className="grid gap-4">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
            >
              <p>
                <strong>Name:</strong> {booking.name}
              </p>
              <p>
                <strong>Phone:</strong> {booking.phone}
              </p>
              <p>
                <strong>Vehicle:</strong> {booking.vehicle}
              </p>
              <p>
                <strong>Seats:</strong> {booking.Seats}
              </p>
              <p>
                <strong>From date:</strong> {booking.Fromdate}
              </p>
              <p>
                <strong>To date:</strong> {booking.Todate}
              </p>
              <hr className="my-2" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
