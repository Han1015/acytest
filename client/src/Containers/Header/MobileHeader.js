import "./style.scss";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";
import { whyAcyItems } from "./menu";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import "./style.scss";

export default function MobileHeader({ handleLogout }) {
  const navigate = useNavigate();
  const { userInfo, loginStatus } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="header-content">
        <div className="header-content-mmenu">
          <div className="header-content-logo header-content-menuicon">
            <img src={menu} alt="menu icon" onClick={() => navigate("/")} />
          </div>
          <div className="header-content-logo">
            <img src={logo} alt="Acy logo" onClick={() => navigate("/")} />
          </div>
        </div>
        <div className="header-content-menu-right">
          {loginStatus ? (
            <Button
              title="Logout"
              primary
              className="header-content-menu-item"
              onClick={handleLogout}
            />
          ) : (
            <Button
              title="Login"
              className="header-content-menu-item"
              onClick={() => {
                navigate("/login");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
