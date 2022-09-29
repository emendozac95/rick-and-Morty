import React from 'react'
import { useDispatch } from 'react-redux';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { setQueryString } from '../../store/characters/queryString';
const queryString = require('query-string');

export const Search = () => {

    const navigate = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    const { name = '' } = queryString.parse( location.search );
    
    const { searchText, onInputChange } = useForm({
        searchText: name
    });

    const onSearchSubmit = ( event ) => {
        event.preventDefault();

        if( searchText.trim().length <= 1) return;
        
        dispatch( setQueryString( searchText.trim() ) );
        navigate.push(`/search?name=${ searchText }`);
    }

  return (
    <form  onSubmit={ onSearchSubmit } className="d-flex" role="search">
        <input
            className="form-control me-2"
            name="searchText"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={ searchText }
            onChange={ onInputChange }
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  )
}
