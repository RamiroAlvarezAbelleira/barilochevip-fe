import {configureStore} from "@reduxjs/toolkit"
import { equipmentSlice } from "./states/equipment"
import { equipmentDetailSlice } from "./states/equipmentDetail"

export default configureStore({
    reducer: {
        equipment: equipmentSlice.reducer,
        equipmentDetail: equipmentDetailSlice.reducer
    }
})