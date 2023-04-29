import React, { useEffect, useState } from 'react'
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import menu from "../images/icon-menu.svg"
import { AiOutlineShoppingCart } from "react-icons/ai"
import Cart from './Cart';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const products =useSelector(state=> state.cart)
    const dispatch = useDispatch();


    return (
        <>
            <header className='relative flex  justify-between items-center p-8 border-b border-slate-400 max-w-7xl mx-auto '>
                <div className='flex items-center justify-start gap-4'>
                    {isOpen && (<div className='fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-75 z-[49]'></div>)}
                    <ul className='flex items-center justify-start gap-4'>
                        {!isOpen && (
                            <li className='md:hidden  '>
                                <img src={menu} alt="" onClick={() => setOpen(true)} />
                            </li>

                        )}
                        {isOpen && (

                            <li className='fixed z-50'>
                                <svg onClick={() => setOpen(false)} stroke="currentColor" fill="currentColor" stroke-strokeWidth="0" viewBox="0 0 24 24" className="fixed top-0 z-50 left-4  w-10 h-10 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="stroke-slate-400 hover:stroke-orange-400 " fill="none" stroke="#000" stroke-strokeWidth="2" d="M7,7 L17,17 M7,17 L17,7"></path></svg>

                            </li>
                        )}
                        <li>
                            <img src={logo} alt="" />
                        </li>
                    </ul>
                    <nav className={isOpen ? "open" : "links"}>
                        <ul className=''>
                            <li className='cursor-pointer'>Collections</li>
                            <li className='cursor-pointer'>Man</li>
                            <li className='cursor-pointer'>Women</li>
                            <li className='cursor-pointer'>About</li>
                            <li className='cursor-pointer'>Contact</li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <ul className='flex items-center justify-start '>
                        <li>
                            <button onClick={() => setOpenCart(!openCart)}>
                                <AiOutlineShoppingCart className='text-slate-500 text-2xl mr-4' />
                                <span className='bg-orange-600 text-white rounded-full px-2 text-xs absolute top-[2.25rem] right-[5.5rem]'>{products.cart.length}</span>

                            </button>
                        </li>
                        {openCart && (<li><Cart /></li>)}
                        <li>
                            <img src={avatar} alt="" className='w-12' />
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;