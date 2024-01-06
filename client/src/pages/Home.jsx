import React from 'react'
import Layout from '../components/Layout'
import { FaRegCircleUser } from "react-icons/fa6";
import { ImCalendar } from "react-icons/im";
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <Layout>
            <div className="w-full flex justify-between gap-4 p-2 items-center">
                <div><span>-</span> 1 <span>+</span></div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <div>dropdown by category</div>
                    <div>sorting dropdown</div>
                </div>
            </div>
            <div className="overflow-hidden w-full  h-screen overflow-y-scroll scroll-smooth no-scrollbar">

                <div className='border rounded-md  w-full h-fit flex flex-col gap-4  p-2 mb-4'>
                    {/* header user and date*/}
                    <div className='flex border rounded-md gap-4 w-full justify-end md:p-2'>
                        <p className='flex items-center gap-1'><span>{<FaRegCircleUser />}</span>@Shoeb</p>
                        <p className='flex items-center gap-1'><span>{<ImCalendar />}</span>Date 12-2-23</p>
                    </div>
                    {/* homeImage blog main image */}
                    <div>
                        <img src="./blog.png" alt="Blog-image" />
                    </div>
                    {/* readme and Read more button */}
                    <div className=' flex flex-col '>
                        <p className='text-2xl font-bold'>How to Start Coding</p>
                        <p className='text-primary-text font-thin text-sm md:text-lg mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officiis dolore repellendus, labore dolorem aperiam minima atque magni dignissimos, velit iusto et aut illo nihil ex laborum tempore magnam natus quisquam similique repellat. Magnam veritatis nam dolore perspiciatis culpa quae ipsa, repudiandae quos aliquam saepe, ab adipisci odio sint blanditiis deserunt optio dicta facilis. Minima consequatur sunt quae corporis quasi recusandae, pariatur obcaecati! Iste corrupti error laudantium adipisci omnis vel consequuntur architecto quis suscipit eius eum explicabo repudiandae rerum unde aperiam illo soluta, necessitatibus eos, corporis quod, aspernatur nemo ipsum! Dolore vel amet delectus corporis, dicta inventore odio voluptatum aut.</p>
                        <Link className='flex justify-end mt-2' to={"/about"}><button className='bg-primary-btn w-fit md:w-24 md:text-xl  rounded-md p-2 '>Details</button></Link>
                    </div>
                </div>
                <div className='border rounded-md  w-full h-fit no-scrollbar flex flex-col gap-4 overflow-hidden overflow-y-scroll  p-2'>
                    {/* header user and date*/}
                    <div className='flex border rounded-md gap-4 w-full justify-end md:p-2'>
                        <p className='flex items-center gap-1'><span>{<FaRegCircleUser />}</span>@Shoeb</p>
                        <p className='flex items-center gap-1'><span>{<ImCalendar />}</span>Date 12-2-23</p>
                    </div>
                    {/* homeImage blog main image */}
                    <div>
                        <img src="./blog.png" alt="Blog-image" />
                    </div>
                    {/* readme and Read more button */}
                    <div className=' flex flex-col '>
                        <p className='text-2xl font-bold'>How to Start Coding</p>
                        <p className='text-primary-text font-thin text-sm md:text-lg mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officiis dolore repellendus, labore dolorem aperiam minima atque magni dignissimos, velit iusto et aut illo nihil ex laborum tempore magnam natus quisquam similique repellat. Magnam veritatis nam dolore perspiciatis culpa quae ipsa, repudiandae quos aliquam saepe, ab adipisci odio sint blanditiis deserunt optio dicta facilis. Minima consequatur sunt quae corporis quasi recusandae, pariatur obcaecati! Iste corrupti error laudantium adipisci omnis vel consequuntur architecto quis suscipit eius eum explicabo repudiandae rerum unde aperiam illo soluta, necessitatibus eos, corporis quod, aspernatur nemo ipsum! Dolore vel amet delectus corporis, dicta inventore odio voluptatum aut.</p>
                        <Link className='flex justify-end mt-2' to={"/about"}><button className='bg-primary-btn w-fit md:w-24 md:text-xl  rounded-md p-2 '>Details</button></Link>
                    </div>
                </div>
                <div className='border rounded-md  w-full h-fit no-scrollbar flex flex-col gap-4 overflow-hidden overflow-y-scroll  p-2'>
                    {/* header user and date*/}
                    <div className='flex border rounded-md gap-4 w-full justify-end md:p-2'>
                        <p className='flex items-center gap-1'><span>{<FaRegCircleUser />}</span>@Shoeb</p>
                        <p className='flex items-center gap-1'><span>{<ImCalendar />}</span>Date 12-2-23</p>
                    </div>
                    {/* homeImage blog main image */}
                    <div>
                        <img src="./blog.png" alt="Blog-image" />
                    </div>
                    {/* readme and Read more button */}
                    <div className=' flex flex-col '>
                        <p className='text-2xl font-bold'>How to Start Coding</p>
                        <p className='text-primary-text font-thin text-sm md:text-lg mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officiis dolore repellendus, labore dolorem aperiam minima atque magni dignissimos, velit iusto et aut illo nihil ex laborum tempore magnam natus quisquam similique repellat. Magnam veritatis nam dolore perspiciatis culpa quae ipsa, repudiandae quos aliquam saepe, ab adipisci odio sint blanditiis deserunt optio dicta facilis. Minima consequatur sunt quae corporis quasi recusandae, pariatur obcaecati! Iste corrupti error laudantium adipisci omnis vel consequuntur architecto quis suscipit eius eum explicabo repudiandae rerum unde aperiam illo soluta, necessitatibus eos, corporis quod, aspernatur nemo ipsum! Dolore vel amet delectus corporis, dicta inventore odio voluptatum aut.</p>
                        <Link className='flex justify-end mt-2' to={"/about"}><button className='bg-primary-btn w-fit md:w-24 md:text-xl  rounded-md p-2 '>Details</button></Link>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Home