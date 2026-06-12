import logo1 from'./img/Event Admire Color 1.png';
import logo2 from'./img/Event Admire Color 2.png';

export default function Header() {
    return (
        <>
            <header>
                <nav className='header'>
                    <div className='icon'>
                        <section className="imgs">
                            <img className='as' src={logo1.src} alt="Icon"></img>
                            <img className='as' src={logo2.src} alt="Icon" />
                        </section>
                    </div>
                    <ul className='headerList'>
                        <a href="#Upcoming Event"><li>Upcoming Event</li></a>
                        <a href="#"><li>About Us</li></a>
                        <a href="#"><li>Contact Us</li></a>
                    </ul>
                    <div className='buttons'>
                        <button className="b1">Register</button>
                        <button className="b2">Log in</button>
                    </div>
                </nav>
            </header>
        </>    
    );
}
