import React from 'react';

// Placeholder to host a component
const Hours = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();

    let hours;
    let isOpen;

    switch (currentDay) {
        case 0: // Sunday
        case 6: // Saturday
            hours = '9am - 8pm';
            isOpen = currentHour >= 9 && currentHour < 20;
            break;
        default: // Monday to Friday
            hours = '10am - 4pm';
            isOpen = currentHour >= 10 && currentHour < 16;
            break;
    }

    return (
        <div>
            <h2>Horarios del Refugio</h2>
            <p>{`Horario del día actual: ${hours}`}</p>
            <p>{`Hora actual: ${currentHour}:${currentMinutes < 10 ? '0' : ''}${currentMinutes}`}</p>
            <p>{`El refugio está ${isOpen ? 'abierto' : 'cerrado'}`}</p>
        </div>
    );
};

export default Hours;
