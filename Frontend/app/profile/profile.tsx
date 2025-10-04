import '../styles/profile.css'
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineKey } from "react-icons/md";
import { CgInfinity } from "react-icons/cg";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export function Profile()
{   
    const [firstNameHeader, setFirstNameHeader] = useState("");
    const [lastNameHeader, setLastNameHeader]   = useState("");
    const [emailHeader, setEmailHeader]         = useState("");
    

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName]   = useState("");
    const [email, setEmail]         = useState("");
    const [phoneNumber, setPhoneNumber]         = useState("");

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");


    async function getData()
    {
        try
        {
            const response = await fetch("http://localhost:5000/name", {
                method: "GET",
                credentials: "include"
            });

            const data = await response.json();

            setFirstNameHeader(data.firstName);
            setLastNameHeader(data.lastName);
            setEmailHeader(data.email);

            setFirstName(data.firstName);
            setLastName(data.lastName);
            setEmail(data.email);
            setPhoneNumber(data.phoneNumber);
       
        }
        catch(err)
        {
            toast.error("Error 500")
        }
    }

    const handleSave = async () => {
        const result = await Swal.fire({
    title: "📢 Skibidi Alert!",
    text: "U tryna lock in these rizzed changes, lil bro? 💀",
    icon: "question", // was "warning"
    showCancelButton: true,
    confirmButtonText: "✅ Yap, lock it in",
    cancelButtonText: "❌ Nah fam, ratio",
    background: "#111", // dark skibidi vibes
    color: "#f0f", // neon text
    confirmButtonColor: "#0f0", // sigma green
    cancelButtonColor: "#f00", // ohio red
  });

        if (!result.isConfirmed) return;
        
        const res = await fetch("http://localhost:5000/user", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ firstName, lastName, email, phoneNumber })
        });

        const updated = await res.json();
    
        toast.success("Information updated");
        window.location.reload()
    };

    async function Logout()
    {
        try
        {
            const response = await fetch("http://localhost:5000/logout", {
                method: "POST",
                credentials: "include"
            });
            toast.success("Logged out", 
                  { onClose: () => { window.location.href = "/"},
                  autoClose: 1000, 
            });
        }
        catch(err)
        {
            toast.error("server error");
        }
    }

    useEffect(() => {
        getData();
    }, []); // empty dependency array → only run on mount


    return(
        <div className='profile-main'>
    <div className='profile-container'>
      <div className='login-header'>
        <h1 className='profile-title'>🔥 Skibby Profile 🔥</h1>

        <FaCircleUser size={60} />
        <div className='profile-name'>
          <p>💀 Rizzlord</p>
          <p>SigmaMaxxing</p>
        </div>

        <p className='profile-email'>ohio.rizz@fanum.tax</p>

        <button className='login-picture-button'>✨ Change Drip Pic ✨</button>
      </div>

      <div className='profile-personalInfo'>
        <p>📱 Personal Rizzformation</p>
        <div className='profile-name-section'>
          <div>
            <h1>First Rizz</h1>
            <input
              className='nameField'
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter ur gyatt name"
            />
          </div>

          <div>
            <h1>Last Sigma</h1>
            <input
              className='nameField'
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter ur sigma tag"
            />
          </div>
        </div>

        <div>
          <h1>📞 Skib Phone</h1>
          <input
            className='emailField'
            type="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+69 Ohio digits"
          />
        </div>

        <div>
          <h1>📧 Ohio Mail</h1>
          <input
            className='emailField'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="rizz@ohio.com"
          />
        </div>

        <div className='iconCard'>
          <MdOutlineKey />
          <CgInfinity />
        </div>

        <div className='SaveButton'>
          <button onClick={handleSave}>💾 Save the Rizz</button>
        </div>
      </div>

      <div className='password-container'>
        <p>🔑 Secret Sauce</p>
        <div className='inputField-container'>
          <div>
            <label>Current Fanum Tax</label>
            <input
              className='nameField'
              type="text"
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="••••••"
            />
          </div>
        </div>

        <div className='confirm-password-container'>
          <label>New Drip Pass</label>
          <input
            className='nameField'
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter fresh skibpass"
          />
        </div>
      </div>

      <div className='logout-container'>
        <button onClick={Logout} className='border-button'>🚪 Dip Out</button>
      </div>
    </div>
  </div>
    )
}
