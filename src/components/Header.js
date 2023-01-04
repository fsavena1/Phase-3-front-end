import React, { useState } from "react";
function Header({addUser}){
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

      // findout how to hide form and create new page when form is clicked
    


    return (
        <header>
            <h1> Phase 3 project!</h1>
            <div>
            <form className="new-post" onSubmit={handleUserSubmit}>
                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input type="text" placeholder="UserName" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <button type="submit">Send</button>
            </form>
            </div>
        </header>
    
    )
    

}


export default Header