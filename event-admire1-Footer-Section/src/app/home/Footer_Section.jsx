import logo1 from './img/Layer_1.png';
import logo2 from './img/visa-10 1.png';
import logo3 from './img/Group.png';
import logo4 from './img/Vector.png';

export default function Footer_Section() {
    return (
        <>
            <footer>
                <section className='box1'>
                    <img className='img1' src={logo1.src}/>
                    <article className='art'>
                        Event Admire, a proud member of the ADMIRE GROUP, specializes in curating exceptional and memorable experiences. From conceptualization to execution, our dedicated team ensures seamless events that leave lasting impressions. Whether it's an education fair or HR events,  Event Admire brings a touch of innovation and flair to every occasion, making each event truly remarkable.
                    </article>
                </section>
                <section className='flexx'>
                    <section className='box2'>
                        <div className='colom1'>
                            <h3 className='ti1'>Pages</h3>
                            <ul className='unlist'>
                                <li><a href="" className='alist'>About Us</a></li>
                                <li><a href="" className='alist'>Aplication</a></li>
                                <li><a href="" className='alist'>Servises</a></li>
                                <li><a href="" className='alist'>Universities</a></li>
                                <li><a href="" className='alist'>Calculator</a></li>
                                <li><a href="" className='alist'>Exam</a></li>
                                <li><a href="" className='alist'>News</a></li>
                                <li><a href="" className='alist'>Blogs</a></li>
                            </ul>
                        </div>
                        <div className='colom2'>
                            <h3 className='ti1'>Upcoming Events</h3>
                            <ul className='unlist1'>
                                <li><a href="" className='alist'>Pacistan</a></li>
                                <li><a href="" className='alist'>Mail</a></li>
                                <li><a href="" className='alist'>Kazakhstan</a></li>
                                <li><a href="" className='alist'>Turkiye</a></li>
                            </ul>
                        </div>
                    </section>
                    <section className='box3'>
                        <h1 className='theH1'>Find your chance for your dream university with UniAdmire</h1>
                        <div className='tb'>
                            <input type="text" className='textearia' placeholder='Email Adress'/>
                            <input className='subbuttom' type="submit" />
                        </div>
                        <h2 className='secure'>Secure payments by</h2>
                        <div className='flexx2'>
                            <img className='img2' src={logo2.src} alt="visa" />
                            <img className='img3' src={logo3.src} alt="masterpass" />
                        </div>
                    </section>
                </section>
                <section className='downpart'>
                    <hr className='hr1'/>
                    <h1 className='eva'>EVENTADMIRE</h1>
                    <div className='imgcounta'>
                        <img className='img4' src={logo4.src}/>
                    </div>
                    <div className='lower'>
                        <p className='pp1'>Copyright &copy; 2024 EventAdmire</p>
                        <p className='pp1'>Terms of Servise</p>
                        <p className='pp1'>privacy</p>
                    </div>
                </section>
            </footer>
        </>    
    );
}


