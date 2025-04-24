export const getImages = async (query = 'nature',perPage = 5, orientation='landscape')=>{
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}&orientation=${orientation}`;    
    console.log(url);
    const request = await fetch(url, {
        method: "GEt",
        headers:{
            Authorization:

            "UsN8hfg6LgsgUQziD0LqhymUwDZgfTsWOw22VYmymchNIVQZCFLtRmGr",
           
        },
    });

    const { photos, total_results,page } = await request.json();

    console.log({photos, total_results,page});
    
    return{photos, total_results,page};

};