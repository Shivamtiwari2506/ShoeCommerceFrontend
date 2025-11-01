import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import api from "../services/axiosInstance";
import Loader from "../utils/Loader";

const ProtectedRoute = ({ children }) => {
  const [status, setStatus] = useState("checking"); // "checking" | "authorized" | "unauthorized"

  useEffect(() => {
    const verifyToken = async () => {
      let token = localStorage.getItem("accessToken");

      // No token → unauthorized
      if (!token) {
        setStatus("unauthorized");
        return;
      }

      try {
        const { exp } = jwtDecode(token);

        // If expired → refresh it
        if (Date.now() >= exp * 1000) {
          const response = await api.post("/refresh"); // refresh route returns new token
          const newToken = response?.data?.accessToken;

          if (newToken) {
            localStorage.setItem("accessToken", newToken);
            setStatus("authorized");
          } else {
            throw new Error("Invalid refresh response");
          }
        } else {
          setStatus("authorized");
        }
      } catch (error) {
        console.error("Auth error:", error);
        localStorage.removeItem("accessToken");
        setStatus("unauthorized");
      }
    };

    verifyToken();
  }, []);

  // Toast on unauthorized (after checking is done)
  useEffect(() => {
    if (status === "unauthorized") {
      toast.error("Session expired. Please log in again.");
    }
  }, [status]);

  if (status === "checking") return <Loader />;

  if (status === "unauthorized") return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
