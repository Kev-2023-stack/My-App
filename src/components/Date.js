import React from 'react';

function DateComponent({ date }) {
    if (!(date instanceof Date)) {
        // Falls date kein Date-Objekt ist, versuche es in ein Date-Objekt umzuwandeln
        date = new Date(date);
    }

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return (
        <div className="date-component">
            <span>{year}</span>
            <span>{month}</span>
            <span>{day}</span>
        </div>
    );
}

export default DateComponent;
