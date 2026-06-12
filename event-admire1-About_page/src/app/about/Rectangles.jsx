"use client";
import React, { useState } from 'react';
import './Rectangles_styles.css';
import image from './img/Screenshot (61).png';

export default function Rectangles() {
    const [isDetailsVisible1, setIsDetailsVisible1] = useState(false);
    const [isDetailsVisible2, setIsDetailsVisible2] = useState(false);
    const [isDetailsVisible3, setIsDetailsVisible3] = useState(false);
    const [isDetailsVisible4, setIsDetailsVisible4] = useState(true);
    const [isDetailsVisible5, setIsDetailsVisible5] = useState(false);
    const [activeTab, setActiveTab] = useState('includes');

    const toggleDetails1 = (e) => {
        e.preventDefault();
        setIsDetailsVisible1(!isDetailsVisible1);
    };
    const toggleDetails2 = (e) => {
        e.preventDefault();
        setIsDetailsVisible2(!isDetailsVisible2);
    };
    const toggleDetails3 = (e) => {
        e.preventDefault();
        setIsDetailsVisible3(!isDetailsVisible3);
    };
    const toggleDetails4 = (e) => {
        e.preventDefault();
        setIsDetailsVisible4(!isDetailsVisible4);
    };
    const toggleDetails5 = (e) => {
        e.preventDefault();
        setIsDetailsVisible5(!isDetailsVisible5);
    };
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return(
        <>
        <section className='containContent'>
            <section className='containTittle'>
                <h5 className='t1'>UniAdmier</h5>
                <h2 className='t2'>Upcoming Events</h2>
                <h4 className='t3'>Find and join the event you want now</h4>
            </section>
            <nav className='boxButtons'>
                <h5 className='h2t'>Upcoming Event Cities</h5>
                <div className='Suggestedlist'>
                    <label className="Sort">Sort by:</label>
                    <select className='option'>
                        <option>Suggested</option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
                <div className='buttonli'>
                    <button className="b0">All</button>
                    <button className="b0">Pakistan</button>
                    <button className="b0">Mali</button>
                    <button className="b0">Kazakhstan</button>
                    <button className="b0">Turkiye</button>
                    <button className="b0">Azerbaijan</button>
                </div>
            </nav>
        </section>
        <section className='rectungles'>
            <div className='rectungle'>
                <div className='cube'>
                    <h1 className='cubeh'>12-15</h1>
                    <h1 className='cubeh1'>JANUARY</h1>
                </div>
                <section className='listtitt'>
                    <span className='spPaki'>Pakistan Fair</span>
                    <span className='spIsla'>Islamabad & Karachi</span>
                    <button className="b01">Enroll now</button>
                    <span><a className='more' onClick={toggleDetails1}>More Details <span className={`rotate ${isDetailsVisible1 ? 'open' : ''}`}>&#94;</span></a></span>
                </section>
                <img className='imagefloat' src={image.src}/>
            </div>
            <div id="hiddenLeaf1" className="hidden-leaf1" style={{ display: isDetailsVisible1 ? 'block' : 'none' }}>
                <div className='biggerRectungle'>
                    <section>
                        <div className='smallerRectungle'>
                            <div className='leftBox'>
                                <p className='Flight'>Flight Details</p>
                                <p className='ISTAM'>ISTAMBUL AIRPORT TO ISTAMABAD AIRPORT</p>
                            </div>
                            <div className='rightBox'>
                                <p className='Fair'>Fair Price/Participant</p>
                                <p className='ffff'>$4000</p>
                            </div>
                        </div>
                        <section className='rightt'>
                            <div class="vl"></div>
                            <section className='flexing'>
                                <section className='rightpart'>
                                    <div className='tables'>
                                        <div className='table'>
                                            {activeTab === 'includes' && (
                                                <div className="green-table">
                                                    <button id='includes' className={activeTab === 'includes' ? 'active' : ''} onClick={() => handleTabClick('includes')}>Price Includes</button>
                                                    <button id='excludes' className={activeTab === 'excludes' ? 'active' : ''} onClick={() => handleTabClick('excludes')}>Price Not Includes</button>
                                                    <ul className='tableList'>
                                                    <li className='greencell'><span className='MIDDLE_DOT'>·</span>Domestic Flights (Pakistan)</li>
                                                    <li className='greencell1'><span className='MIDDLE_DOT1'>·</span>Accommodations 5 Stars Hotels</li>
                                                    <li className='greencell'><span className='MIDDLE_DOT'>·</span>Venue Rent & Setup Fee</li>
                                                    <li className='greencell1'><span className='MIDDLE_DOT1'>·</span>Promotional Activities</li>
                                                    <li className='greencell'><span className='MIDDLE_DOT'>·</span>Airport & in City Transfers</li>
                                                    </ul>
                                                </div>
                                            )}
                                            {activeTab === 'excludes' && (
                                                <div className="red-table">
                                                    <button id='includes1' className={activeTab === 'includes' ? 'active' : ''} onClick={() => handleTabClick('includes')}>Price Includes</button>
                                                    <button id='excludes1' className={activeTab === 'excludes' ? 'active' : ''} onClick={() => handleTabClick('excludes')}>Price Not Includes</button>
                                                    <ul className='tableList1'>
                                                    <li className='rgreencell'><span className='MIDDLE_DOT'>·</span>International Flights</li>
                                                    <li className='rgreencell1'><span className='MIDDLE_DOT1'>·</span>Visa Fee</li>
                                                    <li className='rgreencell'><span className='MIDDLE_DOT'>·</span>Printing of Marketing Materials</li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </section>
                                <button className='clokkbutton'>
                                    <div className='clokk'><span className='clokksymbol'>∟</span></div>
                                    <div className='theclokkk'>
                                        <p className='Last'>Last date of application is</p>
                                    </div>
                                    <div className='theclokkk'>
                                        <p className='Last05'>05 JAN 2024</p>
                                    </div>
                                    
                                </button>
                            </section>
                        </section>
                        <section className='botcontain'>
                            <section className='borrdd'>
                                <ul className='Detaillist'>
                                    <a href="#" className='Overview' onClick={toggleDetails4}><li id="button1">Overview</li></a>
                                    <a href="#" className='De' onClick={toggleDetails5}><li id="button2">Detail</li></a>
                                </ul>
                                <div id="hiddenLeaf1" className="hidden-leaf1" style={{ display: isDetailsVisible4 ? 'block' : 'none' }}>
                                    <section className='flexxx'>
                                        <section>
                                            <hr className='linebrack1' />
                                            <nav class="nav-bar">
                                                <ul className='listas'>
                                                    <li class="nav-item"><a className='firstchild'>O</a></li>
                                                    <li class="nav-item"><a className='midchild'>O</a></li>
                                                    <li class="nav-item"><a className='midchild'>O</a></li>
                                                    <li class="nav-item"><a className='lastchild'>O</a></li>
                                                </ul>
                                            </nav>
                                            <section className='dates'>
                                                <div className='setes1'>
                                                    <p className='dats'>12 JAN 2024</p>
                                                    <p className='Days'>Day 1</p>
                                                    <p className='Citys'>Islamabad</p>
                                                    <p className='visit'>Islamabad Schools Visit</p>
                                                    <p className='tout'>Islamabad City Tour</p>
                                                </div>
                                                <div className='setes'>
                                                    <p className='dats'>12 JAN 2024</p>
                                                    <p className='Days'>Day 1</p>
                                                    <p className='Citys'>Islamabad</p>
                                                    <p className='visit'>Fair-11:00am-6:30pm</p>
                                                    
                                                </div>
                                                <div className='setes'>
                                                    <p className='dats'>12 JAN 2024</p>
                                                    <p className='Days'>Day 1</p>
                                                    <p className='Citys'>Islamabad</p>
                                                    <p className='visit'>Fair-11:00am-6:30pm</p>
                                                    
                                                </div>
                                                <div className='setes'>
                                                    <p className='dats'>12 JAN 2024</p>
                                                    <p className='Days'>Day 1</p>
                                                    <p className='Citys'>Islamabad</p>
                                                    <p className='visit'>Islamabad Schools Visit</p>
                                                    <p className='tout'>Islamabad City Tour</p>
                                                </div>
                                            </section>
                                        </section>    
                                    </section>
                                </div>
                                <div id="hiddenLeaf1" className="hidden-leaf1" style={{ display: isDetailsVisible5 ? 'block' : 'none' }}>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, earum eveniet nemo ut labore illo incidunt, voluptatum, deserunt iste id ad repellat. Voluptatum enim, placeat veniam nihil excepturi molestias quod.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, earum eveniet nemo ut labore illo incidunt, voluptatum, deserunt iste id ad repellat. Voluptatum enim, placeat veniam nihil excepturi molestias quod.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, earum eveniet nemo ut labore illo incidunt, voluptatum, deserunt iste id ad repellat. Voluptatum enim, placeat veniam nihil excepturi molestias quod.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, earum eveniet nemo ut labore illo incidunt, voluptatum, deserunt iste id ad repellat. Voluptatum enim, placeat veniam nihil excepturi molestias quod.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, earum eveniet nemo ut labore illo incidunt, voluptatum, deserunt iste id ad repellat. Voluptatum enim, placeat veniam nihil excepturi molestias quod.</p>
                                </div>
                            </section>
                        </section>
                    </section>      
                </div>
            </div>
            
            <div className='rectungle'>
                <div className='cube'>
                    <h1 className='cubeh'>12-15</h1>
                    <h1 className='cubeh1'>JANUARY</h1>
                </div>
                <section className='listtitt'>
                    <span className='spPaki'>Pakistan Fair</span>
                    <span className='spIsla'>Islamabad & Karachi</span>
                    <button className="b01">Enroll now</button>
                    <a className='more' href="#" onClick={toggleDetails2}>More Details <span className={`rotate ${isDetailsVisible2 ? 'open' : ''}`}>&#94;</span></a>
                </section>
                <img className='imagefloat' src={image.src}/>
            </div>
            <div id="hiddenLeaf2" className="hidden-leaf2" style={{ display: isDetailsVisible2 ? 'block' : 'none' }}>
                <div className='biggerRectungle'>
                    <section>
                        <div className='smallerRectungle'>
                            <div className='leftBox'>
                                <p className='Flight'>Flight Details</p>
                                <p className='ISTAM'>ISTAMBUL AIRPORT TO ISTAMABAD AIRPORT</p>
                            </div>
                            <div className='rightBox'>
                                <p className='Fair'>Fair Price/Participant</p>
                                <p className='ffff'>$4000</p>
                            </div>
                        </div>
                        <section className='rightt'>
                            <div class="vl"></div>
                            <section className='flexing'>
                                <section className='rightpart'>
                                    <div className='tables'>
                                        <div className='table'>
                                            {activeTab === 'includes' && (
                                                <div className="green-table">
                                                    <button id='includes' className={activeTab === 'includes' ? 'active' : ''} onClick={() => handleTabClick('includes')}>Price Includes</button>
                                                    <button id='excludes' className={activeTab === 'excludes' ? 'active' : ''} onClick={() => handleTabClick('excludes')}>Price Not Includes</button>
                                                    <ul className='tableList'>
                                                    <li className='greencell'><span className='MIDDLE_DOT'>·</span>Domestic Flights (Pakistan)</li>
                                                    <li className='greencell1'><span className='MIDDLE_DOT1'>·</span>Accommodations 5 Stars Hotels</li>
                                                    <li className='greencell'><span className='MIDDLE_DOT'>·</span>Venue Rent & Setup Fee</li>
                                                    <li className='greencell1'><span className='MIDDLE_DOT1'>·</span>Promotional Activities</li>
                                                    <li className='greencell'><span className='MIDDLE_DOT'>·</span>Airport & in City Transfers</li>
                                                    </ul>
                                                </div>
                                            )}
                                            {activeTab === 'excludes' && (
                                                <div className="red-table">
                                                    <button id='includes1' className={activeTab === 'includes' ? 'active' : ''} onClick={() => handleTabClick('includes')}>Price Includes</button>
                                                    <button id='excludes1' className={activeTab === 'excludes' ? 'active' : ''} onClick={() => handleTabClick('excludes')}>Price Not Includes</button>
                                                    <ul className='tableList1'>
                                                    <li className='rgreencell'><span className='MIDDLE_DOT'>·</span>International Flights</li>
                                                    <li className='rgreencell1'><span className='MIDDLE_DOT1'>·</span>Visa Fee</li>
                                                    <li className='rgreencell'><span className='MIDDLE_DOT'>·</span>Printing of Marketing Materials</li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </section>
                                <button className='clokkbutton'>
                                    <div className='clokk'><span className='clokksymbol'>∟</span></div>
                                    <div className='theclokkk'>
                                        <p className='Last'>Last date of application is</p>
                                    </div>
                                    <div className='theclokkk'>
                                        <p className='Last05'>05 JAN 2024</p>
                                    </div>
                                    
                                </button>
                            </section>
                        </section>
                        <section className='botcontain'>
                            <section>
                                <ul className='Detaillist'>
                                    <a href="#" className='Overview' onClick={toggleDetails4}><li id="button1">Overview</li></a>
                                    <a href="#" className='De' onClick={toggleDetails5}><li id="button2">Detail</li></a>
                                </ul>
                                <div id="hiddenLeaf1" className="hidden-leaf1" style={{ display: isDetailsVisible4 ? 'block' : 'none' }}>
                                    <section className='flexxx'>
                                        <section>
                                        <hr className='linebrack1' />
                                        <nav class="nav-bar">
                                            <ul className='listas'>
                                                <li class="nav-item"><a className='firstchild'>O</a></li>
                                                <li class="nav-item"><a className='midchild'>O</a></li>
                                                <li class="nav-item"><a className='midchild'>O</a></li>
                                                <li class="nav-item"><a className='lastchild'>O</a></li>
                                            </ul>
                                        </nav>
                                        <section className='dates'>
                                            <div className='setes1'>
                                                <p className='dats'>12 JAN 2024</p>
                                                <p className='Days'>Day 1</p>
                                                <p className='Citys'>Islamabad</p>
                                                <p className='visit'>Islamabad Schools Visit</p>
                                                <p className='tout'>Islamabad City Tour</p>
                                            </div>
                                            <div className='setes'>
                                                <p className='dats'>12 JAN 2024</p>
                                                <p className='Days'>Day 1</p>
                                                <p className='Citys'>Islamabad</p>
                                                <p className='visit'>Fair-11:00am-6:30pm</p>
                                                
                                            </div>
                                            <div className='setes'>
                                                <p className='dats'>12 JAN 2024</p>
                                                <p className='Days'>Day 1</p>
                                                <p className='Citys'>Islamabad</p>
                                                <p className='visit'>Fair-11:00am-6:30pm</p>
                                                
                                            </div>
                                            <div className='setes'>
                                                <p className='dats'>12 JAN 2024</p>
                                                <p className='Days'>Day 1</p>
                                                <p className='Citys'>Islamabad</p>
                                                <p className='visit'>Islamabad Schools Visit</p>
                                                <p className='tout'>Islamabad City Tour</p>
                                            </div>
                                        </section>
                                    </section>    
                                    </section>
                                </div>
                                <div id="hiddenLeaf1" className="hidden-leaf1" style={{ display: isDetailsVisible5 ? 'block' : 'none' }}>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, earum eveniet nemo ut labore illo incidunt, voluptatum, deserunt iste id ad repellat. Voluptatum enim, placeat veniam nihil excepturi molestias quod.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, earum eveniet nemo ut labore illo incidunt, voluptatum, deserunt iste id ad repellat. Voluptatum enim, placeat veniam nihil excepturi molestias quod.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, earum eveniet nemo ut labore illo incidunt, voluptatum, deserunt iste id ad repellat. Voluptatum enim, placeat veniam nihil excepturi molestias quod.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, earum eveniet nemo ut labore illo incidunt, voluptatum, deserunt iste id ad repellat. Voluptatum enim, placeat veniam nihil excepturi molestias quod.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, earum eveniet nemo ut labore illo incidunt, voluptatum, deserunt iste id ad repellat. Voluptatum enim, placeat veniam nihil excepturi molestias quod.</p>
                                </div>
                            </section>
                        </section>
                    </section>      
                </div>
            </div>
            <div className='rectungle'>
                <div className='cube'>
                    <h1 className='cubeh'>12-15</h1>
                    <h1 className='cubeh1'>JANUARY</h1>
                </div>
                <section className='listtitt'>
                    <span className='spPaki'>Pakistan Fair</span>
                    <span className='spIsla'>Islamabad & Karachi</span>
                    <button className="b01">Enroll now</button>
                    <a className='more' href="#" onClick={toggleDetails3}>More Details <span className={`rotate ${isDetailsVisible3 ? 'open' : ''}`}>&#94;</span></a>
                </section>
                <img className='imagefloat' src={image.src}/>
            </div>
            <div id="hiddenLeaf3" className="hidden-leaf3" style={{ display: isDetailsVisible3 ? 'block' : 'none' }}>
                <div className='biggerRectungle'>
                    <section>
                        <div className='smallerRectungle'>
                            <div className='leftBox'>
                                <p className='Flight'>Flight Details</p>
                                <p className='ISTAM'>ISTAMBUL AIRPORT TO ISTAMABAD AIRPORT</p>
                            </div>
                            <div className='rightBox'>
                                <p className='Fair'>Fair Price/Participant</p>
                                <p className='ffff'>$4000</p>
                            </div>
                        </div>
                        <section className='rightt'>
                            <div class="vl"></div>
                            <section className='flexing'>
                                <section className='rightpart'>
                                    <div className='tables'>
                                        <div className='table'>
                                            {activeTab === 'includes' && (
                                                <div className="green-table">
                                                    <button id='includes' className={activeTab === 'includes' ? 'active' : ''} onClick={() => handleTabClick('includes')}>Price Includes</button>
                                                    <button id='excludes' className={activeTab === 'excludes' ? 'active' : ''} onClick={() => handleTabClick('excludes')}>Price Not Includes</button>
                                                    <ul className='tableList'>
                                                    <li className='greencell'><span className='MIDDLE_DOT'>·</span>Domestic Flights (Pakistan)</li>
                                                    <li className='greencell1'><span className='MIDDLE_DOT1'>·</span>Accommodations 5 Stars Hotels</li>
                                                    <li className='greencell'><span className='MIDDLE_DOT'>·</span>Venue Rent & Setup Fee</li>
                                                    <li className='greencell1'><span className='MIDDLE_DOT1'>·</span>Promotional Activities</li>
                                                    <li className='greencell'><span className='MIDDLE_DOT'>·</span>Airport & in City Transfers</li>
                                                    </ul>
                                                </div>
                                            )}
                                            {activeTab === 'excludes' && (
                                                <div className="red-table">
                                                    <button id='includes1' className={activeTab === 'includes' ? 'active' : ''} onClick={() => handleTabClick('includes')}>Price Includes</button>
                                                    <button id='excludes1' className={activeTab === 'excludes' ? 'active' : ''} onClick={() => handleTabClick('excludes')}>Price Not Includes</button>
                                                    <ul className='tableList1'>
                                                    <li className='rgreencell'><span className='MIDDLE_DOT'>·</span>International Flights</li>
                                                    <li className='rgreencell1'><span className='MIDDLE_DOT1'>·</span>Visa Fee</li>
                                                    <li className='rgreencell'><span className='MIDDLE_DOT'>·</span>Printing of Marketing Materials</li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </section>
                                <button className='clokkbutton'>
                                    <div className='clokk'><span className='clokksymbol'>∟</span></div>
                                    <div className='theclokkk'>
                                        <p className='Last'>Last date of application is</p>
                                    </div>
                                    <div className='theclokkk'>
                                        <p className='Last05'>05 JAN 2024</p>
                                    </div>
                                    
                                </button>
                            </section>
                        </section>
                        <section className='botcontain'>
                            <section>
                                <ul className='Detaillist'>
                                    <a href="#" className='Overview' onClick={toggleDetails4}><li id="button1">Overview</li></a>
                                    <a href="#" className='De' onClick={toggleDetails5}><li id="button2">Detail</li></a>
                                </ul>
                                <div id="hiddenLeaf1" className="hidden-leaf1" style={{ display: isDetailsVisible4 ? 'block' : 'none' }}>
                                    <section className='flexxx'>
                                        <section>
                                        <hr className='linebrack1' />
                                        <nav class="nav-bar">
                                            <ul className='listas'>
                                                <li class="nav-item"><a className='firstchild'>O</a></li>
                                                <li class="nav-item"><a className='midchild'>O</a></li>
                                                <li class="nav-item"><a className='midchild'>O</a></li>
                                                <li class="nav-item"><a className='lastchild'>O</a></li>
                                            </ul>
                                        </nav>
                                        <section className='dates'>
                                            <div className='setes1'>
                                                <p className='dats'>12 JAN 2024</p>
                                                <p className='Days'>Day 1</p>
                                                <p className='Citys'>Islamabad</p>
                                                <p className='visit'>Islamabad Schools Visit</p>
                                                <p className='tout'>Islamabad City Tour</p>
                                            </div>
                                            <div className='setes'>
                                                <p className='dats'>12 JAN 2024</p>
                                                <p className='Days'>Day 1</p>
                                                <p className='Citys'>Islamabad</p>
                                                <p className='visit'>Fair-11:00am-6:30pm</p>
                                                
                                            </div>
                                            <div className='setes'>
                                                <p className='dats'>12 JAN 2024</p>
                                                <p className='Days'>Day 1</p>
                                                <p className='Citys'>Islamabad</p>
                                                <p className='visit'>Fair-11:00am-6:30pm</p>
                                                
                                            </div>
                                            <div className='setes'>
                                                <p className='dats'>12 JAN 2024</p>
                                                <p className='Days'>Day 1</p>
                                                <p className='Citys'>Islamabad</p>
                                                <p className='visit'>Islamabad Schools Visit</p>
                                                <p className='tout'>Islamabad City Tour</p>
                                            </div>
                                        </section>
                                    </section>    
                                    </section>
                                </div>
                                <div id="hiddenLeaf1" className="hidden-leaf1" style={{ display: isDetailsVisible5 ? 'block' : 'none' }}>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, earum eveniet nemo ut labore illo incidunt, voluptatum, deserunt iste id ad repellat. Voluptatum enim, placeat veniam nihil excepturi molestias quod.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, earum eveniet nemo ut labore illo incidunt, voluptatum, deserunt iste id ad repellat. Voluptatum enim, placeat veniam nihil excepturi molestias quod.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, earum eveniet nemo ut labore illo incidunt, voluptatum, deserunt iste id ad repellat. Voluptatum enim, placeat veniam nihil excepturi molestias quod.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, earum eveniet nemo ut labore illo incidunt, voluptatum, deserunt iste id ad repellat. Voluptatum enim, placeat veniam nihil excepturi molestias quod.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, earum eveniet nemo ut labore illo incidunt, voluptatum, deserunt iste id ad repellat. Voluptatum enim, placeat veniam nihil excepturi molestias quod.</p>
                                </div>
                            </section>
                        </section>
                    </section>      
                </div>
            </div>
        </section>
    </>
    );
}