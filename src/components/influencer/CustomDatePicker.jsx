import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ selectedDate, handleChange }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleChange}
      className="mt-1 p-2 border rounded-md w-full text-base"
      dateFormat="yyyy-MM-dd"
      isClearable
      placeholderText="Select Date"
      
      popperClassName="z-50"
      calendarClassName="bg-white border rounded-md shadow-lg"
      wrapperClassName="relative"
    />
  );
};

export default CustomDatePicker;
