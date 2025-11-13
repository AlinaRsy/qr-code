import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import s from './QRCodeScanner.module.css'
import { SCAN_DATA } from "../../constants";
export const QRCodeScanner = () => {
  const [scanned, setScanned] = useState(null);
  const handlerScan = (result) => {
    setScanned(result[0].rawValue);
    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]")
    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]))
  };

  return (
    <div className={s.container}>
      
      <Scanner
        styles={{container:{width:300, height:300}}}
        allowMultiple={false}
        components={{
          finder: false
        }}
        onScan={handlerScan}
        onError={(error) => console.log(error?.message)}
      />
      <p className={s.scanned}>{scanned}</p>
    </div>
  );
};
