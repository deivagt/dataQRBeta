import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useLocation } from 'react-router-dom';
import './Datos.css'
import 'react-tabs/style/react-tabs.css';
const Datos = () => {
	const [data, setData] = useState(useLocation().state)
	const [collapseFlag, setCollapseFlag] = useState({ generales: true, salud: true })
	useEffect(() => {

		if (data !== null) {
			axios(process.env.REACT_APP_API_URL + '/api/workers/' + data.id)
				.then(async (res) => {
					await setData(res.data)
					console.log(res.data)
				});
		}

	}, [])
	return (
		<div>
			{(data === null || data.id !== undefined) ?
				<div>cargando...</div> :

				<div className='Datos-container'>
					<div className='Datos-imagen-empleado' >
						<figure>
							<img src={data.urlImagen} alt="..." />
						</figure>

					</div>
					<div className='Datos-personales Datos-seccion' >
						<div>{data.nombre}</div>
						<div>{data.puesto}</div>
						<div>#{data.idEmpleado}</div>
					</div>

					<div className='Datos-tab-container'>
						<Tabs>
							<TabList>
								<Tab style={{ fontSize: '16px' }}>General</Tab>
								<Tab style={{ fontSize: '16px' }}>Salud</Tab>

							</TabList>

							<TabPanel >
								<div className=' Datos-seccion Datos-generales ' >

									<div className='Datos-header'>
										<span>Datos Generales</span>
									</div>

									<div className='Datos-generales-elemento'>
										<span>Fecha de nacimiento: </span>
										<span>{data.fechaNacimiento}</span>
									</div>
									<div className='Datos-generales-elemento'>
										<span>No. IGSS: </span>
										<span>{data.igss}</span>
									</div>
									<div className='Datos-generales-elemento'>
										<span>Edad: </span>
										<span>{data.edad}</span>
									</div>
									<div className='Datos-generales-elemento'>
										<span>Estado civil: </span>
										<span>{data.estadoCivil}</span>
									</div>
									<div className='Datos-generales-elemento'>
										<span>Numero casa: </span>
										<span>{data.numeroCasa}</span>
									</div>
									<div className='Datos-generales-elemento'>
										<span>Numero celular: </span>
										<span>{data.numeroCelular}</span>
									</div>

									<div className='Datos-generales-separador'>Otros</div>

									<div className='Datos-generales-elemento'>
										<span>Inicio de labores:</span>
										<span>{data.inicioLabores}</span>
									</div>
									<div className='Datos-generales-elemento'>
										<span>Sabe leer:</span>
										<span>{data.sabeLeer === 1 ? 'Si' : 'No'}</span>
									</div>
									<div className='Datos-generales-elemento'>
										<span>Sabe escribir:</span>
										<span>{data.sabeEscribir === 1 ? 'Si' : 'No'}</span>
									</div>
									<div className='Datos-generales-elemento'>
										<span>Sabe escribir:</span>
										<span>{data.sabeEscribir === 1 ? 'Si' : 'No'}</span>
									</div>
									<div className='Datos-generales-elemento-objeto'>
										<div>
											<span>Tiene Alergias:</span>
											<span>{data.alergias && data.alergias.estado === 1 ? 'Si' : 'No'}</span>
										</div>

										<div><span>Indicacion:</span>
											<span>{(data.alergias) ? data.alergias.observacion : ''}</span></div>
									</div>

									<div className='Datos-generales-elemento'>
										<span>Consume alcohol:</span>
										<span>{data.alcohol === 1 ? 'Si' : 'No'}</span>
									</div>
									<div className='Datos-generales-elemento'>
										<span>Fuma:</span>
										<span>{data.fuma === 1 ? 'Si' : 'No'}</span>
									</div>
									<div className='Datos-generales-elemento'>
										<span>Consume drogas:</span>
										<span>{data.drogas === 1 ? 'Si' : 'No'}</span>
									</div>

									<div className='Datos-generales-elemento-objeto'>
										<div>
											<span>Medicamentos que consume:</span>
											<span>{(data.miscelaneo) ? data.miscelaneo.consumeMedicamento : 'No'}</span>
										</div>
										<div>
											<span>Cirugias a las que se a sometido:</span>
											<span>{(data.miscelaneo) ? data.miscelaneo.sometidoCirugia : 'No'}</span>
										</div>
										<div>
											<span>Accidentes laborales:</span>
											<span>{(data.miscelaneo) ? data.miscelaneo.accidenteLaboral : 'No'}</span>
										</div>

									</div>
									<div className='Datos-generales-separador'>Ultimos 3 meses</div>
									<div className='Datos-generales-elemento-objeto'>
										<div>
											<span>A consultado un medico:</span>
											<span>{data.tresMeses && data.tresMeses.consultaMedicos === 1 ? 'Si' : 'No'}</span>
										</div>
										<div>
											<span>A realizado pruebas de examen fisico o laboratorio:</span>
											<span>{(data.tresMeses) ? data.tresMeses.examenPrueba : 'No'}</span>
										</div>


									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className='Datos-salud Datos-seccion' >

									<div className='Datos-header '>
										<span>Ficha Medica</span>
									</div>
									{(data.fichaMedica) ? data.fichaMedica.map((el, i) => {
										return <div className='Datos-salud-elemento' key={i}>
											<div>
												<span>{el.titulo + ":"} </span>
												<span>{el.estado === 1 ? 'Si' : 'No'}</span>
											</div>
											<div>
												<span>{'Observacion:'}</span>
												<span>{el.observacion}</span>
											</div>
										</div>
									}) : ''}

								</div>
							</TabPanel>

						</Tabs>
					</div>


				</div>

			}
		</div>


	)
}

export default Datos