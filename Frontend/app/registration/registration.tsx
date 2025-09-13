export function Registration()
{
    return(
         <form action="#">
    <div className="registration">
      <h1>Registration</h1>
      <p>Please fill out this form to create an account.</p>
      <hr />
          <label htmlFor="firstname"><b>First Name </b></label>
          <input type="text" placeholder="Enter First Name" name="firstname" id="firstname" required/>

          <label htmlFor="lastname"><b>Last Name </b></label>
          <input type="text" placeholder="Enter Last Name" name="lastname" id="lastname" required/>

          <label htmlFor="email"><b>Email </b></label>
          <input type="text" placeholder="Enter email" name="email" id="email" required/>

          <label htmlFor="phonenumber"><b>Phone Number </b></label>
          <input type="text" placeholder="Enter Phone Number" name="phonenumber" id="phonenumber" required/>

          <label htmlFor="psw"><b>Password </b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

          <label htmlFor="psw-repeat"><b>Repeat Password </b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
        
      <button type="submit" className="registerbtn">Register</button>

      <div className="signin">
        <p>Already have an account? <a href="#">Sign in</a>.</p>
      </div>
    </div>
  </form>
    )
}