import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const CustomDatePicker = ({ ClassName }) => {
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="relative">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
        className={`${ClassName}`}
        dayClassName={(date) => (date < new Date() ? 'disabled' : '')}
      />

      <span className="absolute inset-y-0 right-0 flex items-center pr-3">
        <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-400" />
      </span>
    </div>
  );
};

export default CustomDatePicker;
