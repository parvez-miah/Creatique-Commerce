
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/authProvider';

const useCart = () => {

    const { user } = useContext(AuthContext)

// have to addded refetch first....
// email wise single user data load here...



    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user.email}`)
            return res.json()
        },
    })

    return [
        cart, refetch

    ]

}

export default useCart;