import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { FaRegUserCircle } from "react-icons/fa";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
// import "swiper/css"
// import { sliderSetting } from '../../utils/common'

const BloogerProfile = () => {
    return (
        <Layout>
            <div className="overflow-hidden w-full  h-screen overflow-y-scroll scroll-smooth no-scrollbar">
                <div className='border relative rounded-md  w-full h-fit flex flex-col gap-4  p-2 md:mb-4'>
                    <span className='absolute top-8 text-6xl md:top-2 md:left-3 md:text-8xl bg-white rounded-full'>{<FaRegUserCircle />}</span>
                    {/* header user and date*/}
                    <div className='flex flex-col md:flex-row border-b rounded-md  gap-2 md:gap-4 w-full justify-end items-end p-2 md:p-4'>
                        <p className='flex items-center gap-1 text-xl'>Blogger-Logo</p>
                        <p className='flex items-center gap-1 text-2xl'>@Shoeb</p>
                        <p className='flex items-center gap-1'><span>created At</span>Date 12-2-23</p>
                    </div>
                    {/* homeImage blog main image */}
                    <div>
                        <img src="./blog.png" alt="Blog-image" />
                    </div>
                    {/* readme and Read more button */}
                    <div className=' flex flex-col '>
                        <p className='text-2xl font-bold'>How to Start Coding</p>
                        <p className='text-primary-text font-thin text-sm md:text-lg mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officiis dolore repellendus, labore dolorem aperiam minima atque magni dignissimos, velit iusto et aut illo nihil ex laborum tempore magnam natus quisquam similique repellat. Magnam veritatis nam dolore perspiciatis culpa quae ipsa, repudiandae quos aliquam saepe, ab adipisci odio sint blanditiis deserunt optio dicta facilis. Minima consequatur sunt quae corporis quasi recusandae, pariatur obcaecati! Iste corrupti error laudantium adipisci omnis vel consequuntur architecto quis suscipit eius eum explicabo repudiandae rerum unde aperiam illo soluta, necessitatibus eos, corporis quod, aspernatur nemo ipsum! Dolore vel amet delectus corporis, dicta inventore odio voluptatum aut.</p>
                        <Link className='flex justify-end mt-2' to={"/blog-details"}><button className='bg-primary-btn w-fit md:w-24 md:text-xl  rounded-md p-2 '>Details</button></Link>
                    </div>
                </div>

                {/* add swiper */}
                {/* <div className='detail-info'>
                    <h1><span className='d-text'>Results</span>: {data.places.length}</h1>

                    <Swiper {...sliderSetting}>
                        <SliderButton />

                        {
                            data?.places?.map((item, i) => (
                                <SwiperSlide key={i} >
                                    <div className="d-card">
                                        <span className='d-index'>{i + 1}</span>
                                        <h4><span className='d-text'>State</span>: {`${item.state}`} <span className='d-sb'>{item['state abbreviation']}</span></h4>
                                        <p><span className='d-text'>Place Name</span>: {item['place name']}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div> */}
            </div>
        </Layout>
    )
}

export default BloogerProfile
// const SliderButton = () => {
//     const swiper = useSwiper();
//     return (
//         <div className="d-button">
//             <button onClick={() => swiper.slidePrev()} className='button'>&lt;</button>
//             <button onClick={() => swiper.slideNext()} className="button">&gt;</button>
//         </div>
//     )
// }