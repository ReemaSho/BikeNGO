import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Loading from "../../../../components/Loading";
import Error from "../../../../components/Error";
import { UserContext } from "../../../../provider/UserContext";
import useFetch from "../../../../hooks/useFetch";
import "./login.css";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const { setLocalUser } = useContext(UserContext);

  const onSuccess = (data) => {
    setLocalUser({
      ...data.user,
    });
    if (data.accessToken) {
      localStorage.setItem("user", data.accessToken);
    }
    navigate(-1);
  };
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/user/login",
    onSuccess
  );

  useEffect(() => {
    return cancelFetch;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    performFetch({
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({ user }),
    });
  };

  return (
    <div>
      {error && <Error message={error} />}
      {isLoading ? (
        <Loading />
      ) : (
        <form className="login-container">
          <Input
            name="email"
            type="email"
            className="input-field"
            placeHolder="user email"
            required
            onChange={(value) => setUser({ ...user, email: value })}
          />
          <Input
            name="password"
            type="password"
            className="input-field"
            placeHolder="password"
            required
            onChange={(value) => setUser({ ...user, password: value })}
          />
          <div className="submit-btn">
            <Button text={"login"} onClick={handleSubmit}></Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
