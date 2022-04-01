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
import API_URL from "./env";
import AuthContext from "./_context/authContext.tsx";
import axios from "axios";
function App() {
  const { authenticated } = React.useContext(AuthContext);
  let auth = authenticated;

  let storage = localStorage.getItem("login");
  let user = JSON.parse(storage || JSON.stringify({}));
  async function getTokenStatus() {
    await axios
      .post(API_URL + "auth/token/verify/", {
        token: user.token,
      })
      .then((res) => {})
      .catch((e) => {
        localStorage.removeItem("login");
        window.location.replace("/login");
      });
  }
  if (localStorage.getItem("login")) {
    auth = true;
    getTokenStatus();
  }
  if (auth) {
    console.log(window.location.pathname);
    if (window.location.pathname === "/") {
      window.location.replace("/profile");
    }
  }
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
