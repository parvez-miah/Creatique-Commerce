import React, { useEffect, useState } from 'react';
import {
    IconButton,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
    const [copySuccess, setCopySuccess] = useState(false);
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
            .then((data) => setPaymentHistory(data));
    }, []);

    return (
        <div style={{marginTop:'90px'}}>
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
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Transaction ID</th>
                            <th>Copy ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentHistory.map((payments, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{payments.email}</td>
                                <td>{payments.transactionId}</td>
                                <td>
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
        </div>
    );
};

export default PaymentHistory;
