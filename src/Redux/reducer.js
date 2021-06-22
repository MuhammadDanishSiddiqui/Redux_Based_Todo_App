
const initialState = {
    todos:[{completed:true,text:"Learn React"},{completed:false,text:"Learn Node"}]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos,action.payload]
            }
        case "DELETE_TODO":
            return {
                todos: state.todos.filter((todo, index) => {
                    return index !== action.payload
                })
            }
        case "UPDATE_TODO":
            const newTodos=[...state.todos]
            const edited=newTodos.findIndex((todo,index)=>{
                return  index===action.payload.id
            })
          newTodos[edited].text=action.payload.value
            return {
                todos: newTodos
            }
            case "TOGGLE_TODO":
                    const newTodoss=[...state.todos]
                    const index=newTodoss.findIndex((todo,index)=>{
                      return index===action.payload
                    })
                    newTodoss[index].completed=!newTodoss[index].completed
            return {
                ...state,
                todos: newTodoss
            }

            default:return state
    }
}

export default reducer