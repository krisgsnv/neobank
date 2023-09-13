import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root") as Element;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
