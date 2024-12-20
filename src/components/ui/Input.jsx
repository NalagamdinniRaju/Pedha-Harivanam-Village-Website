import React from 'react';

export default function Input({ label, id, type = 'text', ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
        {...props}
      />
    </div>
  );
}