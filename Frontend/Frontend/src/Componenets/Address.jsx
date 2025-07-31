import React from 'react';
import { FiArrowLeft, FiMapPin, FiPlus, FiMoreVertical } from 'react-icons/fi';

function Address() {
    return (
        <div className="min-h-screen bg-[#fceeea] text-[#4b2c20] flex justify-center items-center px-4 py-5">
            <div className="w-full max-w-lg">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <FiArrowLeft size={24} className="cursor-pointer" />
                    <h1 className="text-xl font-semibold">Select Location</h1>
                </div>

                {/* Search Address */}
                <input
                    type="text"
                    placeholder="Search Address"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white placeholder-gray-500 mb-6"
                />

                {/* Options */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between bg-white rounded-lg px-4 py-3 shadow-sm">
                        <div className="flex items-center gap-3 text-[#d12c6a] font-semibold">
                            <FiMapPin size={20} />
                            Use my Current Location
                        </div>
                    </div>

                    <div className="flex items-center justify-between bg-white rounded-lg px-4 py-3 shadow-sm">
                        <div className="flex items-center gap-3 text-[#d12c6a] font-semibold">
                            <FiPlus size={20} />
                            Add New Address
                        </div>
                        <span className="text-[#d12c6a] text-xl">{'>'}</span>
                    </div>
                </div>

                {/* Saved Addresses */}
                <h2 className="mt-8 mb-4 font-semibold text-lg">Saved Addresses</h2>
                <div className="space-y-4">
                    {/* Address Item 1 */}
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">
                                    Work{' '}
                                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded ml-2">
                                        Selected
                                    </span>
                                </h3>
                                <p className="text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero recusandae fugit delectus repellat odio perspiciatis quia animi atque obcaecati mollitia!</p>
                            </div>
                            <FiMoreVertical className="text-gray-500" />
                        </div>
                    </div>

                    {/* Address Item 2 */}
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Other</h3>
                                <p className="text-sm mt-1">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore ipsam iusto facilis qui. Voluptas deleniti deserunt totam quae? Laboriosam?
                                </p>
                            </div>
                            <FiMoreVertical className="text-gray-500" />
                        </div>
                    </div>

                    {/* Address Item 3 */}
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Other</h3>
                                <p className="text-sm mt-1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum eos doloremque repellendus quam voluptate, vero non temporibus reprehenderit veritatis.
                                </p>
                            </div>
                            <FiMoreVertical className="text-gray-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Address;
