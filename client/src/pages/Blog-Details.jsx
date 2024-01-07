import React from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import { ImCalendar } from 'react-icons/im'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import Layout from '../components/Layout'

const BlogDetails = () => {
    return (
        <Layout>
            <div className="overflow-hidden w-full  p-4 h-screen overflow-y-scroll scroll-smooth no-scrollbar">
                {/* header */}
                <div className='flex w-full flex-wrap gap-4 justify-between items-center'>
                    <span className='text-center w-full md:w-fit'>userLogo</span>
                    <span className='text-lg w-full md:w-fit text-center md:text-end md:text-4xl font-bold'>"How to Start Coding"</span>
                    <div className='flex border rounded-md gap-4 w-full md:w-fit justify-center md:p-2'>
                        <p className='flex items-center gap-1'><span>{<FaRegCircleUser />}</span>@Shoeb</p>
                        <p className='flex items-center gap-1'><span>{<ImCalendar />}</span>12-2-23</p>
                    </div>

                </div>
                {/* image and details */}
                <div className='p-4 flex flex-col gap-4'>
                    <div className='shadow-md shadow-secondary-text'>
                        <img src="./blog.png" alt="Blog-image" />
                    </div>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus cupiditate, odio vel corrupti veniam recusandae quidem nostrum cumque ipsum quia nobis est minus numquam deleniti fugit unde similique debitis officiis illo eveniet nisi sequi. Beatae, reiciendis aspernatur asperiores dolorum sit adipisci quaerat fugit at quod incidunt, voluptates, voluptatibus expedita? Maxime inventore culpa ad excepturi harum! Soluta totam eos, voluptate, assumenda illo necessitatibus cum aut quibusdam quis praesentium quia odio id illum doloribus quo eveniet? Dolorum tempora eveniet, velit perferendis consequuntur aspernatur rem! Ipsa mollitia corrupti voluptates, placeat sapiente omnis consequatur nesciunt, asperiores sequi aspernatur alias? Dolore eaque saepe ratione porro aliquid placeat sunt amet nisi fugiat, dolorum suscipit eius fugit tenetur voluptates libero, temporibus sapiente provident, iure laborum voluptatum accusantium et architecto perferendis at. Delectus mollitia cum at in molestiae? Doloremque quos adipisci facilis placeat aliquid corporis! Ratione eligendi nemo aspernatur perspiciatis eius? Necessitatibus tenetur, velit repellat voluptatibus debitis consequuntur. Odio dignissimos amet dolores quisquam, exercitationem earum vero nostrum, ullam, error eveniet fuga architecto nesciunt? Esse rerum placeat sunt aliquam dolorem? Doloribus cumque minima voluptates numquam temporibus possimus. Provident iure, accusantium reiciendis soluta voluptatum et quibusdam ea nulla ipsam eum adipisci odio fugiat ab corrupti quam temporibus unde? Reprehenderit error veniam placeat debitis impedit mollitia, at aliquam odit perferendis eius est soluta dignissimos ullam exercitationem dolor veritatis, nobis eligendi animi corrupti fugit quos quasi! Sed itaque vero illo fugit iure obcaecati laboriosam, voluptatem eum tempora nihil tenetur, excepturi fuga culpa aliquam exercitationem expedita cumque ducimus fugiat. Laboriosam ea consequatur libero itaque vitae explicabo sapiente maxime nihil qui omnis, velit tempore nam cupiditate. Alias ipsum consequuntur excepturi? A voluptatibus placeat ipsum deleniti possimus veniam! Neque vero nesciunt doloremque ea mollitia illo voluptate minus. Quod vel laudantium debitis soluta corrupti itaque expedita? Officiis voluptatem optio voluptate est sequi aut, nobis hic.</span>
                    <div className='shadow-md shadow-secondary-text'>
                        <img src="./blog.png" alt="Blog-image" />
                    </div>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit consequatur aliquam, adipisci quas nostrum fugiat reprehenderit ad esse aperiam doloribus temporibus vero maiores unde voluptates culpa. Neque quia officia architecto exercitationem autem repudiandae labore, laudantium eligendi omnis ratione, dolorum impedit voluptas delectus a deleniti, qui amet numquam. Odit possimus, tenetur, accusamus ad laborum provident non dolore vero quos praesentium culpa fugiat delectus iste sunt minima ipsum asperiores nulla corrupti exercitationem perspiciatis deleniti quidem recusandae. Odit, quis, deleniti suscipit fugiat unde blanditiis, nostrum tenetur officia sunt vitae aperiam. Dolores non ducimus dignissimos vel, vitae voluptatem! Numquam animi provident officia vero!</span>
                    <div className='shadow-md shadow-secondary-text'>
                        <img src="./blog.png" alt="Blog-image" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam odit earum numquam possimus placeat deserunt harum nesciunt debitis ad laboriosam itaque modi voluptatibus, natus dolore dolores nisi dolorem voluptates, consequuntur nam cumque quod eveniet in. Accusantium rerum harum accusamus vel quae, minus a reprehenderit, porro veritatis sed, perspiciatis cum facilis.</span>
                </div>
                {/* Add comments form */}
                <>
                    <p className='text-2xl text-center text-primary-btn'>Reviews</p>
                    <Form />
                    <p className='border-b-2 relative border-primary-btn p-2 mt-4'>"This is great blog" <span className='absolute right-0'>@Shakir</span></p>
                    <p className='border-b-2 relative border-primary-btn p-2 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus cupiditate, odio vel corrupti veniam recusandae quidem nostrum cumque ipsum quia nobis est minus numquam deleniti fugit unde similique debitis officiis illo eveniet nisi sequi. Beatae, reiciendis aspernatur asperiores dolorum sit adipisci quaerat fugit <span className='absolute right-0'>@Neha</span></p>
                </>



            </div>
        </Layout>
    )
}

export default BlogDetails