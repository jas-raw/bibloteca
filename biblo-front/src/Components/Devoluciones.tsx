import React from 'react';
import { deleteLoans } from '../services/loan_service';

const Devoluciones = (props: any) => {

    const { results } = props

    const onReturn = async (id: string) => {
		const data = await deleteLoans(id)
		alert(data.data ? data.data : data.error)
		data.data && window.location.reload()
	}

    return (
        <div className='my-2'>
            <table className="table table-hover table-dark">
				<thead>
					<tr>
						<th scope="col">Título</th>
						<th scope="col">Usuario</th>
						<th scope="col">Fecha de prestamo</th>
						<th scope="col">Estado</th>
					</tr>
				</thead>
				<tbody>
					{
						results.map( (it: any) => {
							return (
								<tr key={it.id}>
									<td>{it.book}</td>
									<td>{it.user}</td>
									<td>{it.create_at}</td>
									<td>
										{
											it.active ? 
											(
												<button onClick={() => onReturn(it.id)} className="btn btn-success">
													Retornar
												</button>
											) : (
												<span>Ya devuelto</span>
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
    );
};

export default Devoluciones;
