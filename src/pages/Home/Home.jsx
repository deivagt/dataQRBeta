import React from 'react'
import Html5QrcodePlugin from '../../components/Html5QrcodeScannerPlugin/Html5QrcodeScannerPlugin'


const Home = () => {
    
    const onNewScanResult = (decodedText, decodedResult) => {
        alert(decodedText)
    };

    return (
        <div className="App">
            <h1>Leer</h1>
            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
        </div>
    );
}

export default Home