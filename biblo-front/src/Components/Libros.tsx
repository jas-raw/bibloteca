import React, { useState } from 'react';
import { createBooks, deleteBooks, updateBooks } from '../services/book_service';

const Libros = (props: any) => {

	const { results } = props

	const [title, setTitle] = useState("")
	const [modify, setModify] = useState("")

	const updateTitle = (e: any) => {
		const value = e.target.value
		setTitle(value)
	}

	const saveBook = async (e: any) => {
		e.preventDefault()
		if(title.trim() !== ""){
			const obj = {
				title
			}
			let data
			if(modify.trim() === ""){
				data = await createBooks(obj)
			}else{
				data = await updateBooks(modify, obj)
			}
			alert(data.error ? data.error : "Se guardo el libro")
			!data.error && window.location.reload()
		}else{
			alert("Complete todos los campos para continuar")
		}
	}

	const deleteBook = async (id: string) => {
		const data = await deleteBooks(id)
		alert(data.error ? data.error : "Se elimino el libro")
		!data.error && window.location.reload()
	}

	const modifyBook = async (id: string, title: string) => {
		setModify(id)
		setTitle(title)
	}

	return (
		<div>
			<div className='my-2 p-2 bg-dark text-center'>
				<h4 className='text-light'>Añadir nuevo libro</h4>
				<div>
					<input placeholder='Titulo del libro' value={title} onChange={(e) => updateTitle(e)} type="text" className="form-control" />
				</div>
				<div className='my-2'>
					<button onClick={(e) => saveBook(e)} className="btn btn-primary">
						Guardar
					</button>
				</div>
			</div>
			<div>
				<table className="table table-hover table-dark">
					<thead>
						<tr>
							<th scope="col">Título</th>
							<th scope="col">Disponible</th>
							<th scope="col">Modificar</th>
							<th scope="col">Eliminar</th>
						</tr>
					</thead>
					<tbody>
						{
							results.map( (it: any) => {
								return (
									<tr key={it.id}>
										<td>{it.title}</td>
										<td>{it.available ? "Sí" : "No"}</td>
										<td>
											<button onClick={() => modifyBook(it.id, it.title)} className="btn btn-warning">
												Modificar
											</button>
										</td>
										<td>
											<button onClick={() => deleteBook(it.id)} className="btn btn-danger">
												Eliminar
											</button>
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Libros;
