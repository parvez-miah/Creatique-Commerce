import React from 'react'
import SectionTitle from '../../Pages/Shared/SectionTitle/SectionTitle'
import useMenu from '../../hooks/useMenu'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'


const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    // we added a comma because we used index and its will come index wise . so we have to added it ...
    // thats means if you declare as a return value like this ex: [a,b] . if you want to get it and call it you have to call it [a,b ].
    //  and if you call it [b,a] formate it will not be work .
    //  see the ex in this call:
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
            <SectionTitle
                subHeading="Hurry Up"
                heading="Manage Item"
            >
            </SectionTitle>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <span>#</span>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Recipe</th>
                            <th>Category</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <span className="badge badge-ghost badge-sm">{item.name}</span>
                                </td>
                                <td>{item.category}</td>
                                <td>
                                    <button className="btn btn-ghost bg-green-600  text-white"><FaEdit></FaEdit></button>
                                </td>
                                <td>
                                    <button onClick={()=> handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    )
}

export default ManageItems