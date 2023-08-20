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