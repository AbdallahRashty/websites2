"use client";
import React, { useState } from 'react';
import './top_styles.css';
import './styles.css';
import logo1 from './img/logo.webp';
import logo2 from './img/logo2.webp';
import facebookIcon from './icon/facebook.png';
import instagramIcon from './icon/instagram.png';
import linkedinbiglogoIcon from './icon/linkedin-big-logo.png';
import twitterIcon from './icon/twitter.png';
import MailiconIcon from './icon/Mail icon.png';
import About_Us from './About_Us.jsx';
import Rectangles from './Rectangles.jsx';
import Contact_Us from './Contact_Us.jsx';

export default function Header() {
    const [visibleContent, setVisibleContent] = useState('content1');
    return (
        <>
            <header>
                <nav className='header'>
                    <div className='icon'>
                        <section className="imgs">
                            <a href=""><img className="header-logo" src={logo1.src} alt="Logo 1" /></a>
                            <a href=""><img className="header-logo" src={logo2.src} alt="Logo 2" /></a>
                        </section>
                    </div>
                    <ul className='headerList'>
                        <a href="#" onClick={(e) => { e.preventDefault(); setVisibleContent('content1'); }}><li id="button1">Upcoming Event</li></a>
                        <a href="#" onClick={(e) => { e.preventDefault(); setVisibleContent('content2'); }}><li id="button2">About Us</li></a>
                        <a href="#" onClick={(e) => { e.preventDefault(); setVisibleContent('content3'); }}><li id="button3">Contact Us</li></a>
                    </ul>
                    <div className='buttons'>
                        <button className="b1">Register</button>
                        <button className="b2">Log in</button>
                    </div>
                </nav>
            </header>
            <div className='Icon_list'>
                <button className="IconB">
                    <img className="Icon" src={facebookIcon.src}/>
                </button>
                <button className="IconB">
                    <img className="Icon" src={instagramIcon.src}/>
                </button>
                <button className="IconB">
                    <img className="Icon" src={twitterIcon.src}/>
                </button>
                <button className="IconB">
                    <img className="Icon" src={linkedinbiglogoIcon.src}/>
                </button>
                <button className="IconB1">
                    <img className="Icon" src={MailiconIcon.src}/>
                </button>
            </div>
            <section className='gapp'>
                <section id="content1" className="content" style={{ display: visibleContent === 'content1' ? 'block' : 'none' }}>
                    <Rectangles/>
                </section>
                <div id="content2" className="content" style={{ display: visibleContent === 'content2' ? 'block' : 'none' }}>
                    <section className='containContent'>
                        <About_Us/>
                    </section>
                </div>
                <div id="content3" className="content" style={{ display: visibleContent === 'content3' ? 'block' : 'none' }}>
                    <section className='containContent'>
                        <Contact_Us/>
                    </section>
                </div>
            </section>
        </>
    );
}
