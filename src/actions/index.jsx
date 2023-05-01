export const addTodo = (data) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: {
            id
        }
    }
}

export const clickTodo = (id, data) => {
    return {
        type: 'CLICK_TODO',
        payload: {
            id,
            data
        }
    }
}