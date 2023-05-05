import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [
    {
      name: "",
      country: "",
      description: "",
      imageURL: "",
    },
  ],
};

 export const citySlice = createSlice( {
        name : "cities",
        initialState,
        reducers: {
            setCities: (state, action) => {
                 state.data = action.payload; 
              },
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

    // acción asíncrona para obtener los datos de la API y actualizar el estado del store
    export const fetchCities = () => async (dispatch) => {
      try {
        const response = await axios.get("http://localhost:3000/api/cities");

        dispatch( setCities( response.data ) );
      } catch (error) {
        console.error(`Error en fetchCities (citySlice.js): ${error}`);
      }
    };

    /* export const { changeCity} = citySlice.actions */
    export const { changeCity, changeCityImage, resetCity, filterCityPorNombre,setCities } = citySlice.actions
            /* éstos son los actions(una copia), los de arriba son los reducers */
    export default citySlice.reducer /*es lo q se le pasa al store 'cityReducer' */




