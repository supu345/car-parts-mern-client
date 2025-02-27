import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

// Fetch categories
export const get_blogcategory = createAsyncThunk(
  "blog/get_blogcategory",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get("/get-blogcategory");
      // console.log("Fetched categories API response:", data); // Log API response
      return fulfillWithValue(data);
    } catch (error) {
      console.error(
        "Error fetching categories:",
        error.response || error.message
      );
      return rejectWithValue(error.response?.data || "Unknown error");
    }
  }
);

// Fetch blogs
export const get_blogs = createAsyncThunk(
  "blog/get_blogs",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get("/get-blog");
      // console.log("Fetched blogs:", data); // Debug response
      return fulfillWithValue(data);
    } catch (error) {
      console.error("Error fetching blogs:", error.response);
      return rejectWithValue(error.response?.data || "Failed to fetch blogs.");
    }
  }
);

export const get_singleBlog = createAsyncThunk(
  "blog/get_singleBlog",
  async (slug, { fulfillWithValue, rejectWithValue }) => {
    if (!slug) {
      console.error("Error: 'slug' is undefined");
      return rejectWithValue("Product slug is missing.");
    }

    try {
      const { data } = await api.get(`/get-singleblog/${slug}`);
      console.log("Blog data fetched:", data);
      return fulfillWithValue(data);
    } catch (error) {
      console.error("Error fetching product:", error.response);
      return rejectWithValue(
        error.response?.data || "Failed to fetch the blog."
      );
    }
  }
);

export const blogReducer = createSlice({
  name: "blog",
  initialState: {
    blogcategorys: [],
    blogs: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    singleBlog: {},
    successMessage: "",
    errorMessage: "",
  },

  reducers: {
    messageClear: (state) => {
      state.successMessage = "";
      state.errorMessage = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(get_blogcategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(get_blogcategory.fulfilled, (state, { payload }) => {
        //console.log("Fetched blog categories payload:", payload); // Log the payload
        state.status = "succeeded";
        state.blogcategorys = payload.allCategory || [];
      })
      .addCase(get_blogcategory.rejected, (state, { payload }) => {
        console.error("Error fetching categories:", payload);
        state.status = "failed";
        state.error = payload || "Failed to fetch categories.";
      })
      .addCase(get_blogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(get_blogs.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.blogs = payload.allBlogs || payload.blogs; // Adjust key if needed
      })
      .addCase(get_blogs.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      })
      .addCase(get_singleBlog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(get_singleBlog.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.singleBlog = payload.blog || {}; // Here, we expect payload.blog
      })
      .addCase(get_singleBlog.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      });
  },
});

export const { messageClear } = blogReducer.actions;
export default blogReducer.reducer;
