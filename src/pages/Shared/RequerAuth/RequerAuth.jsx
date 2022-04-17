import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const RequerAuth = ({ children }) => {
  const [user, lodding] = useAuthState(auth);
  const location = useLocation();

  if (lodding) {
    return <Loading />;
  }

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequerAuth;
