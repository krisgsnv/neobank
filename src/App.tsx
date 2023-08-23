import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Loan from "@/pages/Loan";
import NotFound from "@/pages/NotFound";

import "@/assets/scss/index.scss";
import PageLayout from "@/components/layout/PageLayout";

export const App = (): JSX.Element => (
  <PageLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loan" element={<Loan />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </PageLayout>
);
