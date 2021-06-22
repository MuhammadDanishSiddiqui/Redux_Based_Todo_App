function addTodo(todo){
    return{
        type:"ADD_TODO",
        payload:todo
    }
}

function deleteTodo(id){
    return{
        type:"DELETE_TODO",
        payload:id
    }
}

function updateTodo(id,value){
    return{
        type:"UPDATE_TODO",
        payload:{id,value}
    }
}

function toggleTodo(id){
    return{
        type:"TOGGLE_TODO",
        payload:id
    }
}

export {addTodo,updateTodo,deleteTodo,toggleTodo}