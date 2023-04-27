import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './Datos.css'
const Datos = () => {
  const [data, setData] = useState(useLocation().state)

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
    <>
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
          <div className='Datos-salud Datos-seccion' >
            <div>
              <span>Ficha Medica</span>
            </div>
            <div className='Datos-salud-elemento'>
              <span>Tipo de Sangre: </span>
              <span>{data.tipoSangre}</span>
            </div>
          </div>
        </div>

      }
    </>


  )
}

export default Datos