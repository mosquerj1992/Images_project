export const getImages = async(query ='nature',perPage =10)=>{
    const url=`https/api.pexels.com/v1/search?query=${query}&per_page=${perPage}`;
    console.log(url);
    const request = await fetch(url,{
        method:"GEt",
        headers:{
            Authorization


        },
    });

    const{photos, total_results,page }= await request.json();
    console.log({photos, total_results,page});
    return{photos, total_results,page};

};