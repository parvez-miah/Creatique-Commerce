import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../hooks/useCart';
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from '@chakra-ui/react'

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))


    return (
        <div className='w-full p-12 m-22'>
            <div style={{
                marginTop:'40px',
                border: '1px solid #ccc',
                padding: '20px',
                borderRadius: '5px',
                width: '80%',
                maxWidth: '400px',
                margin: '0 auto',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}>
            <h2 style={{fontSize:'23px', fontWeight:'700', padding:'10px'}}> Use This card for complete payment.</h2>
                <p>Card Number: 4242 4242 4242 4242</p>
                <p>CSV: 123</p>
                <p>Zip Code: 12345</p>
                <p>Expiration Date: 09/25</p>
            </div>
        
            <h2 style={{fontWeight:'700'}} className='my-12 text-bold'>Please Pay Now</h2>
            <StatGroup>
                <Stat>
                    <StatLabel>Payable Amount</StatLabel>
                    <StatNumber>${price}</StatNumber>
                    <StatHelpText>
                        <StatArrow type='increase' />
                        23.36%
                    </StatHelpText>
                </Stat>

                <Stat>
                    <StatLabel>Items</StatLabel>
                    <StatNumber>{cart.length}</StatNumber>
                    <StatHelpText>
                        <StatArrow type='decrease' />
                        9.05%
                    </StatHelpText>
                </Stat>
            </StatGroup>

            <div>

                <Elements stripe={stripePromise} >
                    <CheckOutForm cart={cart} price={price} ></CheckOutForm>

                </Elements>
            </div>
        </div>
    )
}

export default Payment