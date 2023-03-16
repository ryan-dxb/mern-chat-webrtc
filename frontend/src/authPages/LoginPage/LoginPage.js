import React, { useEffect, useState } from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import LoginPageFooter from "./LoginPageFooter";
import { validateLoginForm } from "../../shared/utils/validators";
import { useDispatch } from "react-redux";
import { login } from "../../api";
import { setUserDetails } from "../../features/Auth/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isFormValid, setIsFormValid] = useState(false);

  const handleLogin = async () => {
    const response = await login({ email, password });

    if (response.error) {
      console.log(response.exception);
    } else {
      dispatch(setUserDetails(response.data));
      navigate("/");
    }
  };

  useEffect(() => {
    setIsFormValid(validateLoginForm(email, password));
  }, [isFormValid, email, password]);

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default LoginPage;
