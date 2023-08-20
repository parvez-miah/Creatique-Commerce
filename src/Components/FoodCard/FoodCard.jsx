import React, { useContext } from 'react'
import useMenu from '../../hooks/useMenu';
import { AuthContext } from '../../Provider/authProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

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

        <div className="card w-96 bg-base-100 shadow-xl">

            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-slate-900 text-white absolute right-0 mr-4px-4 '>${price}</p>
            <div className="card-body">
                <h2 className="card-title flex flex-cols items-center ">{name}</h2>
                <p>{recipe}</p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}  >
                    <button onClick={() => handleAddedCart(item)} className="btn btn-primary">Add to cart</button>
                </div>

            </div>
        </div>
    )
}

export default FoodCard