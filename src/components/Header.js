import React, { useState } from "react";
function Header({addUser, handleUserToggle, newUser}){
    const [firstName, setFirstName] = useState (" ")
    const [lastName, setLastName] = useState (" ")
    const [userName, setUserName] = useState (" ")
    const [email, setEmail] = useState (" ")


    function handleUserSubmit(e) {
        e.preventDefault();
    
        fetch("http://localhost:9292/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            username: userName,
            email: email
          }),
        })
          .then(res => res.json())
          .then(newUser => addUser(newUser) )
      }


    return (
        <header>
            <h1> Phase 3 project!</h1>
            <div>
              {newUser ?<form className="new-post" onSubmit={handleUserSubmit}>
                <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder="Last Name"  onChange={(e) => setLastName(e.target.value)} />
                <input type="text" placeholder="UserName"  onChange={(e) => setUserName(e.target.value)} />
                <input type="text" placeholder="email"  onChange={(e) => setEmail(e.target.value)} />
                <input type="submit" value="Save" />

               
            </form> : null  }
            <button type="submit" onClick={handleUserToggle}>New User</button>
            
            </div>
        </header>
    
    )
    

}


export default Header