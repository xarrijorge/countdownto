import React from 'react';

const Timer = ({ date }) => {
    const endDate = new Date(date).getTime();
    const today = new Date().getTime();
    const distance = endDate - today;
    const days = String(Math.floor(distance / (1000 * 60 * 60 * 24)));
    const hours = String(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const minutes = String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    );
    const seconds = String(Math.floor((distance % (1000 * 60)) / 1000));
    return (
        <div className='timer-box'>
            <h1 className='time-box'> {days.padStart(2, '0')} Days,</h1>
            <h1 className='time-box'>{hours.padStart(2, '0')} Hours</h1>
            <h1 className='time-box'>{minutes.padStart(2, '0')} Mins,</h1>
            <h1 className='time-box'>{seconds.padStart(2, '0')} Secs</h1>
        </div>
    );
};

export default Timer;
