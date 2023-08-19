import React from 'react'
import SectionTitle from '../../Pages/Shared/SectionTitle/SectionTitle'

import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;


const AddItem = () => {

    const { register, handleSubmit,reset } = useForm();
    const [axiosSecure] = useAxiosSecure();

    // Image Save to Database
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    // Send it to dataBase
    const onSubmit = data => {
      const formData = new FormData()
      formData.append('image', data.image[0])

      fetch(image_hosting_url, {
        method:'POST',
        body: formData
      })
      .then(res=> res.json())
      .then(imageResponse=>{
          if (imageResponse.success){
            const imgUrl = imageResponse.data.display_url;
            const {name, price, category, recipe} = data;
            const newItem = {name, price: parseFloat(price), category, recipe, image: imgUrl }
            console.log( newItem);
            axiosSecure.post('/menu', newItem)
            .then(data=>{
                console.log('new item', data.data)
                if(data.data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Menu Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                reset()
            })


          }
      })

    };

    return (
        <div className='w-full p-12'>
            <SectionTitle
                subHeading="Whats New"
                heading="Add an Item"

            ></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name * </span>
                    </label>
                    <input type="text" placeholder="Recipe name" className="input input-bordered w-full  "
                        {...register("name", { required: true, maxLength: 80 })}

                    />

                </div>
                <div className='flex'>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text-alt font-semibold">Category*</span>
                        </label>
                        <select defaultValue='Pick One' {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Desert</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full mx-6  ">
                        <label className="label">
                            <span className="label-text font-semibold">Price * </span>
                        </label>
                        <input type="number" placeholder="Price"  {...register("price", { required: true, maxLength: 100 })} className="input input-bordered w-full  " />

                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold"> Recipe Description*</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Description"  {...register("recipe", { required: true })} ></textarea>

                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text font-semibold">Item Image*</span>
                    </label>
                    <input type="file"  {...register("image", { required: true })} className="file-input file-input-bordered w-full  " />

                </div>
                <button className="btn btn-outline btn-primary mt-6">  <input type="submit" value="Submit" /></button>


            </form>
        </div>
    )
}

export default AddItem