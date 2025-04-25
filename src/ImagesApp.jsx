import React from "react";
import { ImageGrid } from "./components/ImageGrid";
import {FormReducer} from "./components/FormReducer";
import { CounterReducer } from "./components/CounterReduccer";
import { MyForm } from "./components/MyForm";
import { ComplexForm } from "./components/ComplexForm";


export const ImagesApp = () => {


  return (

   <div className="m-4">
    <h1 className="text-3xl font-bold">Images App</h1>
    
    
      {/* < ImageGrid/> */}
      {/* <CounterReducer/> */}
      {/* <FormReducer/> */}
      {/* <MyForm/>   */}
      <ComplexForm/>
              
   </div>
  );
};

 