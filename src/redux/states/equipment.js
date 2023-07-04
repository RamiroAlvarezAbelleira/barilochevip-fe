import { createSlice } from "@reduxjs/toolkit";

export const emptyEquipmentState = []

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