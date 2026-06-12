import logoimg1 from './img/abu-logo-tr.png';
import logoimg2 from './img/Dogus_universitesi_yeni_logo.png';
import logoimg3 from './img/adakent_university_5a48888423.png';
import logoimg4 from './img/Haliç_Üniversitesi_logo.png';

export default function Image() {
    return (
        <>
            <div className='trusted'>
                <img className='timag' src={logoimg1.src} alt="" />
                <img className='timag' src={logoimg2.src} alt="" />
                <img className='timag' src={logoimg3.src} alt="" />
                <img className='timag' src={logoimg4.src} alt="" />
            </div>
            
        </>
    );
}