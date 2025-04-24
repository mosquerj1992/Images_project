const initialState =0;

function contadorReducer(state,action){
    switch(action.type){
        case'incrementar':
        return state +1;
        case 'decrementar': 
        return state-1;
        default:
            return state;
    }
}

let estado = initialState;

estado= contadorReducer(estado,{type:'incrementar'});
console.log(estado);

estado= contadorReducer(estado,{type:'incrementar'});
console.log(estado);

export default reducer; 