import './Contact_Us_styles.css';
import img3 from './img/Screenshot (79).png';

export default function Contact_Us() {
    return (
        <>
            <section className='coContent'>
                <h5 className='y4'>About Us</h5>
                <h2 className='y5'>Let's Keep in touch</h2>
                <p className='y6'>we are always here to answer your questions. please don't hesitate👋</p>
            </section>
            <section className='body1'>
                <div className='body3in'>
                    <img className='img3' src={img3.src}/>
                    <section className='form1'>
                        <label className="text1">Name</label>
                        <input className='imputeria' type="text" placeholder="Enter your Name" id="name" minLength="6" maxLength="15" required />
                        <label className="text1">Surname</label>
                        <input className='imputeria' type="text" placeholder="Enter your Surname" id="username" minLength="6" maxLength="15" required />
                        <label className="text1">Country</label>
                        <section className=''>
                            <select className='CountryS'>
                                <option value="Select">Select</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                            </select>
                        </section>  
                        <label className="text1">mail</label>
                        <input className='imputeria' type="email" placeholder="your@mail.com" id="email" required />
                        <label className="text1">Message</label>
                        <textarea className='textearya' cols="60" rows="2" placeholder="please enter your message"></textarea>
                        <button className='submit' >Submit</button>
                    </section>
                </div>
                <div className="therectangle">
                    <div>
                        <h1 className="boxtitle">Choose a dream envent that's right for you</h1>
                        <h4 className="boxtitle1">Find what you need of conllaboration, education and suport with a Event Admire</h4>
                    </div>
                    <div className='theb'>
                        <button className="E">Enroll Now</button>
                    </div>
                </div>
            </section>         
        </>
    );
}