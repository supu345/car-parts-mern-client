import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import { jwtDecode } from "jwt-decode";

export const customer_register = createAsyncThunk(
  "auth/customer_register",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/api/customer/customer-register", info);
      localStorage.setItem("customerToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const customer_login = createAsyncThunk(
  "auth/customer_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/api/customer/customer-login", info);
      localStorage.setItem("customerToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const customer_logout = createAsyncThunk(
  "auth/customer_logout",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      // Send the logout request to the API
      const { data } = await api.get("/api/customer/logout");

      // Clear localStorage token
      localStorage.removeItem("customerToken");

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response?.data || "Logout failed");
    }
  }
);
const decodeToken = (token) => {
  try {
    if (token) {
      const userInfo = jwtDecode(token); // Corrected usage
      const currentTime = Date.now() / 1000; // Current time in seconds
      if (userInfo.exp < currentTime) {
        localStorage.removeItem("customerToken"); // Remove expired token
        return null;
      }
      return userInfo; // Return decoded user info
    }
    return null; // Return null if token doesn't exist
  } catch (error) {
    console.error("Invalid token:", error);
    return null; // Return null if token is invalid
  }
};
export const authReducer = createSlice({
  name: "auth",
  initialState: {
    loader: false,
    userInfo: decodeToken(localStorage.getItem("customerToken")),
    errorMessage: "",
    successMessage: "",
  },
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
    user_reset: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(customer_register.pending, (state) => {
        state.loader = true;
      })
      .addCase(customer_register.rejected, (state, { payload }) => {
        state.errorMessage = payload.error;
        state.loader = false;
      })
      .addCase(customer_register.fulfilled, (state, { payload }) => {
        const userInfo = decodeToken(payload.token);
        state.successMessage = payload.message;
        state.loader = false;
        state.userInfo = userInfo;
      })
      .addCase(customer_login.pending, (state) => {
        state.loader = true;
      })
      .addCase(customer_login.rejected, (state, { payload }) => {
        state.errorMessage = payload.error;
        state.loader = false;
      })
      .addCase(customer_login.fulfilled, (state, { payload }) => {
        const userInfo = decodeToken(payload.token);
        state.successMessage = payload.message;
        state.loader = false;
        state.userInfo = userInfo;
      })
      .addCase(customer_logout.pending, (state) => {
        state.loader = true;
      })
      .addCase(customer_logout.rejected, (state, { payload }) => {
        state.errorMessage = payload.error || "Logout failed";
        state.loader = false;
      })
      .addCase(customer_logout.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message;
        state.loader = false;
        state.userInfo = null;
      });
  },
});

export const { messageClear, user_reset } = authReducer.actions;
export default authReducer.reducer;
