import eventim from'./img/eventimg.png';

export default function card({ d1, d2, d3}) {
    return (
        <> 
            <div className="cart">
                <img className='card_img' src={eventim.src} />
                <div className='pss'>
                    <p className="ps1">{d1}</p>
                    <p className="ps2">{d2}</p>
                    <p className="ps3">{d3}</p>
                    <button className="Enroll_button">Enroll</button>
                </div>
            </div>
        </>
    );
}