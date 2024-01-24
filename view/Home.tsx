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
                                           href="#pricing">Buy now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <main className="dark:bg-gray-800 bg-white h-screen pt-16">

                    <header className="h-20 sm:h-30 flex items-center z-30 w-full">

                        <div className="container mx-auto px-6 flex items-center justify-between">
                            <div className="uppercase text-yellow-400 font-black text-3xl">
                                ZEN Watch Hub
                            </div>
                            <div className="flex items-center">
                                <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden bg-gray-600 rounded-md">
                                    <a href="#" className="py-2 px-6 flex font-semibold">
                                        Home
                                    </a>
                                    <a href="#" className="py-2 px-6 flex font-semibold">
                                        About
                                    </a>
                                    <a href="#" className="py-2 px-6 flex font-semibold">
                                        Products
                                    </a>
                                    <a href="#" className="py-2 px-6 flex font-semibold">
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

                    <section className="bg-gray-800">
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

                    <div className="text-center p-10 bg-gray-800">
                        <h1 className="text-5xl font-extrabold font-mono text-white ">latest Watch Collection</h1>

                    </div>


                    <section id="Projects"
                             className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14  mb-5 bg-gray-800">


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

                </main>

            </div>
        );
    }
}