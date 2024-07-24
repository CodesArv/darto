import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        authData: {
            authToken: null,
            refreshToken: null,
            tokenTime: "",
            isAuthenticated: false,
        },
        userData: {
            role: "",
            email: "",
            status: "",
            uid: "",
            id: "",
            isPaidCustomer:false,
            
        },
        adminauthData: {
            authToken: null,
            refreshToken: null,
            tokenTime: "",
            isAuthenticated: false,
        },
        adminData: { role: "", email: "", status: "", uid: "", id: "" },
        scoreDetails: { matchid: "" },
    },
    reducers: {
        saveAuthData: (state, action) => {
            state.authData = action.payload;
        },
        saveUserData: (state, action) => {
            state.userData = action.payload;
        },
        saveAdminAuthData: (state, action) => {
            state.adminauthData = action.payload;
        },
        saveAdminData: (state, action) => {
            state.adminData = action.payload;
        },
        saveScoreDetails: (state, action) => {
            state.scoreDetails = action.payload;
        },
    },
});

export const {
    saveAuthData,
    saveUserData,
    saveAdminAuthData,
    saveAdminData,saveScoreDetails,
} = loginSlice.actions;

export default loginSlice.reducer;
