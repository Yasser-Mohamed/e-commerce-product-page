import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import { useSelector, useDispatch } from "react-redux"
import {
    nextHandel,
    preHandel,
    increment,
    decrement,
    changeMainImage,
    addToCart,
} from "../features/products/productSlice"
const Content = () => {
    const [showBox, setShowBox] = useState(false)
    const products = useSelector(state => state.cart)
    const  cart  = useSelector(
        (state) => state.cart
    );

    const dispatch = useDispatch();

    const { mainImage } = products.items[products.value];

    const handleAddToCart = () => {
        const selectedProduct = products.items[products.value];
        dispatch(addToCart(selectedProduct));
    }

    return (
        <>

            <section className=" grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl lg:mt-10 mx-auto lg:place-items-center">
                {/* lightbox */}

                {showBox ? <article className='fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-75 z-50'>
                    <svg onClick={() => setShowBox(false)} stroke="currentColor" fill="currentColor" stroke-strokeWidth="0" viewBox="0 0 24 24" className="absolute lg:top-10 top-14  lg:right-48 right-14 w-10 h-10 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="stroke-slate-400 hover:stroke-orange-400 " fill="none" stroke="#000" stroke-strokeWidth="2" d="M7,7 L17,17 M7,17 L17,7"></path></svg>
                    <div className="flex justify-center items-center h-full ">
                        <img src={mainImage} alt="img" className="flex justify-center items-center w-[30rem]  rounded-2xl" />
                        <ul className="">
                            <li>
                                <button
                                    onClick={() => dispatch(preHandel())}
                                    className="absolute bg-white rounded-full shadow p-5 left-4 top-1/2 -translate-y-1/2 ">
                                    <FaChevronLeft />
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => dispatch(nextHandel())}
                                    className="absolute bg-white rounded-full shadow p-5 right-4 top-1/2 -translate-y-1/2">
                                    <FaChevronRight />
                                </button>
                            </li>
                        </ul>

                    </div>
                    <ul className="flex justify-start items-center flex-wrap gap-5 mt-5 hidden">
                        {products.items.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => dispatch(changeMainImage({ value: index }))}
                                    className={`
                                        ${index === products.value && 'border-2 border-orange-400 opacity-80'}
                                         border-2  rounded-xl cursor-pointer`
                                    }
                                >
                                    <img src={item.thumbnail} alt="img" className="w-20 rounded-xl" />
                                </li>
                            )
                        })}
                    </ul>
                </article> : ""}
                {/* main content */}

                <article>
                    {/* images of products */}
                    <div className="relative ">
                        <img src={mainImage} alt="img" className="w-full lg:rounded-2xl cursor-pointer" onClick={() => setShowBox(true)} />
                        <ul className="lg:hidden">
                            <li>
                                <button
                                    onClick={() => dispatch(preHandel())}
                                    className="absolute bg-white rounded-full shadow p-5 left-4 top-1/2 -translate-y-1/2">
                                    <FaChevronLeft />
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => dispatch(nextHandel())}
                                    className="absolute bg-white rounded-full shadow p-5 right-4 top-1/2 -translate-y-1/2">
                                    <FaChevronRight />
                                </button>
                            </li>
                        </ul>

                    </div>
                    {/* ul of products */}
                    <ul className="hidden lg:flex justify-start items-center flex-wrap gap-5 mt-5">
                        {products.items.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => dispatch(changeMainImage({ value: index }))}
                                    className={`
                                        ${index === products.value && 'border-2 border-orange-400 opacity-80'}
                                         border-2  rounded-xl cursor-pointer`
                                    }
                                >
                                    <img src={item.thumbnail} alt="img" className="w-20 rounded-xl" />
                                </li>
                            )
                        })}
                    </ul>
                </article>
                {/* Add text */}
                <article className="px-8 pb-4">
                    <h2
                        className="py-1 px-2 mb-10 uppercase
                     text-sm font-bold tracking-wide text-orange-400 
                     shadow inline-block ">
                        Sneaker Company
                    </h2>
                    <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-10 ">
                        Fall Limited Edition Sneakers
                    </h1>
                    <p className="text-slate-500 mb-10 ">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>
                    {/* counter of price */}
                    <div className="flex lg:flex-col lg:items-start lg:gap-4 items-center justify-between flex-wrap mb-4 ">
                        <ul className="flex items-center gap-5 ">
                            <li className="text-2xl font-bold text-slate-900 ">$125.00</li>
                            <li className="py-1 px-2 uppercase
                                text-sm font-bold tracking-wide bg-orange-100 text-orange-400 
                                shadow inline-block ">50%</li>
                        </ul>
                        <p><s className="text-slate-400">$250.00</s></p>
                    </div>
                    {/* counter */}
                    <div className="mb-10 lg:flex ">
                        <ul className="flex items-center justify-between lg:flex-1 bg-slate-100 py-4 px-4 mt-5 lg:mr-4 rounded-lg ">
                            <li onClick={() => dispatch(decrement())} className="cursor-pointer">
                                <img src={minus} alt="" />
                            </li>
                            <li className="font-bold">{products.quantity}</li>
                            <li onClick={() => dispatch(increment())} className="cursor-pointer">
                                <img src={plus} alt="" />
                            </li>
                        </ul>
                        <div className="lg:flex-1 ">
                            <button onClick={handleAddToCart} className="flex justify-center items-center bg-orange-500 text-white gap-4 w-full py-4 px-4  mt-5 shadow rounded-lg font-bold">
                                <AiOutlineShoppingCart /> Add to cart
                            </button>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}
export default Content;