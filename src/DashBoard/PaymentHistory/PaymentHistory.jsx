import React, { useEffect, useState } from 'react';
import {
    IconButton,
    Alert,
    AlertIcon,
    Spinner,
} from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';
import { Helmet } from 'react-helmet-async';
import { MdPayments } from 'react-icons/md';

const PaymentHistory = () => {
    const [copySuccess, setCopySuccess] = useState(false);
    const [loading, setLoading] = useState(true);
    const [paymentHistory, setPaymentHistory] = useState([]);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopySuccess(true);
                setTimeout(() => {
                    setCopySuccess(false);
                }, 2000);
            })
            .catch((error) => {
                console.error('Copy to clipboard failed: ', error);
            });
    };

    useEffect(() => {
        fetch('https://creatique-commerce-server.vercel.app/payments')
            .then((res) => res.json())
            .then((data) => {
                setPaymentHistory(data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
         <div className='mt-30'>
         
                <h2 className="text-red-500 text-3xl font-semibold p-5 flex items-center ">
                    <MdPayments className="text-black" />
                    <span className="ml-2">Payments</span>
                </h2>
         </div>
            <div style={{ marginTop: '90px' }}>
                {copySuccess && (
                    <Alert status='success'>
                        <AlertIcon />
                        TransactionId copied!
                    </Alert>
                )}
                <Helmet>
                    <title> Payment History | Creatique Commerce </title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                </Helmet>
                {loading ? (
                    <Spinner size="xl" color="blue.500" />
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="py-2">
                                        <label>
                                            <span>#</span>
                                        </label>
                                    </th>
                                    <th className="py-2">Email</th>
                                    <th className="py-2">Transaction ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paymentHistory.map((payments, index) => (
                                    <tr key={payments._id}>
                                        <td className="py-2">{index + 1}</td>
                                        <td className="py-2">
                                            <span className="badge badge-ghost badge-sm">{payments.email}</span>
                                        </td>
                                        <td className="py-2">
                                            {payments.transactionId.slice(0, 5)}...{payments.transactionId.slice(-2)}
                                            <IconButton
                                                aria-label='Copy'
                                                icon={<CopyIcon />}
                                                onClick={() => copyToClipboard(payments.transactionId)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentHistory;
