import React, { useState } from 'react';
import { createLoans } from '../services/loan_service';

const Prestamos = (props: any) => {

	const { results } = props

	const [user, setUser] = useState("")

	const updateUser = (e: any) => {
		const value = e.target.value
		setUser(value)
	}

	const onReserve = async (book_id: string) => {
		if(user.trim() !== ""){
			const obj = {
				book_id,
				username: user
			}
			const data = await createLoans(obj)
			alert(data.data ? data.data : data.error)
			data.data && window.location.reload()
		}else{
			alert("Necesita digitar su usuario para pedir el libro")
		}
	}

	return (
		<div>
			<div className='bg-dark p-2 my-2'>
				<input className='form-control' value={user} onChange={e => updateUser(e)} type="text" placeholder='Username' />
			</div>
			<div>
				<table className="table table-hover table-dark">
					<thead>
						<tr>
							<th scope="col">Título</th>
							<th scope="col">Disponible</th>
						</tr>
					</thead>
					<tbody>
						{
							results.map( (it: any) => {
								return (
									<tr key={it.id}>
										<td>{it.title}</td>
										<td>
											{
											it.available ? (
												<button onClick={() => onReserve(it.id)} className="btn btn-success">
													Pedir
												</button>
											) : (
												<span>El libro ya fue prestado</span>
											)
											}
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

export default Prestamos;
