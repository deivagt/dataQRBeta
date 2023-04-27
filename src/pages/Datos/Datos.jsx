import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useLocation } from 'react-router-dom';
import './Datos.css'
import 'react-tabs/style/react-tabs.css';
const Datos = () => {
	const [data, setData] = useState(useLocation().state)
	console.log(useLocation().state)
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

					<div className='Datos-principal Datos-seccion' >
						<div className='Datos-imagen-empleado' >
							<figure>
								<img src={data.urlImagen} alt="..." />
							</figure>

						</div>
						<div>{data.nombre}</div>
						<div>{data.puesto}</div>
						<div>#{data.idEmpleado}</div>
					</div>
					<div className=' Datos-seccion Datos-personales ' >

						<div className='Datos-header'>
							<span>Datos Personales</span>
						</div>

						<div className='Datos-personales-elemento'>
							<span>Fecha de nacimiento: </span>
							<span>{data.personal.fechaNacimiento}</span>
						</div>
						<div className='Datos-personales-elemento'>
							<span>No. DPI: </span>
							<span>{data.personal.nit}</span>
						</div>
						<div className='Datos-personales-elemento'>
							<span>Edad: </span>
							<span>{data.personal.edad}</span>
						</div>
						<div className='Datos-personales-elemento'>
							<span>Estado civil: </span>
							<span>{data.personal.estadoCivil}</span>
						</div>

						<div className='Datos-personales-elemento'>
							<span>Numero celular: </span>
							<span>{data.personal.numeroCelular}</span>
						</div>

					</div>
					<div className='Datos-tab-container'>
						<Tabs>
							<TabList>
								<Tab style={{ fontSize: '16px' }}><div style={{ textAlign: 'center' }}>Datos<br></br>Salud</div></Tab>
								<Tab style={{ fontSize: '16px' }}><div style={{ textAlign: 'center' }}> Seguridad<br></br>Industrial</div></Tab>
								<Tab style={{ fontSize: '16px' }}><div style={{ textAlign: 'center' }}>Mas<br></br>Informacion</div></Tab>



							</TabList>


							<TabPanel>
								<div className='Datos-salud Datos-seccion' >

									<div className='Datos-header '>
										<span>Informacion Medica</span>
									</div>
									<div>
										<div className='Datos-salud-principal-objeto'>
											<div>
												<span>Tiene Alergias:</span>
												<span>{data.saludPrincipal.alergias && data.saludPrincipal.alergias.estado === 1 ? 'Si' : 'No'}</span>
											</div>

											<div><span>Indicacion:</span>
												<span>{(data.saludPrincipal) ? data.saludPrincipal.alergias.observacion : ''}</span></div>
										</div>
										<div className='Datos-salud-principal-objeto'>
											<div>
												<span>Alergias medicamentos:</span>
												<span>{data.saludPrincipal.alergiasMedicamentos && data.saludPrincipal.alergiasMedicamentos.estado === 1 ? 'Si' : 'No'}</span>
											</div>

											<div><span>Indicacion:</span>
												<span>{(data.saludPrincipal) ? data.saludPrincipal.alergiasMedicamentos.observacion : ''}</span></div>
										</div>
										<div className='Datos-salud-principal-objeto'>
											<div>
												<span>Consume medicamentos:</span>
												<span>{data.saludPrincipal.consumeMedicamento && data.saludPrincipal.consumeMedicamento.estado === 1 ? 'Si' : 'No'}</span>
											</div>

											<div><span>Indicacion:</span>
												<span>{(data.saludPrincipal) ? data.saludPrincipal.consumeMedicamento.observacion : ''}</span></div>
										</div>
										<div className='Datos-salud-principal-objeto'>
											<div>
												<span>Enfermedades cronicas:</span>
												<span>{data.saludPrincipal.enfermedadesCronicas && data.saludPrincipal.enfermedadesCronicas.estado === 1 ? 'Si' : 'No'}</span>
											</div>

											<div><span>Indicacion:</span>
												<span>{(data.saludPrincipal) ? data.saludPrincipal.enfermedadesCronicas.observacion : ''}</span></div>
										</div>
										<div className='Datos-salud-principal-objeto'>
											<div>
												<span>Alta presion:</span>
												<span>{data.saludPrincipal.altaPresion && data.saludPrincipal.altaPresion.estado === 1 ? 'Si' : 'No'}</span>
											</div>

											<div><span>Indicacion:</span>
												<span>{(data.saludPrincipal) ? data.saludPrincipal.altaPresion.observacion : ''}</span></div>
										</div>
										<div className='Datos-salud-principal-objeto'>
											<div>
												<span>Baja presion:</span>
												<span>{data.saludPrincipal.bajaPresion && data.saludPrincipal.bajaPresion.estado === 1 ? 'Si' : 'No'}</span>
											</div>

											<div><span>Indicacion:</span>
												<span>{(data.saludPrincipal) ? data.saludPrincipal.bajaPresion.observacion : ''}</span></div>
										</div>
									</div>
									<div className='Datos-personales-separador'>Informacion Adicional</div>
									<div>
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


								</div>
							</TabPanel>

							<TabPanel>
								<div className=' Datos-seccion Datos-seguridad ' >

									

								</div>
							</TabPanel>
							<TabPanel >
								<div className=' Datos-seccion Datos-extra ' >

									<div className='Datos-header'>
										<span>Datos Generales</span>
									</div>


									<div className='Datos-extra-elemento'>
										<span>Inicio de labores:</span>
										<span>{data.miscelaneo.inicioLabores}</span>
									</div>
									<div className='Datos-extra-elemento'>
										<span>Sabe leer:</span>
										<span>{data.miscelaneo.sabeLeer === 1 ? 'Si' : 'No'}</span>
									</div>
									<div className='Datos-extra-elemento'>
										<span>Sabe escribir:</span>
										<span>{data.miscelaneo.sabeEscribir === 1 ? 'Si' : 'No'}</span>
									</div>
									<div className='Datos-extra-elemento'>
										<span>Sabe escribir:</span>
										<span>{data.miscelaneo.sabeEscribir === 1 ? 'Si' : 'No'}</span>
									</div>


									<div className='Datos-extra-elemento'>
										<span>Consume alcohol:</span>
										<span>{data.miscelaneo.alcohol === 1 ? 'Si' : 'No'}</span>
									</div>
									<div className='Datos-extra-elemento'>
										<span>Fuma:</span>
										<span>{data.miscelaneo.fuma === 1 ? 'Si' : 'No'}</span>
									</div>
									<div className='Datos-extra-elemento'>
										<span>Consume drogas:</span>
										<span>{data.miscelaneo.drogas === 1 ? 'Si' : 'No'}</span>
									</div>


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