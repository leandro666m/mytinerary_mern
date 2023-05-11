import { createSlice } from "@reduxjs/toolkit";
/* me sirve para crear una 'porcion' de estado */

const initialState = {
    name: "",
    country: "",
    description: "",
    imageURL: ""
}

 export const hotelSlice = createSlice( {
        name : "hotel",
        initialState,
        reducers: {
                changeHotel:(state, action) => {
                    const { name,country,description } = action.payload
                    state.name = name
                    state.country = country
                    state.description = description
                },
                changeHotelImage:(state, action) => {
                    const { imageURL } = action.payload
                    state.imageURL = imageURL
                },
                resetHotel: (state) => {
                        state.name = ""
                        state.country = ""
                        state.description = ""
                },
                filterHotelPorNombre: (state, action) => {
                  state= state.filter( hotel => hotel.name === action.payload.name)
                },


        },

    }   );
    
    export const { changeHotel, changeHotelImage, resetHotel, filterHotelPorNombre } = hotelSlice.actions
    
    export default hotelSlice.reducer