import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkLoginAsync, logoutAsync } from "../../features/login/loginSlice";
import useWindowSize from "../../hooks/useWindowSize";

import "./style.scss";

const DesktopHeader = React.lazy(() => import("./DesktopHeader"));
const MobileHeader = React.lazy(() => import("./MobileHeader"));

export default function Header() {
  const { loginStatus } = useSelector((state) => state.login);
  const isMobile = useWindowSize({ maxWidth: 480 });
  const dispatch = useDispatch();
  useEffect(() => {
    if (!loginStatus) {
      console.log(" dispatch(checkLoginAsync());");
      dispatch(checkLoginAsync());
    }
  }, []);
  return (
    <div className="header">
      {!isMobile && (
        <DesktopHeader
          handleLogout={() => {
            dispatch(logoutAsync());
          }}
        />
      )}
      {isMobile && (
        <MobileHeader
          handleLogout={() => {
            dispatch(logoutAsync());
          }}
        />
      )}
    </div>
  );
}
