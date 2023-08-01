import { createSlice } from "@reduxjs/toolkit";

export const emptyEquipmentState = {
}

export const persistLocalStorageEquipment = (equipment) => {
    localStorage.setItem('equipmentDetail', JSON.stringify(equipment))
}

export const equipmentDetailSlice = createSlice({
    name: 'equipment',
    initialState: localStorage.getItem('equipment') ? JSON.parse(localStorage.getItem('equipment')) : emptyEquipmentState,
    reducers: {
        getEquipmentById: (state, action) => {
            persistLocalStorageEquipment(action.payload)
            return action.payload
        }
    }
})

export const { getEquipmentById } = equipmentDetailSlice.actions

export default equipmentDetailSlice.reducer