import React from "react";
import { FaPlus } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Capuccino from '../assets/Capuccino.jpg'

const coffeeItems = [
  {
    name: "Cappuccino",
    description: "Espresso, steamed milk, milk foam",
    price: 300,
    image: Capuccino
  },
  {
    name: "Americano",
    description: "Espresso, hot water",
    price: 250,
   
  },
  {
    name: "Latte",
    description: "Espresso, milk, foam art",
    price: 280,
  
  },
  {
    name: "Mocha",
    description: "Espresso, chocolate, steamed milk",
    price: 320,
    
  },
  {
    name: "Macchiato",
    description: "Espresso, milk foam",
    price: 270,
    
  },
  {
    name: "Flat White",
    description: "Espresso, steamed milk",
    price: 260,

  },
  {
    name: "Iced Coffee",
    description: "Chilled espresso, ice, milk",
    price: 290,
    
  },
  {
    name: "Affogato",
    description: "Espresso over ice cream",
    price: 350,
  },
  {
    name: "Espresso Shot",
    description: "Strong and bold",
    price: 200,
    
  },
  {
    name: "Cold Brew",
    description: "Slow-brewed coffee",
    price: 310,
    
  },
];

const Menu = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6 bg-[#fef5f1]">
      <h2 className="text-3xl font-bold mb-6 text-brown-800">Best Items</h2>
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {coffeeItems.map((item, index) => (
          <div key={index} className="bg-[#fbe7dd] rounded-2xl p-3 shadow">
            <img
              src={item.image}
              alt={item.name}
              className="rounded-xl w-full h-40 object-cover mb-2"
            />
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-lg font-bold">₹{item.price}.00</span>
              <button className="bg-brown-800 text-white p-2 rounded-full hover:bg-brown-700">
                <FaPlus />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <Slider {...settings}>
          {coffeeItems.map((item, index) => (
            <div key={index} className="bg-[#fbe7dd] rounded-2xl p-3 shadow mx-2">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-xl w-full h-40 object-cover mb-2"
              />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold">₹{item.price}.00</span>
                <button className="bg-brown-800 text-white p-2 rounded-full hover:bg-brown-700">
                  <FaPlus />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Menu;
