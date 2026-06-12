import Image from './image.jsx';

export default function Our_Partners_Section() {
    return (
        <>
            <section className='th1box'>
                <div className="pc">
                    <h1 className="htittle">Our Partners</h1>
                    <p className="pera">Empowered by a network of partners, our events are backed by a community dedicated to fostering growth and excellence. Join us, and experience the collective strength that propels our endeavors to new heights</p>
                </div>
                <div className='roww'>
                    <Image/>
                    <Image/>
                </div>
            </section>
                
            <div className="therectangle">
                <div>
                    <h1 className="boxtitle">Choose a dream envent that's right for you</h1>
                    <h4 className="boxtitle1">Find what you need of conllaboration, education and suport with a Event Admire</h4>
                </div>
                <div className='theb'>
                    <button className="E">Enroll Now</button>
                </div>
            </div>
        </>    
    );
}
