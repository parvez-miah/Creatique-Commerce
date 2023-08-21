import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import Loader from '../../Pages/Shared/Loader/Loader';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], isLoading, refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get(
            'https://creatique-commerce-server.vercel.app/users'
        );
        return res.data;
    });

    const handleMakeAdmin = user => {
        fetch(`https://creatique-commerce-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = (user) => {
      
    };

    return (
        <div className='w-full p-4 md:p-8 lg:p-12 mt-20'>
            <Helmet>
                <title>All Users | Creatique Commerce </title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            {isLoading ? (
               <Loader></Loader>
            ) : (
                    <div style={{ overflowX: 'auto', padding: '20px' }}>
                        <h3 className='text-xl md:text-3xl font-semibold my-6 md:my-12'>
                            TOTAL USERS: {users.length}
                        </h3>
                        <table>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Delete</th>
                            </tr>
                            {users.map((user, index) => (
                                <tr key={user._id} className=''>
                                    <td>{index + 1}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? (
                                            'admin'
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        handleMakeAdmin(user)
                                                    }
                                                    className='btn btn-ghost bg-orange-600 text-white'
                                                >
                                                    <FaUserShield />
                                                </button>
                                            </>
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(user)}
                                            className='btn btn-ghost bg-red-600 text-white'
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {/* End of your existing map function */}
                        </table>
                    </div>
            )}
        </div>
    );
};


export default AllUsers;
