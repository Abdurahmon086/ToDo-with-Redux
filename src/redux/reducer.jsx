const STATE = {
    text: '',
    todo: [],
}

export const reducer = (state = STATE, action) => {
    switch (action.type) {
        case "text":
            return { ...state, text: action.payload }
        case "todo":
            state.todo.push(action.payload)
            return state
    }

        return state
}
