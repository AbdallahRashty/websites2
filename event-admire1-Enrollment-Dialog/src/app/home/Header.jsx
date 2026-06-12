import logo1 from'./img/logo.webp';
import logo2 from'./img/logo2.webp';

export default function Header() {
    return (
        <>
            <header>
                {/* <nav className='justify-between bg-red-700 flex flex-row items-start '> */}
                <nav className='header'>
                    <div className='icon'>
                        <section className="imgs">
                            <img src={logo1.src} alt="Icon"></img>
                            <img src={logo2.src} alt="Icon" />
                        </section>
                    </div>
                    {/* <ul className="justify-center bg-neutral-100 list-none flex-row #1e40af"> */}
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
