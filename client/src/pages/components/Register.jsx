import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { UserContext } from "../../provider/UserContext";
import "./register.css";
const Register = () => {
  const navigate = useNavigate();
  const { user, isLoading, error, setPath, submitUser } =
    useContext(UserContext);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userCredentials, setUserCredentials] = useState({});
  useEffect(() => {
    setPath("/user/create");
  }, []);
  useEffect(() => {
    if (user) {
      navigate(-1);
    }
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userCredentials.password === confirmPassword) {
      submitUser(userCredentials);
    } else {
      alert("Passwords do not match");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {error && <Error message={error} />}

      <form className="register-container">
        <Input
          type="text"
          className="register-input"
          placeHolder="User Name"
          required
          name="user-name"
          onChange={(value) =>
            setUserCredentials({ ...userCredentials, username: value })
          }
        />
        <Input
          type="email"
          className="register-input"
          placeHolder="Email"
          required
          name="user-email"
          onChange={(value) =>
            setUserCredentials({ ...userCredentials, email: value })
          }
        />
        <Input
          type="password"
          className="register-input"
          placeHolder="Password"
          required
          name="user-Password"
          onChange={(value) =>
            setUserCredentials({ ...userCredentials, password: value })
          }
        />
        <Input
          type="password"
          className="register-input"
          placeHolder="Confirm Password"
          required
          name="user-Confirm-Password"
          onChange={(value) => setConfirmPassword(value)}
        />
        <div className="register-btn">
          <Button text={"Register"} onClick={(e) => handleSubmit(e)}></Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
