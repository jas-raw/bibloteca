import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import './App.css';
import Nav from "./Components/Nav"
import Prestamos from "./Components/Prestamos"
import Devoluciones from "./Components/Devoluciones"
import Usuarios from "./Components/Usuarios"
import Libros from "./Components/Libros"
import Search from "./Components/Search"
import { PRESTAMOS_PATH, LIBROS_PATH, USUARIOS_PATH, DEVOLUCIONES_PATH, BACK_URL } from './utils/constants';
import axios from 'axios';

function App() {

	axios.defaults.baseURL = BACK_URL

	const [ results, setResults ] = useState([])

	const addSearch = (path: string, element: JSX.Element) => {
		return(
		<div>
			<Search setResults={setResults} path={path} />
			{element}
		</div>
		)
	}

	return (
		<Router>
		<div className="App">
			<Nav />
			<Routes>
			<Route path={PRESTAMOS_PATH} element={addSearch(PRESTAMOS_PATH, <Prestamos results={results} />)} />
			<Route path={DEVOLUCIONES_PATH} element={addSearch(DEVOLUCIONES_PATH, <Devoluciones results={results} />)} />
			<Route path={USUARIOS_PATH} element={addSearch(USUARIOS_PATH, <Usuarios results={results} />)} />
			<Route path={LIBROS_PATH} element={addSearch(LIBROS_PATH, <Libros results={results} />)} />
			<Route path="*" element={<Navigate replace to={PRESTAMOS_PATH} />} />
			</Routes>
		</div>
		</Router>
	);
}

export default App;
