import { useState } from "react";
export default function CustomerController() {
    //--Registration state
    const [form, setForm] = useState({   //useState tracks updates in form
        firstName: "",                   //setForm used to update the form
        lastName: "",
        email: "",
        phoneNumber: "",
        psw: "",
        pswr: "",

    });

    const [message, stateMessage] = useState(""); // shows user message



    //--Login state new
    const [loginForm, setLoginForm]= useState({
        emailAddress: "",
        password: ""
    });
    const [loginMessage, setLoginMessage]= useState ("");
    const [loginLoading, setLoginLoading] = useState (false);



    //--Handlers (registration)
    function handleChange(e) {
        const { name, value } = e.target;  // handles input
        setForm({ ...form, [name]: value });
    }
    async function handleSubmit(e) {   // stops page from reloading
        e.preventDefault();

        if (form.psw !== form.pswr) {
            setMessage("Passwords do not match"); // checks if psw and repeat pswr is the same
            return;
        }
        try {
            const response = await fetch("/users", {
                method: "POST",     //POST - send data to the server
                headers: { "Content-Type": "application/json" },  //sends request to server
                body: JSON.stringify(form),
            });

            const data = await response.json(); //waits for response from server

            if (response.ok) {
                setMessage("Customer created successfully"); //checks if response is okay
                setForm({
                    firstName: "",
                    lastName: "",
                    email: "",    //resets forms after submission
                    phoneNumber: "",
                    psw: "",
                    pswr: "",
                });
            } else {
                setMessage(data.error || "Error creating account"); //if not okay error massage
            }
        } catch (err) {
            setMessage("Network Error: " + err.message); //catches errors
        }
    }


    //---Handlers (login) new


function handleLoginChange(e) {
    const { name, value } = e.target;  // handles input for login
    setLoginForm({ ...loginForm, [name]: value });
}
async function handleLoginSubmit(e) {   // stops page from reloading
    e.preventDefault();

    try {
        const response = await fetch("/api/customers/login", {
            method: "POST",     //POST - send data to the server
            headers: { "Content-Type": "application/json" },  //sends request to server
            // credentials: "include", // använd om din server sätter HttpOnly-cookies och/eller körs cross-origin
            body: JSON.stringify(loginForm), // { emailAddress, password }
        });

        const data = await response.json(); //waits for response from server

        if (response.ok) {
            setLoginMessage("Login successful"); //checks if response is okay
            setLoginForm({
                emailAddress: "",
                password: "",    //resets form after submission
            });
        } else {
            setLoginMessage(data.error || "Login failed"); //if not okay error message
        }
    } catch (err) {
        setLoginMessage("Network Error: " + err.message); //catches errors
    }
}

  

    return(
        <>
        <form onSubmit={handleSubmit}> //calls handleSubmit when clicked
        
            <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Enter First Name" />
            <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Enter Last Name" />
            <input name="email" value={form.emailAdress} onChange={handleChange} placeholder="Enter email" />
            <input name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="Enter Phone Number" />
            <input name="psw" value={form.password} onChange={handleChange} placeholder="Enter Password" />
            <input name="pswr" value={form.passwordRepeat} onChange={handleChange} placeholder="Repeat Password" />
            <button type="submit">Register</button>
            {message && <p>{message}</p>} //shows messages
        </form>
        <hr />

    {/* Login new */} 
    <form onSubmit={handleLoginSubmit}> {/* calls handleLoginSubmit when clicked */}
      <input
        name="emailAddress"
        value={loginForm.emailAddress}
        onChange={handleLoginChange}
        placeholder="Enter email"
        type="email"
        required
      />
      <input
        name="password"
        value={loginForm.password}
        onChange={handleLoginChange}
        placeholder="Enter Password"
        type="password"
        required
      />
      <button type="submit">Login</button>
      {loginMessage && <p>{loginMessage}</p>} {/* shows messages */}
    </form>
  </>
);
    

}