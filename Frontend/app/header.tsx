import './styles/header.css'
import { FaCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";

export function Header() {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  async function getUserCredentials() {
    try {
      const res = await fetch("http://localhost:5000/name", {
        method: "GET",
        credentials: "include",
      });

      if (res.status !== 200) {
        setLoggedIn(false);
        return setFirstName("");
      }

      const data = await res.json();

      setFirstName(data.firstName);
      setLastName(data.lastName);
      setLoggedIn(true);
    } catch {
      toast.error("Error 500: Internal Server Error");
    }
  }

  useEffect(() => {
    getUserCredentials();
  }, []); // empty dependency array → only run on mount

  return (
    <div className="mainDiv">
      <img
        className="image"
        src="logo.png"
        alt="💀 Skibidi Mane Attraction text 💀"
        width={160}
      />

      <div className="buttons">
        <div>
          <a href="/">🏠 SkibiHome</a>
        </div>

        <div>
          <a href="">📖 About the Rizz</a>
        </div>

        <div className="text">
          <a href="">📅 Book ur Drip</a>
        </div>

        <div>
          <a href="">☎️ Contact da Sigma</a>
        </div>
      </div>

      <div className="logo">
        <div>
          {isLoggedIn ? (
            <div className="profile">
              <a href="/profile">
                <FaCircleUser className="icon" size={35} />
              </a>
              <div className="name">
                <p>🗣️ {firstName}</p>
                <p>🔥 {LastName}</p>
              </div>
            </div>
          ) : (
            <div className="profile">
              <CiLogin className="icon" size={30} />
              <a className="login" href="/login">
                🚪 Enter the Rizz
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
