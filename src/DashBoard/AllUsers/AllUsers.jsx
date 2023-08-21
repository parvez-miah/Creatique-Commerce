import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get(
            'https://creatique-commerce-server.vercel.app/users'
        );
        return res.data;
    });

    const handleMakeAdmin = (user) => {
        // ... (same as your existing code)
    };

    const handleDelete = (user) => {
        // ... (same as your existing code)
    };

    return (
        <div className='w-full p-4 md:p-8 lg:p-12 mt-20'>
            <Helmet>
                <title>All Users | Creatique Commerce </title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h3 className='text-xl md:text-3xl font-semibold my-6 md:my-12'>
                TOTAL USERS: {users.length}
            </h3>

            <div className='overflow-x-auto'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className=''>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
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
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
