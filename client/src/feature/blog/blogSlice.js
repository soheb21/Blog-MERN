import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllBlogs, fetchBlogDetails } from "./blogAPI";
const initialState = {
    blogs: [],
    blogDetails: null,
    isLoading: false,
    errorMSg: ""
};
export const getAllBlogsAsync = createAsyncThunk("getAllBlogs", async (args, { rejectWithValue }) => {
    try {
        const res = await fetchAllBlogs();
        return res;

    } catch (error) {
        const status = error.response.status;
        const serverMssg = error.response
        if (status === 404) {
            return rejectWithValue("NetWork Error")
        }
        if (status === 401) {
            return rejectWithValue(serverMssg.data)
        }
        else {
            throw "something went wrong"
        }

    }
})
export const getBlogDetailsAsync = createAsyncThunk("getBlogDetails", async (id, { rejectWithValue }) => {
    try {
        const res = await fetchBlogDetails(id)
        return res;
    } catch (error) {
        const { status } = error.response;
        const serverMssg = error.response
        if (status === 404) {
            return rejectWithValue("NetWork Error")
        }
        if (status === 401) {
            return rejectWithValue(serverMssg.data)
        }
        else {
            return rejectWithValue("something went wrong")
        }
    }
})
export const blogSlice = createSlice({
    name: "blogs",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllBlogsAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllBlogsAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blogs = action.payload.data;
                state.errorMSg = null;
            })
            .addCase(getAllBlogsAsync.rejected, (state, action) => {
                console.log("payload", action.payload)
                state.isLoading = true;
                state.blogs = [];
                state.errorMSg = action.payload;
            })
            .addCase(getBlogDetailsAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBlogDetailsAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blogDetails = action.payload.data;
            })
            .addCase(getBlogDetailsAsync.rejected, (state, action) => {
                state.isLoading = true;
                state.blogDetails = null;
                state.errorMSg = action.payload;
            })
    }

});
export const selectAllBlogs = (state) => state.blog.blogs;
export const selectBlogsError = (state) => state.blog.errorMSg;
export default blogSlice.reducer;