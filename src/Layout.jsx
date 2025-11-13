import { QRCodeScanner } from "./components/QRCodeScanner/QRCodeScanner";
import { QRCodeGenerator } from "./components/QRCodeGenerator/QRCodeGenerator";
import { Navigation } from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router";
import { ScanHistory } from "./components/ScanHistory/ScanHistory";
import { GenerateHistory } from "./components/GenerateHistory/GenerateHistory";

export function Layout() {
  return (
    <div className="container">
      <Navigation />
      <div className="content">
        <Routes>
          <Route path="/scanner" element={<QRCodeScanner />} />
          <Route path="/generator" element={<QRCodeGenerator />} />
          <Route path="/scanHistory" element={<ScanHistory />} />
          <Route path="/generateHistory" element={<GenerateHistory />} />
        </Routes>
      </div>
    </div>
  );
}
