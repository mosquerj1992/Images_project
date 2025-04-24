import React, { useEffect, useState } from "react";
import { ImageCard } from "./ImageCard";
import { useFetch } from "../hooks/useFetch";



export const ImageGrid = () => {

    const { images, isLoading, query, setQuery, getRequest } = useFetch();

    const onHandleClick = () => {

        if (query.trim() !== '') {
            getRequest(query)
        }

    };

    const onHandleChange = (event) => {
        setQuery(event.target.value);
    };

    const onHandleKeyDow = (event) => {
        if (event.key === 'Enter') {
            getRequest(query);
        }
    }

    return (
        <div>
            {isLoading ? (
                <h1>Cargando...</h1>
            ) : (

                <>
                    <h2>Listado de Imagenes</h2>

                    <div className="m-4 max-w-sm">
                        <input
                            class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={query}
                            onChange={onHandleChange}
                            placeholder="search"
                            onKeyDown={onHandleKeyDow}
                        />
                        <button
                            onClick={onHandleClick}
                            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                        >
                            Buscar
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {images.map((image) => (
                            < ImageCard
                                src={image.src.medium}
                                author={image.photographer}
                                decription={image.alt}
                                key={image.id}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
