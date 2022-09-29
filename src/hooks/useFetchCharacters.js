import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../helpers/getCharacters";
import { setCharactersRed } from '../store/characters/character';

export const useFetchCharacters = () => {

    const { characters, isLoading } = useSelector( state => state.characters );

    const dispatch = useDispatch();

     const getCharacters = async() => {
        const { results } = await getAllCharacters();
        dispatch( setCharactersRed( results ? results : [] ) );
    }

    useEffect( () => {
        getCharacters();
    }, [])

    return {
        characters,
        isLoading
    }
}
