import Screenshot  from './img/Screenshot (19).png';
import sm  from './img/Layer 1.png';
import sm1  from './img/UniAdmire Logo.png';
import sm2  from './img/UniAdmire Logo (1).png';
import sm3  from './img/Layer 1 (1).png';

export default function What_we_have_section() {
    return (
        <>
            <h5 className="Admire_Group">Admire Group</h5>
            <h2 className="What_we_have">What we have</h2>
            <div className="text">
                <p>ADMIRE GROUP is a diverse collection of companies, each excelling in its own field.
                UniAdmire simplifies student applications, Tech Admire focuses on creative software development, Jobs Admire provides HR services, and Event Admire crafts memorable experiences. With a commitment to quality and innovation, ADMIRE GROUP caters to a range of needs, ensuring excellence across its various ventures.</p>
            </div>
            <section className="boxes">
                <div className="box"><div className="boxp1"><img src={sm.src}/><p className='ppp'>UniAdmire</p></div></div>
                <div className="box"><div className="boxp2"><img src={sm1.src}/><p className='ppp'>EventAdmirne</p></div></div>
                <div className="box"><div className="boxp3"><img src={sm2.src}/><p className='ppp'>JobeAdmire</p></div></div>
                <div className="box"><div className="boxp4"><img src={sm3.src}/><p className='ppp'>TechAdmire</p></div></div>
            </section>
            <section className="show">
                <img className="img_right" src={Screenshot.src} alt="img" />
                <h1 className="title">UniAdmire</h1>
                <br />
                <h3 className="title">Explor Your Path</h3>
                <p className="desc">UniAdmire simplifies the search guiding you to instirutions that math your academic and personal criteria</p>
                <br />
                <h3 className="title">Trace application  process</h3>
                <p className="desc">Desciption</p>
                <br />
                <h3 className="title">For Universities & Agencies</h3>
                <p className="desc">Join UniAdmire and manage your works easily</p>
            </section>
        </>
    );
}