import React, { useContext } from 'react'
import useMenu from '../../hooks/useMenu';
import { AuthContext } from '../../Provider/authProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { Card, CardHeader, ButtonGroup, Button, CardBody, CardFooter, Stack, Heading, Divider, Text, Image } from '@chakra-ui/react'

const FoodCard = ({ item }) => {

    const { image, price, recipe, name, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    // have to added , before refetch
    const [, refetch] = useCart()



    const handleAddedCart = item => {
        if (user) {

            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
           
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)

            })

                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added to the cart successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

        else {
            console.log('user not found');
            Swal.fire({
                title: 'Please Login for Added this item to cart',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }


    return (

        <Card maxW='sm' display="flex" alignItems="center" justifyContent="center" paddingLeft="15px" marginLeft="20px">
            <CardBody>
                <Image
                    src={image}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        ${price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button onClick={() => handleAddedCart(item)} variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>

    )
}

export default FoodCard