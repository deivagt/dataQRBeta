import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Html5QrcodePlugin from '../../components/Html5QrcodeScannerPlugin/Html5QrcodeScannerPlugin'
import './Scanner.css'

const Scanner = () => {
    const [data, setData] = useState({
        redirect: false,
        data: ''
    });
    const [manual, setManual] = useState("")

    const onNewScanResult = (decodedText, decodedResult) => {
        
        setData({
            redirect: true,
            decodedText: decodedText
        })
    };
    const buttonHandler = () => {
        setData({
            redirect: true,
            decodedText: manual
        })
    }
    const inputEnterHandler = (e) => {
        
        if (e.key === "Enter") {
            e.preventDefault();
            buttonHandler();
        }
        
    }
  
    return (
        <div className="Scanner-main">
            <div className='Scanner-titulo' >
                <span>Escanear QR</span>
            </div>
            {data.redirect
                ?
                <Navigate
                    to={'/Datos'}
                    state={{
                        id: data.decodedText
                    }}
                ></Navigate>
                :
                <div className="Scanner-camera-container">

                    <Html5QrcodePlugin
                        fps={1}
                        qrbox={200}
                        disableFlip={false}
                        qrCodeSuccessCallback={onNewScanResult}
                    />
                </div>
            }
            <div className='Scanner-subtitulo' >
                <span>Introducir codigo</span>
            </div>
            <div className='Scanner-buscador-container'>
                <input onChange={(e) => {  setManual(e.target.value);}} onKeyDown={(e) => { inputEnterHandler(e) }}></input>
                <button onClick={(e) => { buttonHandler() }}>Buscar</button>
            </div>

        </div>
    )
}

export default Scanner