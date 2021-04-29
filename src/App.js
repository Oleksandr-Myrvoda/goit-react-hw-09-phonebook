import React, { useEffect, Suspense, lazy } from "react";
import { Switch } from "react-router";
import { useDispatch } from "react-redux";
import { authOperations } from "./redux/auth";
import AppBar from "./Components/AppBar";
import Container from "./Components/Container";

import PrivateRoute from "./Components/Routes/PrivatRoute";
import PublicRoute from "./Components/Routes/PublicRoute";

import "./App.css";

const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "home-page" */)
);
const ContactsPage = lazy(() =>
  import("./pages/ContactsPage" /* webpackChunkName: "contacts-page" */)
);
const RegisterPage = lazy(() =>
  import("./pages/RegisterPage" /* webpackChunkName: "register-page" */)
);
const LoginPage = lazy(() =>
  import("./pages/LoginPage" /* webpackChunkName: "login-page" */)
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);

  return (
    <div className="mainBox">
      <Container className="section">
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>

            <PublicRoute path="/register" restricted redirectTo="/contacts">
              <RegisterPage />
            </PublicRoute>

            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <LoginPage />
            </PublicRoute>
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}
