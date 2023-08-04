import {configureStore} from "@reduxjs/toolkit"
import { equipmentSlice } from "./states/equipment"

export default configureStore({
    reducer: {
        equipment: equipmentSlice.reducer
    }
})