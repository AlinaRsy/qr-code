import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import s from "./QRCodeGenerator.module.css";
import { GENERATE_DATA } from "../../constants";
export function QRCodeGenerator() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const handlerClick = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
    localStorage.setItem(
      GENERATE_DATA,
      JSON.stringify([...prevData, value])
    )
    setResult(value);
    setValue("");
  };
  const handlerChange = (e) => {
    setValue(e.target.value);
    setResult("");
  };
  return (
    <div className={s.qrWrapper}>
      <form className={s.form}>
        <input
          className={s.input}
          placeholder="Введите текст..."
          type="text"
          value={value}
          onChange={handlerChange}
        />
        <button className={s.button} type="button" onClick={handlerClick}>
          Сгенерировать QR
        </button>
      </form>
      {result != "" && <QRCodeSVG value={result} size={200} />}
    </div>
  );
}
