import React from 'react';
import Timer from './components/Timer';
import { eventsList } from './components/eventsList';

import './App.css';

function App() {
    const [dateVal, setDate] = React.useState('December 25, 2022');
    const [time, setTime] = React.useState(Date.now());
    const [eventName, setEventName] = React.useState('Christmas');
    const [personalEvent, setPersonalName] = React.useState('');
    const [personalDate, setPersonalDate] = React.useState('');

    const [thisYear] = React.useState(new Date().getFullYear());

    const handlePersonalEvent = (e) => {
        setDate(personalDate);
        setEventName(personalEvent);
    };
    const handleEventChange = (e) => {
        const currentMonth = new Date().getMonth();
        const monthOfEvent = new Date(e.target.value).getMonth();
        let yearVal = '';
        if (currentMonth > monthOfEvent) {
            yearVal = thisYear + 1;
        } else {
            yearVal = thisYear;
        }
        setDate(`${e.target.value}, ${yearVal}`);
        setEventName(e.target.name);
        console.log(dateVal);
    };
    React.useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, [time]);
    return (
        <main
            className={`${eventName
                .replace(/[^a-z0-9]/gi, '')
                .split(' ')
                .join('-')
                .toLowerCase()} mainBox`}
        >
            <aside className='side-menu'>
                {eventsList.map((event, i) => (
                    <button
                        type='primary'
                        size='large'
                        value={event.date}
                        name={event.name}
                        key={i}
                        onClick={(e) => handleEventChange(e)}
                        className='event-button'
                    >
                        {event.name}
                    </button>
                ))}
            </aside>
            <form className='form-box'>
                <label for='custom-date'>Countdown to a Personal Event</label>
                <input
                    type='text'
                    required
                    placeholder='Event Title'
                    onChange={(e) => setPersonalName(e.target.value)}
                />
                <input
                    name='custom-date'
                    type='date'
                    required
                    min={new Date().toDateString()}
                    onChange={(e) => setPersonalDate(e.target.value)}
                />
                <button type='submit' onClick={handlePersonalEvent}>
                    Add Event
                </button>
            </form>

            <article>
                <div className='text-section'>
                    <Timer date={dateVal} />
                    <p className='title'>to {eventName}</p>
                    <p className='title sub'>
                        {new Date(dateVal).toDateString()}
                    </p>
                </div>
            </article>
        </main>
    );
}

export default App;
