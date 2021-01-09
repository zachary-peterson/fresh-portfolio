import { act } from "react-dom/test-utils"

const initialState = {
    isLoading: false,
    HRVersion: true,
    CheekyVersion: false,
    projects: [],
    errors: ''
}

export const primaryReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}