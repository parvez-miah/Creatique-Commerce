import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Button } from '@chakra-ui/react';
import { AiOutlineFileAdd } from 'react-icons/ai'; 
import { Helmet } from 'react-helmet-async';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imgUrl = imageResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgUrl };
                    axiosSecure
                        .post('/menu', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Menu Added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                            reset();
                        });
                }
            });
    };

    return (
        <div className='w-full p-6 md:p-12'>
            <Helmet>
                <title>Add an Item | Creatique Commerce </title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h2 className="text-red-500 text-3xl font-semibold p-5 flex items-center mt-8">
                <AiOutlineFileAdd className="text-black" />
                <span className="ml-2">Add an Item</span>
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-control w-full mb-4 md:w-1/2 md:mr-4'>
                    <label className='label'>
                        <span className='label-text font-semibold'>Recipe Name *</span>
                    </label>
                    <input
                        type='text'
                        placeholder='Recipe name'
                        className='input input-bordered w-full'
                        {...register('name', { required: true, maxLength: 80 })}
                    />
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div className='form-control w-full mb-4 md:w-1/2 md:mr-2'>
                        <label className='label'>
                            <span className='label-text-alt font-semibold'>Category*</span>
                        </label>
                        <select
                            defaultValue='Pick One'
                            {...register('category', { required: true })}
                            className='select select-bordered w-full'
                        >
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Desert</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className='form-control w-full md:w-1/2'>
                        <label className='label'>
                            <span className='label-text font-semibold'>Price *</span>
                        </label>
                        <input
                            type='number'
                            placeholder='Price'
                            {...register('price', { required: true, maxLength: 100 })}
                            className='input input-bordered w-full'
                        />
                    </div>
                </div>
                <div className='form-control w-full mb-4'>
                    <label className='label'>
                        <span className='label-text font-semibold'> Recipe Description*</span>
                    </label>
                    <textarea
                        className='textarea textarea-bordered h-24'
                        placeholder='Description'
                        {...register('recipe', { required: true })}
                    ></textarea>
                </div>
                <div className='form-control w-full'>
                    <label className='label'>
                        <span className='label-text font-semibold'>Item Image*</span>
                    </label>
                    <input
                        type='file'
                        {...register('image', { required: true })}
                        className='file-input file-input-bordered w-full'
                    />
                </div>
                <Button type='submit' colorScheme='blue' mt='4'>
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default AddItem;
