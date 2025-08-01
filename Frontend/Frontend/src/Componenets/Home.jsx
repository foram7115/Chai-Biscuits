import React from 'react'
import hotco from '../assets/hot.png'
import coldco from '../assets/cold.png'
import coldd from '../assets/colddrink.png'
import food from '../assets/food3.png'
import Capuccino from '../assets/Capuccino.jpg'
import Americo from '../assets/Americo.jpg'
import Latte from '../assets/Latte.jpg'
import Mocha from '../assets/Mocha.jpg'
import Macchiato from '../assets/Macchiato.jpg'
import Flat from '../assets/Flat.jpg'
import CC from '../assets/CC.webp'
import Affo from '../assets/Affo.jpg'
import Espresso from '../assets/Espresso.webp'
import Brew from '../assets/Brew.jpg'
import Header from './Header'

const Home = () => {
    const coffeeItems = [
        { title: "Cappuccino", description: "Espresso, steamed milk, milk foam", price: "₹300.00", image: Capuccino },
        { title: "Americano", description: "Espresso, hot water", price: "₹250.00", image: Americo },
        { title: "Latte", description: "Espresso, milk, foam art", price: "₹280.00", image: Latte },
        { title: "Mocha", description: "Espresso, chocolate, steamed milk", price: "₹320.00", image: Mocha },
        { title: "Macchiato", description: "Espresso, milk foam", price: "₹270.00", image: Macchiato },
        { title: "Flat White", description: "Espresso, steamed milk", price: "₹260.00", image: Flat },
        { title: "Iced Coffee", description: "Chilled espresso, ice, milk", price: "₹290.00", image: CC },
        { title: "Affogato", description: "Espresso over ice cream", price: "₹350.00", image: Affo },
        { title: "Espresso Shot", description: "Strong and bold", price: "₹200.00", image: Espresso },
        { title: "Cold Brew", description: "Slow-brewed coffee", price: "₹310.00", image: Brew },
    ];

    return (
         <>
            <Header />
            <div className="min-h-screen bg-[#fdf3ef] p-6">

                {/* Search Bar */}
                <div className="flex items-center justify-center bg-[#e5d5ca] px-4 py-3 rounded-full mb-6">
                    <span className="material-symbols-outlined mr-2">search</span>
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent outline-none w-full text-[#4b2e2e]"
                    />
                </div>

                {/* Heading */}
                <h2 className="flex justify-center text-3xl font-semibold text-[#4b2e2e] mb-4">Our Menu</h2>

                {/* Menu Icons */}
                <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-6">
                    {[{ icon: hotco, label: "Hot Coffee" }, { icon: coldco, label: "Cold Coffee" },
                    { icon: coldd, label: "Drinks" }, { icon: food, label: "Snacks" }]
                        .map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-[#4b2e2e]">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#e5d5ca] rounded-full flex items-center justify-center mb-2">
                                    <img src={item.icon} alt={item.label} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                                </div>
                                <span className="text-sm text-center">{item.label}</span>
                            </div>
                        ))}
                </div>

                {/* Offer Cards */}
                <div className="w-full mt-10 px-4">
                    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory sm:justify-center sm:overflow-visible scrollbar-hide">
                        {[{
                            bg: "https://source.unsplash.com/600x300/?coffee",
                            title: "Today's", subtitle: "Special Offer", button: "Buy Now →"
                        },
                        {
                            bg: "https://source.unsplash.com/600x300/?latte",
                            title: "Flat 30% Off", button: "Buy Now →"
                        }].map((item, i) => (
                            <div key={i} className="snap-start shrink-0 w-[280px] sm:w-[360px] h-48 bg-cover bg-center rounded-2xl overflow-hidden relative"
                                style={{ backgroundImage: `url(${item.bg})` }}>
                                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-5 text-white">
                                    <h2 className="text-2xl font-bold">{item.title}</h2>
                                    {item.subtitle && <h2 className="text-2xl font-bold">{item.subtitle}</h2>}
                                    <p className="mt-2 font-medium underline underline-offset-4">{item.button}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>


                    {/* Best Items Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-[#4b2e2e] mb-6">Best Items</h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                            {coffeeItems.map((item, i) => (
                                <div key={i} className="bg-[#f9eae2] rounded-xl shadow p-3 flex flex-col items-center text-[#4b2e2e]">
                                    {/* Image Container with fixed height */}
                                    <div className="w-full h-36 sm:h-40 bg-[#d9c2b4] rounded-t-xl overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Text Info */}
                                    <div className="mt-2 w-full">
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                        <p className="text-sm text-gray-700">{item.description}</p>
                                    </div>

                                    {/* Price and Add Button */}
                                    <div className="mt-2 flex justify-between items-center w-full">
                                        <span className="text-lg font-bold">{item.price}</span>
                                        <button className="w-8 h-8 rounded-full bg-[#4b2e2e] text-white flex items-center justify-center text-xl">+</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Best Items Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-semibold text-[#4b2e2e] mb-6">Best Items</h2>

                            {/* Responsive horizontal slider on mobile */}
                            <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto sm:overflow-visible pb-4">
                                {coffeeItems.map((item, i) => (
                                    <div key={i} className="min-w-[200px] bg-[#f9eae2] rounded-xl shadow p-3 flex flex-col items-center text-[#4b2e2e]">
                                        {/* Image */}
                                        <div className="w-full h-36 sm:h-40 bg-[#d9c2b4] rounded-t-xl overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Title & Description */}
                                        <div className="mt-2 w-full">
                                            <h3 className="font-bold text-lg">{item.title}</h3>
                                            <p className="text-sm text-gray-700">{item.description}</p>
                                        </div>

                                        {/* Price and Add Button */}
                                        <div className="mt-2 flex justify-between items-center w-full">
                                            <span className="text-lg font-bold">{item.price}</span>
                                            <button className="w-8 h-8 rounded-full bg-[#4b2e2e] text-white flex items-center justify-center text-xl">+</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


export default Home
