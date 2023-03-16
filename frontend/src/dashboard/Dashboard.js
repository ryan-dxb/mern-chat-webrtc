import React, { useEffect } from "react";
import AuthBox from "../shared/components/AuthBox";
import { testRoute } from "../api";
import { logout } from "../shared/utils/auth";

const Dashboard = () => {
  const test = async () => {
    const response = await testRoute();

    console.log(response);
  };

  return (
    <>
      <AuthBox>
        <h1>Dashboard</h1>
        <button onClick={logout}>Test</button>
      </AuthBox>
      ;
    </>
  );
};

export default Dashboard;
