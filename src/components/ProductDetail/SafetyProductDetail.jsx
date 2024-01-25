/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Navigation from '../templates/Navigation';
import Honeywell from '../../assets/itemManufacture.png';
import Tabs from '../templates/Tabs';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ScrollToTop from './../ScrollToTop/ScrollToTop';

const SafetyProductDetail = ({ products, type }) => {

    const { id } = useParams();
    const product = products.find((el) => el.id === Number(id));

    if (!product) {
        return <div
            className='w-full h-screen flex flex-col justify-center items-center bg-fourToFour bg-no-repeat bg-center bg-cover'
        >
            <h1 className='2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg mb-4 font-bold text-white uppercase'>
                Product not found
            </h1>
            <Link to={"/Categories"} className='py-2 px-4 border rounded-full text-white font-semibold'>
                Return to selection
            </Link>
        </div>;
    }


    return (
        <>
            <div>
                <div>
                    <NavBar />
                </div>
                <ScrollToTop />
                <main className='container px-4 font-body'>
                    <div className='my-6'>
                        <Navigation path={location.pathname} products={products} />
                    </div>
                    <section className='flex gap-8 safetyContent mb-10'>
                        <div className=' flex items-center justify-center max-w-[360px] h-[360px] w-full bg-gray-300 safetyItem'>
                            <img src={product.image} alt={product.title} className='w-[180px]' />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <h1 className='font-bold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl uppercase'>
                                    {product.title} {product.id}
                                </h1>
                                <p>
                                    product id: {product.id}
                                </p>
                            </div>

                            <div>
                                <h2 className='font-bold 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg uppercase
                                text-primary'>
                                    Manufacturer:
                                </h2>
                                <img src={Honeywell} alt='' />
                            </div>
                            <div className='flex flex-col'>
                                <h2 className='font-bold 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg uppercase
                                text-primary'>
                                    Category:
                                </h2>
                                <p className='2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg uppercase'>
                                    Gas Detector
                                </p>
                            </div>
                            <div>
                                <p className='2xl:text-xl xl:text-lg lg:text-md md:text-md sm:text-sm text-sm text-justify uppercase context'>
                                    {product.context}
                                    {/* Esxample: SafeMed is a leading supplier and reseller of Bently Nevada Vibration Monitoring in UAE, and we ship to all major cities such as Dubai & Abu Dhabi, Sharjah */}
                                </p>
                            </div>
                            <div className='flex gap-8'>
                                <a
                                    href='tel:+971-58-9285102'
                                    className='2xl:text-lg xl:text-lg lg:text-lg md:text-md sm:text-sm text-xs
                                     uppercase font-bold py-2 max-w-[220px] w-full text-center bg-primary rounded-md text-white'
                                >
                                    Request a quote
                                </a>
                                <a
                                    href='https://wa.me/971589285102'
                                    className='2xl:text-lg xl:text-lg lg:text-lg md:text-md sm:text-sm text-xs
                                     uppercase font-bold py-2 max-w-[220px] w-full text-center bg-primary rounded-md text-white'
                                >
                                    Whatsapp us
                                </a>

                            </div>
                        </div>
                    </section>
                    <section className='text-justify flex flex-col gap-4 mb-10 border border-primary p-4'>
                        <h2 className='2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl mb-4 font-bold text-primary uppercase'>
                            Description
                        </h2>
                        <div>
                            <h2 className='2xl:text-xl xl:text-lg lg:text-lg md:text-md sm:text-sm text-sm uppercase text-primary font-bold'>
                                BW Clip Standard Features:
                            </h2>
                            <ul className='list-disc 2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-xs uppercase px-4'>
                                <li>
                                    <p>
                                        Weight: 0.6 lbs.
                                    </p>
                                </li>
                                <li>
                                    <p>Temperature: -40 to 122 Degrees F</p>
                                </li>
                                <li>
                                    <p>Humidity: 5 - 95 percent RH (non-condensing)</p>
                                </li>
                                <li>
                                    <p>Alarms: Visual, vibrating, and audible</p>
                                </li>
                                <li>
                                    <p>Typical Battery Life: Two years</p>
                                </li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <p className='2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-xs uppercase text-justify flex flex-col gap-2'>
                                The 2-Year BW Clip H2S Monitor is a maintenance-free, single gas detector for hydrogen sulfide detection. Alarm set points in this device are preset to 10 ppm and 15 ppm. This gas monitor is the updated model of BW`s discontinued GasAlert Clip Extreme for H2S (GA24XT-H). This detector can be your everyday companion for hazardous environments. We also carry the new disposable BWC2R-H with Real-Time display.
                                <span>
                                    Just turn on the device and it runs continuously — no need for calibration, sensor replacement, battery replacement or battery charging. That means great reliability and no downtime. With the two-year BW Clip for H2S, you can use the BW Clip Hibernation Case when you`re not using it for a week or more and extend it`s life by that period of time, up to 12 months.
                                </span>
                                <span>
                                    Compatible with both the MicroDock II and the new Intellidox instrument management systems, the BW Clip is engineered to the highest standards of quality and reliability, keeping you safe and compliant. Use the hands-free Hard Hat Clip carrying accessory GA-HC-1 with any of the BW single gas monitors.
                                </span>
                                <span>
                                    Custom calibrations are available direct from PK Safety. If you need custom alarms for your BW Clip, we have technicians that can customize these settings to your exact requirements without delaying your order. Call us at 1-855-874-5464 for details.
                                </span>
                            </p>
                        </div>
                        <div>
                            <h2 className='2xl:text-xl xl:text-lg lg:text-lg md:text-md sm:text-sm text-sm uppercase text-primary font-bold'>
                                BW Clip Standard Features:
                            </h2>
                            <ul className='list-disc 2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-xs uppercase px-4'>
                                <li>
                                    <p>
                                        Maintenance-free: no sensor or battery changes necessary
                                    </p>
                                </li>
                                <li>
                                    <p>Compact, lightweight design with one-button operation</p>
                                </li>
                                <li>
                                    <p>Designed for a range of harsh environments and extreme temperatures</p>
                                </li>
                                <li>
                                    <p>Hibernation mode with case accessory or IntelliDoX</p>
                                </li>
                                <li>
                                    <p>Automated self-test of battery, sensor and electronics</p>
                                </li>
                                <li>
                                    <p>Wide-angle flash, which alerts simultaneously with audible and vibrating alarm</p>
                                </li>
                                <li>
                                    <p>Automatic logging of the 35 most recent gas events and bump test results</p>
                                </li>
                                <li>
                                    <p>Compatible with MicroDock II and Fleet Manager II software</p>
                                </li>
                                <li>
                                    <p>Ip 66/67- can be submerged up to 1 meter</p>
                                </li>
                                <li>
                                    <p>Default Alarm Setpoints at 10 ppm and 15 ppm</p>
                                </li>
                                <li>
                                    <p>Alarm Setpoints range: 1.6 ppm to 20 ppm</p>
                                </li>
                                <li>
                                    <p>Detector measuring range: 0-100 ppm</p>
                                </li>
                                <li>
                                    <p>Affordable, with low cost of ownership</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='2xl:text-xl xl:text-lg lg:text-lg md:text-md sm:text-sm text-sm uppercase text-primary font-bold'>
                                Configurable Options with IntelliDoX:
                            </h2>
                            <ul className='list-disc 2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-xs uppercase px-4'>
                                <li>
                                    <p>Configuration of high and low alarm set points before the device is activated</p>
                                </li>
                                <li>
                                    <p>Adjustment of alarm set points and other parameters as needed throughout the lifespan</p>
                                </li>
                                <li>
                                    <p>Non compliance chirp indicator</p>
                                </li>
                                <li>
                                    <p>Configuration without activation</p>
                                </li>
                                <li>
                                    <p>Option to enable the noncompliance indicator, which flashes red when a bump test is due or a gas event occurs</p>
                                </li>
                                <li>
                                    <p>Option to display gas reading during alarm</p>
                                </li>
                                <li>
                                    <p>User settable bump test reminder</p>
                                </li>
                                <li>
                                    <p>7-8 sec Bump test with no more than 1 minute purge</p>
                                </li>
                                <li>
                                    <p>Option to display the Real Time Clock</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='2xl:text-xl xl:text-lg lg:text-lg md:text-md sm:text-sm text-sm uppercase text-primary font-bold'>
                                Use the unique advanced technology for safety compliance and productivity:
                            </h2>
                            <ul className='list-disc 2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-xs uppercase px-4'>
                                <li>
                                    <p>Unique dual reservoir sensor design dramatically improves instrument performance, response time, and longevity compared to traditional electrochemical sensors and consistently delivers reliable instrument performance under the harshest environmental conditions</p>
                                </li>
                                <li>
                                    <p>Reflex Technology advanced automated self-test function routinely checks the operating condition of the sensor to increase safety, up-time, and overall worker confidence</p>
                                </li>
                            </ul>
                            <p className='2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-xs uppercase'>
                                <a className='underline'
                                    href='https://pksafety.com/bw-intellidox-docking-station-dx-clip/'>IntelliDoX</a> instrument management system is the quickest bump test in the industry with configuration of alarm set points. It can perform different tests for up to five BW Clip detectors at once for maximum productivity with easy and accurate record-keeping.
                            </p>
                        </div>

                        <div>
                            <h2 className='2xl:text-xl xl:text-lg lg:text-lg md:text-md sm:text-sm text-sm uppercase text-primary font-bold'>
                                Why Buy from SafeMed:
                            </h2>
                            <ul className='list-disc 2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-xs uppercase px-4'>
                                <li>
                                    <p>
                                        Supplier of [Product title] + [Target country]
                                    </p>
                                </li>
                                <li>
                                    <p>Best online prices for [Product title]</p>
                                </li>
                                <li>
                                    <p>Shipping at door with custom and duty included in price quotation.</p>
                                </li>
                                <li>
                                    <p>Pay via Bank Transfer, Credit Card or secure Stripe payment.</p>
                                </li>
                                <li>
                                    <p>Special discount available on bulk orders.</p>
                                </li>
                                {/* Example:
                                Why Buy from SafeMed:
                                *Supplier of Bently Nevada 330500 Velomitor in UAE.
                                *Best online prices for Bently Nevada 330500 Velomitor with wide range of Bently Nevada Vibration Monitoring.
                                *Shipping at door with custom and duty included in price quotation.
                                *Pay via Bank Transfer, Credit Card or secure Stripe payment.
                                *Special discount available on bulk orders. */}
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h2 className='2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl mb-4 font-bold text-primary uppercase'>
                            Similar products
                        </h2>
                        <div>
                            <Tabs products={products} type={type} />
                        </div>
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default SafetyProductDetail;