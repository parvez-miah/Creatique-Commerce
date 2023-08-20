import React, { Component, useEffect, useState } from 'react'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import ContentLoader from "react-content-loader"
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Testimonials = ({ props }) => {

    const [reviews, setReviews] = useState([]);
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch('https://creatique-commerce-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setLoader(false)

            })

    }, []);


    return (


        <section>

            <SectionTitle
                subHeading="What our Client Says"
                heading="Testimonials"
            >
            </SectionTitle>

            <div className='mb-20 m-10'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {loader && <ContentLoader
                        speed={2}
                        width={400}
                        height={160}
                        viewBox="0 0 400 160"
                        backgroundColor="#5b28b8"
                        foregroundColor="#ecebeb"
                        {...props}
                    >
                        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
                        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
                        <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
                        <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
                        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
                        <circle cx="20" cy="20" r="20" />
                    </ContentLoader>}

                    {
                        reviews.map(review => <SwiperSlide

                            key={review._id}
                        >
                            <div className=' flex flex-col items-center'>
                                <FontAwesomeIcon icon="fa-solid fa-quote-left" />
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className='my-10'>{review.details}</p>
                                <h3 className='text-2xl text-orange-600'>{review.name}</h3>
                            </div>


                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </section>
    )

}

export default Testimonials;
