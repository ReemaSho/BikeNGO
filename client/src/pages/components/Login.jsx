import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { UserContext } from "../../provider/UserContext";
import "./login.css";
const Login = () => {
  const [userCredentials, setUserCredentials] = useState({});
  const { user, isLoading, error, setPath, submitUser } =
    useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    setPath("/user/login");
  }, []);
  useEffect(() => {
    if (user) {
      navigate(-1);
    }
  }, [user]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {error && <Error message={error} />}

      <form className="login-container">
        <Input
          name="email"
          type="email"
          className="input-field"
          placeHolder="user email"
          required
          onChange={(value) =>
            setUserCredentials({ ...userCredentials, email: value })
          }
        />
        <Input
          name="password"
          type="password"
          className="input-field"
          placeHolder="password"
          required
          onChange={(value) =>
            setUserCredentials({ ...userCredentials, password: value })
          }
        />
        <div className="submit-btn">
          <Button
            text={"login"}
            onClick={() => submitUser(userCredentials)}
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
