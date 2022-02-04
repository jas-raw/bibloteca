import React, { useCallback, useEffect, useState } from 'react';
import { searchBooks } from '../services/book_service';
import { searchLoans } from '../services/loan_service';
import { searchUsers } from '../services/user_service';
import { PRESTAMOS_PATH, LIBROS_PATH, USUARIOS_PATH, DEVOLUCIONES_PATH } from '../utils/constants';

const Search = (props: any) => {

    const { path, setResults } = props

    const [initialize, setInitialize] = useState("")
    const [ searchWord, setSearchWord ] = useState("")

    const onSearch = useCallback(async (e?: any) => {
        e?.preventDefault()
        let data
        switch(path){
            case PRESTAMOS_PATH:
            case LIBROS_PATH:
                data = await searchBooks(searchWord.trim())
                break
            case USUARIOS_PATH:
                data = await searchUsers(searchWord.trim())
                break
            case DEVOLUCIONES_PATH:
                data = await searchLoans()
                break
            default:
                alert("Ruta desconocida")
                break
        }
        setResults(data ? data : [])
    }, [path, searchWord, setResults])

    const onChangeSearch = (e: any) => {
        const value = e.target.value
        setSearchWord(value)
    }

    useEffect(() => {
        if(initialize !== path){
            onSearch()
            setInitialize(path)
        }
    }, [initialize, onSearch, path]);
    

    return (
        <form className={"row mt-4 "+(path === DEVOLUCIONES_PATH && "d-none")} onSubmit={e => onSearch(e)}>
            <div className="col">
                <input value={searchWord} onChange={e => onChangeSearch(e)} placeholder='Buscar' type="text" className="form-control" />
            </div>
            <button type='submit' className="d-none"></button>
        </form>
    );
};

export default Search;
