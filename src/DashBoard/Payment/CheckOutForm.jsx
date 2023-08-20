import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import './CheckOutForm.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = ({ cart, price }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState(" ");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setMyTransactionId] = (" ");
    const { user } = useAuth();
    const navigate = useNavigate()




    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    //  handle Payment

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('')
            console.log('payment method', paymentMethod);
        }
        setProcessing(true)

        //  Payment Confirmation

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        name: user?.email || 'unknown'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError)
        }

        console.log(paymentIntent);

        setProcessing(false);

        //  get transcetion id

        if (paymentIntent.status === 'succeeded') {
            // setMyTransactionId(paymentIntent.id);
            // post payment info in database

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems : cart.map(item => item.menuItemId),
                status: 'service pending',
                itemsName: cart.map(item => item.name)




            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Success',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/')
                    }
                })


        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                padding: '30px',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError? <div className="alert alert-error mt-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-2" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{cardError}</span>
            </div>:<></>
            
            }
            
           
        </div>
    )
}

export default CheckOutForm