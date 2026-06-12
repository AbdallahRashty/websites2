import React from 'react';
import Card from './card.jsx';

export default function Upcoming_Events_Section() {
    const data = [
        { name: 'Mali Fair', city: 'Bamako', date: '20-21 APR 2024' },
        { name: 'Pakistan Fair', city: 'Islamabad-Karachi', date: '20-21 JUL 2024' },
        { name: 'Kazakhstan Fair', city: 'Almaty', date: '20-21 JUN 2024' },
        { name: 'Antalya Fair', city: 'Almaty', date: '20-21 JUN 2024' },
        { name: 'Antalya Fair', city: 'Almaty', date: '20-21 JUN 2024' },
        { name: 'Antalya Fair', city: 'Almaty', date: '20-21 JUN 2024' },
        { name: 'Antalya Fair', city: 'Almaty', date: '20-21 JUN 2024' },
        { name: 'Antalya Fair', city: 'Almaty', date: '20-21 JUN 2024' }
    ];

    return (
        <>          
            <div className='Upcoming_Event'><p>Upcoming Event</p></div>
            <div className="test">
                {data.map((event, index) => (
                    <Card key={index} d1={event.name} d2={event.city} d3={event.date} />
                ))}
            </div>
            <div className='view_all'>
                <a href="">view all</a>
            </div>
        </>
    );
}
