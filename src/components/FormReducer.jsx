import React, { useReducer } from "react";
import { formReducer } from "../helpers/formReducer";

export const FormReducer = () => {
    const initialState = {
        values: {
            nombre: "",
            email: "",
            mensaje: "",
        },
        errors: {},
        enviado: false,
    };

    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleChange = (e) => {
        dispatch({
            type: "update_field",
            campo: e.target.name,
            valor: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "validate" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input type="text"
                    name="nombre"
                    value={state.value.nombre}
                    onChange={handleChange}

                />
                {state.errors.nombre && (
                    <p style={{ color: "red" }}>{state.errors.nombre}</p>
                )}
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={state.value.email}
                    onChange={handleChange}
                />
                {state.errors.email && (
                    <p style={{ color: "red" }}>{state.errors.email}</p>
                )}
            </div>

            <div>

                <label>Mensaje</label>
                <textarea
                    name="mensaje"
                    value={state.value.mensaje}
                    onChange={handleChange}
                />
                {state.errors.mensaje && (
                    <p style={{ color: "red" }}>{state.errors.mensaje}</p>
                )}
            </div>
            <button type="submit">Enviar</button>

            {state.enviado && (
                <p style={{ color: "green" }}>Formulario enviado correctamente</p>
            )}
        </form>
    );

};



