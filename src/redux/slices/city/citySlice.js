import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    country: "",
    description: "",
    imageURL: ""
}

 export const citySlice = createSlice( {
        name : "city",
        initialState,
        reducers: {
                changeCity:(state, action) => {
                    const { name,country,description } = action.payload
                    state.name = name
                    state.country = country
                    state.description = description
                },
                changeCityImage:(state, action) => {
                    const { imageURL } = action.payload
                    state.imageURL = imageURL
                },
                resetCity: (state) => {
                        state.name = ""
                        state.country = ""
                        state.description = ""
                },
                filterCityPorNombre: (state, action) => {
                  state= state.filter( city => city.name === action.payload.name)
                },
        },

    }   );
    /* export const { changeCity} = citySlice.actions */
    export const { changeCity, changeCityImage, resetCity, filterCityPorNombre } = citySlice.actions
            /* éstos son los actions(una copia), los de arriba son los reducers */
    export default citySlice.reducer /*es lo q se le pasa al store 'cityReducer' */