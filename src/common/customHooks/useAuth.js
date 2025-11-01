import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      navigate("/login");
      return;
    }

    // Decode token expiry (optional check)
    const payload = JSON.parse(atob(accessToken.split(".")[1]));
    const isExpired = payload.exp * 1000 < Date.now();

    if (isExpired) {
      // access token expired, will auto-refresh via axios
      // but if refresh also expired, user will be redirected automatically
      console.warn("Access token expired — will attempt refresh via axios.");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  return { isAuthenticated };
};
