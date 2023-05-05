import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "../slices/city/citySlice"
import hotelReducer from "../slices/hotels/hotelSlice"

export const store = configureStore( {
    reducer: { 
        cities: cityReducer,
        hotel: hotelReducer    
    }
}  )

    