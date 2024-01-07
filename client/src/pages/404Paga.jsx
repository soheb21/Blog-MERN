import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const NotFoundPage = () => {
    return (
        <Layout>
            <div className="text-center  md:h-3/4  grid place-content-center">
                <h1 className="mb-4 text-6xl font-semibold text-secondary-text">404</h1>
                <p className="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
                <div className="animate-bounce">
                    <svg className="mx-auto h-16 w-16 text-secondary-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </div>
                <p className="mt-4 text-gray-600">Let's get you back <Link to={"/"} className="text-blue-500">Home</Link>.</p>
            </div>

        </Layout >
    )
}

export default NotFoundPage