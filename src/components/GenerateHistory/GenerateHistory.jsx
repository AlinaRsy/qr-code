import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "../../constants";

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA || "[]"));
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data.map((item) => (
        <div
          className="block"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "10px 0",
            borderBottom: "1px solid #cfcfcfff",
          }}
        >
          <p key={item}>{item}</p>
          <QRCodeSVG value={item} size={100} />
        </div>
      ))}
    </div>
  );
};
