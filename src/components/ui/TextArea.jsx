import React from 'react';

export default function TextArea({ label, id, rows = 4, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
        {...props}
      />
    </div>
  );
}