import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../utils/Loader";
import {jwtDecode} from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      setStatus("unauthorized");
      return;
    }

    try {
      const { exp } = jwtDecode(token);

      // If token expired
      if (Date.now() >= exp * 1000) {
        setStatus("unauthorized");
      } else {
        setStatus("authorized");
      }
    } catch (error) {
      console.error("Invalid token:", error);
      setStatus("unauthorized");
    }
  }, []);

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
