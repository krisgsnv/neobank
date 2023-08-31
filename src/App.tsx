import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Loan from "@/pages/Loan";
import Scoring from "@/pages/Scoring";
import NotFound from "@/pages/NotFound";
import PageLayout from "@/components/layout/PageLayout";
import PaymentSchedule from "@/pages/PaymentSchedule";
import DocumentSigning from "@/pages/DocumentSigning";

import "@/assets/scss/index.scss";

export const App = (): JSX.Element => (
  <>
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="loan">
          <Route index element={<Loan />} />
          <Route path=":applicationId">
            <Route index element={<Scoring />} />
            <Route path="document">
              <Route index element={<PaymentSchedule />} />
              <Route path="sign" element={<DocumentSigning />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </>
);
