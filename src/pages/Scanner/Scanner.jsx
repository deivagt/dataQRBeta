import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Html5QrcodePlugin from '../../components/Html5QrcodeScannerPlugin/Html5QrcodeScannerPlugin'
import './Scanner.css'
import { unmountComponentAtNode } from 'react-dom';
const qrcodeRegionId = "html5qr-code-full-region"; 
const Scanner = () => {
    const [data, setData] = useState({
        redirect: false,
        data: ''
    });
    const [manual, setManual] = useState("")
    const [html5QrCodeState, setHtml5QrCodeState] = useState(null)
    const onNewScanResult = (decodedText, decodedResult) => {
        html5QrCodeState.stop().then((ignore) => {
            setData({
                redirect: true,
                decodedText: decodedText
            })
            unmountComponentAtNode(document.getElementById(qrcodeRegionId))
        }).catch((err) => { console.error(err) });

    };
    const buttonHandler =   () => {
          html5QrCodeState.stop().then((ignore) => {
            setData({
                redirect: true,
                decodedText: manual
            })
            unmountComponentAtNode(document.getElementById(qrcodeRegionId))
        })



    }
    const inputEnterHandler = (e) => {

        if (e.key === "Enter") {
            e.preventDefault();

            html5QrCodeState.stop();
            buttonHandler();
        }

    }
    const passScanner = (html5QrCode) => {
        setHtml5QrCodeState(html5QrCode);
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
                        passScanner={passScanner}
                    />
                </div>
            }
            <div className='Scanner-subtitulo' >
                <span>Introducir codigo</span>
            </div>
            <div className='Scanner-buscador-container'>
                <input onChange={(e) => { setManual(e.target.value); }} onKeyDown={(e) => { inputEnterHandler(e) }}></input>
                <button onClick={(e) => { buttonHandler() }}>Buscar</button>
            </div>

        </div>
    )
}

export default Scanner