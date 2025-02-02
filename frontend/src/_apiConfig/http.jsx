import api from "../../src/_apiConfig/baseapi";
import { ApiResponse } from "../../src/_apiConfig/api.response";
import axios from "axios";

export const http = {
  post,
  logout,
};

function post(routeUrl, formdata, isToken, customHeader = "") {
  return new Promise((resolve) => {
    return api
      .post(routeUrl, formdata, { headers: getHeaders(isToken, customHeader) })
      .then((res) => {
        resolve(res.data);
      })
      .catch(function (err) {
        try {
          if (err.response.status === 401) {
            logout();
          }
          resolve(ApiResponse(false, err.response.Message, false, err.code, 0));
        } catch (commonerror) {
          resolve(ApiResponse(false, err.message, false, err.code, 0));
        }
      });
  });
}

function logout() {
  localStorage.removeItem("token");
  localStorage.clear();
  setTimeout(() => {
    window.location.href = "/login";
  }, 500);
}

function getHeaders(boolToken, customHeader) {
  if (boolToken) {
    const userdata = localStorage.getItem("token");

    if (userdata) {
      return custHeader === ""
        ? {
            Accept: "application/json",

            "Content-Type": "application/json",
            Authorization: `Bearer ${userdata}`,
          }
        : {
            ...custHeader,
            Authorization: `Bearer ${userdata}`,
          };
    } else {
      window.location = "/";
    }
  } else {
    return custHeader === ""
      ? { Accept: "application/json", "Content-Type": "application/json" }
      : custHeader;
  }
}
