import React, { useEffect, useState } from "react";
import { getImages } from "../helpers/getlmages";


export const useFetch = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [initalLoad, setInitalLoad] = useState(true);

    const getRequest = async (query) => {

        const { photos, total_results, page } = await getImages(query);
        setImages(photos);
        setIsLoading(false);
    };

    useEffect(() => {

        if (initalLoad){
            getRequest("nature");
            setInitalLoad(false);
        }
        
    }, [initalLoad]);


    return {
        images,
        isLoading,
        query,
        setQuery,
        getRequest
    };

};