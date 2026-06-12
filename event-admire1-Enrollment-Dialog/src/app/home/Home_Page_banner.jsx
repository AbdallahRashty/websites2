"use client";
import React, { useState, useEffect } from 'react';

export default function Home_Page_banner() {
    const [time, setTime] = useState(new Date());
    const [activeButton, setActiveButton] = useState('student');
    const [showFirstStep, setShowFirstStep] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handleOpenClick = () => {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.classList.add('active');
            document.getElementById('overlay').classList.add('active');
        }
    };

    const handleCloseClick = () => {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.classList.remove('active');
            document.getElementById('overlay').classList.remove('active');
        }
    };

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

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

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
        setShowFirstStep(true);
    };

    const renderForm = () => {
        return (
            <div className='EStudent'>
                <div className='extraleyer'>
                    <div className='form_tittle'>
                        <h1 className='form_tittle1'>Pakistan fair</h1>
                        <p className='form_tittle2'>20-21 Jul2024</p>
                        <p className='form_tittle2'>Islamabad-Karachi</p>
                    </div>
                    <label className="Name">Name</label>
                    <input className='imputeria' type="text" placeholder="Enter your Name" id="username" minLength="6" maxLength="15" required /><br />

                    <label className="Surname">Surname</label>
                    <input className='imputeria' type="text" placeholder="Enter your Surname" id="username" minLength="6" maxLength="15" required /><br />

                    <label className="phone">Phone</label>
                    <section className='telephonenum'>
                        <select className='telephonesel'>
                            <option value="TR">TR</option>
                            <option value="AF">AF</option>
                            <option value="AL">AL</option>
                            <option value="DZ">DZ</option>
                            <option value="AS">AS</option>
                            <option value="AD">AD</option>
                        </select>
                        <input className="phonep" type="tel" placeholder="+90 555 555 5555" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required /><br />
                    </section>

                    <label className="email">Email:</label>
                    <input className='imputeria' type="email" placeholder="Enter your email" id="email" required /><br />

                    <label className="password">Password</label>
                    <input className='imputeria' type="password" placeholder="Enter your password" id="password" minLength="6" maxLength="15" required /><br />

                    <label className="CountryT">Country</label>
                    <section className='CountryS'>
                        <select className='CountrySS'>
                            <option value="Turkey">Turkey</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                        </select>
                    </section>
                    <br />
                    <button className='continue'>continue</button>
                </div>
            </div>
        );
    };
    return (
        <>
            <section className='cover_erea'>
                <div className='titles'>
                    <p className='title1'>Mail Event</p>
                    <p className='title2'>2ND UNIADMIRE</p>
                    <p className='title3'>STUDENT FAIR</p>
                </div>
                <ul className='clock_list'>
                    <li className='Clock_numbers'>
                        <div><span>{daysformatTime()}</span><div className='Clock_TexT'>DAYS</div></div>
                    </li>

                    <li className='OR'>|</li>
                    <li className='Clock_numbers'>
                        <div><span>{hoursformatTime()}</span><div className='Clock_TexT'>HOURS</div></div>
                    </li>

                    <li className='OR'>|</li>
                    <li className='Clock_numbers'>
                        <div><span>{minutesformatTime()}</span><div className='Clock_TexT'>MINUTES</div></div>
                    </li>

                    <li className='OR'>|</li>
                    <li className='Clock_numbers'>
                        <div><span>{secondsformatTime()}</span><div className='Clock_TexT'>SECONDS</div></div>
                    </li>
                </ul>
                <div className='buttons2'>
                    <button data-modal-target="#modal" className="b3" onClick={handleOpenClick}>Enroll Now</button>
                    <button className="b4">More Details</button>
                </div>
            </section>
            <div id="modal" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="poptitle">Register As</div>
                        <button data-close-button className="close-button" onClick={handleCloseClick}>&times;</button>
                    </div>
                    <nav>
                        <ul className="chooseTip">
                            <li>
                                <button className={`chooseTipb ${activeButton === 'student' ? 'active' : ''}`} onClick={() => handleButtonClick('student')}>Student</button>
                            </li>
                            <li>
                                <button className={`chooseTipb ${activeButton === 'university' ? 'active' : ''}`} onClick={() => handleButtonClick('university')}>University</button>
                            </li>
                            <li>
                                <button className={`chooseTipb ${activeButton === 'partner' ? 'active' : ''}`} onClick={() => handleButtonClick('partner')}>Partner</button>
                            </li>
                        </ul>
                    </nav>
                    <div className="modal-body">
                        {showFirstStep && renderForm()}
                    </div>
                </div>
                <p className='popcopy'>&copy; 2024 EventAdmire</p>
            </div>
            <div id="overlay" onClick={handleCloseClick}></div>
        </>
    );
}
