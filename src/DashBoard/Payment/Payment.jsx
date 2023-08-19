import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const [cart] = useCart();

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))


    return (
        <div className='w-full p-12 m-22'>
            <p className='my-12 text-bold'>Please Pay Now</p>


            <div>

                <Elements stripe={stripePromise} >
                    <CheckOutForm cart={cart} price={price} ></CheckOutForm>

                </Elements>
            </div>
        </div>
    )
}

export default Payment