import { createSlice } from "@reduxjs/toolkit";


import raquetas from "../../assests/images/raquetas-de-nieve.jpg"
import bastones from "../../assests/images/bastones-de-trekking.jpg"
import carpa from "../../assests/images/carpa.jpg"
import mochila from "../../assests/images/mochila.jpg"
import botas from "../../assests/images/botas.jpg"
import campera from "../../assests/images/campera.jpg"
import radio from "../../assests/images/radio.jpg"
import bolsadormir from "../../assests/images/bolsadormir.jpg"

export const equipmentState = [
    {
        id: 0,
        name: 'Raquetas de nieve',
        priceXday: 5000,
        image: raquetas
    },
    {
        id: 1,
        name: 'Bastones de trekking',
        priceXday: 2000,
        image: bastones
    },
    {
        id: 2,
        name: 'Carpa',
        priceXday: 7000,
        image: carpa
    },
    {
        id: 3,
        name: 'Mochila',
        priceXday: 5000,
        image: mochila
    },
    {
        id: 4,
        name: 'Botas',
        priceXday: 5000,
        image: botas
    },
    {
        id: 5,
        name: 'Campera',
        priceXday: 3000,
        image: campera
    },
    {
        id: 6,
        name: 'Radio',
        priceXday: 2000,
        image: radio
    },
    {
        id: 7,
        name: 'Bolsa de dormir',
        priceXday: 3000,
        image: bolsadormir
    }]

export const emptyEquipmentState = {
    id: 0,
    name: 'Raquetas de nieve',
    priceXday: 5000,
    image: raquetas
}

export const equipmentDetailSlice = createSlice({
    name: 'equipment',
    initialState: emptyEquipmentState,
    reducers: {
        getEquipmentById: (state, action) => {
            let equipment = equipmentState.filter(item => item.id === Number(action.payload))
            console.log(equipment)
            return equipment[0]
        }
    }
})

export const { getEquipmentById } = equipmentDetailSlice.actions

export default equipmentDetailSlice.reducer