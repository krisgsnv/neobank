import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Loan from "@/pages/Loan";
import Scoring from "@/pages/Scoring";
import NotFound from "@/pages/NotFound";
import PageLayout from "@/components/layout/PageLayout";
import PaymentSchedule from "@/pages/PaymentSchedule";
import DocumentSigning from "@/pages/DocumentSigning";
import Confirmation from "@/pages/Confirmation";
import ProtectedRoute from "./hoc/ProtectedStepRoute";

import "@/assets/scss/index.scss";

export const App = (): JSX.Element => (
  <>
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="loan">
          <Route index element={<Loan />} />
          <Route path=":applicationId">
            <Route
              index
              element={
                <ProtectedRoute step={2}>
                  <Scoring />
                </ProtectedRoute>
              }
            />
            <Route path="code" element={<Confirmation />} />
            <Route path="document">
              <Route
                index
                element={
                  <ProtectedRoute step={4}>
                    <PaymentSchedule />
                  </ProtectedRoute>
                }
              />
              <Route
                path="sign"
                element={
                  <ProtectedRoute step={6}>
                    <DocumentSigning />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </>
);
