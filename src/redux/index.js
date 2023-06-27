import { configureStore } from '@reduxjs/toolkit';
import infoSlice from './infoSlice';
import motorsSlice from './motorsSlice';


const store = configureStore({
    reducer: {
        motors: motorsSlice,
        info: infoSlice,
    },
    devTools: false,
})

export default store;