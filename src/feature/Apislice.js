import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const getData = createAsyncThunk("data", async (url) => {
    let response = await axios.get(`https://api.zippopotam.us/${url}`)
    console.log("url is ", url)
    return response.data




})

export const Apislice = createSlice({
    name: "zippopotam",
    initialState: {
        loading: false,
        initialData: [],
    },
    reducers: {
        resetState: (state) => {

            state.initialData = [];
        },
        errorSms: (State) => {
            State.error = ''
        }
    },
    extraReducers: {

        [getData.pending]: (initialState) => {


        },
        [getData.fulfilled]: (initialState, action) => {

            initialState.initialData = action.payload;
            console.log("action", action.payload)

        },
        [getData.rejected]: (initialState, action) => {
            initialState.error = "Invalid input! Please fill Correct data."; // Store the error message
        },
    }
});


export const { resetState, errorSms } = Apislice.actions;
export default Apislice.reducer;