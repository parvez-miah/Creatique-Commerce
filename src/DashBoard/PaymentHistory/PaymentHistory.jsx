import React, { useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    IconButton,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';

const PaymentHistory = () => {
    const [copySuccess, setCopySuccess] = useState(false);
    const [paymentHistory, setPaymentHistory] = useState([]);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopySuccess(true);
            })
            .catch((error) => {
                console.error('Copy to clipboard failed: ', error);
            });
    };

    useEffect(() => {
        fetch('http://localhost:5000/payments')
            .then((res) => res.json())
            .then((data) => setPaymentHistory(data));
    }, []);

    return (
        <div>
            {copySuccess && (
                <Alert status='success'>
                    <AlertIcon />
                    TransactionId copied!
                </Alert>
            )}
            <TableContainer p={[2, 6, 12]} overflowX='auto'>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>That's all we Have!</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Email</Th>
                            <Th>TransactionId</Th>
                            <Th>Copy</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {paymentHistory.map((payments) => (
                            <Tr key={payments._id}>
                                <Td fontSize={['sm', 'md']}>{payments.email}</Td>
                                <Td fontSize={['sm', 'md']}>{payments.transactionId}</Td>
                                <Td>
                                    <IconButton
                                        aria-label='Copy'
                                        icon={<CopyIcon />}
                                        onClick={() => copyToClipboard(payments.transactionId)}
                                    />
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default PaymentHistory;
