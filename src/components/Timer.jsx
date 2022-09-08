import React from 'react';

const Timer = ({ date }) => {
    const endDate = new Date(date).getTime();
    const today = new Date().getTime();
    const distance = endDate - today;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return (
        <div className='timer-box'>
            <h1 className='time-box'> {days} Days, </h1>
            <h1 className='time-box'>{hours} Hours </h1>
            <h1 className='time-box'>{minutes} Minutes, </h1>
            <h1 className='time-box'>{seconds} Seconds</h1>
        </div>
    );
};

export default Timer;
