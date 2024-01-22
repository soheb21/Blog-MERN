import axios from "axios"

export const fetchAllBlogs = async () => {
    try {
        const response = await axios.get(`http://localhost:8000/api/v1/blog?_page=1&_limit=2`)
        return response.data.success && response.data;

    } catch (error) {
        if (error) {
            throw error
        }

    }
}
export const fetchBlogDetails = async (id) => {
    try {
        const response = await axios.get("http://localhost:8000/api/v1/blog" + id)
        console.log("response", response)
        return response.data.success && response.data;

    } catch (error) {
        if (error) {
            throw error
        }

    }
}