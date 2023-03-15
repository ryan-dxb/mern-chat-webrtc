import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToSignUp = () => {
    navigate("/register");
  };

  const InvalidFormMessage = () => {
    return <div>Please enter valid email and password</div>;
  };

  const ValidFormMessage = () => {
    return <div>Click to login</div>;
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? <InvalidFormMessage /> : <ValidFormMessage />}
      >
        <div>
          <CustomPrimaryButton
            label="Log In"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClickHandler={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account?"
        redirectText={"Sign Up"}
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToSignUp}
      />
    </>
  );
};

export default LoginPageFooter;
