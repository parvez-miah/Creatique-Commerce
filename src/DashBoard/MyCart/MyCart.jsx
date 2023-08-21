import React from 'react'
import { Helmet } from 'react-helmet-async'
import useCart from '../../hooks/useCart'
import { FaTrashAlt } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const MyCart = () => {
  // load all data
  const [cart, refetch] = useCart()


  //total price Here

  const result = cart.reduce((sum, item) =>
    sum + item.price
    , 0);
  



  // Handle Delete Start Here..


  const handleDelete = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    
    // Delete Operation
    
    .then((result) => {
      if (result.isConfirmed) {

        fetch(`https://creatique-commerce-server.vercel.app/carts/${item._id}`,{
          method:'DELETE'
        })

        .then(res=> res.json())
        .then(data=>{
          if(data.deletedCount>0){
            // When Delete Done
            refetch()
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
    <div className='w-full p-12'>

      <Helmet>
        <title>My Cart | Creatique Commerce </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

{/* Header Elements */}
      <div className=' p-12 uppercase flex justify-evenly space-between height-[60px]'>

        <h4 className="text-3xl">Total Items : <b>{cart.length}</b></h4>
        <h4 className="text-3xl">Total Price : <b>${result.toFixed(2)}</b></h4>
        <Link to ="/dashboard/pay"><button className="btn btn-warning btn-small">Pay</button></Link>
      </div>


      {/*  */}

      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item, index) => <tr

                key={item._id}
              >
                <td>
                  {index + 1}
                </td>
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
                  {item.name}


                </td>
                <td>
                  ${item.price}


                </td>
                <td>
                  <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>


                </td>
              </tr>)
            }

          </tbody>

        </table>
      </div>
    </div>


  )
}

export default MyCart