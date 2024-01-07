import React from 'react'
import Layout from './Layout'

const Form = () => {
    return (



        <form className="max-w-sm mx-auto shadow-md shadow-primary-btn border-t border-primary-btn mt-4 p-4 rounded-md  ">
            <div className="mb-5">
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pribg-primary-btn focus:border-pribg-primary-btn block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pribg-primary-btn dark:focus:border-pribg-primary-btn" placeholder="enter your name" required />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pribg-primary-btn focus:border-pribg-primary-btn block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pribg-primary-btn dark:focus:border-pribg-primary-btn" placeholder="name@flowbite.com" required />
            </div>
           
            <div className="md-5">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-pribg-primary-btn focus:border-pribg-primary-btn dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pribg-primary-btn dark:focus:border-pribg-primary-btn" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className="text-white mt-4 bg-primary-btn hover:bg-primary-hover-btn focus:ring-4 focus:outline-none focus:ring-pribg-primary-btn font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-btn dark:hover:bg-primary-btn dark:focus:ring-pribg-primary-btn">Submit</button>
        </form>



    )
}

export default Form