import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Loan from "@/pages/Loan";

import "@/assets/scss/index.scss";
import PageLayout from "@/components/layout/PageLayout";

export const App = () => (
  <PageLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loan" element={<Loan />} />
    </Routes>
  </PageLayout>
);
