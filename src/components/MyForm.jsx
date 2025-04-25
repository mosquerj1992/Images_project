import React from 'react'
import { useForm } from "react-hook-form";

export const MyForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                    placeholder="first input"
                    defaultValue="test"
                    {...register("example", { required: true })}
                />

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired &&
                    <span className="text-red-800">This field is required</span>}

            </div>
            <div>
                {/* include validation with required or other standard HTML validation rules */}
                <input placeholder="second input"
                    defaultChecked=""
                    {...register("exampleRequired", { required: true })}
                />

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && (
                    <span className="text-red-800">This field is required</span>
                )}

            </div>

            <button type="submit">Continuar</button>

        </form>
    );
};
