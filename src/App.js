import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Error from "./pages/Error/Error";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from "./_components/footer/Footer";
import Header from "./_components/header/Header";
import Sidebar from "./_components/sidebar/Sidebar";
import PrivateRoute from "./_components/_routes/PrivateRoute";
import ProtectedRoutes from "./_components/_routes/ProtectedRoute";
import PublicRoute from "./_components/_routes/PublicRoute";

function App() {
  let auth = true;
  return (
    <Router>
      <Switch>
        <PublicRoute path={"/login"} isAuthenticated={auth}>
          <Login />
        </PublicRoute>
        {/* <PublicRoute path={"/"} isAuthenticated={auth}>
          <Login />
        </PublicRoute> */}
        <PublicRoute path={"/register"} isAuthenticated={auth}>
          <Register />
        </PublicRoute>
        <PublicRoute path={"/reset_password"} isAuthenticated={auth}>
          <ForgotPassword />
        </PublicRoute>

        <div className="main-wrapper">
          <Route render={(props) => <Sidebar {...props} />} />
          <div>
            <Route render={(props) => <Header {...props} />} />
            <div className="page-wrapper">
              <div className="content container-fluid">
                <PrivateRoute path="/" isAuthenticated={auth}>
                  <ProtectedRoutes />
                </PrivateRoute>
              </div>
              <Route render={(props) => <Footer {...props} />} />
            </div>
          </div>
        </div>
        <Route path="/404" exact={true} component={Error} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
