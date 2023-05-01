const STATE = {
    list: [],
}

export const todoReducer = (state = STATE, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload
            return {
                ...state,
                list: [
                    ...state.list, {
                        id: id,
                        data: data
                    }]
            }
        case "DELETE_TODO":

            const newList = state.list.filter(el => el.id !== action.payload.id
            )
            return {
                ...state,
                list: newList
            }

        // case "CLICK_TODO":

        //     const newlook = state.list.filter(el => el.id === action.payload.id

        //     )
        //     return {
        //         ...state,
        //         list: [newlook, ]
        //     }

        default: return state
    }
}
