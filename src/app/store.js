import { configureStore } from "@reduxjs/toolkit";
import Apislice from "../feature/Apislice";
export const store = configureStore({
    reducer: {

        data: Apislice

    },
});