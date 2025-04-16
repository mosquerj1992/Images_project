import React, { use, useEffect, useState } from 'react';
import { ImageCard } from "./ImageCard";
import { useFetch } from "../hooks/useFetch";


export const ImageGrid = () => {

    const { images, initalLoad, isLoading, query, setQuery, getRequest } = useFetch();


    const onHandleClick = () => { 

        if(query.trim() !==''){
            getRequest(query)
        }
    };


    const onHandleChange = (event) => {
      setQuery(event.target.value);
    };

    return (
        <div>
            {isLoading ? (
                <h1>Cargando...</h1>
            ) : (

                <>
                    <h1>Listado de Imagenes</h1>

                    <div>
                        <input
                            type="text"
                            value={query}
                            onChange={onHandleChange}
                            placeholder="search"
                        />
                        <button onClick={onHandleClick}>Buscar</button>
                    </div>
                    {images.map((image) => (
                        < ImageCard
                            src={image.src.medium}
                            author={image.photographer}
                            decription={image.alt}
                            key={image.id}
                        />
                    ))}
                </>
            )}
        </div>
    );
};
