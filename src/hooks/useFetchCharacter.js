import { useEffect, useState } from "react";
import { getCharacter} from "../helpers/getCharacters";

export const useFetchCharacter = ( id ) => {    

       const [character, setCharacter] = useState({});
       
       const [isLoading, setIsLoading] = useState(true);
       //console.log("ID !!!!", id );

    const fetchCharacter = async ( key ) => {
        const { data } = await getCharacter(key.toString() );
        setCharacter( data ? data : [] );
        setIsLoading( false );
    }
    
    useEffect(() => {
        fetchCharacter( id );
    }, []);

    return {
        character,
        isLoading
    }
}