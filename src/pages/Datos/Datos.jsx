import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './Datos.css'
import DatosColaborador from '../../components/DatosColaborador/DatosColaborador';
const Datos = () => {
	const [data, setData] = useState({ firstLoading: true, id: useLocation().state.id })

	useEffect(() => {

		if (data !== null || data !== undefined) {
			axios(process.env.REACT_APP_API_URL + '/api/workers/' + data.id)
				.then(async (res) => {
					await setData({ ...data, firstLoading: false, fetchData: res.data })
				});
		}

	}, [])


	useEffect(() => {
		console.log(data)
	})
	return (
		<>
			{(data.firstLoading)
				?
				<div>cargando...</div>
				:
				(data.fetchData.tipoDoc === 1)
					?
					<DatosColaborador fetchData={data.fetchData} />
					:
					'data invalida'

			}

		</>


	)
}

export default Datos