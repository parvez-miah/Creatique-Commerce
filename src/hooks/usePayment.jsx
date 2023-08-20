import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const usePayment = () => {

    const { user, loading } = useAuth();

    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: payment = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`)

            return res.data;
        },
    })

    return [payment, refetch]

}
export default usePayment;