import React, { useEffect, useState } from "react";
import AuthBox from "../../shared/components/AuthBox";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/utils/validators";
import RegisterPageHeader from "./RegisterPageHeader";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../features/Auth/authSlice";
import { register } from "../../api";
import { useNavigate } from "react-router-dom";
import { openAlert } from "../../features/Alert/alertSlice";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async () => {
    const response = await register({
      email: email,
      username: username,
      password: password,
    });

    if (response.error) {
      console.log(response.message);
      dispatch(
        openAlert({ alertType: "error", alertMessage: response.message })
      );
    } else {
      dispatch(setUserDetails(response.data));
      navigate("/");
    }
  };

  useEffect(() => {
    setIsFormValid(validateRegisterForm(email, username, password));
  }, [isFormValid, email, username, password]);

  return (
    <>
      <AuthBox>
        <RegisterPageHeader />
        <RegisterPageInputs
          email={email}
          setEmail={setEmail}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
        <RegisterPageFooter
          isFormValid={isFormValid}
          handleRegister={handleRegister}
        />
      </AuthBox>
    </>
  );
};

export default RegisterPage;
