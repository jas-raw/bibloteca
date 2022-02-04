import React, { useState } from 'react';
import { createUsers, deleteUsers, updateUsers } from '../services/user_service';

const Usuarios = (props: any) => {

    const { results } = props

    const [username, setUsername] = useState("")
	const [modify, setModify] = useState("")

	const updateUsername = (e: any) => {
		const value = e.target.value
		setUsername(value)
	}

	const saveUser = async (e: any) => {
		e.preventDefault()
		if(username.trim() !== ""){
			const obj = {
				username
			}
			let data
			if(modify.trim() === ""){
				data = await createUsers(obj)
			}else{
				data = await updateUsers(modify, obj)
			}
			alert(data.error ? data.error : "Se guardo el usuario")
			!data.error && window.location.reload()
		}else{
			alert("Complete todos los campos para continuar")
		}
	}

	const deleteUser = async (id: string) => {
		const data = await deleteUsers(id)
		alert(data.error ? data.error : "Se elimino el usuario")
		!data.error && window.location.reload()
	}

	const modifyUser = async (id: string, username: string) => {
		setModify(id)
		setUsername(username)
	}
    
    return (
        <div>
            <div className='my-2 p-2 bg-dark text-center'>
				<h4 className='text-light'>Añadir nuevo usuario</h4>
				<div>
					<input placeholder='Username' value={username} onChange={(e) => updateUsername(e)} type="text" className="form-control" />
				</div>
				<div className='my-2'>
					<button onClick={(e) => saveUser(e)} className="btn btn-primary">
						Guardar
					</button>
				</div>
			</div>
            <div>
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Usuario</th>
                            <th scope="col">Modificar</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            results.map( (it: any) => {
                                return (
                                    <tr key={it.id}>
                                        <td>{it.username}</td>
                                        <td>
											<button onClick={() => modifyUser(it.id, it.username)} className="btn btn-warning">
												Modificar
											</button>
										</td>
										<td>
											<button onClick={() => deleteUser(it.id)} className="btn btn-danger">
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

export default Usuarios;
