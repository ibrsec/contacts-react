import React from "react";
import { useSelector } from "react-redux";
import useLoginApis from "../services/useLoginApis";

const Navbar = () => {
  const { token, username } = useSelector((state) => state.login);
  const { logoutApi } = useLoginApis();
  return (
    <div>

    <nav className="navbar">
      <div className="navbar-wrapper">
        <div className="logo">
          <span>Contacts</span>
        </div>
        <div className="logout">
          {token && (
            <div className="user-part">
              <span>{username}</span>
              <button className="logout-button" onClick={logoutApi}>
                Logout🚪
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
    <div style={{marginBottom:"50px"}}></div>
          </div>
  );
};

export default Navbar;
