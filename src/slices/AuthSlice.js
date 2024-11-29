import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") || null, // LocalStorage'dan token yüklenir
    isAuthenticated: !!localStorage.getItem("token"), // Token varsa isAuthenticated true olur
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem("token", action.payload); // Token LocalStorage'a kaydedilir
        },
        clearToken: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token"); // Token LocalStorage'dan silinir
        },
    },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
