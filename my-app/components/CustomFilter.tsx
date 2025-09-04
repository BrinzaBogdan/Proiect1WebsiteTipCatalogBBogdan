'use client';
import React from 'react';

interface CustomFilterProps {
  title: string;
}

const CustomFilter = ({ title }: CustomFilterProps) => {
  return (
    <div className="border border-gray-300 rounded-lg px-4 py-2 bg-white">
      <label className="font-semibold text-gray-800">{title}</label>
      <select className="ml-2 outline-none border-none">
        <option value="">Select {title}</option>
        <option value="option1">{title} Option 1</option>
        <option value="option2">{title} Option 2</option>
      </select>
    </div>
  );
};

export default CustomFilter;
