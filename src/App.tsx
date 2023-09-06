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

// step 0 начало
// 1 заполнил и норм отправил прескоринг
// 2 выбрал предложение и отправилась ссылка
// 3 заполнил скоринг
// 4 поставил галку на таблице
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
                <ProtectedRoute step={0}>
                  <Scoring />
                </ProtectedRoute>
              }
            />
            <Route path="code" element={<Confirmation />} />
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
