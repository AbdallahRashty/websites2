"use client";
import React, { useState, useEffect } from 'react';
import logo1 from './img/logo.webp';
import logo2 from './img/logo2.webp';

export default function Header() {
    const [returnToFirstStep, setReturnToFirstStep] = useState(false);
    const [activeButton, setActiveButton] = useState('student');
    const [modalContent, setModalContent] = useState('Students Register');
    const [showFirstStep, setShowFirstStep] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const [isModalActive, setIsModalActive] = useState(false);

    useEffect(() => {
        const openModalButtons = document.querySelectorAll('[data-modal-target]');
        const closeModalButtons = document.querySelectorAll('[data-close-button]');
        const overlay = document.getElementById('overlay');

        const openModal = (modal) => {
            if (modal == null) return;
            modal.classList.add('active');
            overlay.classList.add('active');
            setIsModalActive(true);
        }

        const closeModal = (modal) => {
            if (modal == null) return;
            modal.classList.remove('active');
            overlay.classList.remove('active');
            setIsModalActive(false);
        }

        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = document.querySelector(button.dataset.modalTarget);
                openModal(modal);
            });
        });

        overlay.addEventListener('click', () => {
            const modals = document.querySelectorAll('.modal.active');
            modals.forEach(modal => {
                closeModal(modal);
            });
        });

        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal');
                closeModal(modal);
            });
        });

        // Cleanup event listeners on component unmount
        return () => {
            openModalButtons.forEach(button => {
                button.removeEventListener('click', openModal);
            });
            overlay.removeEventListener('click', closeModal);
            closeModalButtons.forEach(button => {
                button.removeEventListener('click', closeModal);
            });
        };
    }, []);

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
        setReturnToFirstStep(true);
        setShowFirstStep(true);
        setIsLogin(false);
        switch (buttonType) {
            case 'student':
                setModalContent('Students Register');
                break;
            case 'university':
                setModalContent('University Register');
                break;
            case 'partner':
                setModalContent('Partner Register');
                break;
            default:
                setModalContent('Select Register');
        }
    };

    const handleContinueClick = () => {
        setShowFirstStep(false);
    };

    const handleBackClick = () => {
        setShowFirstStep(true);
    };

    const handleLoginClick = () => {
        setIsLogin(true);
        setShowFirstStep(true);
        setReturnToFirstStep(false);
        setIsModalActive(true);
    };

    const handleRegisterClick = () => {
        setIsLogin(false);
        setShowFirstStep(true);
        setReturnToFirstStep(false);
        setIsModalActive(true);
    };
    const renderSecondStepForm = () => {
        if (returnToFirstStep) {
            setReturnToFirstStep(false); // Reset returnToFirstStep for future use
            return renderForm(); // Show the personal information form again
        }
        switch (activeButton) {
            case 'student':
                return (
                    <div className='RStudent'>
                        <div className='form_tittle'>
                            <h1 id='greetings' className='form_tittle1'>{modalContent}</h1>
                            <p className='form_tittle2'>Please create your password</p>
                        </div>
                        <div className="progress-indicator">
                            <div className={`circle2 ${!showFirstStep ? 'active' : ''}`}>2/2</div>
                            <div className='pco'>
                                <p className='ppr'>Password</p>
                                <p>Previous step - Personal Information</p>
                            </div>                
                        </div>
                        <label className="password">Create Password</label>
                        <input className='imputeria' type="password" placeholder="Enter your password" id="password" minLength="6" maxLength="15" required /><br />
                        <label className="password">Confirm Password</label>
                        <input className='imputeria' type="password" placeholder="Confirm your password" id="passwordConfirm" minLength="6" maxLength="15" required /><br />
                        <div className='IagreeCheckbox'>
                            <input type="checkbox" /><p className='Iagee'>I agree to the terms and conditions</p><br/>
                        </div>
                        <button className='continue'>Submit</button>
                        <p className='account'>Do you have an account? <a className='login' href="">Login</a></p>
                    </div>
                );
            case 'university':
                return (
                    <div className='RStudent'>
                        <div className='form_tittle'>
                            <h1 id='greetings' className='form_tittle1'>{modalContent}</h1>
                            <p className='form_tittle2'>Please create your password</p>
                        </div>
                        <div className="progress-indicator">
                        <div className={`circle2 ${!showFirstStep ? 'active' : ''}`}>2/2</div>
                            <div className='pco'>
                                <p className='ppr'>Password</p>
                                <p>Previous step - University Information</p>
                            </div>                
                        </div>
                        <label className="password">Create Password</label>
                        <input className='imputeria' type="password" placeholder="Enter your password" id="password" minLength="6" maxLength="15" required /><br />
                        <label className="password">Confirm Password</label>
                        <input className='imputeria' type="password" placeholder="Confirm your password" id="passwordConfirm" minLength="6" maxLength="15" required /><br />
                        <div className='IagreeCheckbox'>
                            <input type="checkbox" /><p className='Iagee'>I agree to the terms and conditions</p><br/>
                        </div>
                        <button className='continue'>Submit</button>
                        <p className='account'>Do you have an account? <a className='login' href="">Login</a></p>
                    </div>
                );
            case 'partner':
                return (
                    <div className='RStudent'>
                        <div className='form_tittle'>
                            <h1 id='greetings' className='form_tittle1'>{modalContent}</h1>
                            <p className='form_tittle2'>Please create your password</p>
                        </div>
                        
                        <div className="progress-indicator">
                        <div className={`circle2 ${!showFirstStep ? 'active' : ''}`}>2/2</div>
                            <div className='pco'>
                                <p className='ppr'>Password</p>
                                <p className='ppr2'>Previous step - Partner Information</p>
                            </div>                
                        </div>
                        <label className="password">Create Password</label>
                        <input className='imputeria' type="password" placeholder="Enter your password" id="password" minLength="6" maxLength="15" required /><br />
                        <label className="password">Confirm Password</label>
                        <input className='imputeria' type="password" placeholder="Confirm your password" id="passwordConfirm" minLength="6" maxLength="15" required /><br />
                        <div className='IagreeCheckbox'>
                            <input type="checkbox" /><p className='Iagee'>I agree to the terms and conditions</p><br/>
                        </div>
                        <button className='continue'>Submit</button>
                        <p className='account'>Do you have an account? <a className='login' href="">Login</a></p>
                    </div>
                );
            default:
                return null;
        }
    };
    const renderForm = () => {
        switch (activeButton) {
            case 'student':
                return (
                    <div className='RStudent'>
                        <div className='form_tittle'>
                            <h1 id='greetings' className='form_tittle1'>{modalContent}</h1>
                            <p className='form_tittle2'>Welcome to Event Admire 👋 enter your details to sign up</p>
                        </div>
                        <div className="progress-indicator">
                            <div className={`circle ${!showFirstStep ? 'active' : ''}`}><p className='r'>1/2</p></div>
                            <div className='pco'>
                                <p className='ppr'>Personal Information</p>
                                <p>next step - Password</p>
                            </div>                
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
                        <input className='imputeria' type="email" placeholder="yourmail@uniadmire.com" id="email" required /><br />
                        <label className="CountryT">Country</label>
                        <section className='CountryS'>
                            <select className='CountrySS'>
                                <option value="Turkey">Turkey</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                            </select>
                        </section>  
                        <br />
                        <button className='continue' onClick={handleContinueClick}>continue</button>
                        <p className='account'>Do you have an account? <a className='login' href="">Login</a></p>
                    </div>
                );
            case 'university':
                return (
                    <div className='RStudent'>
                        <div className='form_tittle'>
                            <h1 id='greetings' className='form_tittle1'>{modalContent}</h1>
                            <p className='form_tittle2'>Welcome to Event Admire 👋 enter your details to sign up</p>
                        </div>
                        <div className="progress-indicator">
                        <div className={`circle ${!showFirstStep ? 'active' : ''}`}><p className='r'>1/2</p></div>
                            <div className='pco'>
                                <p className='ppr'>University Information</p>
                                <p>next step - Password</p>
                            </div>                
                        </div>
                        <label className="Name">Name</label>
                        <input className='imputeria' type="text" placeholder="Enter University Name" id="username" minLength="6" maxLength="15" required /><br />
                        <label className="University">University Name</label>
                        <input className='imputeria' type="text" placeholder="Enter Representative Name" id="universityname" minLength="6" maxLength="15" required /><br />
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
                        <input className='imputeria' type="email" placeholder="yourmail@uniadmire.com" id="email" required /><br />
                        <label className="CountryT">Country</label>
                        <section className='CountryS'>
                            <select className='CountrySS'>
                                <option value="Turkey">Turkey</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                            </select>
                        </section>  
                        <br />
                        <button className='continue' onClick={handleContinueClick}>continue</button>
                        <p className='account'>Do you have an account? <a className='login' href="">Login</a></p>
                    </div>
                );
            case 'partner':
                return (
                    <div className='RStudent'>
                        <div className='form_tittle'>
                            <h1 id='greetings' className='form_tittle1'>{modalContent}</h1>
                            <p className='form_tittle2'>Welcome to Event Admire 👋 enter your details to sign up</p>
                        </div>
                        <div className="progress-indicator">
                        <div className={`circle ${!showFirstStep ? 'active' : ''}`}><p className='r'>1/2</p></div>
                            <div className='pco'>
                                <p className='ppr'>Partner Information</p>
                                <p>next step - Password</p>
                            </div>                
                        </div>
                        <label className="Name">Name</label>
                        <input className='imputeria' type="text" placeholder="Enter University Name" id="username" minLength="6" maxLength="15" required /><br />
                        <label className="Name">Surname</label>
                        <input className='imputeria' type="text" placeholder="Enter Surname" id="username" minLength="6" maxLength="15" required /><br />
                        <label className="Company">Company Name</label>
                        <input className='imputeria' type="text" placeholder="Enter Company Name" id="companyname" minLength="6" maxLength="15" required /><br />
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
                        <input className='imputeria' type="email" placeholder="yourmail@uniadmire.com" id="email" required /><br />
                        <label className="CountryT">Country</label>
                        <section className='CountryS'>
                            <select className='CountrySS'>
                                <option value="Turkey">Turkey</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                            </select>
                        </section>  
                        <br />
                        <button className='continue' onClick={handleContinueClick}>continue</button>
                        <p className='account'>Do you have an account? <a className='login' href="">Login</a></p>
                    </div>
                );
            default:
                return null;
        }
    };  
    const renderLoginForm = () => {
        switch (activeButton) {
            case 'student':
                return (    
                    <div className='RStudent'>
                        <div className='form_tittle'>
                            <h1 id='greetings' className='form_tittle1'>Student Login</h1>
                            <p className='form_tittle2'>Welcome back, student! Please enter your credentials to log in.</p>
                        </div>
                        <label className="email">Email:</label>
                        <input className='imputeria' type="email" placeholder="yourmail@uniadmire.com" id="email" required /><br />
                        <label className="password">Password</label>
                        <input className='imputeria' type="password" placeholder="Enter your password" id="password" minLength="6" maxLength="15" required /><br />
                        <button className='continue'>Login</button>
                        <p className='account'>Don't have an account? <a  className='login' href="" onClick={handleRegisterClick}>Register</a></p>
                    </div>
                );
            case 'university':
                return (
                    <div className='RStudent'>
                        <div className='form_tittle'>
                            <h1 id='greetings' className='form_tittle1'>University Login</h1>
                            <p className='form_tittle2'>Welcome back, university representative! Please enter your credentials to log in.</p>
                        </div>
                        <label className="email">Email:</label>
                        <input className='imputeria' type="email" placeholder="yourmail@uniadmire.com" id="email" required /><br />
                        <label className="password">Password</label>
                        <input className='imputeria' type="password" placeholder="Enter your password" id="password" minLength="6" maxLength="15" required /><br />
                        <button className='continue'>Login</button>
                        <p className='account'>Don't have an account? <a className='login' href="" onClick={handleRegisterClick}>Register</a></p>
                    </div>
                );
            case 'partner':
                return (
                    <div className='RStudent'>
                        <div className='form_tittle'>
                            <h1 id='greetings' className='form_tittle1'>Partner Login</h1>
                            <p className='form_tittle2'>Welcome back, partner! Please enter your credentials to log in.</p>
                        </div>
                        <label className="email">Email:</label>
                        <input className='imputeria' type="email" placeholder="yourmail@uniadmire.com" id="email" required /><br />
                        <label className="password">Password</label>
                        <input className='imputeria' type="password" placeholder="Enter your password" id="password" minLength="6" maxLength="15" required /><br />
                        <button className='continue'>Login</button>
                        <p className='account'>Don't have an account? <a className='login' href="" onClick={handleRegisterClick}>Register</a></p>
                    </div>
                );
            default:
                return null;
        }
    };
    return (
        <>
            <header>
                <nav className='header'>
                    <div className='icon'>
                        <section className="imgs">
                            <a href="http://localhost:3000/home"><img className="header-logo" src={logo1.src} alt="Logo 1" /></a>
                            <a href="http://localhost:3000/home"><img className="header-logo" src={logo2.src} alt="Logo 2" /></a>
                        </section>
                    </div>
                    <ul className='headerList'>
                        <a href="#Upcoming Event"><li>Upcoming Event</li></a>
                        <a href="#"><li>About Us</li></a>
                        <a href="#"><li>Contact Us</li></a>
                    </ul>
                    <div className='buttons'>
                        <button data-modal-target="#modal" className="b1">Register</button>
                        <button className="b2" data-modal-target="#modal" onClick={handleLoginClick}>Log in</button>
                    </div>
                </nav>
            </header>
            <div id="modal" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <button 
                            className={`back-button ${showFirstStep ? 'disabled' : ''}`} 
                            onClick={handleBackClick} 
                            disabled={showFirstStep}
                        >&lt;</button>
                        <div className="poptitle">Register As</div>
                        <button data-close-button className="close-button">&times;</button>
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
                    {isLogin ? renderLoginForm() : (showFirstStep ? renderForm() : renderSecondStepForm())}
                </div>
                </div>
                <p className='popcopy'>&copy; 2024 EventAdmire</p>
            </div>
            <div id="overlay"></div>
        </>     
    );
}
