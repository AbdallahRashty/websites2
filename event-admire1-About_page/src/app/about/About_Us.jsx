import './About_Us_styles.css';
import img1 from './img/Screenshot (78).png';
import img2 from './img/Screenshot (80).png';
import img3 from './img/Screenshot (79).png';
import img4 from './img/Screenshot (81).png';
import Trusted_By from './Trusted_By.jsx';

export default function About_Us() {
    return (
        <>
            <section className='coContent'>
                <h5 className='t4'>About Us</h5>
                <h2 className='t5'>Discover our story</h2>
                <article className='t6'>Event Admire, a proud member of the ADMIRE GROUP, specializes in 
                    curating exceptional and memorable experiences. From conceptualization to execution, 
                    our dedicated team ensures seamless events that leave lasting impressions. Whether it's 
                    an education fair or HR events, Event Admire brings a touch of innovation and flair to 
                    every occasion, making each event truly remarkable.
                </article>
            </section>
            <section className='body1'>
                <img className='img1' src={img1.src}/>
                <div className='imcountain'>
                    <h1 className='t22'>Trusted by over 8.620 </h1>
                    <h1 className='t23'>students worldwide<span className='second-line'><img className='img2' src={img2.src}/></span></h1> 
                </div>
                <section className='body2'>
                    <div className='body2in'>
                        <img className='img3' src={img3.src}/>
                        <article className='article1'>
                            At the heart of Event Admire is a story of passion and a vision for creating unforgettable moments. 
                            It all began with a shared enthusiasm for transforming ordinary events into extraordinary experiences. 
                            A group of dedicated individuals, fueled by creativity and a commitment to excellence, 
                            came together to establish Event Admire within the ADMIRE GROUP. From humble beginnings to a journey of crafting exceptional events, 
                            our story is a testament to the power of inspiration and the joy of bringing people together through uniquely tailored and memorable experiences.
                        </article>
                    </div>
                    <div className='body2in' >
                        <div className='lefttit'>
                            <h3 className='Timeline'>Timeline of Uniadmire</h3>
                            <h1 className='journey'>Let's join our journey from 2022</h1>
                        </div>
                        <section className='dis'>
                            <img className='img4' src={img4.src}/>
                            <div className='dis2'>
                                <h1 className='tww'>2022</h1>
                                <article className='ar'>
                                    It all began with a shared enthusiasm for transforming ordinary events into extraordinary 
                                    experiences. A group of dedicated individuals, fueled by creativity and a commitment to 
                                    excellence, came together to establish Event Admire
                                </article>
                            </div>
                            <img className='img4' src={img4.src}/>
                            <div className='dis2'>
                                <h1 className='tww'>2023</h1>
                                <article className='ar'>
                                    IIn August 2023, Event Admire marked a milestone with the organization of the UniAdmire Student Fair in the vibrant city of Karachi, Pakistan. This inaugural event, hold with meticulous planning and creativity, provided a platorm for students to exp ore eaucational opportunities. The fair aimed to empower students in making informed decisions about their academic future
                                </article>
                            </div>
                            <img className='img4' src={img4.src}/>
                            <div className='dis2'>
                                <h1 className='tww'>2024</h1>
                                <article className='ar'>
                                In 2024, Join us on a global journey of educational exploration with UniAdmire Student Fair! Join us in Malitis April, Kazakhstan in June, Antalya in July and Pakistan in August. These upcoming fairs promise an enriching experience, connecting students with a diverse range of universities and interactive actvities. Event Admire continues its commitment to empowering students, fostering educational growt, and creating pathways to a bright academic future
                                </article>
                            </div>
                        </section>  
                    </div>
                </section> 
            </section>
            <section className='lowerr'>
                <div className='divbox'>
                    <h1 className='tt1'>1.5 K+</h1>
                    <h2 className='tt2'>Students</h2>
                    <p className='pp1'>500 Students Found Their Academic pathways through event admire</p>
                </div>
                <div className='divbox'>
                    <h1 className='tt1'>25+</h1>
                    <h2 className='tt2'>University</h2>
                    <p className='pp1'>More than 25 universities are engadged with event admire</p>
                </div>
                <div className='divbox'>
                    <h1 className='tt1'>200+</h1>
                    <h2 className='tt2'>Agency/Mentor</h2>
                    <p className='pp1'>More than 200 agency and mentors are a part of event admire Network</p>
                </div>
            </section>
            <div className='b11'>
                <button className='b111'>University Partners</button>
                <button className='b112'>Companies</button>
            </div>
            <Trusted_By/>
        </>
    );
}