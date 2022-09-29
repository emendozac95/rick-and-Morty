import characterApi from "../api/characterApi";

export const getAllCharacters = async () => {
    try{
        const { data } = await characterApi.get('/character');
        //console.log( data );
        return data;
    }catch( error ){
        //console.log( error );
        return [];
    }
}

export const getCharacter = async (id) => {
    try{
        const data = await characterApi.get(`/character/${id}`);
        //console.log( data );
        return data;
    }catch( error ){
        //console.log( error );
        return [];
    }
}

export const getByName = async (name) => {
    try{
        const { data } = await characterApi.get(`/character/?name=${name}`);
        //console.log("PETICION", data );
        return data;
    }catch( error ){
        //console.log( error );
        return [];
    }
}