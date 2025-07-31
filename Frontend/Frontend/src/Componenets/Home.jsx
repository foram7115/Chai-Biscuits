import React from 'react'
import hotco from '../assets/hot.png'
import coldco from '../assets/cold.png'
import coldd from '../assets/colddrink.png'
import food from '../assets/food3.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/pagination";
import Header from './Header'

const Home = () => {
    return (
        <>
        <Header/>
        <div>
            <div className="min-h-screen bg-[#fdf3ef] p-6">
                {/* Search Bar */}
                <div className="flex items-center justify-center bg-[#e5d5ca] px-4 py-3 rounded-full mb-6 ">
                    <span class="material-symbols-outlined">
                        search
                    </span>
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent outline-none w-full text-[#4b2e2e]"
                    />
                </div>

                {/* Heading */}
                <h2 className="flex justify-center text-3xl font-semibold text-[#4b2e2e] mb-4">Our Menu</h2>

                {/* Menu Items */}
                <div className="flex items-center gap-15 ">
                    {/* Hot Coffee */}
                    <div className="flex flex-col items-center text-[#4b2e2e]">
                        <div className="w-16 h-16 bg-[#e5d5ca] rounded-full flex items-center justify-center mb-2">
                            <img src={hotco} alt="Hot Coffee" className="w-20 h-20" />
                        </div>
                        <span className="text-sm" >Hot Coffee</span>
                    </div>

                    {/* Cold Coffee */}
                    <div className="flex flex-col items-center text-[#4b2e2e]">
                        <div className="w-16 h-16 bg-[#e5d5ca] rounded-full flex items-center justify-center mb-2">
                            <img src={coldco} alt="Hot Coffee" className="w-15 h-15" />
                        </div>
                        <span className="text-sm">Cold Coffee</span>
                    </div>

                    {/* Drinks */}
                    <div className="flex flex-col items-center text-[#4b2e2e]">
                        <div className="w-16 h-16 bg-[#e5d5ca] rounded-full flex items-center justify-center mb-2">
                            <img src={coldd} alt="Drinks" className="w-12 h-15" />
                        </div>
                        <span className="text-sm">Drinks</span>
                    </div>

                    {/* Snacks */}
                    <div className="flex flex-col items-center text-[#4b2e2e]">
                        <div className="w-16 h-16 bg-[#e5d5ca] rounded-full flex items-center justify-center mb-2">
                            <img src={food} alt="Snacks" className="w-12 h-12" />
                        </div>
                        <span className="text-sm">Snacks</span>
                    </div>
                </div>
                <div className="w-full max-w-md mx-auto mt-10">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="rounded-2xl"
                    >
                        <SwiperSlide>
                            <div className="relative bg-cover bg-center rounded-2xl overflow-hidden h-48" style={{ backgroundImage: `url('https://source.unsplash.com/600x300/?coffee')` }}>
                                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-5 text-white">
                                    <h2 className="text-2xl font-bold">Today's</h2>
                                    <h2 className="text-2xl font-bold">Special Offer</h2>
                                    <p className="mt-2 font-medium underline underline-offset-4">Buy Now →</p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative bg-cover bg-center rounded-2xl overflow-hidden h-48" style={{ backgroundImage: `url('https://source.unsplash.com/600x300/?latte')` }}>
                                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-5 text-white">
                                    <h2 className="text-2xl font-bold">Flat 30% Off</h2>
                                    <p className="mt-2 font-medium underline underline-offset-4">Buy Now →</p>
                                </div>
                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
