import React from 'react'
import { useForm } from 'react-hook-form';

export const ComplexForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    console.log(errors);

    const onSubmit = (e) => {
        e.target.preventDefaul;
        console.log(e.target.preventDefaul);

        setTimeout(() => {
            console.log('El usuario se valido en la base')
        }, 3000);

        reset();

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                    type="text"
                    placeholder='Name'
                    {...register("name", { required: "El campo no puede ir vacio" })}
                />

                {errors.name && (
                    <span className="text-red-800">{errors.name.message}</span>
                )}


            </div>
            <div>
                <input
                    type="email"
                    placeholder='example@email.com'
                    {...register("email", {
                        required: "El campo no puede ir vacio",
                        pattern: {
                            value: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
                            message: 'El email no es valido'
                        },
                    })}
                />
                {errors.email && (
                    <span className="text-red-800">{errors.email.message}</span>
                )}

            </div>
            <div>
                <textarea placeholder='insert your message here' 
                {...register("message", { required: "El mensaje es requerido" })}
                
                />

                {errors.message && (
                    <span className="text-red-800">{errors.message.message}</span>
                )}
            </div>
            <button type='submit'>Enviar </button>

        </form>
    );
};
