import { createSlice } from "@reduxjs/toolkit";


import raquetas from "../../assests/images/raquetas-de-nieve.jpg"
import bastones from "../../assests/images/bastones-de-trekking.jpg"
import carpa from "../../assests/images/carpa.jpg"
import mochila from "../../assests/images/mochila.jpg"
import botas from "../../assests/images/botas.jpg"
import campera from "../../assests/images/campera.jpg"
import radio from "../../assests/images/radio.jpg"
import bolsadormir from "../../assests/images/bolsadormir.jpg"

export const emptyEquipmentState = [
    {
        name: 'Raquetas de nieve',
        priceXday: 5000,
        image: raquetas
    },
    {
        name: 'Bastones de trekking',
        priceXday: 2000,
        image: bastones
    },
    {
        name: 'Carpa',
        priceXday: 7000,
        image: carpa
    },
    {
        name: 'Mochila',
        priceXday: 5000,
        image: mochila
    },
    {
        name: 'Botas',
        priceXday: 5000,
        image: botas
    },
    {
        name: 'Campera',
        priceXday: 3000,
        image: campera
    },
    {
        name: 'Radio',
        priceXday: 2000,
        image: radio
    },
    {
        name: 'Bolsa de dormir',
        priceXday: 3000,
        image: bolsadormir
    }]

export const persistLocalStorageEquipment = (equipment) => {
    localStorage.setItem('equipment', JSON.stringify(equipment))
}

export const equipmentSlice = createSlice({
    name: 'equipment',
    initialState: localStorage.getItem('equipment') ? JSON.parse(localStorage.getItem('equipment')) : emptyEquipmentState,
    reducers: {
        getEquipment: (state, action) => {
            persistLocalStorageEquipment(action.payload)
            return action.payload
        }
    }
})

export const { getEquipment } = equipmentSlice.actions

export default equipmentSlice.reducer