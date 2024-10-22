import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [customers, setCustomers] = useState([]);
  const [guides, setGuides] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Temporary sample data
    setCustomers([
      { id: 1, name: 'Gangster', email: 'gangster@example.com', status: 'active' },
      { id: 2, name: 'Gangster 2', email: 'gangster2@example.com', status: 'suspended' },
    ]);

    setGuides([
      { id: 1, name: 'Guide A', email: 'guideA@example.com', status: 'active' },
      { id: 2, name: 'Guide B', email: 'guideB@example.com', status: 'suspended' },
    ]);

    setBookings([
      { id: 1, customerName: 'Gangster', guideName: 'Guide A', date: '2024-10-20', status: 'confirmed' },
      { id: 2, customerName: 'Gangster 2', guideName: 'Guide B', date: '2024-10-21', status: 'pending' },
    ]);
  }, []);

  // Toggle function for customer status
  const toggleCustomerStatus = (id, currentStatus) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === id
          ? { ...customer, status: currentStatus === 'active' ? 'suspended' : 'active' }
          : customer
      )
    );
  };

  // Toggle function for guide status
  const toggleGuideStatus = (id, currentStatus) => {
    setGuides((prevGuides) =>
      prevGuides.map((guide) =>
        guide.id === id
          ? { ...guide, status: currentStatus === 'active' ? 'suspended' : 'active' }
          : guide
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Panel VoyEase</h1>

      
      <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td className="border px-4 py-2">{customer.name}</td>
                <td className="border px-4 py-2">{customer.email}</td>
                <td className="border px-4 py-2">{customer.status}</td>
                <td className="border px-4 py-2">
                  <button
                    className={`${
                      customer.status === 'active' ? 'bg-red-500' : 'bg-green-500'
                    } text-white px-4 py-1 rounded-lg`}
                    onClick={() => toggleCustomerStatus(customer.id, customer.status)}
                  >
                    {customer.status === 'active' ? 'Suspend' : 'Activate'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
      <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Guide Details</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {guides.map((guide) => (
              <tr key={guide.id}>
                <td className="border px-4 py-2">{guide.name}</td>
                <td className="border px-4 py-2">{guide.email}</td>
                <td className="border px-4 py-2">{guide.status}</td>
                <td className="border px-4 py-2">
                  <button
                    className={`${
                      guide.status === 'active' ? 'bg-red-500' : 'bg-green-500'
                    } text-white px-4 py-1 rounded-lg`}
                    onClick={() => toggleGuideStatus(guide.id, guide.status)}
                  >
                    {guide.status === 'active' ? 'Suspend' : 'Activate'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Guide</th>
              <th className="px-4 py-2">Booking Date</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="border px-4 py-2">{booking.customerName}</td>
                <td className="border px-4 py-2">{booking.guideName}</td>
                <td className="border px-4 py-2">{booking.date}</td>
                <td className="border px-4 py-2">{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
