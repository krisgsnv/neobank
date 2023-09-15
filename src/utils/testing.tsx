/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { type PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import type store from "@/store";

import type { RootState } from "@/store";
import applicationReducer from "@/store/applicationSlice";
import prescoringReducer from "@/store/prescoringSlice";
import { BrowserRouter } from "react-router-dom";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        application: applicationReducer,
        prescoring: prescoringReducer
      },
      preloadedState
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export const renderWithProvidersAndRouter = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { application: applicationReducer },
      preloadedState
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
  route: string = "/"
) => {
  const Wrapper = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export const renderWithRouter = (component: JSX.Element) =>
  render(<BrowserRouter>{component}</BrowserRouter>);
