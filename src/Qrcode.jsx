import QRCode from "qrcode";
import { useState } from "react";

function Qrcode(){

    const [url, setUrl] = useState('')
    const [qrcode, setQrcode] = useState('')

    const GenerateQRCode = () =>{

        QRCode.toDataURL(url,{
            width: 800,
            margin: 2,
            color:{
                dark: '#000000ff',
                light: '#ffffffff'
            }


        } ,(err, url) =>{

            if(err) return console.error(err)
            setQrcode(url)
        }) 
    }

    return(
        <div className="app">
            <h1>QR Code Generator</h1>
            <input type="text" placeholder="Enter your url" 
            value={url} 
            onChange={(evt) => setUrl(evt.target.value)}/>
            <button onClick={GenerateQRCode}>Generate</button>
            {qrcode &&
            <>
             <img src={qrcode} alt="" />
             <a href={qrcode} download="qrcode.png">Download</a>
            </>}
           
        </div>

    );
}

export default Qrcode