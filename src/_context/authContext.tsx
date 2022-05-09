import React, { useState } from "react";
import axios from "axios";
import API_URL from "../env";
let API_URL_login = API_URL + "auth/login/";

const Context = React.createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    return new Promise(async (resolve, reject) => {
      await axios
        .post(
          API_URL_login,
          {
            email,
            password,
          },
        )
        .then(async (response) => {
          if (response.data.access_token) {
            setAuthenticated(true);
            await axios
              .get(API_URL + "elabuser/" + response.data.user.id + "/", {
                headers: {
                  Authorization: "Bearer " + response.data.access_token,
                },
              })
              .then((res) => {
                let photo = res.data.photo;
                localStorage.setItem(
                  "login",
                  JSON.stringify({
                    token: response.data.access_token,
                    user: {
                      photo: photo?photo:"assets/img/user.png",
                      first_name: res.data.first_name,
                      last_name: res.data.last_name,
                      email: res.data.email,
                      user: res.data.user,
                      kind: res.data.kind,
                    },
                  })
                );
                resolve(response.data);
              });

          } else {
            reject("enable to login now");
          }
        })
        .catch((e: any) => {

          if (e.message === "Network Error") {
            reject(e.message)

          } else {
            reject(e.response.data[Object.keys(e.response.data)[0]][0]);
          }
        });
    });
  };
  const logout = async () => {
    setAuthenticated(false);
    localStorage.removeItem("login");
    await axios.post(API_URL + "auth/logout/");
  };
  let state = {
    authenticated,
    login,
    logout,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};
export default Context;
