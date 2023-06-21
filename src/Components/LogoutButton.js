import React from "react";

function LogoutButton({ setIsAuthenticated }) {
  function logout() {
    localStorage.setItem("user", JSON.stringify([]));
    setIsAuthenticated(false);
    localStorage.setItem("signedIn", JSON.stringify(false))
    window.location.reload()
  }
  return (
    <div>
      <button className="logoutButton" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
