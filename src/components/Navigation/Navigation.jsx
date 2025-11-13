import { Link } from "react-router";

export const Navigation = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        width: "100%",
        justifyContent: "center",
        padding: "2rem 0",
        borderBottom:'1px solid #e5e5e5'
      }}
    >
      <Link to="/generator">Генерировать QR-code</Link>
      <Link to="/scanner">Сканировать QR-code</Link>
      <Link to="/generateHistory">История генерирования</Link>
      <Link to="/scanHistory">История сканирования</Link>
    </nav>
  );
};
