import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import useForm from "../../hooks/useForm";
import { loginAsync } from "../../features/login/loginSlice";
import "./style.scss";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fields, handleFieldChange] = useForm({
    email: "",
    password: "",
  });

  const { userInfo, loginStatus } = useSelector((state) => state.login);
  useEffect(() => {
    if (loginStatus) {
      navigate("/");
    }
  }, [loginStatus]);
  return (
    <div className="login">
      <div className="login-content">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(loginAsync(fields));
          }}
        >
          <input
            className="input"
            placeholder="email"
            id="email"
            type="text"
            value={fields.email}
            onChange={handleFieldChange}
          />

          <input
            className="input"
            placeholder="password"
            id="password"
            type="text"
            value={fields.password}
            onChange={handleFieldChange}
          />
          <input type="submit" value="LOGIN" className="input" />
        </form>
      </div>
    </div>
  );
}
