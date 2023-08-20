import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

const PaymentHistory = () => {

    const [copySuccess, setCopySuccess] = useState(false);
    const [paymentHistory, setPaymentHistory] = useState([]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(transactionId)
            .then(() => {
                setCopySuccess(true);
            })
            .catch((error) => {
                console.error('Copy to clipboard failed: ', error);
            });
    };

    useEffect(() => {
        fetch('https://creatique-commerce-server.vercel.app/payments')
            .then(res => res.json())
            .then(data => setPaymentHistory(data))
    }, [])




    return (
        <TableContainer className='w-full p-12'>
            <Table variant='striped' colorScheme='teal'>
                <TableCaption>All We Have!</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Email</Th>
                        <Th>TransactionId</Th>
                        
                    </Tr>
                </Thead>
                <Tbody>

                {
                        paymentHistory.map(payments => <Tr key={payments._id}>
                            <Td>{payments.email}</Td>
                            <Td>{payments.transactionId}</Td>
                            
                        </Tr> )
                }
                  

                </Tbody>

            </Table>
        </TableContainer>
    )
}

export default PaymentHistory