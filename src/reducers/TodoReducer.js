export function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            const newId = state.length > 0 ? Math.max(...state.map(todo => todo.id)) + 1 : 1;
            return [...state, {
                id: newId,
                text: action.payload.text,
                done: false
            }];
        case "TOGGLE_TODO":
            /// copy
            return [...state].map((value) => {
                if (value.id === action.payload.id) {
                    return {
                        id: action.payload.id,
                        text: value.text,
                        done: !value.done
                    };
                }

                return value
            })
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
}