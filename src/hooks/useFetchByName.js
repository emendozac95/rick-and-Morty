import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByName } from "../helpers/getCharacters";
import { setCharactersRed } from "../store/characters/character";

export const useFetchByName = ( ) => {    

    const { characters, isLoading } = useSelector( state => state.characters );
    const dispatch = useDispatch();
    const { query } = useSelector(state => state.queryString );

    const fetchCharacterByName = async ( ) => {
        const { results  } = await getByName( query.payload );
        dispatch( setCharactersRed( results ? results : [] ) );
    }
    
    useEffect(() => {
        fetchCharacterByName();
    }, [query.payload ]);

    return {
        characters,
        isLoading
    }
}