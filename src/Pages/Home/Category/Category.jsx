import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Category.css'



import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';



export default function Category() {



    return (
     <div className='fullCategory'>
            <section>
                <SectionTitle
                    heading={"Order Online"}
                    subHeading={"From 11am to 11pm"}
                >

                </SectionTitle>
                <div className='mb-16'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={slide1} alt="" />
                            <h3 className='text-2xl uppercase text-center -mt-16 text-white'>Salads</h3>

                        </SwiperSlide>
                        <SwiperSlide><img src={slide2} alt="" />
                            <h3 className='text-2xl uppercase text-center -mt-16 text-white'>Soups</h3>

                        </SwiperSlide>


                        <SwiperSlide><img src={slide3} alt="" />
                            <h3 className='text-2xl uppercase text-center -mt-16 text-white'>Pizzas</h3>

                        </SwiperSlide>
                        <SwiperSlide><img src={slide4} alt="" />
                            <h3 className='text-2xl uppercase text-center -mt-16 text-white'>desserts</h3>
                        </SwiperSlide>
                        <SwiperSlide><img src={slide5} alt="" />
                            <h3 className='text-2xl uppercase text-center -mt-16 text-white'>Salads</h3>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
     </div>
    );
}