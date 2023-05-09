import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [ {
      name: "",
      country: "",
      description: "",
      imageURL: "",
      hotels: "",
      itineraries: "" 
    } ],
    dataFiltered: 
      {
        name: "",
        country: "",
        description: "",
        imageURL: "",
        hotels: "",
        itineraries: "" 
      }
    } 

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
          filterCityByID: (state, action) => {
              state.dataFiltered = state.data.find( ci => ci._id === action.payload)
          },
        },
      }   
    );

    export const { setCities, changeCity, filterCityByID } = citySlice.actions
    export default citySlice.reducer




