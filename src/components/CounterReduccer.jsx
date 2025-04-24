import React,{useReducer} from "react";
import reducer fr4
om "../helpers/reducer";

export const CounterReduccer = () => {
    
    const regex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
    switch (useActionState.type) {
        case 'update_field':
            return {
                ...State,
                values: {
                    ...state.values,
                    [useActionState.campo]: useActionState.valor,
                },
                enviado: false,
            };
        case 'validate':
            const errors = {}

            if (!state.values.nombre.trim()) {
                errors.nombre = 'El nombre es obligatorio';
            }
            if (state.values.mensaje.trim().length < 10) {
                errors.mensaje = 'El mensaje debe tener al menos 10 caratcteres';
            }
            if (!regex.text(state.values.email)) {
                errors.email = 'El Correo es Invalido ';
            }

            return {
                ...state,
                errors: errors,
                enviado: Object.keys(errors).length === 0
            };
        default:
            return state;
    }
}



