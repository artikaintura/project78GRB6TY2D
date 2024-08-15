import React, { useState } from 'react'
import { Link } from "react-scroll";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };
    const closeMenu = () => {
        setMenu(false);
    };
    return (
        <>
            {/* Navbar Contner */}
            <div className='fixed left-0 right-0 z-50 flex items-center justify-between p-4 px-4 py-1 text-white bg-pink-700 md:static md:bg-transparent md:px-1'>
                <div className='my-3 text-center md:ml-11'>
                    <h1 className="text-xl leading-tight">Kingsukh<br />Guest House</h1>
                </div>
                {/* Desktop Navigation */}
                <nav className="items-center hidden mx-4 mr-16 space-x-11 md:flex">
                    <Link
                        to="Home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="transition-all duration-300 cursor-pointer hover:text-pink-600 hover:scale-105"
                    >
                        Home
                    </Link>

                    <Link
                        to="About"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="transition-all cursor-pointer hover:text-pink-600 hover:scale-105"
                    >

                        About
                    </Link>

                    <Link
                        to="Services"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="transition-all cursor-pointer hover:text-pink-600 hover:scale-105"
                    >

                        Services
                    </Link>

                    <Link
                        to="Rooms"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="transition-all cursor-pointer hover:text-pink-600 hover:scale-105"
                    >
                        Rooms
                    </Link>

                    <Link
                        to="Gallary"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="transition-all cursor-pointer hover:text-pink-600 hover:scale-105"
                    >
                        Gallary
                    </Link>

                    <Link
                        to="Contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="transition-all cursor-pointer hover:text-pink-600 hover:scale-105"
                    >
                        Contact
                    </Link>
                    <a href='https://wa.link/at5ion'>
                    <button class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                        BOOK NOW
                    </button>
                    </a>
                </nav>

                {/* Mobile Menu Toggle Button */}
                <div className="md:hidden">
                    {menu ? (
                        <AiOutlineClose size={25} onClick={handleChange} />
                    ) : (
                        <AiOutlineMenuUnfold size={25} onClick={handleChange} />
                    )}
                </div>

            </div>

            {/* Mobile Navigation */}
            <div className={`${menu ? "translate-x-0" : "-translate-x-full"} fixed lg:hidden flex flex-col md:hidden bg-pink-700 bg-opacity-90 text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                <Link
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="transition-all cursor-pointer hover:text-brightColor"
                    onClick={closeMenu}
                >
                    Home
                </Link>

                <Link
                    to="About"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="transition-all cursor-pointer hover:text-brightColor"
                    onClick={closeMenu}
                >
                    About
                </Link>
                <Link
                    to="Services"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="transition-all cursor-pointer hover:text-brightColor"
                    onClick={closeMenu}
                >
                    Services
                </Link>
                <Link
                    to="Rooms"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="transition-all cursor-pointer hover:text-brightColor"
                    onClick={closeMenu}
                >
                    Rooms
                </Link>
                <Link
                    to="Gallary"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="transition-all cursor-pointer hover:text-brightColor"
                    onClick={closeMenu}
                >
                    Gallary
                </Link>
                <Link
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="transition-all cursor-pointer hover:text-brightColor"
                    onClick={closeMenu}
                >
                    Contact
                </Link>

            </div>


        </>
    )
}

export default Navbar