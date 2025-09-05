import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DefaultProviders } from "./components/providers/default.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import KycPage from "./pages/kyc/page.tsx";
import DashboardPage from "./pages/dashboard/page.tsx";
import SecurePage from "./pages/secure/page.tsx";

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/kyc" element={<KycPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/secure" element={<SecurePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DefaultProviders>
  );
}