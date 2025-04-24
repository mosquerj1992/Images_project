import { startTransition } from "react";

export const formReduccer = (state, action) => {


    const regex = /^\s+@\s+\.\s$/;
    switch (action.type) {
        case 'update_field':

            return {
                ...state,
                values: {
                    ...state.values,
                    [action.campo]:action.valor,
                },
                enviado: false,
            };
            case'validate':
            const errors = {}

            if(!state.values.nomber.trim()){
                errors.nomber='El nomber es obligado';
            }

            if(!state.values.nomber.trim()){
                errors.menasje = 'El mensaje debe tener al menos 10 carateres y un super poder jajjaj';
            }

            if(!regex.text(state.values.email)){
                errors.email='El correo es invalido';
            }

            return{
                ...state,
                errors: errors,
                enviado: Object.keys (errors).length ===0
            };
            default:
                return state;
            
    }
}