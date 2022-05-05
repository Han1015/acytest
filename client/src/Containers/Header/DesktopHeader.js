import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";
import { whyAcyItems } from "./menu";
import logo from "../../assets/logo.svg";
import "./style.scss";

export default function DesktopHeader({ handleLogout }) {
  const navigate = useNavigate();
  const { userInfo, loginStatus } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <div className="header-content">
      <div className="header-content-logo">
        <img src={logo} alt="Acy logo" onClick={() => navigate("/")} />
      </div>
      <div className="header-content-menu">
        <div className="header-content-menu-left">
          <Dropdown title="Why Acy" items={whyAcyItems} />
          <Dropdown title="Products" items={whyAcyItems} />
          <Dropdown title="Platforms" items={whyAcyItems} />
          <Dropdown title="Education" items={whyAcyItems} />
          <Dropdown title="Partners" items={whyAcyItems} />
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
                console.log("hello worlld");
                navigate("/login");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
