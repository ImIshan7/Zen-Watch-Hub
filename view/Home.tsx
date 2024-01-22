import {Component} from "react";
import home from '../images/home/watchvintage.png';
import home0 from '../images/home/vintagewatch02.png';
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
                <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen pt-16">

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
                </main>

            </div>
        );
    }
}