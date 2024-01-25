// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Navigation from '../templates/Navigation';
import { Link } from 'react-router-dom';
import './SiteMap.css';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const SiteMap = () => {

    const handleButtonClick = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <>
            <div>
                <div>
                    <NavBar />
                </div>
                <ScrollToTop />
                <main className='container px-4'>
                    <div className='my-6'>
                        <Navigation path={location.pathname} />
                    </div>
                    <h1 className='2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center font-semibold mb-5 text-primary'>Site Map</h1>
                    <div className='flex gap-8 justify-between flex-wrap mb-5'>
                        <ul className='flex flex-col gap-2 text-primary'>
                            <h2 className='2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-lg 
                text-primary font-semibold'>
                                Navigation
                            </h2>
                            <li>
                                <Link className='border-b-2 border-primary' onClick={handleButtonClick} to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link className='border-b-2 border-primary' onClick={handleButtonClick} to={"/Categories/medical"}>Medical</Link>
                            </li>
                            <li>
                                <Link className='border-b-2 border-primary' onClick={handleButtonClick} to={"/Categories/safety"}>Safety</Link>
                            </li>
                            <li>
                                <Link className='border-b-2 border-primary' onClick={handleButtonClick} to={"/Contacts"}>Contacts</Link>
                            </li>
                            <li>
                                <Link className='border-b-2 border-primary' onClick={handleButtonClick} to={"/sitemap"}>Sitemap</Link>
                            </li>
                        </ul>
                        <ul>
                            <h2 className='2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-lg 
                text-primary font-semibold'>
                                Other Countries
                            </h2>
                            <li><Link className='site__link' to={"/qa"}>Qatar</Link></li>
                            <li><Link className='site__link' to={"/kz"}>Kazakhstan</Link></li>
                            <li><Link className='site__link' to={"/ue"}>UAE</Link></li>
                            <li><Link className='site__link' to={"/sa"}>Saudi Arabia</Link></li>
                            <li><Link className='site__link' to={"/kw"}>Kuwait</Link></li>
                            <li><Link className='site__link' to={"/iq"}>Iraq</Link></li>
                            <li><Link className='site__link' to={"/eg"}>Egypt</Link></li>
                            <li><Link className='site__link' to={"/az"}>Azerbaijan</Link></li>
                            <li><Link className='site__link' to={"/uz"}>Uzbekistan</Link></li>
                            <li><Link className='site__link' to={"/tm"}>Turkmenistan</Link></li>
                            <li><Link className='site__link' to={"/mn"}>Mongolia</Link></li>
                            <li><Link className='site__link' to={"/ru"}>Russia</Link></li>
                        </ul>
                        <ul>
                            <h2 className='2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-lg 
                text-primary font-semibold'>
                                Brands
                            </h2>
                            <li><Link className='site__link' to={"#!"}>Endress+Hauser</Link></li>
                            <li><Link className='site__link' to={"#!"}>Techcon</Link></li>
                            <li><Link className='site__link' to={"#!"}>Laird</Link></li>
                            <li><Link className='site__link' to={"#!"}>KROHNE</Link></li>
                            <li><Link className='site__link' to={"#!"}>Chemtronics</Link></li>
                            <li><Link className='site__link' to={"#!"}>Walchem</Link></li>
                            <li><Link className='site__link' to={"#!"}>DDM Novastar</Link></li>
                            <li><Link className='site__link' to={"#!"}>Quest Technology</Link></li>
                            <li><Link className='site__link' to={"#!"}>TDK-Lambda</Link></li>
                            <li><Link className='site__link' to={"#!"}>Conductive Containers</Link></li>
                            <li><Link className='site__link' to={"#!"}>Towa</Link></li>
                            <li><Link className='site__link' to={"#!"}>Nexel</Link></li>
                        </ul>
                        <ul>
                            <h2 className='2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-lg 
                text-primary font-semibold'>
                                Categories
                            </h2>
                            <li><Link className='site__link' to={"#!"}>Alarm Annunciators</Link></li>
                            <li><Link className='site__link' to={"#!"}>Oscilloscopes, Oscilloscope..</Link></li>
                            <li><Link className='site__link' to={"#!"}>Control Panel Enclosures</Link></li>
                            <li><Link className='site__link' to={"#!"}>Networking & Telecommun..</Link></li>
                            <li><Link className='site__link' to={"#!"}>Signal Generators & Cou..</Link></li>
                            <li><Link className='site__link' to={"#!"}>Process Controllers</Link></li>
                            <li><Link className='site__link' to={"#!"}>Power Supplies, Power Suppl..</Link></li>
                            <li><Link className='site__link' to={"#!"}>Data Acquisition and Meters..</Link></li>
                            <li><Link className='site__link' to={"#!"}>TFlame Detectors</Link></li>
                            <li><Link className='site__link' to={"#!"}>Platinum Resistance Thermom..</Link></li>
                            <li><Link className='site__link' to={"#!"}>Density Meters</Link></li>
                            <li><Link className='site__link' to={"#!"}>Recorders</Link></li>
                        </ul>
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default SiteMap;