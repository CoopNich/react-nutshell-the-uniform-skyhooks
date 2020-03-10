import React, { useState } from "react"
import UserManager from "../../modules/UserManager"


const Register = props => {
  // const [credentials, setCredentials] = useState({ email: "",});
  const [user, setUser] = useState({ email: "", username: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...user };
    stateToChange[evt.target.id] = evt.target.value;
    setUser(stateToChange);
  };

  const constructNewUser = evt => {
    evt.preventDefault();
        setIsLoading(true);
        const newUser = {
            ...user, 
        }
        UserManager.postUser(newUser)
            .then(() => props.history.push("/login"));
    
};


  return (
    <form onSubmit={constructNewUser}>
      <fieldset>
        <h3>Register an Account</h3>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="email"
            id="email"
            placeholder="Email address"
            required="" autoFocus="" />
          <input onChange={handleFieldChange} type="username"
            id="username"
            placeholder="Username"
            required="" autoFocus="" />
        </div>
        <button type="submit" disabled={isLoading} >Submit</button>
      </fieldset>
    </form>
  );
};


export default Register;