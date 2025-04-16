import React,{useEffect, useState} from "react";
import {getImages} from "../helpers/getlmages";


export const useEffect=() =>{

const [images, setImages] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [query, setQuery] = useState("");
const[initalLoad, setInitalLoad]= useState(true);

const getRequest = async (query) => {
    const { photos, total_results, page } = await getImages(query);
    setImages(photos);
    setIsLoading(false);
};

useEffect(() => {
    if(initalLoad){
        getRequest("nature");  // busqueda popr primera vez
        setInitalLoad(false)
    }   
}, [initalLoad]);



return{
    images,
    initalLoad,
    isLoading,
    query,
    setQuery
};

};