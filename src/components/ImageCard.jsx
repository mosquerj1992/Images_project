import React from 'react'
export const ImageCard=({src, author,description})=>{
    



    return(
        <div>
            ImageCard
            <img src={src} alt="" />
            <h3>Author:{author}</h3>
            <span>Description:{description}</span>
        </div>
    )
}


