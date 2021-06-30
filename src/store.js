import {createStore} from "redux"

const initialState = {
    totalAmount: 19500,
    share : 16
}
const reducerSlider = (state=initialState, action) =>{
  
    if(action.type === "MONTO_ACTUALIZADO"){
        return {
            ...state,
            totalAmount : action.newValue
        }
    }
    if(action.type === "CUOTA_ACTUALIZADA"){
        return {
            ...state,
            share : action.newValue
        }
    }
    return state;
}

export default createStore(reducerSlider)
