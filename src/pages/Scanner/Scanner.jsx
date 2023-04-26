import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Html5QrcodePlugin from '../../components/Html5QrcodeScannerPlugin/Html5QrcodeScannerPlugin'
import './Scanner.css'

const Scanner = () => {
    const [data, setData] = useState({
        redirect: false,
        data: ''
    });

    const onNewScanResult = (decodedText, decodedResult) => {
        setData({
            redirect: true,
            decodedText: decodedText
        })
    };
    return (
        <div className="Scanner-main">
            <h1>Leer</h1>
            {data.redirect
                ?
                <Navigate
                    to={'/Datos'}
                    state={{
                       id:data.decodedText
                    }}
                ></Navigate>
                :
                <div className="Scanner-camera-container">

                    <Html5QrcodePlugin
                        fps={10}
                        qrbox={250}
                        disableFlip={false}
                        qrCodeSuccessCallback={onNewScanResult}
                    />
                </div>
            }

        </div>
    )
}

export default Scanner