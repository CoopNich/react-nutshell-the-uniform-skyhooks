import React, { useState, useEffect } from "react";
import UserManager from "../../modules/UserManager"



const Home = () => {

      const [user, setUser] = useState({username: ""});

    const getCurrentUser = () => {
        return UserManager.getCurrentUser().then(user => {
            setUser(user)
        });
    };


    useEffect(() => {
        getCurrentUser();
    }, []);

  return (
    <>
  
      <h1>Welcome {user.username}</h1>
    </>
  );
};

export default Home;