import {Component} from "react";
import home from '../images/home/watchvintage.png';
import home0 from '../images/home/vintagewatch02.png';
export class Home extends Component {
    render() {
        return (
            <div>

                <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
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