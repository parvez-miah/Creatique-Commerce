import React from 'react'
import SectionTitle from '../../Pages/Shared/SectionTitle/SectionTitle'
import useMenu from '../../hooks/useMenu'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async'

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure()

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full'>
            <Helmet>
                <title>Manage Items | Creatique Commerce </title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="py-2">
                                <label>
                                    <span>#</span>
                                </label>
                            </th>
                            <th className="py-2">Name</th>
                            <th className="py-2">Recipe</th>
                            <th className="py-2">Category</th>
                            <th className="py-2">Update</th>
                            <th className="py-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => (
                                <tr key={item._id}>
                                    <td className="py-2">{index + 1}</td>
                                    <td className="py-2">
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2">
                                        <span className="badge badge-ghost badge-sm">{item.name}</span>
                                    </td>
                                    <td className="py-2">{item.category}</td>
                                    <td className="py-2">
                                        <button className="btn btn-ghost bg-green-600 text-white"><FaEdit /></button>
                                    </td>
                                    <td className="py-2">
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt /></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageItems
