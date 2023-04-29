import React from 'react';
import delIcon from "../images/icon-delete.svg"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {removeItem} from "../features/products/productSlice"

const Cart = () => {
  const text = "Fall Limited Edition Sneakers";
  const { cart, } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  return (
    <>
      <article className='Cart '>
        <h2 className=' border-b border-slate-400 font-bold pb-2 mb-8'>Cart</h2>
        {cart.length > 0 ? <div>
          {cart.map((item, index)=>{
            return(
              <div key={index}>
                <div className='flex items-center justify-between '>
            <img src={item.thumbnail} alt="" className='rounded-lg w-14 ' />
            <ul>
              <li className='text-sm text-slate-400 mx-2'>{text}</li>
              <li className='text-slate-400'> {`$${item.price} x ${item.quantity}`}  <span className='text-black'>{`${item.price * item.quantity}`}</span></li>
            </ul>
            <button onClick={()=> dispatch(removeItem(item.id))}>
              <img src={delIcon} alt="" />
            </button>
          </div>
          <button className='bg-orange-600 text-white font-bold w-full p-4 rounded-lg '>Checkout</button>
              </div>
          )
          })}
        </div>
          : <div className='text-slate-400 text-center py-10'>Your cart is empty.</div>}
      </article>
    </>
  )
}

export default Cart;