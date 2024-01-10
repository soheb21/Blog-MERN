import React from 'react'
import Layout from '../components/Layout'

const AddBlogandEdit = () => {
    return (
        <Layout>
            <form className="sm:max-w-sm md:min-w-full  mx-auto shadow-md shadow-green-500 border-t border-green-500 mt-4 p-4 rounded-md h-screen overflow-y-auto no-scrollbar scroll-smooth  ">
                <div className="mb-5">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pribg-green-500 focus:border-pribg-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pribg-green-500 dark:focus:border-pribg-green-500" placeholder="enter your name" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pribg-green-500 focus:border-pribg-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pribg-green-500 dark:focus:border-pribg-green-500" placeholder="enter your name" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">@Username</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pribg-green-500 focus:border-pribg-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pribg-green-500 dark:focus:border-pribg-green-500" placeholder="enter your name" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pribg-green-500 focus:border-pribg-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pribg-green-500 dark:focus:border-pribg-green-500" placeholder="name@flowbite.com" required />
                </div>

                <div className="mb-5 w-fit">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload *LOGO</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                    <div className="mt-1 text-sm text-yellow-500" id="user_avatar_help">Logo must be less then 2MB</div>
                </div>

                <div className="mb-5 w-fit">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload *Blog-Image-1</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                    <div className="mt-1 text-sm text-yellow-500" id="user_avatar_help">Logo must be less then 2MB</div>
                </div>

                <div className="mb-5 w-fit">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload *Blog-Image-2</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                    <div className="mt-1 text-sm text-yellow-500" id="user_avatar_help">Logo must be less then 2MB</div>
                </div>
                <div className="mb-5 w-fit">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload *Blog-Image-3</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                    <div className="mt-1 text-sm text-yellow-500" id="user_avatar_help">Logo must be less then 2MB</div>
                </div>
                <div className="mb-5">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Blog Title</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pribg-green-500 focus:border-pribg-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pribg-green-500 dark:focus:border-pribg-green-500" placeholder="enter your name" required />
                </div>

                <div className="mb-5">
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Blog-Details</label>
                        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-pribg-primary-btn focus:border-pribg-primary-btn dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pribg-primary-btn dark:focus:border-pribg-primary-btn" placeholder="Enter you blog-1..." defaultValue={""} />
                    </div>

                </div>
                <div className="mb-5">
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Blog-2-Details</label>
                        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-pribg-primary-btn focus:border-pribg-primary-btn dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pribg-primary-btn dark:focus:border-pribg-primary-btn" placeholder="Enter you blog-2..." defaultValue={""} />
                    </div>

                </div>
                <div className="mb-5">
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Blog-3-Details</label>
                        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-pribg-primary-btn focus:border-pribg-primary-btn dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pribg-primary-btn dark:focus:border-pribg-primary-btn" placeholder="Enter you blog-3..." defaultValue={""} />
                    </div>

                </div>


                <button type="submit" className="text-white mt-4 bg-green-500 hover:bg-primary-hover-btn focus:ring-4 focus:outline-none focus:ring-pribg-green-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-200 dark:focus:ring-pribg-green-500">Add+</button>
            </form>
        </Layout>
    )
}

export default AddBlogandEdit