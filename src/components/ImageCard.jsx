import React from "react";
export const ImageCard = ({ src, author, description }) => {

    return (
        <div className="bg-gray-300 rounded-lg shadow-md overflow-hidden max-w-sm">
            <img src={src} alt="" />

            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Author:{author}</h3>
                <p className="text-gray-600 mb-4">Description{description}</p>
                
                <button className="bg-gray-800 text-white px-4 px-2 rounded hover:bg-gray-500">
                    Read More
                </button>
            </div>
        </div>
    );
};


 