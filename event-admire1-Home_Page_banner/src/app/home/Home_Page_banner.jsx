"use client";
import cover from'./img/Screenshot.png';
import React, {useState, useEffect} from 'react';

export default function Home_Page_banner() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);
    // function meridiemformatTime(){
    //     let hours = time.getHours();
    //     const meridiem = hours >= 12 ? "PM" : "AM"; 
    //     return `${meridiem}`;      // this for AM and PM
    // }
    function daysformatTime() {
        const days = time.getDay().toString();    
        return `${days}`;
    }

    function hoursformatTime() {
        let hours = time.getHours();
        hours = hours % 12 || 12;
        return `${padZero(hours)}`;
    }

    function minutesformatTime() {
        const minutes = time.getMinutes();
        return `${padZero(minutes)}`;
    }

    function secondsformatTime() {
        const seconds = time.getSeconds();
        return `${padZero(seconds)}`;
    }
    
    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }
    return (
        <>
            <section className='cover_erea'>
                <img className='cover' src={cover} alt="cover"/>
                <div className='titles'>
                    <p className='title1'>Mail Event</p>
                    <p className='title2'>2ND UNIADMIRE</p>
                    <p className='title3'>STUDENT FAIR</p>
                </div>
                <ul className='clock_list'>
                    <li className='Clock_numbers'><div><span>{daysformatTime()}</span></div><li className='Clock_TexT'>DAYS</li></li>
                    
                    <li className='OR'>|</li>
                    <li className='Clock_numbers'><div><span>{hoursformatTime()}</span></div><li className='Clock_TexT'>HOURS</li></li>
                    
                    <li className='OR'>|</li>
                    <li className='Clock_numbers'><div><span>{minutesformatTime()}</span></div><li className='Clock_TexT'>MINUTES</li></li>
                    
                    <li className='OR'>|</li>
                    <li className='Clock_numbers'><div><span>{secondsformatTime()}</span></div><li className='Clock_TexT'>SECONDS</li></li>    
                </ul>
                <div className='buttons2'>
                    <button className="b3">Enroll Now</button>
                    <button className="b4">More Details</button>
                </div>          
            </section>
        </>    
    );
}
