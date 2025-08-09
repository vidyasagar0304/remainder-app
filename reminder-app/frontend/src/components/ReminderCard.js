import React from 'react';

const ReminderCard = ({ title, description, date }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <div className="mt-4 text-xs font-medium text-gray-500">
        <span className="inline-block px-2 py-1 leading-none text-teal-800 bg-teal-100 rounded-full">
          {formattedDate}
        </span>
      </div>
    </div>
  );
};

export default ReminderCard;
