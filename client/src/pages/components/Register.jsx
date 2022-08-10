import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import { UserContext } from "../../provider/UserContext";
import "./register.css";
const Register = () => {
  const navigate = useNavigate();
  const { user, isLoading, authError, setAuthError, setPath, submitUser } =
    useContext(UserContext);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [newUser, setNewUser] = useState({});

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
    if (newUser.password === confirmPassword) {
      submitUser(newUser);
    } else {
      toast.error("Passwords do not match");
    }
  };

  useEffect(() => {
    if (authError) {
      toast.error(authError);
      setAuthError(null);
    }
  }, [authError]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <form className="register-container">
        <Input
          type="text"
          className="register-input"
          placeHolder="User Name"
          required
          name="user-name"
          onChange={(value) => setNewUser({ ...newUser, username: value })}
        />
        <Input
          type="email"
          className="register-input"
          placeHolder="Email"
          required
          name="user-email"
          onChange={(value) => setNewUser({ ...newUser, email: value })}
        />
        <Input
          type="password"
          className="register-input"
          placeHolder="Password"
          required
          name="user-Password"
          onChange={(value) => setNewUser({ ...newUser, password: value })}
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
