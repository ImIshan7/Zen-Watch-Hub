import {Component} from "react";
import home from '../images/home/watchvintage.png';
import home0 from '../images/home/vintagewatch02.png';
import logo from '../images/LOGO.png';
import product01 from '../images/product/product01.jpg';
import product02 from '../images/product/product02.jpg';
import product03 from '../images/product/product03.jpg';
import product04 from '../images/product/prodcut04.jpg';
import product05 from '../images/product/prodcut05.jpg';
import product06 from '../images/product/product06.jpg';
import product07 from '../images/home/rolex01.jpg';
export class Home extends Component {
    render() {
        return (
            <div>

                <div>
                    <div className="fixed inset-x-0 top-0 z-50">
                        <div className="bg-teal-600">
                            <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                                <div className="flex flex-col items-center justify-between lg:flex-row lg:justify-center">
                                    <div className="flex flex-1 items-center lg:mr-3 lg:flex-none">
                                        <p className="ml-3 text-center font-medium text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                 stroke="currentColor" aria-hidden="true"
                                                 className="mr-2 hidden h-6 w-6 lg:inline">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z">
                                                </path>
                                            </svg>
                                            To celebrate our
                                            <span className="font-semibold">Big Version 3</span> release, use
                                            <span className="font-black">VERSION3</span> code to get <span
                                            className="font-black">12% off</span>
                                        </p>
                                    </div>
                                    <div className="mt-2 w-full flex-shrink-0 lg:mt-0 lg:w-auto">
                                        <a className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-teal-600 shadow-sm hover:bg-teal-50"
                                           href="#product">Buy now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <main id="home" className="dark:bg-gray-800 bg-white h-screen pt-16">

                    <header className="h-20 sm:h-30 flex items-center z-30 w-full">

                        <div className="container mx-auto px-6 flex items-center justify-between">
                            <div className="uppercase text-yellow-400 font-black text-3xl">
                                ZEN Watch Hub
                            </div>
                            <div className="flex items-center">
                                <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden bg-gray-600 rounded-md">
                                    <a href="#home" className="py-2 px-6 flex font-semibold">
                                        Home
                                    </a>
                                    <a href="#about" className="py-2 px-6 flex font-semibold">
                                        About
                                    </a>
                                    <a href="#product" className="py-2 px-6 flex font-semibold">
                                        Products
                                    </a>
                                    <a href="#contact" className="py-2 px-6 flex font-semibold">
                                        Contact
                                    </a>
                                </nav>
                                <button className="lg:hidden flex flex-col ml-4">
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                                </button>
                            </div>
                        </div>
                    </header>
                    <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                        <div className="container mx-auto px-6 flex relative py-16">
                            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">

                                <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                                    Vintage Watch

                                </h1>
                                <p className=" pt-14 text-sm sm:text-base text-gray-700 dark:text-white">
                                    Discover timeless style with our vintage watches – a blend of elegance and history.
                                    Shop now for a touch of sophistication on your wrist.</p>
                                <div className="flex mt-8">
                                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                                        Shop Now
                                    </a>
                                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                                <img className="max-w-xl md:max-w-xl m-auto cursor-pointer" src={home0}/>

                            </div>
                            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                                <img className="max-w-xl md:max-w-xl m-auto cursor-pointer" src={home}/>

                            </div>
                        </div>
                    </div>

                    <section id="about" className="bg-gray-800">
                        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                                <div className="max-w-lg">
                                    <h2 className="text-5xl font-extrabold font-mono text-white text-center">About Us</h2>
                                    <p className="mt-4 text-white font-medium font-sans text-lg">All The Watch Are in Vintage and it condition like brand new.
                                        We are in ZEN Watch Hub We Sell in Vintage Watch In ourt Store.
                                        This Watch are some one Used but it is perfect brand new Condition.
                                        Please feel free to contact us anytime.
                                        We are always happy to help you and happy to find what you are looking for.
                                        If you have any trouble with your items please feel free to contact us first, we will do our best.</p>

                                </div>
                                <div className="mt-12 md:mt-0">
                                    <img className="object-cover rounded-lg shadow-md cursor-pointer" src={logo}/>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div id="product" className="text-center p-10 bg-gray-800">
                        <h1 className="text-5xl font-extrabold font-mono text-white ">latest Watch Collection</h1>

                    </div>


                    <section id="Projects"
                             className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 bg-gray-800">


                        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
                            <a href="#">

                                <img className="h-80 w-72 object-cover rounded-t-xl" src={product01}/>


                                <div className="px-4 py-3 w-72">
                                    <span className="text-gray-400 mr-3 uppercase text-xs">OMEGA</span>
                                    <p className="text-lg font-bold text-black truncate block capitalize">Omega Seamaster 120m Watch</p>
                                    <div className="flex items-center">
                                        <p className="text-xl font-bold text-black cursor-auto my-3">$1350</p>
                                        <del>
                                            <p className="text-sm font-semibold text-red-600 cursor-auto ml-2">$1990</p>
                                        </del>
                                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                                  fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                            <path
                                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg></div>
                                    </div>
                                </div>
                            </a>
                        </div>



                        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                            <a href="#">
                                <img className="h-80 w-72 object-cover rounded-t-xl" src={product02}/>
                                <div className="px-4 py-3 w-72">
                                    <span className="text-gray-400 mr-3 uppercase text-xs">OMEGA</span>
                                    <p className="text-lg font-bold text-black truncate block capitalize">Omega Seamaster 43mm Dial Come With Box</p>
                                    <div className="flex items-center">
                                        <p className="text-xl font-bold text-black cursor-auto my-3">$1199</p>
                                        <del>
                                            <p className="text-sm  font-semibold text-red-600 cursor-auto ml-2">$1690</p>
                                        </del>
                                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                                  fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                            <path
                                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg></div>
                                    </div>
                                </div>
                            </a>
                        </div>



                        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                            <a href="#">

                                <img className="h-80 w-72 object-cover rounded-t-xl" src={product03}/>

                                <div className="px-4 py-3 w-72">
                                    <span className="text-gray-400 mr-3 uppercase text-xs">OMEGA</span>
                                    <p className="text-lg font-bold text-black truncate block capitalize">OMEGA Seamaster Aqua Terra 150m</p>
                                    <div className="flex items-center">
                                        <p className="text-xl font-bold text-black cursor-auto my-3">$1390</p>
                                        <del>
                                            <p className="text-sm text-red-600 font-semibold cursor-auto ml-2">$1900</p>
                                        </del>
                                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                                  fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                            <path
                                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg></div>
                                    </div>
                                </div>
                            </a>
                        </div>



                        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                            <a href="#">

                                <img className="h-80 w-72 object-cover rounded-t-xl" src={product04}/>


                                <div className="px-4 py-3 w-72">
                                    <span className="text-gray-400 mr-3 uppercase text-xs">ROLEX</span>
                                    <p className="text-lg font-bold text-black truncate block capitalize">Rolex Datejust 126234 18K/SS 36MM Oyster Palm Green Dial Sport Watch</p>
                                    <div className="flex items-center">
                                        <p className="text-xl font-bold text-black cursor-auto my-3">$2900</p>
                                        <del>
                                            <p className="text-sm text-red-600 font-semibold cursor-auto ml-2">$4000</p>
                                        </del>
                                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                                  fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                            <path
                                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg></div>
                                    </div>
                                </div>
                            </a>
                        </div>



                        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                            <a href="#">


                                <img className="h-80 w-72 object-cover rounded-t-xl" src={product05}/>


                                <div className="px-4 py-3 w-72">
                                    <span className="text-gray-400 mr-3 uppercase text-xs">ROLEX</span>
                                    <p className="text-lg font-bold text-black truncate block capitalize">Rolex datejust 116300l Men Vintage Watch</p>
                                    <div className="flex items-center">
                                        <p className="text-xl font-bold text-black cursor-auto my-3">$1990</p>
                                        <del>
                                            <p className="text-sm text-red-600 font-semibold cursor-auto ml-2">$3000</p>
                                        </del>
                                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                                  fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                            <path
                                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg></div>
                                    </div>
                                </div>
                            </a>
                        </div>



                        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                            <a href="#">

                                <img className="h-80 w-72 object-cover rounded-t-xl" src={product06}/>

                                <div className="px-4 py-3 w-72">
                                    <span className="text-gray-400 mr-3 uppercase text-xs">ROLEX</span>
                                    <p className="text-lg font-bold text-black truncate block capitalize">Mens Rolex Date Stainless Steel Watch</p>
                                    <div className="flex items-center">
                                        <p className="text-xl font-bold text-black cursor-auto my-3">$2200</p>
                                        <del>
                                            <p className="text-sm text-red-600 font-semibold cursor-auto ml-2">$3900</p>
                                        </del>
                                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                                  fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                            <path
                                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg></div>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </section>

                    <section className="bg-gray-800 px-4 py-12 md:py-24">
                        <div className="max-w-screen-xl mx-auto">
                            <h2 className="  text-5xl font-extrabold font-mono text-white text-center  leading-none uppercase max-w-2xl mx-auto mb-12">Customer Reviews</h2>
                            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 relative">
                                <div className="bg-gray-200 rounded-lg p-8 text-center md:w-1/3">
                                    <p className="font-bold uppercase">John Doe</p>
                                    <p className="text-xl font-sans text-gray-700">This podcast is amazing! The storytelling and production
                                        quality are top-notch. Fast Delivery!</p>
                                    <div className="flex items-center justify-center space-x-2 mt-4">
                                        <svg className="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                             fill="currentColor" stroke="currentColor">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg className="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                             fill="currentColor" stroke="currentColor">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg className="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                             fill="currentColor" stroke="currentColor">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="bg-gray-200 rounded-lg p-8 text-center md:w-1/3">
                                    <p className="font-bold uppercase">Jane Smith</p>
                                    <p className="text-xl font-sans text-gray-700">This podcast kept me on the edge of my seat.It is Worth To This Price.
                                        Good Seller !</p>
                                    <div className="flex items-center justify-center space-x-2 mt-4">
                                        <svg className="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                             fill="currentColor" stroke="currentColor">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg className="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                             fill="currentColor" stroke="currentColor">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg className="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                             fill="currentColor" stroke="currentColor">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="bg-gray-200 rounded-lg p-8 text-center md:w-1/3">
                                    <p className="font-bold uppercase">Emily Johnson</p>
                                    <p className="text-xl font-sans text-gray-700">I can't get enough of this podcast!
                                        Best Communication.Highly recommend!</p>
                                    <div className="flex items-center justify-center space-x-2 mt-4">
                                        <svg className="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                             fill="currentColor" stroke="currentColor">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg className="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                             fill="currentColor" stroke="currentColor">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg className="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                             fill="currentColor" stroke="currentColor">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="px-3 py-5  lg:py-10 bg-gray-800">
                        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                            <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
                                <p className="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
                                <p className="text-4xl font-bold md:text-7xl text-white">SUMMER SALE</p>
                                <p className="mt-2 text-sm md:text-lg text-white">For limited time only!</p>
                                <a href="#product" className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
                                    Buy Now</a>
                            </div>
                            <div className="order-1 lg:order-2">
                                <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px] duration-500 hover:scale-105 hover:shadow-xl" src={product07}/>
                            </div>
                        </div>
                    </section>

                    <div className="bg-gray-800 py-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div id="contact" className="lg:text-center">
                                <h2 className="tracking-wide uppercase text-5xl font-extrabold font-mono text-white">Contact US</h2>
                                <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto font-medium">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis
                                    in, accusamus quisquam.
                                </p>
                            </div>

                            <div className="mt-10">
                                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                                </svg>

                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <dt className="text-lg leading-6 font-bold text-yellow-400">
                                                Address
                                            </dt>
                                            <dd className="mt-2 text-sky-50 font-sans">
                                                123 Main St, Suite 100<br></br>
                                                Anytown, USA 12345
                                            </dd>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>

                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <dt className="text-lg leading-6 font-bold text-yellow-400">
                                                Phone number
                                            </dt>
                                            <dd className="mt-2 text-sky-50 font-sans">
                                                (555) 555-5555
                                            </dd>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>

                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <dt className="text-lg leading-6 font-bold text-yellow-400">
                                                Email
                                            </dt>
                                            <dd className="mt-2 text-sky-50 font-sans">
                                                zenwatchhubofficial@gmail.com
                                            </dd>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>

                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <dt className="text-lg leading-6 font-bold text-yellow-400">
                                                Store Hours
                                            </dt>
                                            <dt className="mt-2 text-sky-50 font-sans">
                                                Monday - Friday: 9am to 8pm<br></br>
                                                Saturday: 10am to 6pm <br></br>
                                                Sunday: 12pm to 4pm<br></br>
                                            </dt>
                                        </div>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>


                    <div className="px-3 py-6 bg-gray-800 text-white">
                        <div className="mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row max-w-screen-lg">
                            <div className="sm:w-7/12">
                                <div className="text-3xl font-bold">
                                    Subscribe to my
                                    <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              Newsletters
            </span>
                                </div>
                                <p className="mt-3 text-gray-300">
                                    Subscribe to Our Newsletters for Exclusive Updates and Insights!
                                    Subscribe to Our Newsletters for Curated Content and Exclusive Updates!
                                </p>
                            </div>
                            <div className="w-full sm:w-5/12">
                                <form className="flex rounded-full bg-slate-800 px-4 py-2 focus-within:ring-2 focus-within:ring-cyan-600 hover:ring-2 hover:ring-cyan-600">
                                    <input
                                        className="w-full appearance-none bg-slate-800 focus:outline-none text-white"
                                        type="email"  // Specify the input type if it's an email subscription
                                        placeholder="Your email"
                                    />
                                    <button
                                        className="ml-2 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-1 text-sm font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
                                        type="submit"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </main>

            </div>
        );
    }
}