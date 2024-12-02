import React from 'react';
import { Volume2 } from 'lucide-react';

const PromoBar = () => {
    return (
        <div className="fixed inset-x-0 top-0 z-50">
            <div className="bg-black">
                <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between lg:flex-row lg:justify-center">
                        <div className="flex flex-1 items-center lg:mr-3 lg:flex-none">
                            <p className="ml-3 text-center font-medium text-white">
                                <Volume2 className="mr-2 hidden h-6 w-6 lg:inline" />
                                To celebrate our
                                <span className="font-semibold"> Big Version 3 </span> release, use
                                <span className="font-black"> VERSION3 </span> code to get <span className="font-black">12% off</span>
                            </p>
                        </div>
                        <div className="mt-2 w-full flex-shrink-0 lg:mt-0 lg:w-auto">
                            <a
                                href="#products"
                                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50 transition-colors duration-300"
                            >
                                Buy now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoBar;