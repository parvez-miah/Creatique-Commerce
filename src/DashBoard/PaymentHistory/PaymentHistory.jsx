import React, { useEffect, useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, IconButton } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

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
            .then(res => res.json())
            .then(data => setPaymentHistory(data))
    }, []);

    return (


        
        <div>
            {copySuccess && <Alert status='success'>
                <AlertIcon />
                TransactionId copied!
            </Alert>}
            <TableContainer className='p-12'>
                <Table variant='striped' colorScheme='teal' overflowX="scroll">

                    <TableCaption>That's all we Have!</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Email</Th>
                            <Th>TransactionId</Th>
                            <Th>Copy</Th> {/* New column for the copy button */}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {paymentHistory.map(payments => (
                            <Tr key={payments._id}>
                                <Td>{payments.email}</Td>
                                <Td>{payments.transactionId}</Td>
                                <Td>
                                    <IconButton
                                        aria-label="Copy"
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
}

export default PaymentHistory;
