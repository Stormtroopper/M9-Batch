
function Reducers(state,action) {
    switch(action.type){
        case "add":{
            return[...state,action.payload]
        }
        case "delete":
    }

}

export default Reducers