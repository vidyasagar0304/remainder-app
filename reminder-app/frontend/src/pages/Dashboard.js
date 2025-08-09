import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReminderCard from '../components/ReminderCard';
import AddReminderModal from '../components/AddReminderModal';

const Dashboard = () => {
  const [reminders, setReminders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const fetchReminders = async (token) => {
    try {
      const res = await axios.get('http://localhost:5000/api/reminders', {
        headers: { 'x-auth-token': token },
      });
      setReminders(res.data);
    } catch (err) {
      console.error(err);
      // If token is invalid or expired, log out user
      handleLogout();
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (!token) {
      navigate('/login');
    } else {
      fetchReminders(token);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    navigate('/login');
  };

  const handleSaveReminder = async (reminderData) => {
    const token = localStorage.getItem('auth-token');
    try {
      await axios.post('http://localhost:5000/api/reminders', reminderData, {
        headers: { 'x-auth-token': token },
      });
      fetchReminders(token); // Refetch reminders to show the new one
    } catch (err) {
      console.error('Failed to save reminder:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center flex-shrink-0">
              <h1 className="text-2xl font-bold text-teal-600">ReminderApp</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-md hover:text-gray-700 hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {reminders.length > 0 ? (
                    reminders.map((reminder) => (
                        <ReminderCard
                            key={reminder._id}
                            title={reminder.title}
                            description={reminder.description}
                            date={reminder.date}
                        />
                    ))
                ) : (
                    <div className="col-span-full p-8 text-center bg-white rounded-lg shadow">
                        <p className="text-gray-500">You have no reminders yet. Add one!</p>
                    </div>
                )}
            </div>
        </div>
      </main>

      <div className="fixed bottom-10 right-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="p-4 text-white bg-teal-600 rounded-full shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
        </button>
      </div>

      <AddReminderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveReminder}
      />
    </div>
  );
};

export default Dashboard;
