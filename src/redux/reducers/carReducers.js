const carState = {
    carList: [],
    message: ""
}

export const carReducers = (state = carState, action) => {
    switch (action.type) {
        case "SEARCH_CAR_BY_NAME":
            return{
                ...carState,
                carList: action.payload.carList,
                message: action.payload.message,
            }
        default:
            return state;
    }
}