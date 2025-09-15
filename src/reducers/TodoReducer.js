export function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "TOGGLE_TODO":
            /// copy
           return state.map(todo => {
               if (todo.id === action.payload.id) {
                   return action.payload;
               }
               return todo
           });
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload.id);
        case "LOAD_TODOS":
            return action.payload;
        default:
            return state;
    }
}